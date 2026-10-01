# Design reference

Design source material for HeartStone front-end work. Everything here is **reference, not
production code**. The applications in `apps/` are built from these designs, using the shared
design system (Build Plan stage F1) and the generated backend API client (F2).

## Contents

| Path                            | What it is                                                                               |
| ------------------------------- | ---------------------------------------------------------------------------------------- |
| `brand/logo/`                   | HeartStone logo files (see below)                                                        |
| `citizen/index.html`            | Catalogue of every citizen screen, with its readiness status                             |
| `citizen/pages/`                | 41 static screens: the citizen dashboard pages 1–40 plus the mobile Home design          |
| `citizen/backend-coverage.html` | Every dashboard feature mapped to its `heartstone-backend` endpoint and launch readiness |
| `website/index.html`            | Catalogue of every public website page (W1–W27)                                          |
| `website/pages/`                | 27 static, responsive pages: the signed-out public website                               |

Open `citizen/index.html` in a browser. Links between pages work, so the main journeys can be
clicked through locally: find a service → apply → pay → track, appointments, documents,
credentials, messages, renewals, "My government" areas and account pages.

Open `website/index.html` for the public website: homepage, the three doors (individuals,
businesses, officials), life events, topics, offices, digital ID, trust and safety pages, legal
pages, error pages, and public versions of find a service, service detail, help and sign in.
"Sign in" continues into the citizen dashboard, and "Sign out" in the dashboard returns to the
website's signed-out page.

The website pages are responsive single files (no separate phone versions) and were checked at
1440px, 390px and 360px with no sideways scrolling. Text in `[SQUARE BRACKETS]` is a placeholder
for a real value (phone numbers, addresses, the national digital ID provider, legal references).

The editable source is the **HeartStone Citizen Dashboard** design canvas in Claude. Change the
canvas first, then re-export here, so the two never drift apart.

## Rules these designs encode

These are product rules, not styling choices. They carry into the React build:

- **The frontend never decides authority.** Pages show what the backend returns; they never infer
  approval, verification or issuance on their own.
- **Gold means official.** HeartStone Gold is reserved for government-issued, verified and
  authenticated states. Warnings, errors, success and information use their own colours.
- **Payment is not approval.** Every payment screen says so.
- **Upload is not verification.** Documents show "Not yet checked" until an officer checks them.
- **Acting as is always visible.** The person acting is kept distinct from the business or
  person they act for, and the scope and expiry of that authority are shown before submitting.
- **Status labels come from the backend.** Never label anything signed, issued, approved or
  operational unless the backend returned that state.

## Responsive behaviour

All dashboard pages are fluid and were checked in a real browser at 390px (phone) width: no page
scrolls horizontally. Below 900px the sidebar is replaced by a top bar with the logo and a bottom
tab bar (Home, Services, Applications, Messages, More), and "More" opens `Menu.html`.

The native iOS/Android app is **not** covered here. It is a separate design, not yet started.

## Website pages that need sign-off or backend work before launch

- **Privacy notice, terms of use, accessibility statement:** drafts. Need legal review, the real
  data-protection references, and an independent accessibility audit.
- **Report a scam:** the form has no backend route to submit to yet.
- **Service status:** needs a live status feed; the statuses shown are examples.
- **Get a digital ID:** the eligibility rule shown (citizens and legal residents aged 16+) is an
  example and must be confirmed with the national digital ID provider.
- **"Official website" wording** in the top bar needs approval before any public deployment.

## Dashboard pages that need backend work before launch

Marked in `citizen/index.html` and detailed in the coverage map:

- **Appeals and review requests (pages 22–23):** no citizen redress route.
- **Health consent centre:** no citizen consent route.
- **Profile and settings changes (34, 36):** no citizen update routes.
- **Sign in (38):** no OIDC or MFA in the backend yet.
- **"Government issued" status:** signatures and seals are not yet cryptographic.
- **Payments:** the payment provider is a test stub.

## Logo files

| File                                             | Use                                                          |
| ------------------------------------------------ | ------------------------------------------------------------ |
| `heartstone-logo-source.png`                     | Original supplied artwork (gold on navy)                     |
| `heartstone-lockup-gold.png`                     | Stacked mark and wordmark, transparent, for dark backgrounds |
| `heartstone-mark-gold.png` / `-midnight.png`     | Column mark only, for dark / light backgrounds               |
| `heartstone-wordmark-gold.png` / `-midnight.png` | Wordmark only, for dark / light backgrounds                  |

The derived files are cut from the source PNG and recoloured to HeartStone Gold (`#DC9E48`) and
Midnight (`#091B29`). **Vector originals (SVG, or AI/PDF) are still needed** before production use,
especially for app icons and high-density screens.

## Brand tokens (summary)

| Token           | Hex       | Role                                        |
| --------------- | --------- | ------------------------------------------- |
| Midnight        | `#091B29` | Primary institutional base, navigation      |
| Deep Slate      | `#142937` | Secondary dark surface                      |
| Government Blue | `#153146` | Tertiary surface, information               |
| Heritage Red    | `#801E18` | Brand accent only, never the error colour   |
| HeartStone Gold | `#DC9E48` | Official, verified, issued states only      |
| Soft Gold       | `#D4AA65` | Secondary warm accent                       |
| Warm Ivory      | `#F7F3EA` | Citizen background, formal document surface |
| Charcoal Ink    | `#17191B` | Primary text                                |

Proposed status colours (pending approval): warning `#8A3B0A` on `#FDEEE3`, information `#153146`
on `#E7EEF5`, success `#17603B` on `#E4F2EA`, error `#B3261E`. These become proper tokens in the F1
design-system package.
