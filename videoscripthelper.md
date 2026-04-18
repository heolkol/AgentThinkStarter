# Project Think Video Script Helper (Full, Transparent, No Hiding)

This guide is a public, honest walkthrough of what this repo does, what worked, what did not work, how pricing works, and how to set everything up step by step.

If you are making a video, you can read this almost word for word.

---

## 1) What this project is (simple words)

This repo is a **Cloudflare Project Think + Agents SDK** starter that gives you:

- A persistent AI agent (`ChatAgent`) backed by Durable Objects + SQLite
- A web chat UI
- MCP server support (including GitHub MCP with PAT)
- Telegram bot webhook integration
- Scheduling/reminder tools
- Optional execution-ladder tooling (execute/browser/extensions) when account plan supports it

Main idea:

- Local coding agent (Claude Code/Codex) = best for interactive coding now
- Project Think agent on Cloudflare = best for durable, always-online, event-driven automation

---

## 2) Why this matters (the leverage)

With this architecture, your agent can:

- Keep memory between runs
- Sleep when idle (cheap)
- Wake on webhook/events/schedules
- Run as backend infrastructure, not just a one-off chat
- Support multiple channels (Web + Telegram) using same backend brain

This repo is useful if you want an agent that behaves like a service, not just a temporary chat session.

---

## 3) What we built in this repo

### Core

- `ChatAgent` implemented using `Think<Env>`
- Workers AI model: `@cf/moonshotai/kimi-k2.5`
- Session memory context + cached prompt
- Runtime provider routing with support for:
  - Workers AI (default)
  - OpenAI-compatible servers (local or hosted)

### UI upgrades

- Full responsive layout hardening to prevent overlap and horizontal page scrollbar
- Message rendering hardened for long markdown/code/JSON outputs
- Tool cards with bounded JSON output and internal scroll
- Collapsible reasoning blocks with safe overflow behavior
- Side settings panel for runtime/integration configuration
- Status banners for runtime and free-tier limit visibility

### Tools

- Weather demo tool
- Timezone tool (browser-aware, UTC fallback for non-browser channels)
- Calculator with approval guard for large numbers
- Scheduling tools (`scheduleTask`, `getScheduledTasks`, `cancelScheduledTask`)

### MCP

- Generic add/remove MCP server support
- GitHub MCP quick-connect callable (`addGitHubMcpServer`)
- GitHub MCP token via UI input or `GITHUB_MCP_PAT` Worker secret

### Telegram

- Webhook route: `/telegram/webhook`
- Telegram webhook registration callable (`setTelegramWebhook`)
- Telegram webhook info callable (`getTelegramWebhookInfo`)
- Shared room mode with web chat by default (so tools/MCP/chat context sync)

### Execution ladder (partially enabled by plan)

- Integrated code paths for execute/browser/extensions
- Full runtime capabilities depend on account plan/bindings

---

## 4) 100% honest limitations and what failed

These are real issues we hit while building this:

1. `experimental` compatibility flag caused deploy validation failure (`10021`) on this account setup.
2. Full execution-ladder deploy (`worker_loaders` / Dynamic Workers) failed on Free plan (`10195`), because it needs paid plan capabilities.
3. GitHub MCP endpoint in this flow could not rely on dynamic OAuth registration; PAT-based auth is the reliable method here.
4. Telegram originally used per-chat isolated rooms (`telegram-<chat_id>`), which made tools/MCP differ from web chat. We changed to shared room (`default`) so Web + Telegram stay synced.

Nothing hidden: this repo is production-usable on Free for durable chat + MCP + Telegram, but full runtime code execution ladder is plan-dependent.

---

## 5) Pricing (transparent summary)

Project Think is not a separate paid product by itself. Billing comes from Cloudflare services used:

- Workers requests/compute
- Durable Objects/storage
- Workers AI usage (if using Workers AI model)
- Optional paid platform features for advanced execution-ladder capabilities

As discussed in the related announcement context:

- Workers AI has a free daily allowance, then usage-based pricing (`$0.011 / 1,000 neurons` after free tier).
- Free plan is enough to start and build meaningful apps.
- Paid plan is needed for some advanced runtime execution features.

Live usage note now implemented in UI:

