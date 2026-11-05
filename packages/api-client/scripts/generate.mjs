// Generates src/generated/schema.ts from the vendored contract in openapi/openapi.json.
//
//   node scripts/generate.mjs           # write src/generated/schema.ts
//   node scripts/generate.mjs --check   # fail if the committed file or contract hash is stale
//
// Every backend path starts with the global prefix /api/v1. The prefix is removed here, so
// callers write client.GET("/experience/citizen/me") against baseUrl "/api/v1".
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import openapiTS, { astToString } from "openapi-typescript";

const API_PREFIX = "/api/v1";
const check = process.argv.includes("--check");
const pkgRoot = new URL("..", import.meta.url);
const contractFile = new URL("openapi/openapi.json", pkgRoot);
const sourceFile = new URL("openapi/SOURCE", pkgRoot);
const outFile = new URL("src/generated/schema.ts", pkgRoot);

const raw = readFileSync(contractFile);
const source = readFileSync(sourceFile, "utf8");
const commit = /^commit: (\S+)$/m.exec(source)?.[1] ?? "unknown";
const recordedHash = /^sha256: (\S+)$/m.exec(source)?.[1];
const actualHash = createHash("sha256").update(raw).digest("hex");
if (recordedHash !== actualHash) {
  console.error(
    "generate: openapi/openapi.json does not match the sha256 in openapi/SOURCE. " +
      "Do not edit the contract by hand; run `pnpm --filter @heartstone/api-client sync-contract`.",
  );
  process.exit(1);
}

const contract = JSON.parse(raw.toString("utf8"));
const paths = {};
for (const [path, item] of Object.entries(contract.paths ?? {})) {
  if (!path.startsWith(`${API_PREFIX}/`)) {
    console.error(`generate: path "${path}" is outside ${API_PREFIX}; update this script.`);
    process.exit(1);
  }
  paths[path.slice(API_PREFIX.length)] = item;
}
contract.paths = paths;
contract.servers = [{ url: API_PREFIX }];

const ast = await openapiTS(contract, { alphabetize: true });
const banner = [
  "/**",
  " * GENERATED FILE. Do not edit.",
  ` * Source: heartstone-backend openapi/openapi.json @ ${commit}`,
  ` * Paths are relative to ${API_PREFIX}.`,
  " * Regenerate: pnpm --filter @heartstone/api-client generate",
  " */",
  "",
].join("\n");
const output = `${banner}${astToString(ast)}`;

if (check) {
  let current = "";
  try {
    current = readFileSync(outFile, "utf8");
  } catch {
    // missing file is reported below
  }
  if (current !== output) {
    console.error(
      "generate --check: src/generated/schema.ts is out of date. " +
        "Run `pnpm --filter @heartstone/api-client generate` and commit the result.",
    );
    process.exit(1);
  }
  console.log("generate --check: src/generated/schema.ts is up to date.");
} else {
  writeFileSync(outFile, output);
  console.log(`generate: wrote src/generated/schema.ts (${Object.keys(paths).length} paths)`);
}
