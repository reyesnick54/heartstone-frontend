import { brand } from "./palette.js";
import {
  breakpoint,
  focus,
  fontFamily,
  fontSize,
  fontWeight,
  layout,
  letterSpacing,
  lineHeight,
  motion,
  radius,
  shadow,
  space,
  zIndex,
} from "./scale.js";
import { citizenTheme, institutionalTheme, type ThemeColors } from "./themes.js";

/** `governmentBlue` → `government-blue`, `2xl` → `2xl`, `display-sm` → `display-sm`. */
export function kebab(name: string): string {
  return name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

/** Name of the custom property for a semantic colour role, e.g. `--hs-color-text-muted`. */
export function colorVar(role: keyof ThemeColors): string {
  return `--hs-color-${kebab(role)}`;
}

function block(prefix: string, values: Record<string, string>): string[] {
  return Object.entries(values).map(([key, value]) => `  --hs-${prefix}-${kebab(key)}: ${value};`);
}

function themeBlock(theme: ThemeColors): string[] {
  return (Object.keys(theme) as (keyof ThemeColors)[]).map(
    (role) => `  ${colorVar(role)}: ${theme[role]};`,
  );
}

/**
 * Renders `tokens.css`: every token as a CSS custom property. Generated at build time from the
 * TypeScript constants, so the two can never disagree.
 */
export function renderTokensCss(): string {
  const shared = [
    ...block("brand", brand),
    ...block("font", fontFamily),
    ...block("font-weight", fontWeight),
    ...block("font-size", fontSize),
    ...block("line-height", lineHeight),
    ...block("letter-spacing", letterSpacing),
    ...block("space", space),
    ...block("radius", radius),
    ...block("shadow", shadow),
    ...block("breakpoint", breakpoint),
    ...block("layout", layout),
    ...block("focus", focus),
    ...block("motion", motion),
    ...block("z", zIndex),
  ];

  return [
    "/*",
    " * HeartStone design tokens. GENERATED from packages/tokens/src by scripts/build-css.mjs.",
    " * Do not edit dist/tokens.css by hand.",
    " *",
    " * Colour rules:",
    " * - Gold (--hs-color-official-*) ONLY means official / verified / government issued.",
    " *   Never a warning or highlight colour.",
    " * - Heritage Red (--hs-brand-heritage-red) is a brand colour, NOT the error colour.",
    " * - Status meaning is never conveyed by colour alone.",
    " * Components must use the semantic --hs-color-* roles, not --hs-brand-* values.",
    " */",
    "",
    ":root {",
    ...shared,
    "}",
    "",
    "/* Citizen theme (default): Warm Ivory and white surfaces. */",
    ':root,\n[data-theme="citizen"] {',
    "  color-scheme: light;",
    ...themeBlock(citizenTheme),
    "}",
    "",
    "/* Institutional theme: government workstation and executive command centre. */",
    '[data-theme="institutional"] {',
    "  color-scheme: dark;",
    ...themeBlock(institutionalTheme),
    "}",
    "",
  ].join("\n");
}
