import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default tseslint.config(
  { ignores: ["**/dist/**", "**/coverage/**", "**/.turbo/**", "**/.wrangler/**"] },
  js.configs.recommended,
  ...tseslint.configs.strict,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: { ...globals.browser },
    },
    plugins: {
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.strict.rules,
      // Core domain payloads must stay typed (Build Plan, quality gate: type safety).
      "@typescript-eslint/no-explicit-any": "error",
      // No unsafe HTML rendering (Build Plan, quality gate: security).
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXAttribute[name.name='dangerouslySetInnerHTML']",
          message: "Unsafe HTML is not permitted. Render through design-system components.",
        },
      ],
    },
  },
  {
    files: ["**/*.config.{js,ts}", "eslint.config.js"],
    languageOptions: { globals: { ...globals.node } },
  },
);
