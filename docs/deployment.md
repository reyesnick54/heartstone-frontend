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
| Prototype  | `heartstone-prototype`  | `apps/prototype`  |

`heartstone-prototype` is the clickable design prototype: the public website and citizen dashboard
designs from `design/`, served as one site. It has no real authentication, so it must always sit
behind Cloudflare Access. Setup is in [Prototype site](#prototype-site-step-by-step) below.

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
   - **Project name:** `heartstone-prototype` (must match `apps/prototype/wrangler.jsonc`)
   - **Production branch:** `main`
   - **Root directory** (under Advanced settings): `apps/prototype`
   - **Build command:** `pnpm run build`
   - **Deploy command:** leave as `npx wrangler deploy`
   - **Build variables:** add `NODE_VERSION` = `22`
5. Select **Create and deploy**. The first build takes a few minutes.
6. When it says **Success**, the Worker has an address ending in `workers.dev`. **Don't share it
   yet**: step 2 locks it.

### Step 2: Lock the whole Worker behind Cloudflare Access (about 5 minutes)

Do this before anyone else gets a link.

1. In **Workers & Pages**, open `heartstone-prototype` and select the **Access** tab.
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
2. Open `heartstone-prototype` → **Settings** → **Domains & Routes** → **Add** → **Custom
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
  `heartstone-prototype` to `heartstone-citizen`.
