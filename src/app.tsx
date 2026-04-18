import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { useAgent } from "agents/react";
import { useAgentChat } from "@cloudflare/ai-chat/react";
import { getToolName, isToolUIPart, type UIMessage } from "ai";
import type { MCPServersState } from "agents";
import type { ChatAgent } from "./server";
import {
  Badge,
  Button,
  Empty,
  InputArea,
  Surface,
  Switch,
  Text
} from "@cloudflare/kumo";
import { Toasty, useKumoToastManager } from "@cloudflare/kumo/components/toast";
import { Streamdown } from "streamdown";
import { code } from "@streamdown/code";
import {
  BrainIcon,
  BugIcon,
  CaretDownIcon,
  ChatCircleDotsIcon,
  CheckCircleIcon,
  CircleIcon,
  GearIcon,
  ImageIcon,
  MoonIcon,
  PaperPlaneRightIcon,
  PaperclipIcon,
  PlugsConnectedIcon,
  PlusIcon,
  SignInIcon,
  StopIcon,
  SunIcon,
  TrashIcon,
  WarningCircleIcon,
  XCircleIcon,
  XIcon
} from "@phosphor-icons/react";

interface Attachment {
  id: string;
  file: File;
  preview: string;
  mediaType: string;
}

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

type RuntimeStatus = {
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
  runtimeStatus: RuntimeStatus;
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
  telegram: {
    botTokenConfigured: boolean;
    webhookSecretConfigured: boolean;
    botTokenSource: "env" | "stored" | "none";
    webhookSecretSource: "env" | "stored" | "none";
    updatedAtUtc: string | null;
  };
};

type TelegramCredentialStatus = {
  botTokenConfigured: boolean;
  webhookSecretConfigured: boolean;
  botTokenSource: "env" | "stored" | "none";
  webhookSecretSource: "env" | "stored" | "none";
  updatedAtUtc: string | null;
};

const OPENAI_BROWSER_KEY_STORAGE = "project-think-openai-browser-key";
const DEFAULT_PROVIDER_SETTINGS: ProviderSettings = {
  provider: "workers-ai",
  openai: {
    baseUrl: "http://127.0.0.1:11434/v1",
    model: "gpt-4o-mini",
    apiKeyMode: "secret"
  }
};

function createAttachment(file: File): Attachment {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    file,
    preview: URL.createObjectURL(file),
    mediaType: file.type || "application/octet-stream"
  };
}

