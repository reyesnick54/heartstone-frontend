import { colorVar, kebab, renderTokensCss } from "./css.js";
import { citizenTheme, institutionalTheme } from "./themes.js";

describe("renderTokensCss", () => {
  const css = renderTokensCss();

  it("names custom properties in kebab case", () => {
    expect(kebab("governmentBlue")).toBe("government-blue");
    expect(colorVar("textMuted")).toBe("--hs-color-text-muted");
  });

  it("emits the brand palette and both themes", () => {
    expect(css).toContain("--hs-brand-midnight: #091B29;");
    expect(css).toContain('[data-theme="institutional"] {');
    expect(css).toContain(`--hs-color-bg: ${citizenTheme.bg};`);
    expect(css).toContain(`--hs-color-bg: ${institutionalTheme.bg};`);
  });

  it("emits every semantic role in each theme", () => {
    const institutional = css.slice(css.indexOf('[data-theme="institutional"] {'));
    for (const role of Object.keys(citizenTheme) as (keyof typeof citizenTheme)[]) {
      expect(css).toContain(`${colorVar(role)}:`);
      expect(institutional).toContain(`${colorVar(role)}:`);
    }
  });
});
