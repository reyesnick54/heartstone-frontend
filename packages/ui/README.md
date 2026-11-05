# @heartstone/ui

Accessible React components for every HeartStone persona app, styled with
[`@heartstone/tokens`](../tokens). Built from the static designs in `design/citizen/pages` and
`design/website/pages`.

Handwritten, with no component-library dependency and no CSS-in-JS runtime. Component styles are CSS
modules, extracted at build time into a single `dist/styles.css`, so apps keep the strict
`style-src 'self'` Content Security Policy in `public/_headers`. No component writes inline
`style` attributes.

## Usage

```tsx
// main.tsx: load the stylesheets once, tokens first
import "@heartstone/tokens/tokens.css";
import "@heartstone/ui/styles.css";
```

```tsx
import { Button, Notice, StatusBadge, TextField } from "@heartstone/ui";

<TextField label="Business registration number" hint="For example C-2024-01234" error={error} />
<StatusBadge status={item.status} label={item.publicStatusLabel} tone={toneFor(item.status)} />
<Notice tone="success">Your application has been submitted.</Notice>
<Button variant="secondary" onClick={save}>Save as draft</Button>
```

### Themes

| Theme           | How                                         | Used by                                  |
| --------------- | ------------------------------------------- | ---------------------------------------- |
| `citizen`       | default (`:root`)                           | citizen, business, public website        |
| `institutional` | `data-theme="institutional"` on any element | government workstation, executive, admin |

Set the theme on `<html>` in `index.html` so the first paint is correct. You can also scope it to a
region, for example a dark command-centre panel.

## Colour rules

These are product rules, not styling choices. The contrast test in `@heartstone/tokens` enforces
some of them.

- **Gold means official.** HeartStone Gold (`--hs-color-official-*`) is only for official,
  verified, authenticated or government-issued states. It is never a warning, highlight or
  decoration colour. `StatusBadge` has no gold tone in its `tone` union: gold needs the separate
  `official` prop, which a caller sets only when the backend has returned that state. Status
  strings are never mapped to gold.
- **Heritage Red is brand, not error.** Errors use the dedicated error red (`#B3261E` family).
  Heritage Red (`--hs-brand-heritage-red`) is for brand moments only.
- **Warnings are not gold.** Warnings use the warning amber-brown (`#8A3B0A` on `#FDEEE3`).
- **Never colour alone.** Every status has text. Badges add a shape marker, notices an icon and
  title, current navigation items a bar and bold weight, and selected tabs an underline and bold
  weight.
- **Use semantic roles.** Components and apps use `--hs-color-*` roles, never `--hs-brand-*`
  values directly, so themes can change a role in one place.

## Behaviour rules

- **Status labels come from the backend.** `StatusBadge` shows `label` (the backend's public
  label) or a readable version of the raw status (`UNDER_REVIEW` becomes "Under review"). It never
  infers a tone from the status: the default is `neutral`. The raw value is kept in `data-status`.
- **Disabled is a hint, not a control.** `Button disabled` uses `aria-disabled`, so the button stays
  focusable and discoverable, and its clicks are ignored. The backend enforces every permission and
  authority rule.
- **No hard-coded government names.** `OfficialMark` and `AppShell` take all branding and wording
  as props. It comes from tenant configuration (F2), and the wording must be approved for each
  deployment.

## Components

| Component                         | Notes                                                                                               |
| --------------------------------- | --------------------------------------------------------------------------------------------------- |
| `Button`                          | `primary` / `secondary` / `quiet` / `danger`; `loading` (`aria-busy`); `disabled` (`aria-disabled`) |
| `Link`                            | `standalone` (44px target); `external` (new tab, announced)                                         |
| `TextField`, `TextArea`, `Select` | Label, hint and error wired with `htmlFor` and `aria-describedby`; `aria-invalid` on error          |
| `Checkbox`, `RadioGroup`          | Native inputs; `RadioGroup` is a `fieldset` with a `legend`; arrow keys come from the browser       |
| `FormField`                       | Render-prop wrapper for custom controls                                                             |
| `StatusBadge`                     | Tones `neutral` / `info` / `success` / `warning` / `error`, plus explicit `official`                |
| `Card`                            | With a `title`, becomes a labelled `section`; `official` gives it a gold border                     |
| `CheckboxGroup`                   | Several checkboxes for one question, in a `fieldset`; values keep option order                      |
| `ErrorSummary`                    | "There is a problem" box after a failed submit: `role="alert"`, takes focus, links to each field    |
| `ItemList`                        | Labelled list of records or destinations; the title is the item's one link (`rows` or `grid`)       |
| `StatTile`, `StatGrid`            | A backend count with its label, read as one phrase; optional link                                   |
| `StepIndicator`                   | Numbered form steps; `aria-current="step"`, completed steps announced and linkable                  |
| `SummaryList`                     | Label/value pairs as a `dl` (check your answers, record details), optional per-row action           |
| `Timeline`                        | Ordered steps or events; state shown by marker shape and announced as text, never colour alone      |
| `Notice` (`Alert`)                | Error: `role="alert"`; success: `role="status"`; info and warning: static unless `announce` is set  |
| `PageHeader`                      | The page's single `h1`; `dense` uses the UI face for operational screens                            |
| `Stack`, `Cluster`                | Flex layout primitives with token gaps; `as` for semantic elements                                  |
| `Table`                           | Caption required, `th scope`; `responsive="stack"` (labelled cells below 900px) or `"scroll"`       |
| `Tabs`                            | WAI-ARIA tabs: arrow keys, Home and End, one tab stop                                               |
| `Dialog`                          | Portal, focus moves in, Tab trap, Escape, background `inert` + `aria-hidden`, focus returns         |
| `Loading`, `Skeleton`             | `role="status"` label; skeleton shapes hidden from assistive technology                             |
| `EmptyState`                      | Title, description and a next-step action                                                           |
| `AppShell`                        | Citizen shell: sidebar at 900px and wider; top bar and bottom tab bar below 900px                   |
| `OfficialMark`                    | "Official website" banner; the statement is a prop                                                  |
| `SkipLink`, `VisuallyHidden`      | First focusable element; screen-reader-only text                                                    |
| Icons (`HomeIcon`, `SealIcon`, …) | From the designs; `aria-hidden` by default                                                          |

## Fonts

The tokens name **EB Garamond** (display only: page titles and brand text) and **Public Sans**
(everything else), with system fallbacks. Neither font is loaded yet:

- The CSP is `font-src 'self'; style-src 'self'`, so Google Fonts would mean adding
  `https://fonts.googleapis.com` to `style-src` and `https://fonts.gstatic.com` to `font-src` in
  every `_headers` file, and a third-party request on every page view.
- The preferred route is **self-hosting**: add the WOFF2 files (both are SIL Open Font Licence) to
  a package or app `public/fonts/`, then declare `@font-face` with `font-display: swap`. No CSP
  change is needed. Until then, pages render in Georgia (or another serif) and the system UI font.

## Breakpoints

CSS custom properties cannot be used in media queries, so component CSS repeats the literal values
from `breakpoint` in the tokens: **900px** (the shell breakpoint: sidebar at 900px and wider, tab
bar below) and **760px** (the website's single-column layout).

## Development

```sh
pnpm --filter @heartstone/ui test
pnpm --filter @heartstone/ui build   # dist/index.js, dist/styles.css, dist/*.d.ts
```

Each component has a Vitest + Testing Library test with at least one role, name or ARIA assertion.
When you add a colour combination, add the pair to `contrastPairs` in
`packages/tokens/src/themes.ts`.
