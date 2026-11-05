/**
 * Non-colour design tokens: typography, spacing, radius, shadow, breakpoints, layout, motion.
 * Values are extracted from the static designs unless marked "derived".
 */

/**
 * Font stacks. Fonts are NOT loaded by this package.
 *
 * - `display` (EB Garamond) is for page titles and brand display text only. Never use it for
 *   dense operational text, tables, forms or labels.
 * - `ui` (Public Sans) is for everything else.
 *
 * The production CSP is `font-src 'self'; style-src 'self'`, so Google Fonts cannot be linked
 * without changing `_headers`. Until the font files are self-hosted (see `packages/ui/README.md`),
 * the stacks fall back to system fonts with similar metrics.
 */
export const fontFamily = {
  display: `"EB Garamond", Garamond, Georgia, "Times New Roman", serif`,
  ui: `"Public Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
  mono: `ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace`,
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

/** Font sizes in px, as used in the designs. */
export const fontSize = {
  /** Overlines, tab-bar labels (uppercase, tracked). */
  "2xs": "11px",
  /** Badges, captions, table headers. */
  xs: "12px",
  /** Metadata. */
  sm: "13px",
  /** Small body, nav items, secondary buttons. */
  md: "14px",
  /** Body in dense views, buttons. */
  base: "15px",
  /** Body, form controls (16px avoids zoom-on-focus on iOS). */
  lg: "16px",
  /** Card titles, lead text. */
  xl: "17px",
  /** Section headings (UI font). */
  "2xl": "18px",
  "3xl": "20px",
  "4xl": "22px",
  /** Key figures. */
  "5xl": "28px",
  /** Display (EB Garamond) sizes. */
  "display-sm": "30px",
  "display-md": "34px",
  "display-lg": "40px",
  "display-xl": "46px",
  "display-2xl": "56px",
} as const;

export const lineHeight = {
  tight: "1.1",
  snug: "1.3",
  normal: "1.5",
  relaxed: "1.6",
} as const;

export const letterSpacing = {
  normal: "0",
  wide: "0.05em",
  overline: "0.08em",
} as const;

/**
 * Spacing scale (px). Keys are steps of 4px; half steps (`1-5` = 6px) exist because the designs
 * use 6, 10, 14 and 18px gaps frequently.
 */
export const space = {
  "0": "0",
  "0-5": "2px",
  "1": "4px",
  "1-5": "6px",
  "2": "8px",
  "2-5": "10px",
  "3": "12px",
  "3-5": "14px",
  "4": "16px",
  "4-5": "18px",
  "5": "20px",
  "6": "24px",
  "7": "28px",
  "8": "32px",
  "10": "40px",
  "12": "48px",
  "14": "56px",
  "16": "64px",
} as const;

export const radius = {
  /** Progress bars. */
  xs: "3px",
  /** Inputs, nav items. */
  sm: "8px",
  /** Buttons, notices. */
  md: "10px",
  /** Cards (dashboard). */
  lg: "12px",
  /** Cards (website), dialogs. */
  xl: "14px",
  pill: "999px",
  round: "50%",
} as const;

export const shadow = {
  none: "none",
  /** Raised panels on light surfaces. */
  raised: "0 1px 0 #E6DFD0, 0 12px 28px rgba(9, 27, 41, 0.08)",
  /** Floating elements (hero search box). */
  overlay: "0 8px 24px rgba(0, 0, 0, 0.18)",
  /** Derived: modal dialogs. */
  dialog: "0 24px 48px rgba(9, 27, 41, 0.28)",
} as const;

/**
 * Breakpoints (min-width, px). CSS custom properties cannot be used inside media queries, so
 * component CSS repeats these literal values; keep them in sync.
 *
 * - `shell` (900): the citizen AppShell shows the sidebar at ≥ 900px; below it, a top bar and a
 *   bottom tab bar (Home, Services, Applications, Messages, More).
 * - `sm` (760): the public website's single-column layout below this width.
 */
export const breakpoint = {
  sm: "760px",
  shell: "900px",
  lg: "1100px",
  xl: "1220px",
} as const;

/** Layout dimensions from the designs. */
export const layout = {
  sidebarWidth: "272px",
  railWidth: "336px",
  contentMax: "1240px",
  websiteMax: "1200px",
  formMax: "760px",
  /** Minimum touch target (WCAG 2.5.8 is 24px; HeartStone uses 44px). */
  touchTarget: "44px",
  tabBarItem: "52px",
  controlHeight: "48px",
  controlHeightCompact: "44px",
} as const;

/**
 * Focus ring. Derived: the designs define no focus style. The ring is an outline (not a box
 * shadow) so it survives Windows High Contrast / forced-colours mode.
 */
export const focus = {
  width: "3px",
  offset: "2px",
} as const;

export const motion = {
  fast: "120ms",
  normal: "200ms",
  easing: "cubic-bezier(0.2, 0, 0, 1)",
} as const;

export const zIndex = {
  tabBar: "20",
  skipLink: "50",
  dialog: "100",
} as const;
