// Pulls the backend OpenAPI contract into openapi/openapi.json, records its source in
// openapi/SOURCE, and regenerates src/generated/schema.ts.
//
//   pnpm --filter @heartstone/api-client sync-contract          # backend main
//   pnpm --filter @heartstone/api-client sync-contract <ref>    # branch, tag or commit SHA
//
// Uses plain `git` over HTTPS, so it needs no token for the public backend repository and works
// in CI. Override the repository with HEARTSTONE_BACKEND_REPO (a URL or a local path).
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const DEFAULT_REPO = "https://github.com/reyesnick54/heartstone-backend.git";
const CONTRACT_PATH = "openapi/openapi.json";

const repo = process.env.HEARTSTONE_BACKEND_REPO || DEFAULT_REPO;
const ref = process.argv[2] || "main";
if (!/^[\w./-]+$/.test(ref) || ref.startsWith("-")) {
  console.error(`sync-contract: invalid ref "${ref}"`);
  process.exit(1);
}

const pkgRoot = new URL("..", import.meta.url);
const work = mkdtempSync(join(tmpdir(), "hs-contract-"));
// The contract is several megabytes; execFileSync's default 1 MB output buffer is too small.
const git = (...args) =>
  execFileSync("git", ["-C", work, ...args], {
    stdio: ["ignore", "pipe", "inherit"],
    maxBuffer: 256 * 1024 * 1024,
  });

try {
  git("init", "--quiet");
  git("fetch", "--quiet", "--depth", "1", repo, ref);
  const sha = git("rev-parse", "FETCH_HEAD").toString().trim();
  const contract = git("show", `FETCH_HEAD:${CONTRACT_PATH}`);
  JSON.parse(contract.toString("utf8")); // must be valid JSON

  const sha256 = createHash("sha256").update(contract).digest("hex");
  writeFileSync(new URL("openapi/openapi.json", pkgRoot), contract);
  writeFileSync(
    new URL("openapi/SOURCE", pkgRoot),
    [
      `repository: ${repo === DEFAULT_REPO ? "reyesnick54/heartstone-backend" : repo}`,
      `ref: ${ref}`,
      `commit: ${sha}`,
      `path: ${CONTRACT_PATH}`,
      `sha256: ${sha256}`,
      "",
    ].join("\n"),
  );
  console.log(`sync-contract: ${CONTRACT_PATH} @ ${sha}`);
} finally {
  rmSync(work, { recursive: true, force: true });
}

execFileSync(process.execPath, [new URL("./generate.mjs", import.meta.url).pathname], {
  stdio: "inherit",
});
