/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Library build: one ES module plus one extracted stylesheet (dist/styles.css). No CSS is
// injected at runtime, so apps keep a `style-src 'self'` CSP.
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "hs-[local]-[hash:base64:6]",
    },
  },
  build: {
    sourcemap: false,
    cssCodeSplit: false,
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
      cssFileName: "styles",
    },
    rolldownOptions: {
      external: [/^react($|\/)/, /^react-dom($|\/)/, /^@heartstone\/tokens($|\/)/],
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
});
