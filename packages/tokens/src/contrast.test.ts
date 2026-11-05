import { contrastRatio, parseColor, relativeLuminance } from "./contrast.js";
import { brand } from "./palette.js";
import { CONTRAST_TEXT, contrastPairs, themes, type ThemeName } from "./themes.js";

describe("contrastRatio (WCAG 2.x)", () => {
  it("matches the known extremes and is symmetric", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 5);
    expect(contrastRatio("#FFFFFF", "#FFFFFF")).toBeCloseTo(1, 5);
    expect(contrastRatio("#FFFFFF", "#000")).toBeCloseTo(contrastRatio("#000", "#FFFFFF"), 10);
  });

  it("matches published reference values", () => {
    // #767676 on white is the well-known lightest grey that passes AA (4.54:1).
    expect(contrastRatio("#767676", "#FFFFFF")).toBeCloseTo(4.54, 2);
    expect(contrastRatio("#777777", "#FFFFFF")).toBeLessThan(CONTRAST_TEXT);
  });

  it("computes relative luminance from the sRGB transfer function", () => {
    expect(relativeLuminance(parseColor("#FFFFFF"))).toBeCloseTo(1, 10);
    expect(relativeLuminance(parseColor("#000000"))).toBe(0);
    // Mid grey sits on the curved part of the sRGB function, not at 0.5.
    expect(relativeLuminance(parseColor("#808080"))).toBeCloseTo(0.2159, 4);
  });

  it("composites translucent colours before comparing", () => {
    expect(contrastRatio("rgba(0, 0, 0, 0)", "#FFFFFF")).toBeCloseTo(1, 5);
    expect(contrastRatio("rgba(0, 0, 0, 1)", "#FFFFFF")).toBeCloseTo(21, 5);
  });

  it("rejects colours it cannot parse rather than guessing", () => {
    expect(() => parseColor("red")).toThrow(/Unsupported/);
  });
});

describe("brand palette", () => {
  it("is exactly the approved HeartStone values", () => {
    expect(brand).toEqual({
      midnight: "#091B29",
      heritageRed: "#801E18",
      gold: "#DC9E48",
      deepSlate: "#142937",
      governmentBlue: "#153146",
      softGold: "#D4AA65",
      warmIvory: "#F7F3EA",
      charcoalInk: "#17191B",
    });
  });
});

describe.each(Object.keys(themes) as ThemeName[])("%s theme", (name) => {
  const theme = themes[name];

  it.each(contrastPairs.map((p) => [p.foreground, p.background, p.min] as const))(
    "%s on %s meets %s:1",
    (foreground, background, min) => {
      const ratio = contrastRatio(theme[foreground], theme[background], theme.bg);
      expect(
        ratio,
        `${name}: ${foreground} ${theme[foreground]} on ${background} ${theme[background]} = ${ratio.toFixed(2)}:1`,
      ).toBeGreaterThanOrEqual(min);
    },
  );

  it("never uses Gold for warnings or Heritage Red for errors", () => {
    const gold = [brand.gold, brand.softGold];
    for (const role of ["warningText", "warningSurface", "warningBorder"] as const) {
      expect(gold).not.toContain(theme[role]);
    }
    for (const role of ["errorText", "errorStrongText", "errorBorder", "actionDangerBg"] as const) {
      expect(theme[role]).not.toBe(brand.heritageRed);
    }
  });

  it("reserves Gold for official roles", () => {
    const goldRoles = (Object.keys(theme) as (keyof typeof theme)[]).filter(
      (role) => theme[role] === brand.gold,
    );
    for (const role of goldRoles) {
      expect(role).toMatch(/^official/);
    }
  });
});
