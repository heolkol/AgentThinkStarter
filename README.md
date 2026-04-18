# Project Think Agent

An opinionated Cloudflare **Project Think / Agents SDK** starter with a better UI, persistent memory, MCP support, Telegram integration, runtime diagnostics, and optional OpenAI-compatible provider support.

> This repo is meant to be a real starting point for durable AI agents, not just a minimal demo.

## Deploy to Cloudflare

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/heolkol/AgentThinkStarter.git)

Cloudflare's deploy button supports public GitHub/GitLab repos for Workers projects. This repo uses Workers + Durable Objects, so the button is the right deployment flow once the repo URL is real.

## What this project gives you

- **Durable AI agent backend** using `@cloudflare/think`
- **Persistent state** through Durable Objects + SQLite
- **Streaming chat UI** with improved overflow handling and responsive layout
- **MCP support** including GitHub MCP quick-connect
- **Telegram bot integration** with webhook support
- **Runtime diagnostics** for stalled messages and provider issues
- **Workers AI by default** with optional OpenAI-compatible provider support
- **Cloudflare Access-aware security model** for protecting the app UI/routes

## Current live shape of this repo

This repo is built around a `ChatAgent` Worker with:

- Workers AI model routing
- tool calling
- scheduling
- image input support
- Telegram webhook handling
- MCP server connections
- provider switching
- diagnostics/status reporting

Main files:

```text
src/
  server.ts     # Think agent, tools, Telegram, MCP, provider routing, security checks
  app.tsx       # React chat app, settings panel, diagnostics, integrations UI
  client.tsx    # React entry point
  styles.css    # Kumo + custom layout/scrollbar/message styling

wrangler.jsonc  # Worker config, Durable Object binding, env.full bindings
```

## What works on Cloudflare Free plan

- Durable agent + message persistence
- Web chat UI
- Workers AI default provider
- MCP support
- GitHub MCP via PAT
- Telegram webhook integration
- Cloudflare Access protection for the app
- OpenAI-compatible provider settings UI

## What is plan-dependent

Some execution-ladder features are coded in this repo but depend on paid/full Cloudflare capabilities:

- Dynamic Workers / loader-backed execute flows
- full browser/extension runtime in production

So this repo is useful on Free today, but some advanced execution features need upgraded platform support.

## Quick start

```bash
npm install
npx wrangler login
npm run types
npm run check
npm run dev
```

Then open the local Vite URL shown in terminal.

## Deploy

```bash
npm run deploy
```

This deploys the Worker plus the SPA frontend.

## Required/important secrets

