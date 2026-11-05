/**
 * WCAG 2.x contrast ratio, implemented from the specification
 * (https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio and #dfn-relative-luminance).
 * No dependencies, so the contrast test cannot be weakened by a library change.
 */

export interface Rgba {
  r: number;
  g: number;
  b: number;
  /** 0–1 */
  a: number;
}

const HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
const RGBA = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i;

/** Parses `#RGB`, `#RRGGBB`, `rgb()` / `rgba()` and `transparent`. */
export function parseColor(input: string): Rgba {
  const value = input.trim();
  if (value === "transparent") return { r: 0, g: 0, b: 0, a: 0 };

  const hex = HEX.exec(value);
  if (hex?.[1]) {
    const digits =
      hex[1].length === 3
        ? hex[1]
            .split("")
            .map((d) => d + d)
            .join("")
        : hex[1];
    const n = Number.parseInt(digits, 16);
    return { r: (n >> 16) & 0xff, g: (n >> 8) & 0xff, b: n & 0xff, a: 1 };
  }

  const rgba = RGBA.exec(value);
  if (rgba) {
    return {
      r: Number(rgba[1]),
      g: Number(rgba[2]),
      b: Number(rgba[3]),
      a: rgba[4] === undefined ? 1 : Number(rgba[4]),
    };
  }

  throw new Error(`Unsupported colour value: ${input}`);
}

/** Composites a (possibly translucent) foreground over an opaque background. */
export function composite(foreground: Rgba, background: Rgba): Rgba {
  const a = foreground.a;
  return {
    r: Math.round(foreground.r * a + background.r * (1 - a)),
    g: Math.round(foreground.g * a + background.g * (1 - a)),
    b: Math.round(foreground.b * a + background.b * (1 - a)),
    a: 1,
  };
}

function channel(value8bit: number): number {
  const c = value8bit / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

/** Relative luminance (0 = black, 1 = white) of an opaque colour. */
export function relativeLuminance(color: Rgba): number {
  return 0.2126 * channel(color.r) + 0.7152 * channel(color.g) + 0.0722 * channel(color.b);
}

/**
 * Contrast ratio between two colours, from 1 to 21. A translucent foreground is composited over
 * the background first; a translucent background is composited over `base` (white by default).
 */
export function contrastRatio(foreground: string, background: string, base = "#FFFFFF"): number {
  const bg = composite(parseColor(background), parseColor(base));
  const fg = composite(parseColor(foreground), bg);
  const l1 = relativeLuminance(fg);
  const l2 = relativeLuminance(bg);
  const [lighter, darker] = l1 >= l2 ? [l1, l2] : [l2, l1];
  return (lighter + 0.05) / (darker + 0.05);
}