- This app shows free-tier status in-app, including daily reset countdown and reset timestamp.

Always verify latest pricing in official Cloudflare docs before publishing exact numbers in video slides.

---

## 6) Architecture in this repo (quick map)

```text
User (Web UI) -----> /agents/... websocket/http -----> ChatAgent (Think)
                                               |-----> MCP tools (GitHub, etc.)
                                               |-----> Scheduled tasks

User (Telegram) ---> /telegram/webhook --------^ (same shared room by default)
```

Important sync behavior:

- Telegram and Web currently use the same room (`default`) unless `TELEGRAM_AGENT_ROOM` is set.

---

## 7) Step-by-step setup (fresh machine)

## Prerequisites

- Node.js 20+
- npm
- Cloudflare account
- Wrangler CLI auth

## Install and run locally

```bash
git clone <your-repo-url>
cd project-think-agent
npm install
npx wrangler login
npm run types
npm run check
npm run dev
```

## Deploy

```bash
npm run deploy
```

---

## 8) Secrets you should set

From inside `project-think-agent`:

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_WEBHOOK_SECRET
```

Optional but recommended for GitHub MCP persistence across sessions:

```bash
npx wrangler secret put GITHUB_MCP_PAT
```

Optional for OpenAI-compatible provider (secret mode):

```bash
npx wrangler secret put OPENAI_COMPAT_API_KEY
```

Optional room override (if you do NOT want default shared room):

- Set plain-text env var `TELEGRAM_AGENT_ROOM` (for example in Wrangler env config).
- If unset, project defaults to shared `default` room for web+telegram sync.

---

## 9) Telegram setup (exact)

1. Create bot with `@BotFather`
2. Copy bot token
3. Add secrets above
4. In app UI, open MCP panel
5. In Telegram section:
   - Base URL: `https://<your-worker>.workers.dev`
   - Secret: same as `TELEGRAM_WEBHOOK_SECRET`
   - Click `Set Telegram webhook`

Alternative via Telegram API directly:

```bash
curl "https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook" \
  -H "content-type: application/json" \
  -d '{"url":"https://<your-worker>.workers.dev/telegram/webhook","secret_token":"<your-secret>"}'
```

Check webhook status:

```bash
curl "https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/getWebhookInfo"
```

---

## 10) GitHub MCP setup (exact)

### Option A (recommended for your public deployment)

- Put PAT in Worker secret: `GITHUB_MCP_PAT`
- In chat, add GitHub MCP once from UI quick action

### Option B

- Paste PAT in MCP panel input and quick-add GitHub MCP

PAT minimum scope depends on what you do:

- read repos only: read scopes
- create issues/PRs/commits: repo write scopes

Security note for video viewers:

- Prefer Worker secret over repeatedly typing PAT in UI
- Never commit PAT to repository

---

## 11) Free plan vs paid plan capability matrix

### Works on Free (this repo)

- Durable agent + memory
- Web chat + WebSocket streaming
- MCP connectivity (including GitHub MCP with PAT)
- Scheduling tools
- Telegram webhook integration
- Provider switching UI (Workers AI / OpenAI-compatible)
- Browser-key mode for OpenAI-compatible providers
- In-app Workers AI daily limit status with reset countdown

### Requires paid/full capabilities

- Some execution-ladder runtime features (Dynamic Workers / loader-dependent flows)
- Full execute/browser/extensions runtime behavior in production

Code paths are present, but activation depends on account plan + bindings.

---

## 11.1) OpenAI-compatible provider setup (new)

This app supports both modes:

1. **Secret mode** (`apiKeyMode = secret`)
   - Set `OPENAI_COMPAT_API_KEY` as Worker secret.
   - Good for shared/public deployment.

2. **Browser mode** (`apiKeyMode = browser`)
   - Enter API key in UI settings panel.
   - Stored in browser local storage only.
   - Good for personal/local testing.

Provider fields you can configure in UI:

- Base URL (for local or hosted OpenAI-compatible API)
- Model name
- API key mode

Important caveat (shown in UI too):

- If deployed on Cloudflare, `127.0.0.1`/`localhost` points to Cloudflare runtime, not your laptop.
- Localhost endpoints are mainly for local dev unless exposed via tunnel/public URL.

