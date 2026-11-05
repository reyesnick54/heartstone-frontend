/**
 * HeartStone colour palette: raw values only.
 *
 * Components never use these directly. They use the semantic theme tokens in `themes.ts`
 * (exposed as `--hs-color-*` custom properties), so a theme can change a role without
 * touching components.
 *
 * Source: the static designs in `design/citizen/pages` and `design/website/pages`, where these
 * values were hard-coded in inline styles. Values marked "derived" do not appear in the designs;
 * they were added for the institutional (dark) theme or to meet WCAG AA, and are covered by
 * the contrast test.
 */

/**
 * Brand palette. These eight values are fixed by the HeartStone brand system and must not drift.
 *
 * Colour rules (product rules, not styling choices):
 * - `gold` ONLY means official, verified, authenticated or government issued. It is never a
 *   warning, highlight or decoration colour. Warnings use `status.warning*`.
 * - `heritageRed` is a brand colour (humanity, civic importance). It is NOT the error colour.
 *   Errors use `status.error*`.
 * - Status meaning is never conveyed by colour alone: every status also carries text, and an
 *   icon or shape where the component allows it.
 */
export const brand = {
  midnight: "#091B29",
  heritageRed: "#801E18",
  gold: "#DC9E48",
  deepSlate: "#142937",
  governmentBlue: "#153146",
  softGold: "#D4AA65",
  warmIvory: "#F7F3EA",
  charcoalInk: "#17191B",
} as const;

/** Warm neutrals used on light (citizen) surfaces. All extracted from the designs. */
export const neutral = {
  white: "#FFFFFF",
  /** Row hover on white cards. */
  ivoryTint: "#FBF9F4",
  /** Icon tiles, nav hover, date tiles. */
  parchment: "#F1ECE0",
  /** Neutral chip background, placeholder panels. */
  stone: "#EFEBE2",
  /** Row dividers inside cards. */
  divider: "#EFE9DD",
  /** Card and header borders. */
  border: "#E6DFD0",
  /** Progress track, section dividers. */
  track: "#E0D9CB",
  /** Tab-list and search-field borders. */
  borderStrong: "#D9D1C0",
  /** Secondary button border (decorative: the label identifies the button). */
  buttonBorder: "#C9C0AE",
  /**
   * Form control border. The designs use #8F9AA5, which is 2.86:1 on white and fails WCAG 1.4.11
   * (non-text contrast, 3:1). Derived: darkened to pass on white and Warm Ivory.
   */
  controlBorder: "#7B8692",
  /** Tertiary text (dates, small metadata). */
  slate500: "#5C6670",
  /** Muted text (metadata, hints). */
  slate600: "#4A5560",
  /** Secondary text (body copy). */
  slate700: "#3A444E",
} as const;

/** Cool neutrals used on dark (navigation, hero and institutional) surfaces. */
export const navy = {
  /** Derived: page background one step below Midnight for the institutional theme. */
  abyss: "#06131D",
  /** Dividers on Midnight (sidebar sections). */
  divider: "#1E3547",
  /** Borders on dark surfaces (chips, top-bar separators). */
  border: "#2B4357",
  /** Derived: neutral chip background on dark surfaces. */
  raised: "#22394B",
  /** Outline-button border on dark surfaces. */
  outline: "#5A6E80",
  /** Muted text on dark (sidebar labels, counts). */
  textMuted: "#A9B6C2",
  /** Body text on dark (official bar, hero intro). */
  textSecondary: "#C9D2DA",
  /** Navigation text on dark. */
  textNav: "#D7DEE4",
  /** Chip text on dark. */
  textChip: "#E6EBEF",
  /** Derived: link and focus colour on dark surfaces. */
  sky: "#9FC3E4",
} as const;

/**
 * Status colours. Light values are from the designs (README "Proposed status colours");
 * dark values are derived for the institutional theme.
 */
export const status = {
  successText: "#17603B",
  successSurface: "#E4F2EA",
  successBorder: "#A9D3BA",

  warningText: "#8A3B0A",
  warningSurface: "#FDEEE3",
  /** Larger warning panels ("warnbox") use a lighter surface. */
  warningSurfaceSubtle: "#FFF8F2",
  warningBorder: "#F0C9A8",

  infoText: brand.governmentBlue,
  infoSurface: "#E7EEF5",
  /** Information callouts ("notice", "callout"). */
  infoSurfaceSubtle: "#F3F6F9",
  infoBorder: "#C9D6E3",
  /** Halo around the current step marker. */
  infoHalo: "#D5E0EB",

  /** Field errors, error borders, error summary. */
  error: "#B3261E",
  /** Error badge text on the error surface, and the emergency panel. */
  errorStrong: "#8E1F17",
  errorSurface: "#F6E3E1",

  /** Official (gold) badge: text, surface and border. Gold rules apply. */
  officialText: "#6B4710",
  officialSurface: "#FCF6EC",
  officialBorder: "#E8C995",

  // Derived dark-surface variants (institutional theme).
  successTextOnDark: "#9ED4B4",
  successSurfaceOnDark: "#10372A",
  warningTextOnDark: "#F5C08F",
  warningSurfaceOnDark: "#3B2312",
  infoTextOnDark: "#B9D1E8",
  infoSurfaceOnDark: "#1B3A55",
  errorTextOnDark: "#F2B8B5",
  errorSurfaceOnDark: "#3D1715",
  officialTextOnDark: "#E8C995",
  officialSurfaceOnDark: "#2B2414",
} as const;

export const palette = { brand, neutral, navy, status } as const;