Set these from inside the project directory:

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_WEBHOOK_SECRET
npx wrangler secret put GITHUB_MCP_PAT
npx wrangler secret put OPENAI_COMPAT_API_KEY
```

Notes:

- `TELEGRAM_BOT_TOKEN` and `TELEGRAM_WEBHOOK_SECRET` can also be stored from the UI now, but Worker secrets still take priority.
- `GITHUB_MCP_PAT` is recommended if you want GitHub MCP available without pasting PAT repeatedly.
- `OPENAI_COMPAT_API_KEY` is only needed if you want secret-based OpenAI-compatible provider mode.

## Environment/config values you may want

Optional plain env values for access control:

- `ACCESS_EMAIL_ENFORCE=true` (default behavior)
- `ACCESS_ALLOWED_EMAILS=you@example.com,other@example.com`
- `ACCESS_ALLOWED_EMAIL_DOMAINS=example.com`
- `TELEGRAM_AGENT_ROOM=default` (or custom room if you want Telegram isolated from web chat)

## Security model

### 1. Cloudflare Access for the app

This repo now enforces Cloudflare Access email identity checks by default for non-Telegram routes.

- Protected: web app / agent UI routes
- Public: `/telegram/webhook` (Telegram cannot log in through Access)

Important:

- If you enable a broad `/*` Access policy, you **must** create a separate **Bypass** rule/app for `/telegram/*`, otherwise Telegram will break.

### 2. Telegram webhook secret

Telegram webhook URL is public, so the secret token is used to verify incoming requests are really from Telegram.

Simple model:

- webhook URL = public address
- webhook secret = password in request header

### 3. Secrets precedence

For Telegram credentials:

1. Worker env secret wins
2. Stored credential from UI is fallback

That lets you test from UI, but keep production values safely in Worker secrets.

## Telegram setup

### Option A: set credentials in Cloudflare secrets

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_WEBHOOK_SECRET
```

### Option B: set from UI

In **Settings → Telegram webhook**:

- enter bot token
- enter webhook secret
- click **Save Telegram credentials**

Then configure webhook using the same panel:

- Base URL: your deployed Worker URL
- Secret: same webhook secret
- click **Set webhook**

You can also click **Get webhook info** to inspect Telegram's stored webhook state.

### Common Telegram pitfall

If Telegram stops working after enabling Cloudflare Access, your `/telegram/webhook` path is still protected by Access. Add a **Bypass** rule/app for `/telegram/*`.

## GitHub MCP setup

In **Settings → MCP servers**:

- add GitHub PAT in the GitHub field
- click **Quick add GitHub MCP**

or set `GITHUB_MCP_PAT` as Worker secret and use the same quick-add button.

What this gives you:

- GitHub tools through MCP
- repo/issue/PR workflows directly from the agent

## OpenAI-compatible provider support

This repo supports two provider modes from the UI:

- **Workers AI** (default)
- **OpenAI-compatible**

For OpenAI-compatible mode you can configure:

- base URL
- model name
- API key mode

API key modes:

- **Secret mode**: uses `OPENAI_COMPAT_API_KEY`
- **Browser mode**: stores key in browser local storage only

Important caveat:

- `localhost` / `127.0.0.1` only works for your local development flow.
- A deployed Worker cannot reach your laptop localhost unless you expose it with a tunnel/public URL.

## UI improvements already included

Compared to the original starter, this repo already includes:

- responsive header/settings layout
- overflow-safe message rendering
- code block/table/tool output containment
- custom thin scrollbar styling
- theme-aware user bubbles
- runtime status banner
- diagnostics capture button
- stalled response detection toast

## Runtime diagnostics

If a message appears stuck or fails silently:

1. Open **Settings → Runtime status**
2. Click **Send diagnostics**
3. The app collects client + server snapshot data and copies it to clipboard

This is useful for debugging:

- provider misconfiguration
- MCP issues
- Workers AI limit errors
- stalled stream behavior

## Workers AI usage status note

This repo does **not** claim exact remaining neuron balance because Cloudflare Worker runtime does not expose that directly to this app.

Instead, status is shown as:

- `ok`
- `limit-exceeded`
- `unknown`

based on actual recent runtime behavior and errors.

## Cloudflare Access setup summary

To secure the app:

1. Create a Cloudflare Access application for your Worker hostname
2. Add One-time PIN or your IdP as login method
3. Create **Allow** policy for your email/domain
4. Create separate **Bypass** app/rule for `/telegram/*`

Without the Telegram bypass, the bot webhook will redirect to Access login and fail.

## Public release checklist

Before publishing this repo:

- [ ] Replace deploy-button placeholder URL in README
- [ ] Update repo/package identity if you do not want `agent-starter` naming in `package.json`
- [ ] Verify Telegram bypass path in Cloudflare Access
- [ ] Confirm Worker secrets are not committed
- [ ] Run `npm run check`
- [ ] Test deploy on a fresh Cloudflare account if this is for a public audience

## Scripts

```bash
npm run dev
npm run types
npm run format
npm run lint
npm run check
npm run deploy
```

## Known caveats

- Full execution-ladder production behavior is plan-dependent
- Telegram breaks if Access catches `/telegram/*`
- Exact Workers AI remaining neurons are not available in-app
- Deploy button requires a **real public repo URL**

## More context

This repo also includes a deeper long-form guide:

- [`videoscripthelper.md`](./videoscripthelper.md)

That file is useful if you are making a tutorial/video or want the full transparent walkthrough.

## License

MIT
