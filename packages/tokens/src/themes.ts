import { brand, navy, neutral, status } from "./palette.js";

/**
 * Semantic colour roles. Components use only these (as `--hs-color-<role>` custom properties),
 * never raw palette values.
 *
 * Two themes:
 * - `citizen` (default, `:root`): Warm Ivory and white surfaces, Midnight navigation. Citizen,
 *   business and public-website experiences.
 * - `institutional` (`[data-theme="institutional"]`): Midnight and Deep Slate surfaces for the
 *   government workstation and executive command centre.
 *
 * Colour rules encoded here:
 * - `official*` roles are the ONLY place Gold is used. They mean official, verified,
 *   authenticated or government issued, and are applied only when the backend says so and the
 *   caller opts in explicitly. Never use them for warnings, highlights or decoration.
 * - `error*` roles use the dedicated error red (#B3261E family), never Heritage Red.
 * - `warning*` roles use the dedicated warning amber-brown (#8A3B0A family), never Gold.
 * - No role is ever the only carrier of meaning: components pair status colours with text.
 */
export interface ThemeColors {
  /** Page background. */
  bg: string;
  /** Cards, panels, inputs. */
  surface: string;
  /** Row hover on surfaces. */
  surfaceHover: string;
  /** Icon tiles, date tiles, nav hover on light surfaces. */
  surfaceMuted: string;
  /** Read-only inputs, inset panels. */
  surfaceSunken: string;
  /** Strongly emphasised panel (e.g. identity summary): Midnight on the citizen theme. */
  surfaceInverse: string;
  textOnInverse: string;

  text: string;
  textSecondary: string;
  textMuted: string;
  textSubtle: string;
  heading: string;

  border: string;
  borderSubtle: string;
  borderStrong: string;
  /** Form control borders. Must meet 3:1 against `surface` (WCAG 1.4.11). */
  borderControl: string;
  /** Checkbox / radio accent. */
  controlAccent: string;

  link: string;
  linkHover: string;
  /** Focus ring. Must meet 3:1 against `bg` and `surface`. */
  focus: string;

  actionPrimaryBg: string;
  actionPrimaryText: string;
  actionPrimaryHoverBg: string;
  actionSecondaryBg: string;
  actionSecondaryText: string;
  actionSecondaryBorder: string;
  actionSecondaryHoverBg: string;
  actionQuietText: string;
  actionQuietHoverBg: string;
  actionDangerBg: string;
  actionDangerText: string;
  actionDangerHoverBg: string;

  navBg: string;
  navText: string;
  navTextMuted: string;
  navHoverBg: string;
  navCurrentBg: string;
  navCurrentText: string;
  navDivider: string;
  navPanelBg: string;
  /** Focus ring on navigation, official-bar and other `nav*` surfaces. */
  navFocus: string;

  tabBarBg: string;
  tabBarBorder: string;
  tabBarText: string;
  tabBarCurrentText: string;

  officialBarBg: string;
  officialBarText: string;
  officialBarLink: string;

  backdrop: string;

  progressTrack: string;
  progressDone: string;
  progressCurrent: string;

  successText: string;
  successSurface: string;
  successBorder: string;
  warningText: string;
  warningSurface: string;
  warningSurfaceSubtle: string;
  warningBorder: string;
  infoText: string;
  infoSurface: string;
  infoSurfaceSubtle: string;
  infoBorder: string;
  /** Field error text, error borders and the error summary. */
  errorText: string;
  /** Error badge text on `errorSurface`. */
  errorStrongText: string;
  errorSurface: string;
  errorBorder: string;
  neutralText: string;
  neutralSurface: string;
  neutralBorder: string;
  /** Official / government issued. Gold. Explicit opt-in only. */
  officialText: string;
  officialSurface: string;
  officialBorder: string;
  /** HeartStone Gold itself: seal icons and official accents. Decorative with text, never alone. */
  officialAccent: string;
}

