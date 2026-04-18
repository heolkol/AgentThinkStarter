import { createWorkersAI } from "workers-ai-provider";
import { createOpenAI } from "@ai-sdk/openai";
import {
  callable,
  getAgentByName,
  routeAgentRequest,
  type Schedule
} from "agents";
import { getSchedulePrompt, scheduleSchema } from "agents/schedule";
import {
  Think,
  type ChatResponseResult,
  type Session,
  type TurnContext
} from "@cloudflare/think";
import { createBrowserTools } from "@cloudflare/think/tools/browser";
import { createExecuteTool } from "@cloudflare/think/tools/execute";
import { createExtensionTools } from "@cloudflare/think/tools/extensions";
import { createSandboxTools } from "@cloudflare/think/tools/sandbox";
import { createWorkspaceTools } from "@cloudflare/think/tools/workspace";
import { createWorkspaceStateBackend } from "@cloudflare/shell";
import { tool, type UIMessage } from "ai";
import { z } from "zod";

const GITHUB_MCP_URL = "https://api.githubcopilot.com/mcp/";
const TELEGRAM_API_BASE = "https://api.telegram.org";
const TELEGRAM_MAX_MESSAGE_LENGTH = 4000;
const WORKERS_AI_FREE_DAILY_NEURONS = 10_000;
const WORKERS_AI_PRICE_PER_1K_NEURONS_USD = 0.011;
const DEFAULT_WORKERS_AI_MODEL = "@cf/moonshotai/kimi-k2.5";
const DEFAULT_OPENAI_COMPAT_MODEL = "gpt-4o-mini";
const DEFAULT_OPENAI_COMPAT_BASE_URL = "http://127.0.0.1:11434/v1";

type ProviderKind = "workers-ai" | "openai-compatible";
type OpenAIApiKeyMode = "secret" | "browser";

type ProviderSettings = {
  provider: ProviderKind;
  openai: {
    baseUrl: string;
    model: string;
    apiKeyMode: OpenAIApiKeyMode;
  };
};

type WorkersAILimitState = {
  status: "unknown" | "ok" | "limit-exceeded";
  exceededAtUtc: string | null;
  lastError: string | null;
};

type ChatHealthState = {
  lastError: string | null;
  lastErrorAtUtc: string | null;
  lastSuccessAtUtc: string | null;
};

type RuntimeStatusPayload = {
  provider: {
    active: ProviderKind;
    settings: ProviderSettings;
    secretKeyConfigured: boolean;
    browserKeyLoaded: boolean;
  };
  workersAI: {
    freeDailyNeurons: number;
    pricePer1kNeuronsUsd: number;
    status: "unknown" | "ok" | "limit-exceeded";
    exceededAtUtc: string | null;
    resetAtUtc: string;
    secondsUntilReset: number;
    lastError: string | null;
    remainingNeurons: null;
    note: string;
  };
  chatHealth: {
    lastError: string | null;
    lastErrorAtUtc: string | null;
    lastSuccessAtUtc: string | null;
  };
  telegram: {
    botTokenConfigured: boolean;
    webhookSecretConfigured: boolean;
    botTokenSource: "env" | "stored" | "none";
    webhookSecretSource: "env" | "stored" | "none";
  };
};

type DiagnosticsSnapshot = {
  generatedAtUtc: string;
  roomName: string;
  runtimeStatus: RuntimeStatusPayload;
  messageCount: number;
  hasPendingInteraction: boolean;
  activeProviderRequestDefaults: {
    kind: ProviderKind;
    openai?: {
      baseUrl: string;
      model: string;
      apiKeyMode: OpenAIApiKeyMode;
      browserKeyProvided: boolean;
      secretKeyConfigured: boolean;
    };
  };
  telegram: TelegramCredentialStatus;
};

type TelegramStoredCredentials = {
  botToken: string | null;
  webhookSecret: string | null;
  updatedAtUtc: string | null;
};

type TelegramCredentialStatus = {
  botTokenConfigured: boolean;
  webhookSecretConfigured: boolean;
  botTokenSource: "env" | "stored" | "none";
  webhookSecretSource: "env" | "stored" | "none";
  updatedAtUtc: string | null;
};

type AccessAuthResult =
  | { ok: true; email: string }
  | { ok: false; reason: string };

const providerSettingsSchema = z.object({
  provider: z.enum(["workers-ai", "openai-compatible"]),
  openai: z
    .object({
      baseUrl: z.string().trim().min(1),
      model: z.string().trim().min(1),
      apiKeyMode: z.enum(["secret", "browser"])
    })
    .optional()
});

