import { defineConfig } from "vitest/config";

// Node 22 provides the same Web Crypto, fetch, Request and Response globals as Workers.
export default defineConfig({
  test: {
    environment: "node",
    globals: true,
  },
});
