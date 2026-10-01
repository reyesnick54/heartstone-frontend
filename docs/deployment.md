# Deployment — Cloudflare Workers

Each persona app deploys as its own Cloudflare Worker serving static assets. There is no Worker
script and no server-side logic in the frontend. HeartStone backend remains the sole system of
record (Build Plan §16).

| App        | Worker name             | Root directory    |
| ---------- | ----------------------- | ----------------- |
| Citizen    | `heartstone-citizen`    | `apps/citizen`    |
| Government | `heartstone-government` | `apps/government` |
| Executive  | `heartstone-executive`  | `apps/executive`  |
| Admin      | `heartstone-admin`      | `apps/admin`      |

## How deployment works

Deployment uses **Workers Builds** (Cloudflare's GitHub integration), not GitHub Actions.
Cloudflare builds directly from the repository, so **no Cloudflare API token is stored in GitHub**.

- Push to `main` → production deploy of each Worker.
- Push to any other branch → a **Preview** with its own URL, posted on the pull request.
- GitHub Actions (`.github/workflows/ci.yml`) runs the quality gates and is the required check.

## One-time setup (Cloudflare dashboard), repeat per app

1. **Workers & Pages → Create → Import a repository** → select `heartstone-frontend`.
2. Worker name: from the table above (must match `wrangler.jsonc`).
3. **Root directory:** from the table above.
4. **Build command:** `pnpm turbo run build --filter=@heartstone/<app>` (e.g. `@heartstone/citizen`).
5. **Deploy command:** leave the default (`npx wrangler deploy`).
6. **Settings → Build → Branch control:** production branch `main`; enable **Preview builds**.
7. Set build environment variable `NODE_VERSION=22`.

## Access control (required before sharing any URL)

The design build is reachable on `*.workers.dev` and Preview URLs. Before anyone outside the
team receives a link:

1. Worker **Settings → Domains & Routes**: enable **Cloudflare Access** on the `workers.dev`
   route and on Preview URLs.
2. Restrict the Access policy to named people or an identity-provider group. Do not use
   "everyone with an email".
3. When the approved custom domain is attached, set `"workers_dev": false` in that app's
   `wrangler.jsonc`, and protect the custom domain with Access until public launch is authorized.

The admin and executive apps should stay behind Access permanently, in addition to backend
authentication. Access is a perimeter control, not a substitute for backend authorization.

## Environments

| Environment | Source                       | Status                                   |
| ----------- | ---------------------------- | ---------------------------------------- |
| Preview     | every non-`main` branch / PR | Configured by F0                         |
| Production  | `main`                       | Configured by F0, placeholder content    |
| Staging     | dedicated branch or Worker   | Not yet. Added with staging backend (F2) |

## Secrets

Never commit Cloudflare tokens, SSO secrets, backend credentials, API keys, signing material or
production configuration. Runtime values go in the Worker's dashboard variables/secrets, and
preview-specific values in Preview settings. `.env*` and `.dev.vars*` are git-ignored.

## Security headers

Each app ships `public/_headers` with a strict CSP (`'self'` only), `frame-ancestors 'none'`,
HSTS and `noindex`. When F2 introduces the backend API, add its origin to `connect-src` only.