export const citizenTheme: ThemeColors = {
  bg: brand.warmIvory,
  surface: neutral.white,
  surfaceHover: neutral.ivoryTint,
  surfaceMuted: neutral.parchment,
  surfaceSunken: brand.warmIvory,
  surfaceInverse: brand.midnight,
  textOnInverse: brand.warmIvory,

  text: brand.charcoalInk,
  textSecondary: neutral.slate700,
  textMuted: neutral.slate600,
  textSubtle: neutral.slate500,
  heading: brand.midnight,

  border: neutral.border,
  borderSubtle: neutral.divider,
  borderStrong: neutral.borderStrong,
  borderControl: neutral.controlBorder,
  controlAccent: brand.midnight,

  link: brand.governmentBlue,
  linkHover: brand.midnight,
  focus: brand.governmentBlue,

  actionPrimaryBg: brand.midnight,
  actionPrimaryText: neutral.white,
  actionPrimaryHoverBg: brand.governmentBlue,
  actionSecondaryBg: neutral.white,
  actionSecondaryText: brand.midnight,
  actionSecondaryBorder: neutral.buttonBorder,
  actionSecondaryHoverBg: neutral.parchment,
  actionQuietText: brand.governmentBlue,
  actionQuietHoverBg: neutral.parchment,
  actionDangerBg: status.error,
  actionDangerText: neutral.white,
  actionDangerHoverBg: status.errorStrong,

  navBg: brand.midnight,
  navText: navy.textNav,
  navTextMuted: navy.textMuted,
  navHoverBg: brand.deepSlate,
  navCurrentBg: brand.governmentBlue,
  navCurrentText: neutral.white,
  navDivider: navy.divider,
  navPanelBg: brand.deepSlate,
  navFocus: navy.sky,

  tabBarBg: neutral.white,
  tabBarBorder: neutral.border,
  tabBarText: neutral.slate600,
  tabBarCurrentText: brand.midnight,

  officialBarBg: brand.midnight,
  officialBarText: navy.textSecondary,
  officialBarLink: brand.softGold,

  backdrop: "rgba(9, 27, 41, 0.56)",

  progressTrack: neutral.track,
  progressDone: status.successText,
  progressCurrent: brand.governmentBlue,

  successText: status.successText,
  successSurface: status.successSurface,
  successBorder: status.successBorder,
  warningText: status.warningText,
  warningSurface: status.warningSurface,
  warningSurfaceSubtle: status.warningSurfaceSubtle,
  warningBorder: status.warningBorder,
  infoText: status.infoText,
  infoSurface: status.infoSurface,
  infoSurfaceSubtle: status.infoSurfaceSubtle,
  infoBorder: status.infoBorder,
  errorText: status.error,
  errorStrongText: status.errorStrong,
  errorSurface: status.errorSurface,
  errorBorder: status.error,
  neutralText: neutral.slate700,
  neutralSurface: neutral.stone,
  neutralBorder: neutral.border,
  officialText: status.officialText,
  officialSurface: status.officialSurface,
  officialBorder: status.officialBorder,
  officialAccent: brand.gold,
};