const runtimeProviderBodySchema = z
  .object({
    provider: z
      .object({
        kind: z.enum(["workers-ai", "openai-compatible"]),
        openai: z
          .object({
            baseUrl: z.string().trim().min(1).optional(),
            model: z.string().trim().min(1).optional(),
            apiKeyMode: z.enum(["secret", "browser"]).optional(),
            apiKey: z.string().trim().optional()
          })
          .optional()
      })
      .optional()
  })
  .passthrough();

const telegramCredentialsInputSchema = z
  .object({
    botToken: z.string().optional(),
    webhookSecret: z.string().optional(),
    clearBotToken: z.boolean().optional(),
    clearWebhookSecret: z.boolean().optional()
  })
  .passthrough();

function getNextUtcMidnight(now = new Date()): Date {
  return new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + 1,
      0,
      0,
      0
    )
  );
}

function secondsUntil(date: Date, now = Date.now()): number {
  return Math.max(0, Math.ceil((date.getTime() - now) / 1000));
}

type TelegramIncomingMessage = {
  chat?: {
    id?: number;
  };
  text?: string;
};

type TelegramUpdate = {
  message?: TelegramIncomingMessage;
  edited_message?: TelegramIncomingMessage;
};

function getTelegramBotToken(env: Env): string | undefined {
  return (
    (
      env as unknown as { TELEGRAM_BOT_TOKEN?: string }
    ).TELEGRAM_BOT_TOKEN?.trim() || undefined
  );
}

function parseCommaSeparated(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function shouldEnforceAccessEmail(env: Env): boolean {
  const value = (env as unknown as { ACCESS_EMAIL_ENFORCE?: string })
    .ACCESS_EMAIL_ENFORCE;

  if (!value) return true;

  return value.trim().toLowerCase() !== "false";
}

function getAllowedAccessEmails(env: Env): string[] {
  const raw = (env as unknown as { ACCESS_ALLOWED_EMAILS?: string })
    .ACCESS_ALLOWED_EMAILS;
  return parseCommaSeparated(raw);
}

function getAllowedAccessDomains(env: Env): string[] {
  const raw = (env as unknown as { ACCESS_ALLOWED_EMAIL_DOMAINS?: string })
    .ACCESS_ALLOWED_EMAIL_DOMAINS;
  return parseCommaSeparated(raw);
}

function verifyAccessEmail(request: Request, env: Env): AccessAuthResult {
  if (!shouldEnforceAccessEmail(env)) {
    return { ok: true, email: "access-check-disabled" };
  }

  const email = request.headers
    .get("CF-Access-Authenticated-User-Email")
    ?.trim()
    .toLowerCase();

  if (!email) {
    return {
      ok: false,
      reason:
        "Missing Cloudflare Access identity header. Protect this route with Cloudflare Access email login."
    };
  }

  const allowedEmails = getAllowedAccessEmails(env);
  if (allowedEmails.length > 0 && !allowedEmails.includes(email)) {
    return {
      ok: false,
      reason: `Email ${email} is not in ACCESS_ALLOWED_EMAILS allowlist.`
    };
  }

  const allowedDomains = getAllowedAccessDomains(env);
  if (allowedDomains.length > 0) {
    const domain = email.split("@")[1] || "";
    if (!domain || !allowedDomains.includes(domain)) {
      return {
        ok: false,
        reason: `Email domain ${domain || "unknown"} is not in ACCESS_ALLOWED_EMAIL_DOMAINS.`
      };
    }
  }

  return { ok: true, email };
}

function getTelegramWebhookSecret(env: Env): string | undefined {
  return (
    (
      env as unknown as { TELEGRAM_WEBHOOK_SECRET?: string }
    ).TELEGRAM_WEBHOOK_SECRET?.trim() || undefined
  );
}

function getTelegramRoomName(env: Env): string {
  const configuredRoom = (
    env as unknown as { TELEGRAM_AGENT_ROOM?: string }
  ).TELEGRAM_AGENT_ROOM?.trim();

  if (configuredRoom) return configuredRoom;

  // Default shared room so Telegram and web chat use the same
  // tool + MCP state and conversation context.
  return "default";
}

function buildTelegramWebhookUrl(baseUrl: string): string {
  const normalized = baseUrl.replace(/\/+$/, "");
  return `${normalized}/telegram/webhook`;
}

function getLatestAssistantText(messages: UIMessage[]): string | null {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    const message = messages[i];
    if (message.role !== "assistant") continue;

    const text = message.parts
      .filter(
        (
          part
        ): part is Extract<(typeof message.parts)[number], { type: "text" }> =>
          part.type === "text"
      )
      .map((part) => part.text)
      .join("\n")
      .trim();

    if (text) return text;
  }

  return null;
}

function splitTelegramText(text: string): string[] {
  if (text.length <= TELEGRAM_MAX_MESSAGE_LENGTH) return [text];

  const chunks: string[] = [];
  let index = 0;
  while (index < text.length) {
    chunks.push(text.slice(index, index + TELEGRAM_MAX_MESSAGE_LENGTH));
    index += TELEGRAM_MAX_MESSAGE_LENGTH;
  }
  return chunks;
}