---

## 12) What commands we used during this build (for transparency)

- Scaffold/clone starter
- install deps
- `npm run types`
- `npm run check`
- `npm run deploy`
- endpoint and websocket smoke tests
- Telegram webhook info checks

Also noted errors encountered and resolved:

- compatibility flag validation issue
- paid-feature validation issue for full env

---

## 13) Suggested video flow (ready-to-record script)

## Segment A - Hook (30s)

"Most AI agents are session-based and forgetful. In this video, I will build and deploy a Cloudflare Project Think agent that stays durable, supports MCP tools, and even replies on Telegram."

## Segment B - Concept (1-2 min)

"Think of this as AI agent infrastructure. The agent has durable state, can hibernate when idle, wake on events, and scale without running a full server 24/7."

## Segment C - Honest limitations (1 min)

"On Free plan, core durable agent features work great. But full runtime execute ladder features can require paid capabilities. I will show exactly what works now and what needs upgrade."

## Segment D - Setup (3-5 min)

Show:

1. clone + install
2. wrangler login
3. run dev
4. deploy
5. set secrets

Narration:

"I am setting secrets for Telegram and GitHub MCP so the agent can safely call those services."

## Segment E - MCP demo (2-3 min)

Show:

- quick add GitHub MCP
- ask: "list my repos"
- ask: "create issue in repo X"

## Segment F - Telegram demo (2-3 min)

Show:

- set webhook in app
- send Telegram message
- receive reply
- run same repo question and show it uses same synced context/tools as web chat

## Segment G - Close (1 min)

"Now you have a durable agent backend with web + Telegram channels, MCP tools, and clear upgrade path for advanced execution capabilities."

---

## 14) Troubleshooting (public repo friendly)

### Wrangler says "Required Worker name missing"

Run commands inside project directory or pass `--config`:

```bash
cd project-think-agent
npx wrangler secret put TELEGRAM_BOT_TOKEN
```

### Telegram webhook returns 500

- `TELEGRAM_BOT_TOKEN` missing or invalid

### Telegram webhook returns 401

- secret header mismatch
- ensure the same secret is used in both places

### OpenAI-compatible provider returns auth/model errors

- verify base URL is reachable from where app runs
- verify API key mode is correct (secret vs browser)
- verify model name exists on your provider

### UI text overlap / horizontal scrolling

- fixed in this version by bounded containers, word wrapping, and internal scroll zones
- if custom content still breaks layout, capture payload and adjust markdown renderer CSS selectors

### Web can use GitHub but Telegram cannot

- now solved by shared room default
- if custom `TELEGRAM_AGENT_ROOM` is set, verify MCP was connected in that room

### GitHub MCP add fails

- PAT missing or invalid scopes

---

## 15) Security checklist for public users

- Keep tokens only in Worker secrets
- Do not log secrets
- Rotate compromised tokens immediately
- Use least privilege scopes for GitHub PAT
- Use Telegram webhook secret to validate source

### Access protection (important)

This app now enforces Cloudflare Access identity email checks by default for all non-Telegram routes.

- Required request header: `CF-Access-Authenticated-User-Email`
- Telegram webhook route remains public: `/telegram/webhook` (Telegram cannot do Access login)

Optional env controls:

- `ACCESS_EMAIL_ENFORCE` (default: `true`)
- `ACCESS_ALLOWED_EMAILS` (comma-separated exact allowlist)
- `ACCESS_ALLOWED_EMAIL_DOMAINS` (comma-separated domain allowlist)

Example:

```text
ACCESS_ALLOWED_EMAILS=you@example.com,admin@example.com
ACCESS_ALLOWED_EMAIL_DOMAINS=example.com
```

If both email and domain allowlists are set, both checks are enforced.

---

## 16) Files to point viewers to

- Agent backend logic: `src/server.ts`
- Frontend MCP/Telegram controls: `src/app.tsx`
- Worker config and routing rules: `wrangler.jsonc`

---

## 17) Final reality check

This project is already good for:

- durable chat backend
- webhook-driven automation
- MCP integrations
- Telegram support

And it is ready to scale further when paid features are enabled.

If you publish this repo, this file is enough for most users to get started without confusion.
