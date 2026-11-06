# Deployment — Cloudflare Workers

Each persona app deploys as its own Cloudflare Worker: static assets plus the HeartStone gateway
(`packages/gateway`, F2), which handles sign-in and forwards `/api/*` to the backend. The gateway
holds no government data and makes no decisions: the HeartStone backend remains the sole system
of record and enforces every permission and authority rule (Build Plan §16). The prototype and
presentation sites remain static, with no Worker script.

| App          | Worker name               | Root directory      |
| ------------ | ------------------------- | ------------------- |
| Citizen      | `heartstone-citizen`      | `apps/citizen`      |
| Government   | `heartstone-government`   | `apps/government`   |
| Executive    | `heartstone-executive`    | `apps/executive`    |
| Admin        | `heartstone-admin`        | `apps/admin`        |
| Prototype    | `heartstone-frontend`     | `apps/prototype`    |
| Presentation | `heartstone-presentation` | `apps/presentation` |

`heartstone-frontend` (in `apps/prototype`) is the clickable design prototype: the public website and citizen dashboard
designs from `design/`, served as one site. It has no real authentication, so it must always sit
behind Cloudflare Access. Setup is in [Prototype site](#prototype-site-step-by-step) below.

## How deployment works

Preview and production deployment uses **Workers Builds** (Cloudflare's GitHub integration).
Cloudflare builds directly from the repository, with no Cloudflare API token in GitHub.

**Staging is the exception:** `.github/workflows/deploy-staging.yml` deploys all four gateway apps
with one scoped Cloudflare API token, so staging needs no per-app dashboard setup. See
[Staging](#staging).

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

| Environment | Source                       | Status                                                    |
| ----------- | ---------------------------- | --------------------------------------------------------- |
| Preview     | every non-`main` branch / PR | Configured by F0. Sign-in off unless gateway vars are set |
| Production  | `main`                       | Configured by F0. Sign-in off until gateway vars are set  |
| Staging     | `main`, after CI passes      | `*-staging` Workers on `staging*.heartstone.site` (below) |

Without the [gateway variables](#gateway-sign-in-and-the-api-proxy), an app still serves its
pages, but sign-in and `/api/*` fail closed: `/api/*` and `/auth/session` answer 503, and "Sign in"
returns to the app with "Sign-in is not available right now".

## Staging

Staging runs against the Render staging backend and Keycloak (backend repo,
`docs/operations/render-staging.md`). Synthetic data only.

| App        | Worker                          | Address                                 |
| ---------- | ------------------------------- | --------------------------------------- |
| Citizen    | `heartstone-citizen-staging`    | `https://staging.heartstone.site`       |
| Government | `heartstone-government-staging` | `https://staging-gov.heartstone.site`   |
| Executive  | `heartstone-executive-staging`  | `https://staging-exec.heartstone.site`  |
| Admin      | `heartstone-admin-staging`      | `https://staging-admin.heartstone.site` |

**How it deploys.** When CI passes on `main`, the workflow:

1. Checks that one Cloudflare Access application, "HeartStone staging (synthetic data)", covers all
   four addresses and has an allow policy, and creates it on first run
   (`scripts/ensure-staging-access.mjs`). If this fails, nothing is deployed.
2. Builds each app and runs `wrangler deploy --env staging`. The `env.staging` block in each
   `wrangler.jsonc` sets the custom domain (Cloudflare creates the DNS record and certificate) and
   the gateway variables. `workers_dev` and Preview URLs are off for staging.
3. Creates `SESSION_COOKIE_KEY` as a Worker secret if it does not exist yet, from
   `openssl rand -base64 32` inside the job. It is never printed or stored anywhere else.

It can also be run by hand: **Actions → Deploy staging → Run workflow**.

**One-time setup:**

1. Cloudflare: **My Profile → API Tokens → Create Token → "Edit Cloudflare Workers"** template.
   Add the permission **Account → Access: Apps and Policies → Edit**. Under Zone Resources choose
   **Specific zone → heartstone.site**, and under Account Resources the HeartStone account.
2. GitHub: **heartstone-frontend → Settings → Secrets and variables → Actions → New repository
   secret**, name `CLOUDFLARE_API_TOKEN`, paste the token.
3. Optional repository variables: `STAGING_ACCESS_EMAIL_DOMAIN` (default `abraxas-eu.com`),
   `STAGING_ACCESS_EMAILS` (comma-separated named testers), and `CLOUDFLARE_ACCOUNT_ID` if the
   token can see more than one account.

**Sign-in.** All four apps use the Keycloak public client `heartstone-web` (PKCE S256). Keycloak's
allowed redirect URIs are fixed when the realm is first imported, from `HEARTSTONE_WEB_ORIGINS` on
the Keycloak service. To add an address later, add `https://<host>/auth/callback` to the client in
the Keycloak admin console as well as updating that variable.

## absez.org

The ABSEZ deployment. `.github/workflows/deploy-absez.yml` deploys it after CI passes on `main`
(or by hand: **Actions → Deploy absez.org → Run workflow**), using the `env.absez` block in each
app's `wrangler.jsonc`.

| App        | Worker                        | Address                   | Who can open it        |
| ---------- | ----------------------------- | ------------------------- | ---------------------- |
| Citizen    | `heartstone-citizen-absez`    | `https://absez.org`       | Everyone               |
| Government | `heartstone-government-absez` | `https://gov.absez.org`   | Cloudflare Access only |
| Executive  | `heartstone-executive-absez`  | `https://exec.absez.org`  | Cloudflare Access only |
| Admin      | `heartstone-admin-absez`      | `https://admin.absez.org` | Cloudflare Access only |

The citizen site is public by the product owner's decision. It still talks to the Render
staging backend (synthetic-data tier, US region), so the tenant's development-build banner stays
on until a production backend in the approved region exists. The internal apps sit behind the
"ABSEZ internal apps" Access application, checked before every deploy.

Prerequisites: `absez.org` is an active zone in the same Cloudflare account, the
`CLOUDFLARE_API_TOKEN` includes that zone, and Keycloak's `HEARTSTONE_WEB_ORIGINS` lists the four
`https://…absez.org` origins (so their `/auth/callback` redirect URIs are allowed).

## Secrets

Never commit Cloudflare tokens, SSO secrets, backend credentials, API keys, signing material or
production configuration. Runtime values go in the Worker's dashboard variables/secrets, and
preview-specific values in Preview settings. `.env*` and `.dev.vars*` are git-ignored.

## Security headers

Each app ships `public/_headers` with a strict CSP (`'self'` only), `frame-ancestors 'none'`,
HSTS and `noindex`. `connect-src` stays `'self'`: browsers call `/api/*` and `/auth/*` on the
app's own origin, and the gateway forwards to the backend, so the backend origin never appears in
the CSP. `_headers` applies to static assets; gateway responses set `Cache-Control: no-store`,
`X-Content-Type-Options: nosniff` and `Referrer-Policy: no-referrer` themselves.

## Gateway: sign-in and the API proxy

The citizen, government, executive and admin Workers run `worker/index.ts`, which calls
`handleGatewayRequest` from `@heartstone/gateway`. `wrangler.jsonc` sets
`"run_worker_first": ["/api/*", "/auth/*"]`, so only those paths run the Worker; every other path
is a static asset served without running code.

| Route                           | What it does                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET /auth/login?returnTo=/`    | OIDC discovery, then a redirect to the provider (Authorization Code + PKCE S256, `state`, `nonce`). `returnTo` must be a same-origin path; anything else becomes `/`. `&reauth=1` forces a fresh sign-in (step-up).                                                                                                                                                       |
| `GET /auth/register?returnTo=/` | Same as `/auth/login` (discovery, PKCE S256, `state`, `nonce`, encrypted transaction cookie, same callback), but opens the provider's self-registration page. Keycloak (issuer path contains `/realms/`): `<issuer>/protocol/openid-connect/registrations` with the same query. Any other provider: the authorization endpoint with `prompt=create`. `reauth` is ignored. |
| `GET /auth/callback`            | Checks `state`, exchanges the code, checks the ID token's `iss`/`aud`/`exp`/`nonce`, calls backend `POST /api/v1/identity/auth/login/oidc` with `{ accessToken, providerCode }`, sets the session cookie, redirects to `returnTo`. Failures return to `/?signin_error=cancelled\|expired\|failed\|not-linked\|unavailable`.                                               |
| `GET /auth/session`             | `{ authenticated, expiresAt?, identityId? }`. Never the token.                                                                                                                                                                                                                                                                                                            |
| `POST /auth/logout`             | Needs `X-HeartStone-CSRF: 1` and a same-origin `Origin`/`Sec-Fetch-Site`. Calls backend `POST /api/v1/identity/auth/logout` with the bearer token, clears the cookie, returns 204.                                                                                                                                                                                        |
| `GET /auth/logout/redirect`     | Redirects to the provider's `end_session_endpoint`, when discovery advertises one, then back to `/`.                                                                                                                                                                                                                                                                      |
| `/api/*`                        | Forwards to `BACKEND_ORIGIN` + the same path and query, streaming the body. Adds `Authorization: Bearer <session token>` from the cookie. Details below.                                                                                                                                                                                                                  |

**Session cookie.** The backend session token is kept only in `__Host-hs_session`: AES-256-GCM
encrypted, `HttpOnly; Secure; SameSite=Lax; Path=/`, and `Max-Age` of 12 hours from sign-in (the
backend's absolute limit). The backend also ends sessions after 30 minutes idle or on revocation;
the next API call then gets a 401 and the gateway clears the cookie. The sign-in transaction
(state, nonce, PKCE verifier, `returnTo`) is in a separate encrypted `__Host-hs_oidc` cookie that
lasts 10 minutes. Browser JavaScript never sees a token, and the gateway never logs tokens, codes
or cookie values.

**The `/api/*` proxy:**

- `POST`, `PUT`, `PATCH` and `DELETE` need `X-HeartStone-CSRF: 1` (the API client adds it), and
  `Origin` and `Sec-Fetch-Site` must be same-origin (at least one present). Any cross-site request,
  including a `GET`, is refused with 403.
- Only an allow-list of request headers is forwarded (`Accept`, `Content-Type`, `Idempotency-Key`,
  `If-Match`, …). The browser's `Cookie` and any client `Authorization` are dropped.
- `X-Correlation-Id` is forwarded (or generated) and returned on the response. `X-Forwarded-For`
  (from `CF-Connecting-IP`), `X-Forwarded-Proto` and `X-Forwarded-Host` are set.
- A backend 401 clears the session cookie, except a step-up 401 (the session is still valid; the
  user signs in again with `reauth=1`).
- Backend `Set-Cookie` and hop-by-hop headers are dropped. Nothing is retried.
- `/api/v1/identity/auth/login*` is blocked: those routes return a session token in the body, so
  only the gateway calls them.

### Worker variables and secrets

Set these per Worker (and per environment) in **Workers & Pages → the Worker → Settings →
Variables and Secrets**. `"keep_vars": true` in `wrangler.jsonc` keeps a deploy from removing
them. Use **Secret** for the secret ones.

| Name                          | Type     | Required | Value                                                                                                                 |
| ----------------------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| `BACKEND_ORIGIN`              | Variable | Yes      | Backend origin, `https://…`, no path (the gateway adds `/api/v1/…`).                                                  |
| `OIDC_ISSUER`                 | Variable | Yes      | Issuer URL, exactly as in the provider's discovery document (Keycloak: `https://<host>/realms/<realm>`).              |
| `OIDC_CLIENT_ID`              | Variable | Yes      | The app's client id at the provider, e.g. `heartstone-citizen`.                                                       |
| `OIDC_CLIENT_SECRET`          | Secret   | No       | For a confidential client (sent with `client_secret_basic`). Omit for a public client: PKCE still applies.            |
| `OIDC_PROVIDER_CODE`          | Variable | No\*     | The provider's `code` in the backend's `OIDC_PROVIDERS_JSON`. \*Required when the backend has more than one provider. |
| `OIDC_REDIRECT_URI`           | Variable | No       | Defaults to `<request origin>/auth/callback`. Set it when the app has one canonical hostname.                         |
| `SESSION_COOKIE_KEY`          | Secret   | Yes      | Base64 of 32 random bytes: `openssl rand -base64 32`. Different for every Worker and environment.                     |
| `SESSION_COOKIE_KEY_PREVIOUS` | Secret   | No       | During key rotation only (below).                                                                                     |

If any required value is missing or invalid, the gateway logs the variable names (never values)
and fails closed.

**Rotating `SESSION_COOKIE_KEY`:** set `SESSION_COOKIE_KEY_PREVIOUS` to the current key and
`SESSION_COOKIE_KEY` to a new one, and deploy. Cookies sealed with the old key are still accepted
and are re-sealed with the new key on the next request. After 12 hours (the cookie's maximum life),
delete `SESSION_COOKIE_KEY_PREVIOUS`. To sign everyone out at once instead (suspected key
compromise), replace `SESSION_COOKIE_KEY` without setting the previous key, and revoke backend
sessions.

### Identity provider and backend settings (Keycloak)

The gateway works with any OIDC provider through discovery. For Keycloak, per app:

1. **Client:** OpenID Connect, Standard flow on, Implicit flow and Direct access grants off. Client
   authentication on (confidential, set `OIDC_CLIENT_SECRET`) or off (public). **Advanced → Proof
   Key for Code Exchange Code Challenge Method: S256.**
2. **Valid redirect URIs:** `https://<app host>/auth/callback` for each hostname the app is served
   on. **Valid post logout redirect URIs:** `https://<app host>/`. **Web origins:** none needed (no
   browser CORS).
3. **Audience:** the backend checks that the access token's `aud` equals its provider `audience`.
   Add an **Audience** mapper to the client (or a client scope assigned to it) with "Included
   Client Audience" (or "Included Custom Audience") set to the backend's audience and "Add to
   access token" on. Check a real token's `aud` before go-live.
4. **MFA:** the backend reads MFA from the access token's `amr` (`mfa`, `otp`, `hwk`, `sms`,
   `pin`) or an `acr` containing `mfa`/`multi`. Configure the realm's authentication flow and
   token mappers so an MFA sign-in emits one of these; otherwise the session is recorded without
   MFA and MFA-protected routes answer with a step-up 401.
5. **Self-registration ("Get a digital ID" → `/auth/register`):** Realm settings → Login → **User
   registration** on, **Verify email** on (and the realm's SMTP settings filled in), so a new
   account proves its email before it can sign in. Without User registration, Keycloak answers the
   registrations URL with an error page. Also turn on **Forgot password**: the website's "Help
   with signing in" page tells people to use it. The backend provider entry must also enable
   `provisioning.citizenSelfService` (below), or the new account gets "We could not find your
   account". Only enable this on the citizen client's realm.
6. **Hostname:** the issuer in tokens must equal `OIDC_ISSUER` and the backend's `issuer`, so fix
   Keycloak's public hostname (`KC_HOSTNAME`).

Backend (`heartstone-backend`) configuration for the same provider:

- `OIDC_ENABLED=true` and an `OIDC_PROVIDERS_JSON` entry: `code` (= `OIDC_PROVIDER_CODE`),
  `issuer` (= `OIDC_ISSUER`), `audience` (= the Audience mapper value), `jwksUri`
  (`<issuer>/protocol/openid-connect/certs` for Keycloak), `allowedAlgorithms` (e.g. `["RS256"]`).
- Every person must already have a linked OIDC credential (provider code + the provider's `sub`),
  unless the provider entry opts in to citizen self-service:
  `"provisioning": { "citizenSelfService": true }`. Then the first sign-in of an unknown subject
  creates a basic self-service identity (profile claims recorded as self-asserted; identity not
  proven). The backend never links by email. An unlinked sign-in without self-service returns to
  the app with "We could not find your account".
- Keep CORS off: browsers never call the backend directly.
- The gateway sends one `X-Forwarded-For` hop. With `trustProxy` on, check the backend's proxy
  hop count matches what sits between the Worker and the backend.

Preview URLs change per branch, so each would need its own redirect URI. Leave the gateway
variables unset on Preview (sign-in stays off there) and test sign-in on a staging Worker with a
fixed hostname.

### Local development

`pnpm --filter @heartstone/citizen dev` runs Vite only, with no gateway, so the page reports that
it could not check the session. To run the real Worker:

```sh
cp apps/citizen/.dev.vars.example apps/citizen/.dev.vars   # fill in; .dev.vars is git-ignored
pnpm --filter @heartstone/citizen preview:worker           # vite build && wrangler dev → :8787
```

`__Host-` cookies need a secure context; browsers treat `http://localhost` as one. Each app has a
`deploy:check` script (`wrangler deploy --dry-run`), which CI runs for all four Worker apps.

## Prototype site: step by step

The prototype is `apps/prototype`. Its build copies the pages in `design/` into one site and
rewrites every link, so the journey works end to end:

| Address                 | Page                                                    |
| ----------------------- | ------------------------------------------------------- |
| `/`                     | Website home                                            |
| `/services`, `/help`, … | Website pages                                           |
| `/sign-in`              | Sign in. "Continue with digital ID" opens the dashboard |
| `/dashboard/`           | Citizen dashboard home                                  |
| `/dashboard/<page>`     | Dashboard pages. "Sign out" returns to `/signed-out`    |
| `/overview`             | Redirects to the presentation site (below)              |

**The prototype's "Sign in" checks nobody**, and every visitor sees the same sample data. The real
sign-in is Cloudflare Access, which decides who can open the site at all. The pages also say "An
official website of the Government of Antigua and Barbuda", so the site must never be reachable
without Access until that wording and a public launch are approved.

Try it locally first: `pnpm --filter @heartstone/prototype preview`, then open http://localhost:8787.

### Step 1: Create the Worker from GitHub (about 5 minutes)

1. Sign in to the Cloudflare dashboard and open **Workers & Pages**.
2. Select **Create** → **Import a repository** (under "Workers").
3. Connect GitHub if asked, and allow access to `reyesnick54/heartstone-frontend`. Select it.
4. Fill in the settings exactly:
   - **Project name:** `heartstone-frontend` (matches `apps/prototype/wrangler.jsonc`)
   - **Production branch:** `main`
   - **Root directory** (under Advanced settings): `apps/prototype`
   - **Build command:** `node scripts/build.mjs` (needs only Node, no pnpm)
   - **Deploy command:** leave as `npx wrangler deploy`
   - **Build variables:** add `NODE_VERSION` = `22`
5. Select **Create and deploy**. The first build takes a few minutes.
6. When it says **Success**, the Worker has an address ending in `workers.dev`. **Don't share it
   yet**: step 2 locks it.

### Step 2: Lock the whole Worker behind Cloudflare Access (about 5 minutes)

Do this before anyone else gets a link.

1. In **Workers & Pages**, open `heartstone-frontend` and select the **Access** tab.
2. Select **Protect this Worker behind Access**, then **All traffic**. This covers the
   `workers.dev` address, preview links and any custom domain added later.
3. Under **Authentication policy**, choose who may sign in:
   - Named people: add each person's email address. Each gets a one-time code by email, or signs
     in with their Cloudflare account.
   - Or a whole organization: **Email domain**, for example `abraxas-eu.com`.
   - Avoid "anyone with an email address".
4. Select **Apply Access**.
5. Check it: open the `workers.dev` address in a private browser window. You should see the
   Cloudflare Access sign-in page first, then the HeartStone website.

### Step 3: Put it on your domain (about 10 minutes, plus DNS time)

1. The domain must be managed in this Cloudflare account. If it isn't: **Add a domain** on the
   dashboard home, choose the Free plan, and change the domain's nameservers at your registrar to
   the two Cloudflare gives you. This can take from minutes to a day.
2. Open `heartstone-frontend` → **Settings** → **Domains & Routes** → **Add** → **Custom
   Domain**.
3. Enter a hostname that doesn't exist yet, for example `prototype.yourdomain.com`, and select
   **Add Custom Domain**. Cloudflare creates the DNS record and the security certificate itself.
4. Open the new address in a private window and confirm Access asks you to sign in first. If it
   doesn't, go back to step 2 and check **All traffic** is selected.
5. Once the custom domain works, turn off the `workers.dev` address: set `"workers_dev": false` in
   `apps/prototype/wrangler.jsonc` and merge to `main`.

### Step 4: Walk the journey

On a phone and a computer:

1. Open the site and pass Cloudflare Access.
2. Browse: the three doors, life events, topics, find an office, a service page.
3. Select **Sign in** → **Continue with [NATIONAL DIGITAL ID]** → the dashboard opens.
4. Use the dashboard: applications, payments, documents, messages, "My government".
5. Select **Sign out** → the website's signed-out page → **Sign in again**.

### After setup

- Every merge to `main` that changes `design/` or `apps/prototype/` redeploys the site within a few
  minutes. To change a page, edit the design canvas, re-export to `design/`, and merge.
- Pull requests get their own preview link, also behind Access.
- Optional: in **Settings** → **Build** → **Build watch paths**, include `design/**` and
  `apps/prototype/**`, so changes to the other apps don't rebuild the prototype.
- When the real React website and dashboard exist (Build Plan F3–F4), the custom domain moves from
  `heartstone-frontend` (the prototype) to `heartstone-citizen`.

## Presentation site: step by step

`apps/presentation` is the HeartStone overview presentation: one static page in `public/`, with no
build step. It deploys as its own Worker, `heartstone-presentation`, on `present.heartstone.site`,
so its access rules can differ from the prototype's (for example, open to invited investors while
the prototype stays restricted). The old `heartstone.site/overview` link redirects to it.

To update the presentation, replace `apps/presentation/public/index.html` and merge to `main`.

### Step 1: Create the Worker from GitHub

1. **Workers & Pages** → **Create** → **Import a repository** → `reyesnick54/heartstone-frontend`.
2. Settings:
   - **Project name:** `heartstone-presentation`
   - **Production branch:** `main`
   - **Root directory:** `apps/presentation`
   - **Build command:** leave empty (there is nothing to build)
   - **Deploy command:** `npx wrangler deploy`
   - **Build variables:** `NODE_VERSION` = `22`
3. **Create and deploy**, and wait for **Success**.
4. Optional: **Settings** → **Build** → **Build watch paths** → include `apps/presentation/**`, so
   changes elsewhere in the repo don't redeploy it.

### Step 2: Decide who can open it

- **Restricted:** **Access** tab → **Protect this Worker behind Access** → **All traffic** → add the
  allowed emails or email domain → **Apply Access**.
- **Public:** leave Access off. The page contains design screenshots that read "An official website
  of the Government of Antigua and Barbuda", so only make it public once that wording is approved
  or the screenshots are replaced.

### Step 3: Attach present.heartstone.site

1. `heartstone-presentation` → **Domains** → **Add Domain** → enter `present.heartstone.site` →
   **Add Domain**. Cloudflare creates the DNS record and certificate.
2. If Cloudflare reports a conflict with `*.heartstone.site`: that wildcard comes from Preview URLs
   on the `heartstone-frontend` Worker's custom domain. Move those previews to a dedicated
   hostname such as `previews.heartstone.site`, or turn previews off for the custom domain, then
   add `present.heartstone.site` again.
3. Open `https://present.heartstone.site` in a private window to check it (and the Access login
   first, if you chose Restricted).