async function sendTelegramMessage(
  env: Env,
  chatId: number,
  text: string,
  tokenOverride?: string
): Promise<void> {
  const token = tokenOverride || getTelegramBotToken(env);
  if (!token) return;

  for (const chunk of splitTelegramText(text)) {
    const response = await fetch(
      `${TELEGRAM_API_BASE}/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: chunk
        })
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `Telegram sendMessage failed (${response.status}): ${errorBody}`
      );
    }
  }
}

async function handleTelegramWebhook(
  request: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "POST" }
    });
  }

  const roomName = getTelegramRoomName(env);
  const agent = await getAgentByName<Env, ChatAgent>(env.ChatAgent, roomName);
  const credentials = await agent.getTelegramCredentialStatus();

  if (!credentials.botTokenConfigured) {
    return new Response("Telegram bot is not configured.", { status: 500 });
  }

  const receivedSecret = request.headers.get("x-telegram-bot-api-secret-token");
  if (credentials.webhookSecretConfigured && !receivedSecret) {
    return new Response("Unauthorized", { status: 401 });
  }

  const isAuthorized = await agent.isTelegramWebhookAuthorized(receivedSecret);
  if (!isAuthorized) {
    return new Response("Unauthorized", { status: 401 });
  }

  let update: TelegramUpdate;
  try {
    update = (await request.json()) as TelegramUpdate;
  } catch {
    return new Response("Invalid JSON body", { status: 400 });
  }

  ctx.waitUntil(
    agent
      .processTelegramWebhookUpdate(update, receivedSecret)
      .catch((error) => {
        console.error("Telegram update processing failed", error);
      })
  );

  return new Response("ok", {
    headers: { "content-type": "text/plain" },
    status: 200
  });
}

export class ChatAgent extends Think<Env> {
  maxSteps = 5;
  chatRecovery = true;
  waitForMcpConnections = { timeout: 5000 };
  extensionLoader = this.getLoaderBinding();

  private static readonly PROVIDER_SETTINGS_KEY = "provider_settings";
  private static readonly WORKERS_AI_LIMIT_KEY = "workers_ai_limit_state";
  private static readonly CHAT_HEALTH_KEY = "chat_health_state";
  private static readonly TELEGRAM_CREDENTIALS_KEY =
    "telegram_credentials_state";

  private getLoaderBinding(): WorkerLoader | undefined {
    return (this.env as unknown as { LOADER?: WorkerLoader }).LOADER;
  }

  private getBrowserBinding(): Fetcher | undefined {
    return (this.env as unknown as { BROWSER?: Fetcher }).BROWSER;
  }

  private getGitHubMcpToken(): string | undefined {
    return (this.env as unknown as { GITHUB_MCP_PAT?: string }).GITHUB_MCP_PAT;
  }

  private getOpenAICompatSecretKey(): string | undefined {
    return (
      (
        this.env as unknown as { OPENAI_COMPAT_API_KEY?: string }
      ).OPENAI_COMPAT_API_KEY?.trim() || undefined
    );
  }

  private getDefaultProviderSettings(): ProviderSettings {
    return {
      provider: "workers-ai",
      openai: {
        baseUrl: DEFAULT_OPENAI_COMPAT_BASE_URL,
        model: DEFAULT_OPENAI_COMPAT_MODEL,
        apiKeyMode: "secret"
      }
    };
  }

  private getStoredTelegramCredentials(): TelegramStoredCredentials {
    const raw = this.getConfig() as Record<string, unknown> | null;
    const candidate = raw?.[ChatAgent.TELEGRAM_CREDENTIALS_KEY] as
      | Partial<TelegramStoredCredentials>
      | undefined;

    return {
      botToken: candidate?.botToken?.trim() || null,
      webhookSecret: candidate?.webhookSecret?.trim() || null,
      updatedAtUtc: candidate?.updatedAtUtc || null
    };
  }

  @callable()
  async getStoredTelegramCredentialsForWebhook() {
    return this.getStoredTelegramCredentials();
  }

  private setStoredTelegramCredentials(
    next: TelegramStoredCredentials
  ): TelegramStoredCredentials {
    const normalized: TelegramStoredCredentials = {
      botToken: next.botToken?.trim() || null,
      webhookSecret: next.webhookSecret?.trim() || null,
      updatedAtUtc: new Date().toISOString()
    };

    this.configure({
      ...(this.getConfig() || {}),
      [ChatAgent.TELEGRAM_CREDENTIALS_KEY]: normalized
    });

    return normalized;
  }

  private resolveTelegramCredentials() {
    const envBotToken = getTelegramBotToken(this.env);
    const envWebhookSecret = getTelegramWebhookSecret(this.env);
    const stored = this.getStoredTelegramCredentials();

    const botToken = envBotToken || stored.botToken || undefined;
    const webhookSecret = envWebhookSecret || stored.webhookSecret || undefined;

    return {
      botToken,
      webhookSecret,
      status: {
        botTokenConfigured: Boolean(botToken),
        webhookSecretConfigured: Boolean(webhookSecret),
        botTokenSource: envBotToken
          ? "env"
          : stored.botToken
            ? "stored"
            : "none",
        webhookSecretSource: envWebhookSecret
          ? "env"
          : stored.webhookSecret
            ? "stored"
            : "none",
        updatedAtUtc: stored.updatedAtUtc
      } satisfies TelegramCredentialStatus
    };
  }

  private getProviderSettings(): ProviderSettings {
    const raw = this.getConfig() as Record<string, unknown> | null;
    const candidate = raw?.[ChatAgent.PROVIDER_SETTINGS_KEY];
    const parsed = providerSettingsSchema.safeParse(candidate);
    if (parsed.success) {
      return {
        provider: parsed.data.provider,
        openai: {
          baseUrl:
            parsed.data.openai?.baseUrl || DEFAULT_OPENAI_COMPAT_BASE_URL,
          model: parsed.data.openai?.model || DEFAULT_OPENAI_COMPAT_MODEL,
          apiKeyMode: parsed.data.openai?.apiKeyMode || "secret"
        }
      };
    }
    return this.getDefaultProviderSettings();
  }

  private setProviderSettings(settings: ProviderSettings): void {
    this.configure({
      ...(this.getConfig() || {}),
      [ChatAgent.PROVIDER_SETTINGS_KEY]: settings
    });
  }

  private getWorkersAiLimitState(): WorkersAILimitState {
    const raw = this.getConfig() as Record<string, unknown> | null;
    const candidate = raw?.[ChatAgent.WORKERS_AI_LIMIT_KEY] as
      | Partial<WorkersAILimitState>
      | undefined;

    return {
      status:
        candidate?.status === "ok" || candidate?.status === "limit-exceeded"
          ? candidate.status
          : "unknown",
      exceededAtUtc: candidate?.exceededAtUtc || null,
      lastError: candidate?.lastError || null
    };
  }

  private setWorkersAiLimitState(state: WorkersAILimitState): void {
    this.configure({
      ...(this.getConfig() || {}),
      [ChatAgent.WORKERS_AI_LIMIT_KEY]: state
    });
  }

  private clearWorkersAiLimitState(): void {
    this.setWorkersAiLimitState({
      status: "ok",
      exceededAtUtc: null,
      lastError: null
    });
  }

  private getChatHealthState(): ChatHealthState {
    const raw = this.getConfig() as Record<string, unknown> | null;
    const candidate = raw?.[ChatAgent.CHAT_HEALTH_KEY] as
      | Partial<ChatHealthState>
      | undefined;

    return {
      lastError: candidate?.lastError || null,
      lastErrorAtUtc: candidate?.lastErrorAtUtc || null,
      lastSuccessAtUtc: candidate?.lastSuccessAtUtc || null
    };
  }

  private setChatHealthState(state: ChatHealthState): void {
    this.configure({
      ...(this.getConfig() || {}),
      [ChatAgent.CHAT_HEALTH_KEY]: state
    });
  }

  private buildRuntimeStatus(
    browserKeyLoaded: boolean,
    providerOverride?: ProviderSettings
  ): RuntimeStatusPayload {
    const settings = providerOverride || this.getProviderSettings();
    const nextReset = getNextUtcMidnight();
    const limitState = this.getWorkersAiLimitState();
    const chatHealth = this.getChatHealthState();

    return {
      provider: {
        active: settings.provider,
        settings,
        secretKeyConfigured: Boolean(this.getOpenAICompatSecretKey()),
        browserKeyLoaded
      },
      workersAI: {
        freeDailyNeurons: WORKERS_AI_FREE_DAILY_NEURONS,
        pricePer1kNeuronsUsd: WORKERS_AI_PRICE_PER_1K_NEURONS_USD,
        status: limitState.status,
        exceededAtUtc: limitState.exceededAtUtc,
        resetAtUtc: nextReset.toISOString(),
        secondsUntilReset: secondsUntil(nextReset),
        lastError: limitState.lastError,
        remainingNeurons: null,
        note: "Cloudflare does not expose real-time remaining neurons in Worker runtime APIs. This status is inferred from recent chat success/failure events."
      },
      chatHealth: {
        lastError: chatHealth.lastError,
        lastErrorAtUtc: chatHealth.lastErrorAtUtc,
        lastSuccessAtUtc: chatHealth.lastSuccessAtUtc
      },
      telegram: {
        ...this.resolveTelegramCredentials().status
      }
    };
  }

  private isWorkersAiDailyLimitError(error: unknown): boolean {
    if (!(error instanceof Error)) return false;
    const text = error.message.toLowerCase();
    return (
      text.includes("daily free allocation") ||
      text.includes("10,000 neurons") ||
      text.includes("account limited") ||
      text.includes("3036")
    );
  }

  onStart() {
    // Configure OAuth popup behavior for MCP servers that require authentication
    this.mcp.configureOAuthCallback({
      customHandler: (result) => {
        if (result.authSuccess) {
          return new Response("<script>window.close();</script>", {
            headers: { "content-type": "text/html" },
            status: 200
          });
        }
        return new Response(
          `Authentication Failed: ${result.authError || "Unknown error"}`,
          { headers: { "content-type": "text/plain" }, status: 400 }
        );
      }
    });
  }

  @callable()
  async addServer(name: string, url: string) {
    return await this.addMcpServer(name, url);
  }

  @callable()
  async removeServer(serverId: string) {
    await this.removeMcpServer(serverId);
  }

  @callable()
  async addGitHubMcpServer(
    serverName = "github",
    personalAccessToken?: string
  ) {
    const token =
      personalAccessToken?.trim() || this.getGitHubMcpToken()?.trim();

    if (!token) {
      throw new Error(
        "GitHub MCP needs a Personal Access Token. Add one in the MCP panel or set GITHUB_MCP_PAT as a Worker secret."
      );
    }

    return await this.addMcpServer(serverName, GITHUB_MCP_URL, {
      transport: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    });
  }

  @callable()
  async updateTelegramCredentials(input: unknown) {
    const parsed = telegramCredentialsInputSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(
        `Invalid Telegram credentials payload: ${parsed.error.message}`
      );
    }

    const current = this.getStoredTelegramCredentials();

    const nextBotToken = parsed.data.clearBotToken
      ? null
      : parsed.data.botToken !== undefined
        ? parsed.data.botToken.trim() || null
        : current.botToken;

    const nextWebhookSecret = parsed.data.clearWebhookSecret
      ? null
      : parsed.data.webhookSecret !== undefined
        ? parsed.data.webhookSecret.trim() || null
        : current.webhookSecret;

    const stored = this.setStoredTelegramCredentials({
      botToken: nextBotToken,
      webhookSecret: nextWebhookSecret,
      updatedAtUtc: current.updatedAtUtc
    });

    return {
      ok: true,
      status: this.resolveTelegramCredentials().status,
      updatedAtUtc: stored.updatedAtUtc
    };
  }

  @callable()
  async getTelegramCredentialStatus() {
    return this.resolveTelegramCredentials().status;
  }

  @callable()
  async isTelegramWebhookAuthorized(receivedSecret: string | null) {
    const { webhookSecret } = this.resolveTelegramCredentials();
    if (!webhookSecret) return true;
    return Boolean(receivedSecret && receivedSecret === webhookSecret);
  }

  @callable()
  async processTelegramWebhookUpdate(
    update: TelegramUpdate,
    receivedSecret: string | null
  ) {
    const { botToken } = this.resolveTelegramCredentials();
    if (!botToken) {
      throw new Error("Telegram bot token is not configured.");
    }

    if (!(await this.isTelegramWebhookAuthorized(receivedSecret))) {
      throw new Error("Invalid Telegram webhook secret token.");
    }

    const message = update.message ?? update.edited_message;
    const chatId = message?.chat?.id;
    const userText = message?.text?.trim();

    if (!chatId) {
      return { ok: true, ignored: true, reason: "no-chat-id" };
    }

    try {
      if (!userText) {
        await sendTelegramMessage(
          this.env,
          chatId,
          "Please send text messages only.",
          botToken
        );
        return { ok: true, ignored: true, reason: "non-text" };
      }

      await this.saveMessages([
        {
          id: crypto.randomUUID(),
          role: "user",
          parts: [{ type: "text", text: userText }]
        }
      ]);

      const messages = await this.getMessages();
      const assistantText =
        getLatestAssistantText(messages) ||
        "I received your message, but I do not have a text reply yet.";

      await sendTelegramMessage(this.env, chatId, assistantText, botToken);
      return { ok: true };
    } catch (error) {
      const messageText =
        error instanceof Error
          ? `Something went wrong: ${error.message}`
          : "Something went wrong while processing your message.";

      try {
        await sendTelegramMessage(this.env, chatId, messageText, botToken);
      } catch (telegramError) {
        console.error("Failed to send Telegram error response", telegramError);
      }

      return { ok: false, error: messageText };
    }
  }

  @callable()
  async setTelegramWebhook(baseUrl: string, secretToken?: string) {
    const token = this.resolveTelegramCredentials().botToken;
    if (!token) {
      throw new Error(
        "Telegram bot token is missing. Set Worker secret TELEGRAM_BOT_TOKEN or add stored credentials in the UI."
      );
    }

    const webhookUrl = buildTelegramWebhookUrl(baseUrl);
    const secret =
      secretToken?.trim() || this.resolveTelegramCredentials().webhookSecret;

    const response = await fetch(
      `${TELEGRAM_API_BASE}/bot${token}/setWebhook`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          url: webhookUrl,
          ...(secret ? { secret_token: secret } : {})
        })
      }
    );

    const payload = (await response.json()) as {
      ok?: boolean;
      description?: string;
      result?: unknown;
    };

    if (!response.ok || !payload.ok) {
      throw new Error(
        payload.description || `setWebhook failed (${response.status})`
      );
    }

    return {
      ok: true,
      webhookUrl,
      telegramResult: payload.result ?? true
    };
  }

  @callable()
  async getTelegramWebhookInfo() {
    const token = this.resolveTelegramCredentials().botToken;
    if (!token) {
      throw new Error(
        "Telegram bot token is missing. Set Worker secret TELEGRAM_BOT_TOKEN or add stored credentials in the UI."
      );
    }

    const response = await fetch(
      `${TELEGRAM_API_BASE}/bot${token}/getWebhookInfo`
    );
    const payload = (await response.json()) as {
      ok?: boolean;
      description?: string;
      result?: unknown;
    };

    if (!response.ok || !payload.ok) {
      throw new Error(
        payload.description || `getWebhookInfo failed (${response.status})`
      );
    }

    return payload.result;
  }

  @callable()
  async updateProviderSettings(input: unknown) {
    const parsed = providerSettingsSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(`Invalid provider settings: ${parsed.error.message}`);
    }

    const merged: ProviderSettings = {
      provider: parsed.data.provider,
      openai: {
        baseUrl:
          parsed.data.openai?.baseUrl ||
          this.getDefaultProviderSettings().openai.baseUrl,
        model:
          parsed.data.openai?.model ||
          this.getDefaultProviderSettings().openai.model,
        apiKeyMode:
          parsed.data.openai?.apiKeyMode ||
          this.getDefaultProviderSettings().openai.apiKeyMode
      }
    };

    this.setProviderSettings(merged);
    return this.buildRuntimeStatus(false, merged);
  }

  @callable()
  async getRuntimeStatus() {
    return this.buildRuntimeStatus(false);
  }

  @callable()
  async getDiagnosticsSnapshot(): Promise<DiagnosticsSnapshot> {
    const settings = this.getProviderSettings();
    return {
      generatedAtUtc: new Date().toISOString(),
      roomName: this.name,
      runtimeStatus: this.buildRuntimeStatus(false),
      messageCount: this.messages.length,
      hasPendingInteraction: this.hasPendingInteraction(),
      activeProviderRequestDefaults: {
        kind: settings.provider,
        ...(settings.provider === "openai-compatible"
          ? {
              openai: {
                baseUrl: settings.openai.baseUrl,
                model: settings.openai.model,
                apiKeyMode: settings.openai.apiKeyMode,
                browserKeyProvided: false,
                secretKeyConfigured: Boolean(this.getOpenAICompatSecretKey())
              }
            }
          : {})
      },
      telegram: {
        ...this.resolveTelegramCredentials().status
      }
    };
  }

  @callable()
  async runExecutionLadderDiagnostics() {
    const tools = this.getTools() as Record<string, unknown>;
    const toolNames = Object.keys(tools).sort();

    const getTool = (name: string) =>
      tools[name] as
        | {
            execute?: (input: unknown) => Promise<unknown>;
          }
        | undefined;

    const executeTool = getTool("execute");
    const loadExtensionTool = getTool("load_extension");
    const listExtensionsTool = getTool("list_extensions");

    let executeResult: unknown = null;
    if (executeTool?.execute) {
      executeResult = await executeTool.execute({
        code: "async () => ({ ok: true, value: 2 + 3 })"
      });
    }

    let extensionLoadResult: unknown = null;
    let extensionListResult: unknown = null;
    if (loadExtensionTool?.execute && listExtensionsTool?.execute) {
      const extensionName = `diag-${Date.now().toString(36)}`;
      extensionLoadResult = await loadExtensionTool.execute({
        name: extensionName,
        version: "1.0.0",
        description: "Diagnostics extension",
        workspace_access: "none",
        source: `({
  tools: {
    ping: {
      description: "Return pong",
      parameters: {},
      required: [],
      execute: async () => "pong"
    }
  }
})`
      });

      extensionListResult = await listExtensionsTool.execute({});
    }

    return {
      loaderBindingPresent: Boolean(this.getLoaderBinding()),
      browserBindingPresent: Boolean(this.getBrowserBinding()),
      hasExecuteTool: toolNames.includes("execute"),
      hasBrowserTools:
        toolNames.includes("browser_search") &&
        toolNames.includes("browser_execute"),
      hasExtensionTools:
        toolNames.includes("load_extension") &&
        toolNames.includes("list_extensions"),
      sandboxToolsAdvertised: toolNames.some((name) =>
        name.startsWith("sandbox")
      ),
      executeResult,
      extensionLoadResult,
      extensionListResult,
      sampleToolNames: toolNames.slice(0, 30),
      totalToolCount: toolNames.length
    };
  }

  getModel() {
    const workersai = createWorkersAI({ binding: this.env.AI });
    return workersai(DEFAULT_WORKERS_AI_MODEL);
  }

  beforeTurn(ctx: TurnContext) {
    const parsedBody = runtimeProviderBodySchema.safeParse(ctx.body || {});
    const body = parsedBody.success ? parsedBody.data : {};

    const persisted = this.getProviderSettings();
    const requestedKind = body.provider?.kind;
    const kind: ProviderKind = requestedKind || persisted.provider;

    if (kind !== "openai-compatible") {
      return {
        model: this.getModel()
      };
    }

    const baseUrl =
      body.provider?.openai?.baseUrl ||
      persisted.openai.baseUrl ||
      DEFAULT_OPENAI_COMPAT_BASE_URL;
    const model =
      body.provider?.openai?.model ||
      persisted.openai.model ||
      DEFAULT_OPENAI_COMPAT_MODEL;
    const apiKeyMode =
      body.provider?.openai?.apiKeyMode ||
      persisted.openai.apiKeyMode ||
      "secret";
    const browserKey = body.provider?.openai?.apiKey;
    const secretKey = this.getOpenAICompatSecretKey();
    const apiKey = apiKeyMode === "browser" ? browserKey : secretKey;

    if (!apiKey || !apiKey.trim()) {
      throw new Error(
        "OpenAI-compatible provider selected but API key is missing. Add a browser key in settings or set OPENAI_COMPAT_API_KEY secret."
      );
    }

    const provider = createOpenAI({
      apiKey,
      baseURL: baseUrl
    });

    return {
      model: provider(model)
    };
  }

  onChatError(error: unknown) {
    const nowIso = new Date().toISOString();
    const currentHealth = this.getChatHealthState();
    this.setChatHealthState({
      ...currentHealth,
      lastError: error instanceof Error ? error.message : String(error),
      lastErrorAtUtc: nowIso
    });

    if (this.isWorkersAiDailyLimitError(error)) {
      this.setWorkersAiLimitState({
        status: "limit-exceeded",
        exceededAtUtc: nowIso,
        lastError: error instanceof Error ? error.message : String(error)
      });
    } else if (this.getProviderSettings().provider === "workers-ai") {
      this.setWorkersAiLimitState({
        status: "unknown",
        exceededAtUtc: null,
        lastError: error instanceof Error ? error.message : String(error)
      });
    }
    return super.onChatError(error);
  }

  onChatResponse(result: ChatResponseResult) {
    const currentHealth = this.getChatHealthState();
    this.setChatHealthState({
      ...currentHealth,
      ...(result.status === "completed"
        ? {
            lastSuccessAtUtc: new Date().toISOString(),
            lastError: null,
            lastErrorAtUtc: null
          }
        : {})
    });

    if (this.getProviderSettings().provider === "workers-ai") {
      if (result.status === "completed") {
        this.clearWorkersAiLimitState();
      }
    }
  }

  getSystemPrompt() {
    return `You are a helpful assistant that can understand images. You can check the weather, get the user's timezone, run calculations, and schedule tasks. You also have an execution ladder: workspace tools, execute (sandboxed code), browser tools, and dynamic extensions. When users share images, describe what you see and answer questions about them.

${getSchedulePrompt({ date: new Date() })}

If the user asks to schedule a task, use the schedule tool to schedule the task.
Prefer the execute tool when a task needs multiple file operations or structured data processing.
If the user asks for repeated automation, create and load an extension.`;
  }

  configureSession(session: Session) {
    return session
      .withContext("memory", {
        description:
          "Important user and project facts to remember across conversations.",
        maxTokens: 1200
      })
      .withCachedPrompt();
  }

  getTools() {
    const loader = this.getLoaderBinding();
    const browser = this.getBrowserBinding();

    const workspaceTools = createWorkspaceTools(this.workspace);

    const extensionTools = this.extensionManager
      ? {
          ...createExtensionTools({ manager: this.extensionManager }),
          ...this.extensionManager.getTools()
        }
      : {};

    return {
      ...this.mcp.getAITools(),
      ...(loader
        ? {
            execute: createExecuteTool({
              tools: workspaceTools,
              state: createWorkspaceStateBackend(this.workspace),
              loader,
              timeout: 60000
            })
          }
        : {}),
      ...(loader && browser
        ? createBrowserTools({
            browser,
            loader
          })
        : {}),
      ...createSandboxTools(),
      ...extensionTools,

      getWeather: tool({
        description: "Get the current weather for a city",
        inputSchema: z.object({
          city: z.string().describe("City name")
        }),
        execute: async ({ city }) => {
          const conditions = ["sunny", "cloudy", "rainy", "snowy"];
          const temp = Math.floor(Math.random() * 30) + 5;
          return {
            city,
            temperature: temp,
            condition:
              conditions[Math.floor(Math.random() * conditions.length)],
            unit: "celsius"
          };
        }
      }),

      getUserTimezone: tool({
        description:
          "Get the user's timezone from their browser when available. In non-browser channels, returns a UTC fallback.",
        inputSchema: z.object({}),
        execute: async () => ({
          timezone: "UTC",
          localTime: new Date().toISOString()
        })
      }),

      calculate: tool({
        description:
          "Perform a math calculation with two numbers. Requires user approval for large numbers.",
        inputSchema: z.object({
          a: z.number().describe("First number"),
          b: z.number().describe("Second number"),
          operator: z
            .enum(["+", "-", "*", "/", "%"])
            .describe("Arithmetic operator")
        }),
        needsApproval: async ({ a, b }) =>
          Math.abs(a) > 1000 || Math.abs(b) > 1000,
        execute: async ({ a, b, operator }) => {
          const ops: Record<string, (x: number, y: number) => number> = {
            "+": (x, y) => x + y,
            "-": (x, y) => x - y,
            "*": (x, y) => x * y,
            "/": (x, y) => x / y,
            "%": (x, y) => x % y
          };
          if (operator === "/" && b === 0) {
            return { error: "Division by zero" };
          }
          return {
            expression: `${a} ${operator} ${b}`,
            result: ops[operator](a, b)
          };
        }
      }),

      scheduleTask: tool({
        description:
          "Schedule a task to be executed at a later time. Use this when the user asks to be reminded or wants something done later.",
        inputSchema: scheduleSchema,
        execute: async ({ when, description }) => {
          if (when.type === "no-schedule") {
            return "Not a valid schedule input";
          }
          const input =
            when.type === "scheduled"
              ? when.date
              : when.type === "delayed"
                ? when.delayInSeconds
                : when.type === "cron"
                  ? when.cron
                  : null;
          if (!input) return "Invalid schedule type";
          try {
            this.schedule(input, "executeTask", description, {
              idempotent: true
            });
            return `Task scheduled: "${description}" (${when.type}: ${input})`;
          } catch (error) {
            return `Error scheduling task: ${error}`;
          }
        }
      }),

      getScheduledTasks: tool({
        description: "List all tasks that have been scheduled",
        inputSchema: z.object({}),
        execute: async () => {
          const tasks = this.getSchedules();
          return tasks.length > 0 ? tasks : "No scheduled tasks found.";
        }
      }),

      cancelScheduledTask: tool({
        description: "Cancel a scheduled task by its ID",
        inputSchema: z.object({
          taskId: z.string().describe("The ID of the task to cancel")
        }),
        execute: async ({ taskId }) => {
          try {
            this.cancelSchedule(taskId);
            return `Task ${taskId} cancelled.`;
          } catch (error) {
            return `Error cancelling task: ${error}`;
          }
        }
      })
    };
  }

  async executeTask(description: string, _task: Schedule<string>) {
    // Do the actual work here (send email, call API, etc.)
    console.log(`Executing scheduled task: ${description}`);

    // Notify connected clients via a broadcast event.
    // We use broadcast() instead of saveMessages() to avoid injecting
    // into chat history — that would cause the AI to see the notification
    // as new context and potentially loop.
    this.broadcast(
      JSON.stringify({
        type: "scheduled-task",
        description,
        timestamp: new Date().toISOString()
      })
    );
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url);

    // Keep Telegram webhook publicly reachable; Telegram cannot complete
    // Cloudflare Access interactive auth flows.
    if (
      url.pathname === "/telegram/webhook" ||
      url.pathname === "/telegram/webhook/"
    ) {
      return handleTelegramWebhook(request, env, ctx);
    }

    const accessResult = verifyAccessEmail(request, env);
    if (!accessResult.ok) {
      return new Response(`Unauthorized: ${accessResult.reason}`, {
        status: 401,
        headers: { "content-type": "text/plain" }
      });
    }

    return (
      (await routeAgentRequest(request, env)) ||
      new Response("Not found", { status: 404 })
    );
  }
} satisfies ExportedHandler<Env>;
