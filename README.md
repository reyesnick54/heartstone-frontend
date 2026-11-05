# HeartStone Frontend

Shared front-end platform for HeartStone, the sovereign Digital Government Operating System.
One repository, one design system, persona-specific web applications, all running against the
HeartStone backend as the sole system of record.

> **Status: F3 citizen core + F4 citizen transactions.** The design system, the typed backend
> client and the sign-in gateway exist. The citizen app is a routed dashboard on the real API:
> home, find a service and apply, applications with case progress, appointments, documents,
> credentials, payments, messages, renewals, the "My government" hubs, help and public document
> verification. Capabilities the backend does not offer yet (appeals, profile and settings
> changes, document upload) are shown as "not available yet". The other apps are demo shells. No
> government service is live or operational from this repository.

## Structure

```
apps/
  citizen/      Citizen and resident experience (mobile-first)
  government/   Government official workstation (desktop-first)
  executive/    Executive government command centre
  admin/        Governed platform administration
  prototype/    Clickable prototype: website + dashboard designs as one site (behind Access)
packages/
  config/       Shared strict TypeScript configuration
  tokens/       Design tokens: brand palette, themes, type, spacing, tokens.css (+ contrast test)
  ui/           Accessible React components built on the tokens (see packages/ui/README.md)
  api-client/   Backend OpenAPI contract, generated types, typed client, error kinds, React hooks
  gateway/      App Worker gateway: OIDC sign-in (PKCE), encrypted session cookie, /api proxy
docs/
  deployment.md Cloudflare Workers deployment and access control
design/
  brand/        Logo files
  citizen/      Citizen dashboard designs (static reference), backend coverage map
  website/      Public website designs (static reference)
```

`design/` holds reference material, not production code. Open `design/citizen/index.html` in a
browser to click through the citizen designs, and `design/website/index.html` for the public
website; see `design/README.md`.

Further packages (`permissions`, `forms`, …) are added in the stage that introduces them, per the
Front-End Build Plan (29 Sep 2026). They are not created empty in advance.

## Backend API

Every app talks only to its own origin. The app's Worker (`@heartstone/gateway`) signs people in
with the identity provider, keeps the backend session token in an encrypted httpOnly cookie, and
forwards `/api/*` to the backend. Browser code never holds a token. See
[docs/deployment.md](docs/deployment.md#gateway-sign-in-and-the-api-proxy).

```tsx
// main.tsx
import { ApiProvider } from "@heartstone/api-client/react";
<ApiProvider>
  <App />
</ApiProvider>;

// a component
import { unwrap, loginUrl } from "@heartstone/api-client";
import { useApi, useSession } from "@heartstone/api-client/react";
const client = useApi();
const { state, signOut } = useSession(); // loading | authenticated | unauthenticated | error
const me = await unwrap(client.GET("/experience/citizen/me")); // typed from the contract
```

`unwrap` throws `HeartStoneApiError` with a `kind`: `unauthenticated`, `forbidden`, `not-found`,
`conflict`, `validation` (with `fieldErrors`), `safe-halt`, `step-up-required`, `rate-limited`,
`server` or `network`. GET is retried once on a network failure; mutations never are.

**Types come from the backend contract.** `packages/api-client/openapi/openapi.json` is a copy of
`heartstone-backend/openapi/openapi.json`; `openapi/SOURCE` records the commit and hash. To pick up
backend changes:

```sh
pnpm --filter @heartstone/api-client sync-contract        # backend main (or pass a ref/SHA)
```

That pulls the contract over git (no token needed), regenerates `src/generated/schema.ts`, and
both files are committed. Never edit either by hand: CI fails if the generated file does not match
the contract.

## Citizen app

`apps/citizen` is a single-page app. `src/routes.tsx` lists every page; `src/router/router.tsx`
is a ~150-line History API router (path patterns, link interception, back/forward, focus moved to
the new page's `h1`). It is used instead of react-router because the app needs none of its data
or layout APIs, and it keeps ~20 kB gzipped out of the bundle. The Worker serves `index.html` for
unknown paths, so deep links work.

Data goes through `src/lib/query.ts`: `useQuery` (abort on unmount, `reload` for "Try again") and
`useMutation` (runs once, never retried). Every `HeartStoneApiError.kind` has its own message in
`src/components/ApiErrorNotice.tsx`. Links are only rendered to pages that exist in the build.

## Stack

TypeScript (strict) · React · Vite · pnpm workspaces · Turborepo · Vitest + Testing Library ·
ESLint (incl. `jsx-a11y`) · Prettier · Cloudflare Workers static assets.

## Getting started

Requires Node 22 and pnpm (`corepack enable`).

```sh
pnpm install
pnpm dev                                   # all apps
pnpm --filter @heartstone/citizen dev      # one app → http://localhost:5173
pnpm check                                 # format, lint, typecheck, test, build
```

Dev ports: citizen 5173 · government 5174 · executive 5175 · admin 5176 · prototype 8787
(`pnpm --filter @heartstone/prototype preview`).

## Rules that hold from day one

- **The frontend never decides authority.** It may guide, hide, disable and explain actions; the
  backend enforces every permission, authority and record-access rule.
- **No invented domain model.** Types come from the backend OpenAPI contract (`sync-contract`). If
  an API is missing, record the dependency rather than building a frontend-only source of truth.
- **No status without evidence.** Never label anything signed, issued, approved, live or
  operational unless the backend returned that state.
- **One bounded capability per branch and pull request**, merged only from a green `main`.
  Branch names: `feat/design-system-foundation`, `feat/citizen-service-catalog`, …
- **No secrets in the repository.** See `docs/deployment.md`.

## Build stages

F0 repository + CI + Cloudflare ✓ · F1 design system ✓ · F2 API + identity foundation ✓ · F3 citizen core ✓
· F4 citizen transactions ✓ · F5 business/investor · F6 government official · F7 manager + executive
· F8 administration · F9 healthcare · F10 hardening + pilot verticals.