export const institutionalTheme: ThemeColors = {
  bg: brand.midnight,
  surface: brand.deepSlate,
  surfaceHover: navy.divider,
  surfaceMuted: brand.governmentBlue,
  surfaceSunken: navy.abyss,
  surfaceInverse: brand.warmIvory,
  textOnInverse: brand.midnight,

  text: brand.warmIvory,
  textSecondary: navy.textNav,
  textMuted: navy.textMuted,
  // Derived: #8F9AA5 (the designs' input border) is 4.43:1 on row hover; lightened to pass.
  textSubtle: "#9AA5B0",
  heading: neutral.white,

  border: navy.border,
  borderSubtle: navy.divider,
  borderStrong: navy.outline,
  borderControl: "#8F9AA5",
  controlAccent: navy.sky,

  link: navy.sky,
  linkHover: neutral.white,
  focus: navy.sky,

  actionPrimaryBg: brand.warmIvory,
  actionPrimaryText: brand.midnight,
  actionPrimaryHoverBg: neutral.white,
  actionSecondaryBg: "transparent",
  actionSecondaryText: brand.warmIvory,
  actionSecondaryBorder: navy.outline,
  actionSecondaryHoverBg: navy.divider,
  actionQuietText: navy.sky,
  actionQuietHoverBg: navy.divider,
  actionDangerBg: status.error,
  actionDangerText: neutral.white,
  actionDangerHoverBg: status.errorStrong,

  navBg: navy.abyss,
  navText: navy.textNav,
  navTextMuted: navy.textMuted,
  navHoverBg: brand.deepSlate,
  navCurrentBg: brand.governmentBlue,
  navCurrentText: neutral.white,
  navDivider: navy.divider,
  navPanelBg: brand.deepSlate,
  navFocus: navy.sky,

  tabBarBg: brand.deepSlate,
  tabBarBorder: navy.border,
  tabBarText: navy.textMuted,
  tabBarCurrentText: neutral.white,

  officialBarBg: navy.abyss,
  officialBarText: navy.textSecondary,
  officialBarLink: brand.softGold,

  backdrop: "rgba(3, 10, 16, 0.72)",

  progressTrack: navy.border,
  progressDone: status.successTextOnDark,
  progressCurrent: navy.sky,

  successText: status.successTextOnDark,
  successSurface: status.successSurfaceOnDark,
  successBorder: status.successTextOnDark,
  warningText: status.warningTextOnDark,
  warningSurface: status.warningSurfaceOnDark,
  warningSurfaceSubtle: status.warningSurfaceOnDark,
  warningBorder: status.warningTextOnDark,
  infoText: status.infoTextOnDark,
  infoSurface: status.infoSurfaceOnDark,
  infoSurfaceSubtle: status.infoSurfaceOnDark,
  infoBorder: status.infoTextOnDark,
  errorText: status.errorTextOnDark,
  errorStrongText: status.errorTextOnDark,
  errorSurface: status.errorSurfaceOnDark,
  errorBorder: status.errorTextOnDark,
  neutralText: navy.textNav,
  neutralSurface: navy.raised,
  neutralBorder: navy.border,
  officialText: status.officialTextOnDark,
  officialSurface: status.officialSurfaceOnDark,
  officialBorder: brand.softGold,
  officialAccent: brand.gold,
};

export const themes = {
  citizen: citizenTheme,
  institutional: institutionalTheme,
} as const;

export type ThemeName = keyof typeof themes;

/** WCAG 2.2 AA thresholds. */
export const CONTRAST_TEXT = 4.5;
export const CONTRAST_NON_TEXT = 3;

export interface ContrastPair {
  foreground: keyof ThemeColors;
  background: keyof ThemeColors;
  /** Minimum ratio: 4.5 for text (1.4.3), 3 for UI components and focus (1.4.11). */
  min: number;
}

/**
 * Foreground/background role pairs that components actually render. The contrast test checks
 * every pair in every theme. Add a pair here whenever a component introduces a new combination.
 */
