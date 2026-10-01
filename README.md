# HeartStone Frontend

Shared front-end platform for HeartStone, the sovereign Digital Government Operating System.
One repository, one design system, persona-specific web applications, all running against the
HeartStone backend as the sole system of record.

> **Status: F0 baseline.** The apps are placeholders. No government service is live or
> operational from this repository.

## Structure

```
apps/
  citizen/      Citizen and resident experience (mobile-first)
  government/   Government official workstation (desktop-first)
  executive/    Executive government command centre
  admin/        Governed platform administration
packages/
  config/       Shared strict TypeScript configuration
docs/
  deployment.md Cloudflare Workers deployment and access control
design/
  brand/        Logo files
  citizen/      Citizen screen designs (static reference), backend coverage map
```

`design/` holds reference material, not production code. Open `design/citizen/index.html` in a
browser to click through the citizen designs; see `design/README.md`.

Further packages (`ui`, `design-system`, `api-client`, `auth`, `permissions`, `forms`, …) are
added in the stage that introduces them, per the Front-End Build Plan (29 Sep 2026). They are not
created empty in advance.

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

Dev ports: citizen 5173 · government 5174 · executive 5175 · admin 5176.

## Rules that hold from day one

- **The frontend never decides authority.** It may guide, hide, disable and explain actions; the
  backend enforces every permission, authority and record-access rule.
- **No invented domain model.** Types come from the backend OpenAPI contract (F2). If an API is
  missing, record the dependency rather than building a frontend-only source of truth.
- **No status without evidence.** Never label anything signed, issued, approved, live or
  operational unless the backend returned that state.
- **One bounded capability per branch and pull request**, merged only from a green `main`.
  Branch names: `feat/design-system-foundation`, `feat/citizen-service-catalog`, …
- **No secrets in the repository.** See `docs/deployment.md`.

## Build stages

F0 repository + CI + Cloudflare · F1 design system · F2 API + identity foundation · F3 citizen core
· F4 citizen transactions · F5 business/investor · F6 government official · F7 manager + executive
· F8 administration · F9 healthcare · F10 hardening + pilot verticals.