function fileToDataUri(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function safeJson(value: unknown) {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

function formatCountdown(totalSeconds: number): string {
  const seconds = Math.max(0, totalSeconds);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hours > 0) return `${hours}h ${minutes}m ${secs}s`;
  if (minutes > 0) return `${minutes}m ${secs}s`;
  return `${secs}s`;
}

function getPartKey(part: UIMessage["parts"][number]): string {
  if (isToolUIPart(part)) return `tool-${part.toolCallId}`;
  if (part.type === "text")
    return `text-${part.text.slice(0, 48)}-${part.text.length}`;
  if (part.type === "reasoning") {
    return `reasoning-${part.text.slice(0, 32)}-${part.text.length}`;
  }
  if (part.type === "file")
    return `file-${part.url.slice(0, 64)}-${part.mediaType}`;
  return `part-${part.type}`;
}

function withStablePartKeys(parts: UIMessage["parts"]) {
  const seen = new Map<string, number>();
  return parts.map((part) => {
    const base = getPartKey(part);
    const count = (seen.get(base) || 0) + 1;
    seen.set(base, count);
    return { key: `${base}-${count}`, part };
  });
}

function getStreamingFingerprint(messages: UIMessage[]): string {
  const last = messages[messages.length - 1];
  if (!last) return "empty";

  const digest = last.parts
    .map((part) => {
      if (isToolUIPart(part)) return `tool:${part.toolCallId}:${part.state}`;
      if (part.type === "text") return `text:${part.text.length}`;
      if (part.type === "reasoning") {
        return `reasoning:${part.text.length}:${part.state || "unknown"}`;
      }
      if (part.type === "file") return `file:${part.mediaType}`;
      return part.type;
    })
    .join("|");

  return `${messages.length}:${last.id}:${last.role}:${digest}`;
}

function ThemeToggle() {
  const [dark, setDark] = useState(
    () => document.documentElement.getAttribute("data-mode") === "dark"
  );

  const toggle = useCallback(() => {
    const next = !dark;
    setDark(next);
    const mode = next ? "dark" : "light";
    document.documentElement.setAttribute("data-mode", mode);
    document.documentElement.style.colorScheme = mode;
    localStorage.setItem("theme", mode);
  }, [dark]);

  return (
    <Button
      variant="secondary"
      shape="square"
      icon={dark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
      onClick={toggle}
      aria-label="Toggle theme"
    />
  );
}

function RuntimeBanner({
  status,
  now
}: {
  status: RuntimeStatus | null;
  now: number;
}) {
  if (!status) return null;

  const resetMs = new Date(status.workersAI.resetAtUtc).getTime();
  const remainingSeconds = Math.max(0, Math.ceil((resetMs - now) / 1000));
  const resetLocal = new Date(status.workersAI.resetAtUtc).toLocaleString();

  if (status.workersAI.status === "unknown") {
    return (
      <Surface className="status-banner status-banner-unknown">
        <div className="status-banner-row">
          <WarningCircleIcon size={16} />
          <Text size="sm" bold>
            Usage status unknown
          </Text>
        </div>
        <Text size="xs" variant="secondary">
          This app cannot fetch exact account remaining neurons from Cloudflare
          account APIs in Worker runtime.
        </Text>
        <Text size="xs" variant="secondary">
          Daily window resets in {formatCountdown(remainingSeconds)} (
          {resetLocal}).
        </Text>
        {status.chatHealth.lastError && (
          <Text size="xs" variant="secondary">
            Last chat error: {status.chatHealth.lastError}
          </Text>
        )}
      </Surface>
    );
  }

  if (status.workersAI.status === "limit-exceeded") {
    return (
      <Surface className="status-banner status-banner-error">
        <div className="status-banner-row">
          <WarningCircleIcon size={16} />
          <Text size="sm" bold>
            Workers AI free daily limit reached
          </Text>
        </div>
        <Text size="xs" variant="secondary">
          Free limit: {status.workersAI.freeDailyNeurons.toLocaleString()}{" "}
          neurons/day. Resets in {formatCountdown(remainingSeconds)} (
          {resetLocal}).
        </Text>
        {status.workersAI.lastError && (
          <Text size="xs" variant="secondary">
            Last error: {status.workersAI.lastError}
          </Text>
        )}
      </Surface>
    );
  }

  return (
    <Surface className="status-banner status-banner-ok">
      <div className="status-banner-row">
        <CheckCircleIcon size={16} />
        <Text size="sm" bold>
          Workers AI free tier active
        </Text>
      </div>
      <Text size="xs" variant="secondary">
        Daily free limit: {status.workersAI.freeDailyNeurons.toLocaleString()}{" "}
        neurons. Reset in {formatCountdown(remainingSeconds)} ({resetLocal}).
      </Text>
      <Text size="xs" variant="secondary">
        Paid overage rate: ${status.workersAI.pricePer1kNeuronsUsd.toFixed(3)}{" "}
        per 1,000 neurons.
      </Text>
      <Text size="xs" variant="secondary">
        {status.workersAI.note}
      </Text>
    </Surface>
  );
}

function ToolPartView({
  part,
  addToolApprovalResponse
}: {
  part: UIMessage["parts"][number];
  addToolApprovalResponse: (response: {
    id: string;
    approved: boolean;
  }) => void;
}) {
  if (!isToolUIPart(part)) return null;
  const toolName = getToolName(part);

  if (part.state === "output-available") {
    return (
      <div className="message-row assistant">
        <Surface className="tool-card">
          <div className="tool-card-header">
            <GearIcon size={14} />
            <Text size="xs" bold>
              {toolName}
            </Text>
            <Badge variant="secondary">Done</Badge>
          </div>
          <pre className="tool-json">{safeJson(part.output)}</pre>
        </Surface>
      </div>
    );
  }

  if ("approval" in part && part.state === "approval-requested") {
    const approvalId = (part.approval as { id?: string })?.id;
    return (
      <div className="message-row assistant">
        <Surface className="tool-card tool-card-warning">
          <div className="tool-card-header">
            <WarningCircleIcon size={14} />
            <Text size="sm" bold>
              Approval required: {toolName}
            </Text>
          </div>
          <pre className="tool-json">{safeJson(part.input)}</pre>
          <div className="tool-actions">
            <Button
              variant="primary"
              size="sm"
              icon={<CheckCircleIcon size={14} />}
              onClick={() => {
                if (approvalId)
                  addToolApprovalResponse({ id: approvalId, approved: true });
              }}
            >
              Approve
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon={<XCircleIcon size={14} />}
              onClick={() => {
                if (approvalId)
                  addToolApprovalResponse({ id: approvalId, approved: false });
              }}
            >
              Reject
            </Button>
          </div>
        </Surface>
      </div>
    );
  }

  if (
    part.state === "output-denied" ||
    ("approval" in part &&
      (part.approval as { approved?: boolean })?.approved === false)
  ) {
    return (
      <div className="message-row assistant">
        <Surface className="tool-card">
          <div className="tool-card-header">
            <XCircleIcon size={14} className="text-kumo-danger" />
            <Text size="xs" bold>
              {toolName}
            </Text>
            <Badge variant="secondary">Rejected</Badge>
          </div>
        </Surface>
      </div>
    );
  }

  if (part.state === "input-available" || part.state === "input-streaming") {
    return (
      <div className="message-row assistant">
        <Surface className="tool-card">
          <div className="tool-card-header">
            <GearIcon size={14} className="animate-spin" />
            <Text size="xs" variant="secondary">
              Running {toolName}...
            </Text>
          </div>
        </Surface>
      </div>
    );
  }

  return null;
}

function Chat() {
  const toasts = useKumoToastManager();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const settingsPanelRef = useRef<HTMLDivElement>(null);
  const lastStreamProgressAtRef = useRef<number>(Date.now());
  const stallToastShownRef = useRef(false);
  const lastStreamingFingerprintRef = useRef("");

  const [connected, setConnected] = useState(false);
  const [input, setInput] = useState("");
  const [showDebug, setShowDebug] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [now, setNow] = useState(Date.now());

  const [runtimeStatus, setRuntimeStatus] = useState<RuntimeStatus | null>(
    null
  );
  const [isRefreshingStatus, setIsRefreshingStatus] = useState(false);
  const [isSavingProvider, setIsSavingProvider] = useState(false);
  const [isSendingDiagnostics, setIsSendingDiagnostics] = useState(false);
  const [diagnosticsJson, setDiagnosticsJson] = useState<string | null>(null);

  const [providerSettings, setProviderSettings] = useState<ProviderSettings>(
    DEFAULT_PROVIDER_SETTINGS
  );
  const [openAIBrowserKey, setOpenAIBrowserKey] = useState(
    () => localStorage.getItem(OPENAI_BROWSER_KEY_STORAGE) || ""
  );

  const [mcpState, setMcpState] = useState<MCPServersState>({
    prompts: [],
    resources: [],
    servers: {},
    tools: []
  });
  const [mcpName, setMcpName] = useState("");
  const [mcpUrl, setMcpUrl] = useState("");
  const [githubPat, setGithubPat] = useState("");
  const [isAddingServer, setIsAddingServer] = useState(false);
  const [isAddingGitHubServer, setIsAddingGitHubServer] = useState(false);

  const [telegramBaseUrl, setTelegramBaseUrl] = useState(
    window.location.origin
  );
  const [telegramSecret, setTelegramSecret] = useState("");
  const [telegramBotTokenInput, setTelegramBotTokenInput] = useState("");
  const [telegramWebhookSecretInput, setTelegramWebhookSecretInput] =
    useState("");
  const [telegramCredentialStatus, setTelegramCredentialStatus] =
    useState<TelegramCredentialStatus | null>(null);
  const [telegramInfoJson, setTelegramInfoJson] = useState<string | null>(null);
  const [isSettingTelegramWebhook, setIsSettingTelegramWebhook] =
    useState(false);
  const [isLoadingTelegramInfo, setIsLoadingTelegramInfo] = useState(false);
  const [isSavingTelegramCredentials, setIsSavingTelegramCredentials] =
    useState(false);

  const serverEntries = Object.entries(mcpState.servers);
  const mcpToolCount = mcpState.tools.length;

  const agent = useAgent<ChatAgent>({
    agent: "ChatAgent",
    onOpen: useCallback(() => setConnected(true), []),
    onClose: useCallback(() => setConnected(false), []),
    onError: useCallback((error: Event) => {
      console.error("WebSocket error:", error);
    }, []),
    onMcpUpdate: useCallback(
      (state: MCPServersState) => setMcpState(state),
      []
    ),
    onMessage: useCallback(
      (message: MessageEvent) => {
        try {
          const data = JSON.parse(String(message.data));
          if (data.type === "scheduled-task") {
            toasts.add({
              title: "Scheduled task completed",
              description: data.description,
              timeout: 0
            });
          }
        } catch {
          // ignore non-json transport frames
        }
      },
      [toasts]
    )
  });

  const refreshRuntimeStatus = useCallback(async () => {
    setIsRefreshingStatus(true);
    try {
      const data = (await agent.stub.getRuntimeStatus()) as RuntimeStatus;
      setRuntimeStatus(data);
      setProviderSettings(data.provider.settings);
    } catch (error) {
      console.error("Failed to load runtime status", error);
    } finally {
      setIsRefreshingStatus(false);
    }
  }, [agent.stub]);

  const refreshTelegramCredentialStatus = useCallback(async () => {
    try {
      const status =
        (await agent.stub.getTelegramCredentialStatus()) as TelegramCredentialStatus;
      setTelegramCredentialStatus(status);
    } catch (error) {
      console.error("Failed to load Telegram credential status", error);
    }
  }, [agent.stub]);

  const {
    messages,
    sendMessage,
    clearHistory,
    addToolApprovalResponse,
    stop,
    status,
    error
  } = useAgentChat({
    agent,
    body: () => ({
      provider: {
        kind: providerSettings.provider,
        ...(providerSettings.provider === "openai-compatible"
          ? {
              openai: {
                baseUrl: providerSettings.openai.baseUrl,
                model: providerSettings.openai.model,
                apiKeyMode: providerSettings.openai.apiKeyMode,
                ...(providerSettings.openai.apiKeyMode === "browser"
                  ? { apiKey: openAIBrowserKey }
                  : {})
              }
            }
          : {})
      }
    }),
    onError: () => {
      void refreshRuntimeStatus();
    }
  });

  const isStreaming = status === "streaming" || status === "submitted";
  const messageCount = messages.length;
  const streamingFingerprint = useMemo(
    () => getStreamingFingerprint(messages),
    [messages]
  );

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    void refreshRuntimeStatus();
    void refreshTelegramCredentialStatus();
    const interval = window.setInterval(() => {
      void refreshRuntimeStatus();
      void refreshTelegramCredentialStatus();
    }, 30000);
    return () => window.clearInterval(interval);
  }, [refreshRuntimeStatus, refreshTelegramCredentialStatus]);

  useEffect(() => {
    if (showSettings) return;
    const browserKey = localStorage.getItem(OPENAI_BROWSER_KEY_STORAGE) || "";
    setOpenAIBrowserKey(browserKey);
  }, [showSettings]);

  useEffect(() => {
    if (messageCount >= 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageCount]);

  useEffect(() => {
    if (!isStreaming && textareaRef.current) textareaRef.current.focus();
  }, [isStreaming]);

  useEffect(() => {
    if (!isStreaming) {
      stallToastShownRef.current = false;
      lastStreamingFingerprintRef.current = "";
      return;
    }

    if (lastStreamingFingerprintRef.current !== streamingFingerprint) {
      lastStreamingFingerprintRef.current = streamingFingerprint;
      lastStreamProgressAtRef.current = Date.now();
    }
  }, [isStreaming, streamingFingerprint]);

  useEffect(() => {
    if (!isStreaming) return;

    const interval = window.setInterval(() => {
      if (stallToastShownRef.current) return;

      const elapsedMs = Date.now() - lastStreamProgressAtRef.current;
      if (elapsedMs < 20000) return;

      stallToastShownRef.current = true;
      toasts.add({
        title: "Response seems stalled",
        description:
          "No progress for 20s. Open Settings and click Send diagnostics.",
        timeout: 9000
      });
    }, 2000);

    return () => window.clearInterval(interval);
  }, [isStreaming, toasts]);

  useEffect(() => {
    if (!showSettings) return;
    function handleClickOutside(e: MouseEvent) {
      if (
        settingsPanelRef.current &&
        !settingsPanelRef.current.contains(e.target as Node)
      ) {
        setShowSettings(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setShowSettings(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showSettings]);

  const addFiles = useCallback((files: FileList | File[]) => {
    const images = Array.from(files).filter((f) => f.type.startsWith("image/"));
    if (images.length === 0) return;
    setAttachments((prev) => [...prev, ...images.map(createAttachment)]);
  }, []);

  const removeAttachment = useCallback((id: string) => {
    setAttachments((prev) => {
      const target = prev.find((a) => a.id === id);
      if (target) URL.revokeObjectURL(target.preview);
      return prev.filter((a) => a.id !== id);
    });
  }, []);

  const send = useCallback(async () => {
    const text = input.trim();
    if ((!text && attachments.length === 0) || isStreaming) return;

    setInput("");
    const parts: Array<
      | { type: "text"; text: string }
      | { type: "file"; mediaType: string; url: string }
    > = [];
    if (text) parts.push({ type: "text", text });

    for (const attachment of attachments) {
      const dataUri = await fileToDataUri(attachment.file);
      parts.push({
        type: "file",
        mediaType: attachment.mediaType,
        url: dataUri
      });
    }

    for (const attachment of attachments)
      URL.revokeObjectURL(attachment.preview);
    setAttachments([]);

    sendMessage({ role: "user", parts });
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  }, [attachments, input, isStreaming, sendMessage]);

  const handleAddServer = async () => {
    if (!mcpName.trim() || !mcpUrl.trim()) return;
    setIsAddingServer(true);
    try {
      await agent.stub.addServer(mcpName.trim(), mcpUrl.trim());
      setMcpName("");
      setMcpUrl("");
      toasts.add({ title: "MCP server added", timeout: 3500 });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      toasts.add({
        title: "Failed to add MCP server",
        description: message,
        timeout: 7000
      });
    } finally {
      setIsAddingServer(false);
    }
  };

  const handleAddGitHubServer = async () => {
    setIsAddingGitHubServer(true);
    try {
      await agent.stub.addGitHubMcpServer("github", githubPat);
      toasts.add({
        title: "GitHub MCP connected",
        description: "GitHub tools are now available for this chat room.",
        timeout: 5000
      });
      setGithubPat("");
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      toasts.add({
        title: "Failed to connect GitHub MCP",
        description: message,
        timeout: 8000
      });
    } finally {
      setIsAddingGitHubServer(false);
    }
  };

  const handleRemoveServer = async (serverId: string) => {
    try {
      await agent.stub.removeServer(serverId);
      toasts.add({ title: "MCP server removed", timeout: 3000 });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      toasts.add({
        title: "Failed to remove MCP server",
        description: message,
        timeout: 7000
      });
    }
  };

  const handleSetTelegramWebhook = async () => {
    setIsSettingTelegramWebhook(true);
    try {
      const result = await agent.stub.setTelegramWebhook(
        telegramBaseUrl,
        telegramSecret
      );
      const webhookUrl =
        typeof result === "object" && result !== null && "webhookUrl" in result
          ? String((result as { webhookUrl: unknown }).webhookUrl)
          : `${telegramBaseUrl.replace(/\/+$/, "")}/telegram/webhook`;

      toasts.add({
        title: "Telegram webhook configured",
        description: webhookUrl,
        timeout: 7000
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      toasts.add({
        title: "Failed to configure Telegram",
        description: message,
        timeout: 9000
      });
    } finally {
      setIsSettingTelegramWebhook(false);
    }
  };

  const handleSaveTelegramCredentials = async () => {
    setIsSavingTelegramCredentials(true);
    try {
      const result = (await agent.stub.updateTelegramCredentials({
        botToken: telegramBotTokenInput,
        webhookSecret: telegramWebhookSecretInput
      })) as {
        ok: boolean;
        status: TelegramCredentialStatus;
      };

      setTelegramCredentialStatus(result.status);
      setTelegramBotTokenInput("");
      setTelegramWebhookSecretInput("");

      toasts.add({
        title: "Telegram credentials saved",
        description:
          "Credentials are stored in the agent room. Worker env secrets still take priority.",
        timeout: 7000
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      toasts.add({
        title: "Failed to save Telegram credentials",
        description: message,
        timeout: 8000
      });
    } finally {
      setIsSavingTelegramCredentials(false);
    }
  };

  const handleClearTelegramStoredCredentials = async () => {
    setIsSavingTelegramCredentials(true);
    try {
      const result = (await agent.stub.updateTelegramCredentials({
        clearBotToken: true,
        clearWebhookSecret: true
      })) as {
        ok: boolean;
        status: TelegramCredentialStatus;
      };

      setTelegramCredentialStatus(result.status);
      toasts.add({
        title: "Stored Telegram credentials cleared",
        description: "If env secrets exist, they are still used automatically.",
        timeout: 6500
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      toasts.add({
        title: "Failed to clear stored Telegram credentials",
        description: message,
        timeout: 8000
      });
    } finally {
      setIsSavingTelegramCredentials(false);
    }
  };

  const handleLoadTelegramInfo = async () => {
    setIsLoadingTelegramInfo(true);
    try {
      const info = await agent.stub.getTelegramWebhookInfo();
      setTelegramInfoJson(safeJson(info));
      toasts.add({ title: "Webhook info refreshed", timeout: 3000 });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      toasts.add({
        title: "Failed to load Telegram info",
        description: message,
        timeout: 7000
      });
    } finally {
      setIsLoadingTelegramInfo(false);
    }
  };

  const saveProviderSettings = async () => {
    setIsSavingProvider(true);
    try {
      localStorage.setItem(OPENAI_BROWSER_KEY_STORAGE, openAIBrowserKey);
      const result = (await agent.stub.updateProviderSettings(
        providerSettings
      )) as RuntimeStatus;
      setRuntimeStatus(result);
      toasts.add({ title: "Provider settings saved", timeout: 3500 });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      toasts.add({
        title: "Failed to save provider",
        description: message,
        timeout: 8000
      });
    } finally {
      setIsSavingProvider(false);
    }
  };

  const handleSendDiagnostics = async () => {
    setIsSendingDiagnostics(true);
    try {
      const serverSnapshot =
        (await agent.stub.getDiagnosticsSnapshot()) as DiagnosticsSnapshot;

      const payload = {
        server: serverSnapshot,
        client: {
          generatedAtUtc: new Date().toISOString(),
          connected,
          status,
          currentError: error ? String(error.message || error) : null,
          runtimeStatus,
          messageCount: messages.length,
          attachmentCount: attachments.length,
          providerSettingsDraft: providerSettings,
          browserKeyConfigured: Boolean(openAIBrowserKey.trim())
        }
      };

      const json = safeJson(payload);
      setDiagnosticsJson(json);

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(json);
        toasts.add({
          title: "Diagnostics captured",
          description: "Copied to clipboard and shown below.",
          timeout: 6000
        });
      } else {
        toasts.add({
          title: "Diagnostics captured",
          description: "Clipboard unavailable; copy from the panel below.",
          timeout: 7000
        });
      }
    } catch (diagError) {
      const message =
        diagError instanceof Error ? diagError.message : String(diagError);
      toasts.add({
        title: "Failed to capture diagnostics",
        description: message,
        timeout: 8000
      });
    } finally {
      setIsSendingDiagnostics(false);
    }
  };

  const providerWarning = useMemo(() => {
    if (providerSettings.provider !== "openai-compatible") return null;

    if (
      providerSettings.openai.apiKeyMode === "browser" &&
      !openAIBrowserKey.trim()
    ) {
      return "Browser key mode selected: set an API key in this panel before sending messages.";
    }

    if (
      providerSettings.openai.apiKeyMode === "secret" &&
      runtimeStatus &&
      !runtimeStatus.provider.secretKeyConfigured
    ) {
      return "Secret key mode selected but OPENAI_COMPAT_API_KEY secret is not configured.";
    }

    if (providerSettings.openai.baseUrl.includes("127.0.0.1")) {
      return "Localhost provider works in local dev. Deployed Worker cannot access your laptop localhost unless tunneled/public.";
    }

    return null;
  }, [openAIBrowserKey, providerSettings, runtimeStatus]);

  return (
    <section
      className="app-shell"
      aria-label="Chat workspace"
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.types.includes("Files")) setIsDragging(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.currentTarget === e.target) setIsDragging(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files.length > 0) addFiles(e.dataTransfer.files);
      }}
    >
      {isDragging && (
        <div className="drop-overlay">
          <div className="drop-overlay-content">
            <ImageIcon size={40} />
            <Text variant="heading3">Drop images here</Text>
          </div>
        </div>
      )}

      <header className="app-header">
        <div className="app-header-inner">
          <div className="app-title-wrap">
            <h1 className="app-title">
              <span className="app-title-icon">⛅</span>
              Project Think Agent
            </h1>
            <Badge variant="secondary">
              <ChatCircleDotsIcon size={12} weight="bold" className="mr-1" />
              Durable chat
            </Badge>
            {runtimeStatus && (
              <Badge variant="secondary">
                Provider: {runtimeStatus.provider.active}
              </Badge>
            )}
          </div>

          <div className="app-controls">
            <div className="inline-status">
              <CircleIcon
                size={8}
                weight="fill"
                className={connected ? "text-kumo-success" : "text-kumo-danger"}
              />
              <Text size="xs" variant="secondary">
                {connected ? "Connected" : "Disconnected"}
              </Text>
            </div>

            <div className="inline-status">
              <BugIcon size={14} className="text-kumo-inactive" />
              <Switch
                checked={showDebug}
                onCheckedChange={setShowDebug}
                size="sm"
                aria-label="Toggle debug mode"
              />
            </div>

            <ThemeToggle />

            <Button
              variant="secondary"
              icon={<GearIcon size={16} />}
              onClick={() => setShowSettings(true)}
            >
              Settings
            </Button>

            <Button
              variant="secondary"
              icon={<TrashIcon size={16} />}
              onClick={clearHistory}
            >
              Clear
            </Button>
          </div>
        </div>
      </header>

      <main className="chat-main">
        <div className="chat-inner">
          <RuntimeBanner status={runtimeStatus} now={now} />

          {error && (
            <Surface className="status-banner status-banner-error">
              <Text size="xs" variant="secondary">
                Chat error: {String(error.message || error)}
              </Text>
            </Surface>
          )}

          {messages.length === 0 && (
            <Empty
              icon={<ChatCircleDotsIcon size={32} />}
              title="Start a conversation"
              contents={
                <div className="starter-prompts">
                  {[
                    "What is the weather in Paris?",
                    "List my GitHub repos",
                    "Calculate 5000 * 3",
                    "Remind me in 5 minutes to stretch"
                  ].map((prompt) => (
                    <Button
                      key={prompt}
                      variant="outline"
                      size="sm"
                      disabled={isStreaming}
                      onClick={() => {
                        sendMessage({
                          role: "user",
                          parts: [{ type: "text", text: prompt }]
                        });
                      }}
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
              }
            />
          )}

          {messages.map((message) => {
            const isUser = message.role === "user";
            const keyedParts = withStablePartKeys(message.parts);
            const messageIdShort = message.id.slice(0, 8);

            return (
              <div key={message.id} className="message-block">
                {showDebug && (
                  <pre className="debug-json">
                    {safeJson({ id: message.id, role: message.role })}
                  </pre>
                )}

                {keyedParts
                  .filter((entry) => isToolUIPart(entry.part))
                  .map((entry) => (
                    <ToolPartView
                      key={`${messageIdShort}-${entry.key}`}
                      part={entry.part}
                      addToolApprovalResponse={addToolApprovalResponse}
                    />
                  ))}

                {keyedParts
                  .filter(
                    (entry) =>
                      entry.part.type === "reasoning" &&
                      (entry.part as { text?: string }).text?.trim()
                  )
                  .map((entry) => {
                    const reasoning = entry.part as {
                      type: "reasoning";
                      text: string;
                      state?: "streaming" | "done";
                    };
                    const isDone = reasoning.state === "done" || !isStreaming;
                    return (
                      <div
                        key={`${messageIdShort}-${entry.key}`}
                        className="message-row assistant"
                      >
                        <details className="reasoning-panel" open={!isDone}>
                          <summary className="reasoning-summary">
                            <BrainIcon size={14} />
                            <span>Reasoning</span>
                            <span className="reasoning-status">
                              {isDone ? "Complete" : "Thinking..."}
                            </span>
                            <CaretDownIcon size={14} className="ml-auto" />
                          </summary>
                          <pre className="reasoning-body">{reasoning.text}</pre>
                        </details>
                      </div>
                    );
                  })}

                {keyedParts
                  .filter(
                    (
                      entry
                    ): entry is {
                      key: string;
                      part: Extract<typeof entry.part, { type: "file" }>;
                    } =>
                      entry.part.type === "file" &&
                      entry.part.mediaType?.startsWith("image/") === true
                  )
                  .map((entry) => (
                    <div
                      key={`${messageIdShort}-${entry.key}`}
                      className={`message-row ${isUser ? "user" : "assistant"}`}
                    >
                      <img
                        src={entry.part.url}
                        alt="Attachment"
                        className="message-image"
                      />
                    </div>
                  ))}

                {keyedParts
                  .filter((entry) => entry.part.type === "text")
                  .map((entry) => {
                    const textPart = entry.part as {
                      type: "text";
                      text: string;
                    };
                    if (!textPart.text) return null;

                    if (isUser) {
                      return (
                        <div
                          key={`${messageIdShort}-${entry.key}`}
                          className="message-row user"
                        >
                          <div className="message-bubble user-bubble">
                            {textPart.text}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={`${messageIdShort}-${entry.key}`}
                        className="message-row assistant"
                      >
                        <div className="message-bubble assistant-bubble">
                          <Streamdown
                            className="message-markdown"
                            plugins={{ code }}
                            controls={false}
                            isAnimating={isStreaming}
                          >
                            {textPart.text}
                          </Streamdown>
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}

          <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="chat-input-shell">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void send();
          }}
          className="chat-input-inner"
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) addFiles(e.target.files);
              e.target.value = "";
            }}
          />

          {attachments.length > 0 && (
            <div className="attachment-strip">
              {attachments.map((attachment) => (
                <div key={attachment.id} className="attachment-item">
                  <img
                    src={attachment.preview}
                    alt={attachment.file.name}
                    className="attachment-thumb"
                  />
                  <button
                    type="button"
                    className="attachment-remove"
                    onClick={() => removeAttachment(attachment.id)}
                    aria-label={`Remove ${attachment.file.name}`}
                  >
                    <XIcon size={10} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="chat-input-box">
            <Button
              type="button"
              variant="ghost"
              shape="square"
              aria-label="Attach images"
              icon={<PaperclipIcon size={18} />}
              onClick={() => fileInputRef.current?.click()}
              disabled={!connected || isStreaming}
            />
            <InputArea
              ref={textareaRef}
              value={input}
              onValueChange={setInput}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void send();
                }
              }}
              onInput={(e) => {
                const el = e.currentTarget;
                el.style.height = "auto";
                el.style.height = `${el.scrollHeight}px`;
              }}
              onPaste={(e) => {
                const items = e.clipboardData?.items;
                if (!items) return;
                const files: File[] = [];
                for (const item of items) {
                  if (item.kind === "file") {
                    const file = item.getAsFile();
                    if (file) files.push(file);
                  }
                }
                if (files.length > 0) {
                  e.preventDefault();
                  addFiles(files);
                }
              }}
              placeholder={
                attachments.length > 0
                  ? "Add a message or send images..."
                  : "Send a message..."
              }
              disabled={!connected || isStreaming}
              rows={1}
              className="chat-input-area"
            />

            {isStreaming ? (
              <Button
                type="button"
                variant="secondary"
                shape="square"
                aria-label="Stop generation"
                icon={<StopIcon size={18} />}
                onClick={stop}
              />
            ) : (
              <Button
                type="submit"
                variant="primary"
                shape="square"
                aria-label="Send message"
                disabled={
                  (!input.trim() && attachments.length === 0) || !connected
                }
                icon={<PaperPlaneRightIcon size={18} />}
              />
            )}
          </div>
        </form>
      </footer>

      {showSettings && (
        <div className="settings-overlay">
          <aside className="settings-panel" ref={settingsPanelRef}>
            <div className="settings-header">
              <div className="settings-title-wrap">
                <GearIcon size={16} />
                <Text size="sm" bold>
                  Runtime & Integrations
                </Text>
              </div>
              <Button
                variant="ghost"
                size="sm"
                shape="square"
                icon={<XIcon size={14} />}
                onClick={() => setShowSettings(false)}
                aria-label="Close settings"
              />
            </div>

            <div className="settings-body">
              <Surface className="settings-section">
                <div className="section-head">
                  <Text size="sm" bold>
                    Runtime status
                  </Text>
                  <div className="section-head-actions">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => void refreshRuntimeStatus()}
                      disabled={isRefreshingStatus}
                    >
                      {isRefreshingStatus ? "Refreshing..." : "Refresh"}
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      icon={<BugIcon size={13} />}
                      onClick={() => void handleSendDiagnostics()}
                      disabled={isSendingDiagnostics}
                    >
                      {isSendingDiagnostics
                        ? "Collecting..."
                        : "Send diagnostics"}
                    </Button>
                  </div>
                </div>

                {runtimeStatus ? (
                  <div className="section-stack">
                    <Text size="xs" variant="secondary">
                      Active provider: <b>{runtimeStatus.provider.active}</b>
                    </Text>
                    <Text size="xs" variant="secondary">
                      Workers AI free limit:{" "}
                      {runtimeStatus.workersAI.freeDailyNeurons.toLocaleString()}{" "}
                      neurons/day
                    </Text>
                    <Text size="xs" variant="secondary">
                      Daily reset (UTC):{" "}
                      {new Date(
                        runtimeStatus.workersAI.resetAtUtc
                      ).toLocaleString()}
                    </Text>
                    <Text size="xs" variant="secondary">
                      If messages fail or stall, click <b>Send diagnostics</b>.
                    </Text>
                    <Text size="xs" variant="secondary">
                      Telegram bot token:{" "}
                      {runtimeStatus.telegram.botTokenConfigured
                        ? `configured (${runtimeStatus.telegram.botTokenSource})`
                        : "not configured"}
                    </Text>
                    <Text size="xs" variant="secondary">
                      Telegram webhook secret:{" "}
                      {runtimeStatus.telegram.webhookSecretConfigured
                        ? `configured (${runtimeStatus.telegram.webhookSecretSource})`
                        : "not configured"}
                    </Text>
                  </div>
                ) : (
                  <Text size="xs" variant="secondary">
                    Loading status...
                  </Text>
                )}

                {diagnosticsJson && (
                  <pre className="debug-json">{diagnosticsJson}</pre>
                )}
              </Surface>

              <Surface className="settings-section">
                <div className="section-head">
                  <Text size="sm" bold>
                    AI provider
                  </Text>
                </div>

                <div className="provider-choices">
                  <label className="provider-choice">
                    <input
                      type="radio"
                      name="provider"
                      checked={providerSettings.provider === "workers-ai"}
                      onChange={() =>
                        setProviderSettings((prev) => ({
                          ...prev,
                          provider: "workers-ai"
                        }))
                      }
                    />
                    <span>Workers AI</span>
                  </label>
                  <label className="provider-choice">
                    <input
                      type="radio"
                      name="provider"
                      checked={
                        providerSettings.provider === "openai-compatible"
                      }
                      onChange={() =>
                        setProviderSettings((prev) => ({
                          ...prev,
                          provider: "openai-compatible"
                        }))
                      }
                    />
                    <span>OpenAI-compatible</span>
                  </label>
                </div>

                {providerSettings.provider === "openai-compatible" && (
                  <div className="section-stack">
                    <input
                      type="text"
                      value={providerSettings.openai.baseUrl}
                      onChange={(e) =>
                        setProviderSettings((prev) => ({
                          ...prev,
                          openai: { ...prev.openai, baseUrl: e.target.value }
                        }))
                      }
                      placeholder="Base URL (local or hosted)"
                      className="settings-input monospace"
                    />

                    <input
                      type="text"
                      value={providerSettings.openai.model}
                      onChange={(e) =>
                        setProviderSettings((prev) => ({
                          ...prev,
                          openai: { ...prev.openai, model: e.target.value }
                        }))
                      }
                      placeholder="Model id"
                      className="settings-input monospace"
                    />

                    <label
                      className="settings-label"
                      htmlFor="openai-api-key-mode"
                    >
                      API key mode
                    </label>
                    <select
                      id="openai-api-key-mode"
                      value={providerSettings.openai.apiKeyMode}
                      onChange={(e) =>
                        setProviderSettings((prev) => ({
                          ...prev,
                          openai: {
                            ...prev.openai,
                            apiKeyMode: e.target.value as OpenAIApiKeyMode
                          }
                        }))
                      }
                      className="settings-input"
                    >
                      <option value="secret">Worker secret</option>
                      <option value="browser">Browser key</option>
                    </select>

                    {providerSettings.openai.apiKeyMode === "browser" && (
                      <input
                        type="password"
                        value={openAIBrowserKey}
                        onChange={(e) => setOpenAIBrowserKey(e.target.value)}
                        placeholder="OpenAI-compatible API key"
                        className="settings-input monospace"
                      />
                    )}

                    {providerWarning && (
                      <Text size="xs" variant="secondary">
                        {providerWarning}
                      </Text>
                    )}
                  </div>
                )}

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => void saveProviderSettings()}
                  disabled={isSavingProvider}
                >
                  {isSavingProvider ? "Saving..." : "Save provider settings"}
                </Button>
              </Surface>

              <Surface className="settings-section">
                <div className="section-head">
                  <div className="section-head-title">
                    <PlugsConnectedIcon size={16} />
                    <Text size="sm" bold>
                      MCP servers
                    </Text>
                    {mcpToolCount > 0 && (
                      <Badge variant="secondary">{mcpToolCount} tools</Badge>
                    )}
                  </div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void handleAddServer();
                  }}
                  className="section-stack"
                >
                  <input
                    type="text"
                    value={mcpName}
                    onChange={(e) => setMcpName(e.target.value)}
                    placeholder="Server name"
                    className="settings-input"
                  />
                  <div className="inline-row">
                    <input
                      type="text"
                      value={mcpUrl}
                      onChange={(e) => setMcpUrl(e.target.value)}
                      placeholder="https://mcp.example.com"
                      className="settings-input monospace"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="sm"
                      icon={<PlusIcon size={14} />}
                      disabled={
                        isAddingServer || !mcpName.trim() || !mcpUrl.trim()
                      }
                    >
                      {isAddingServer ? "..." : "Add"}
                    </Button>
                  </div>
                </form>

                <div className="section-stack">
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<PlusIcon size={14} />}
                    onClick={() => void handleAddGitHubServer()}
                    disabled={isAddingGitHubServer}
                  >
                    {isAddingGitHubServer
                      ? "Adding GitHub MCP..."
                      : "Quick add GitHub MCP"}
                  </Button>
                  <input
                    type="password"
                    value={githubPat}
                    onChange={(e) => setGithubPat(e.target.value)}
                    placeholder="GitHub PAT (optional if secret is set)"
                    className="settings-input monospace"
                  />
                </div>

                {serverEntries.length > 0 && (
                  <div className="server-list">
                    {serverEntries.map(([id, server]) => (
                      <div key={id} className="server-item">
                        <div className="server-item-main">
                          <div className="server-item-title-row">
                            <span className="server-name">{server.name}</span>
                            <Badge
                              variant={
                                server.state === "ready"
                                  ? "primary"
                                  : server.state === "failed"
                                    ? "destructive"
                                    : "secondary"
                              }
                            >
                              {server.state}
                            </Badge>
                          </div>
                          <span className="server-url monospace">
                            {server.server_url}
                          </span>
                          {server.state === "failed" && server.error && (
                            <span className="server-error">{server.error}</span>
                          )}
                        </div>

                        <div className="server-actions">
                          {server.state === "authenticating" &&
                            server.auth_url && (
                              <Button
                                variant="primary"
                                size="sm"
                                icon={<SignInIcon size={12} />}
                                onClick={() =>
                                  window.open(
                                    server.auth_url as string,
                                    "oauth",
                                    "width=600,height=800"
                                  )
                                }
                              >
                                Auth
                              </Button>
                            )}
                          <Button
                            variant="ghost"
                            size="sm"
                            shape="square"
                            icon={<TrashIcon size={12} />}
                            onClick={() => void handleRemoveServer(id)}
                            aria-label="Remove server"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Surface>

              <Surface className="settings-section">
                <div className="section-head">
                  <Text size="sm" bold>
                    Telegram webhook
                  </Text>
                </div>

                <div className="section-stack">
                  <Text size="xs" variant="secondary">
                    Add Telegram credentials from UI (stored in this agent
                    room). If Worker secrets exist, they override stored values.
                  </Text>

                  <input
                    type="password"
                    value={telegramBotTokenInput}
                    onChange={(e) => setTelegramBotTokenInput(e.target.value)}
                    placeholder="Telegram bot token (from BotFather)"
                    className="settings-input monospace"
                  />
                  <input
                    type="password"
                    value={telegramWebhookSecretInput}
                    onChange={(e) =>
                      setTelegramWebhookSecretInput(e.target.value)
                    }
                    placeholder="Telegram webhook secret token"
                    className="settings-input monospace"
                  />

                  <div className="inline-row">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => void handleSaveTelegramCredentials()}
                      disabled={
                        isSavingTelegramCredentials ||
                        (!telegramBotTokenInput.trim() &&
                          !telegramWebhookSecretInput.trim())
                      }
                    >
                      {isSavingTelegramCredentials
                        ? "Saving..."
                        : "Save Telegram credentials"}
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        void handleClearTelegramStoredCredentials()
                      }
                      disabled={isSavingTelegramCredentials}
                    >
                      Clear stored
                    </Button>
                  </div>

                  {telegramCredentialStatus && (
                    <Text size="xs" variant="secondary">
                      Bot token:{" "}
                      {telegramCredentialStatus.botTokenConfigured
                        ? `configured (${telegramCredentialStatus.botTokenSource})`
                        : "not configured"}
                      {" · "}
                      Webhook secret:{" "}
                      {telegramCredentialStatus.webhookSecretConfigured
                        ? `configured (${telegramCredentialStatus.webhookSecretSource})`
                        : "not configured"}
                    </Text>
                  )}

                  <input
                    type="text"
                    value={telegramBaseUrl}
                    onChange={(e) => setTelegramBaseUrl(e.target.value)}
                    placeholder="https://your-worker.workers.dev"
                    className="settings-input monospace"
                  />
                  <input
                    type="password"
                    value={telegramSecret}
                    onChange={(e) => setTelegramSecret(e.target.value)}
                    placeholder="Telegram secret token (optional)"
                    className="settings-input monospace"
                  />

                  <div className="inline-row">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => void handleSetTelegramWebhook()}
                      disabled={
                        isSettingTelegramWebhook ||
                        telegramBaseUrl.trim().length === 0
                      }
                    >
                      {isSettingTelegramWebhook ? "Setting..." : "Set webhook"}
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => void handleLoadTelegramInfo()}
                      disabled={isLoadingTelegramInfo}
                    >
                      {isLoadingTelegramInfo
                        ? "Loading..."
                        : "Get webhook info"}
                    </Button>
                  </div>

                  {telegramInfoJson && (
                    <pre className="debug-json">{telegramInfoJson}</pre>
                  )}
                </div>
              </Surface>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}

export default function App() {
  return (
    <Toasty>
      <Suspense
        fallback={
          <div className="loading-shell">
            <Text variant="secondary">Loading...</Text>
          </div>
        }
      >
        <Chat />
      </Suspense>
    </Toasty>
  );
}