export const contrastPairs: readonly ContrastPair[] = [
  // Body text
  ...(["text", "textSecondary", "textMuted", "textSubtle", "heading", "link"] as const).flatMap(
    (fg) =>
      (["bg", "surface", "surfaceHover", "surfaceSunken"] as const).map((bg) => ({
        foreground: fg,
        background: bg,
        min: CONTRAST_TEXT,
      })),
  ),
  { foreground: "text", background: "surfaceMuted", min: CONTRAST_TEXT },
  { foreground: "textMuted", background: "surfaceMuted", min: CONTRAST_TEXT },
  { foreground: "textOnInverse", background: "surfaceInverse", min: CONTRAST_TEXT },
  { foreground: "errorText", background: "surface", min: CONTRAST_TEXT },
  { foreground: "errorText", background: "bg", min: CONTRAST_TEXT },

  // Actions
  { foreground: "actionPrimaryText", background: "actionPrimaryBg", min: CONTRAST_TEXT },
  { foreground: "actionPrimaryText", background: "actionPrimaryHoverBg", min: CONTRAST_TEXT },
  { foreground: "actionSecondaryText", background: "surface", min: CONTRAST_TEXT },
  { foreground: "actionSecondaryText", background: "bg", min: CONTRAST_TEXT },
  { foreground: "actionSecondaryText", background: "actionSecondaryHoverBg", min: CONTRAST_TEXT },
  { foreground: "actionQuietText", background: "surface", min: CONTRAST_TEXT },
  { foreground: "actionQuietText", background: "bg", min: CONTRAST_TEXT },
  { foreground: "actionQuietText", background: "actionQuietHoverBg", min: CONTRAST_TEXT },
  { foreground: "actionDangerText", background: "actionDangerBg", min: CONTRAST_TEXT },
  { foreground: "actionDangerText", background: "actionDangerHoverBg", min: CONTRAST_TEXT },

  // Navigation
  { foreground: "navText", background: "navBg", min: CONTRAST_TEXT },
  { foreground: "navText", background: "navHoverBg", min: CONTRAST_TEXT },
  { foreground: "navTextMuted", background: "navBg", min: CONTRAST_TEXT },
  { foreground: "navTextMuted", background: "navPanelBg", min: CONTRAST_TEXT },
  { foreground: "navCurrentText", background: "navCurrentBg", min: CONTRAST_TEXT },
  { foreground: "tabBarText", background: "tabBarBg", min: CONTRAST_TEXT },
  { foreground: "tabBarCurrentText", background: "tabBarBg", min: CONTRAST_TEXT },
  { foreground: "officialBarText", background: "officialBarBg", min: CONTRAST_TEXT },
  { foreground: "officialBarLink", background: "officialBarBg", min: CONTRAST_TEXT },

  // Status badges and notices
  { foreground: "successText", background: "successSurface", min: CONTRAST_TEXT },
  { foreground: "warningText", background: "warningSurface", min: CONTRAST_TEXT },
  { foreground: "warningText", background: "warningSurfaceSubtle", min: CONTRAST_TEXT },
  { foreground: "infoText", background: "infoSurface", min: CONTRAST_TEXT },
  { foreground: "infoText", background: "infoSurfaceSubtle", min: CONTRAST_TEXT },
  { foreground: "errorStrongText", background: "errorSurface", min: CONTRAST_TEXT },
  { foreground: "neutralText", background: "neutralSurface", min: CONTRAST_TEXT },
  { foreground: "officialText", background: "officialSurface", min: CONTRAST_TEXT },
  { foreground: "text", background: "warningSurfaceSubtle", min: CONTRAST_TEXT },
  { foreground: "text", background: "infoSurfaceSubtle", min: CONTRAST_TEXT },
  { foreground: "text", background: "successSurface", min: CONTRAST_TEXT },
  { foreground: "text", background: "errorSurface", min: CONTRAST_TEXT },
  { foreground: "text", background: "officialSurface", min: CONTRAST_TEXT },

  // Non-text: controls, focus, progress
  { foreground: "borderControl", background: "surface", min: CONTRAST_NON_TEXT },
  { foreground: "borderControl", background: "bg", min: CONTRAST_NON_TEXT },
  { foreground: "errorBorder", background: "surface", min: CONTRAST_NON_TEXT },
  { foreground: "controlAccent", background: "surface", min: CONTRAST_NON_TEXT },
  { foreground: "focus", background: "bg", min: CONTRAST_NON_TEXT },
  { foreground: "focus", background: "surface", min: CONTRAST_NON_TEXT },
  { foreground: "progressDone", background: "surface", min: CONTRAST_NON_TEXT },
  { foreground: "progressCurrent", background: "surface", min: CONTRAST_NON_TEXT },
  { foreground: "navFocus", background: "navBg", min: CONTRAST_NON_TEXT },
  { foreground: "navFocus", background: "navCurrentBg", min: CONTRAST_NON_TEXT },
  { foreground: "navFocus", background: "officialBarBg", min: CONTRAST_NON_TEXT },
  { foreground: "focus", background: "tabBarBg", min: CONTRAST_NON_TEXT },
];
