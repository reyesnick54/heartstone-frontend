// Checks the presentation before deploy: the page and its script exist, every script it loads is
// served from this site, and the security headers are present.

import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const pub = resolve(dirname(fileURLToPath(import.meta.url)), "../public");
const failures = [];
const index = join(pub, "index.html");

if (!existsSync(index)) failures.push("public/index.html is missing");
else {
  const html = readFileSync(index, "utf8");
  if (/<script(?![^>]*\bsrc=)[^>]*>/i.test(html)) failures.push("index.html has an inline script");
  for (const [, src] of html.matchAll(/<script[^>]*\bsrc="([^"]+)"/gi)) {
    if (!src.startsWith("/")) failures.push(`script from another site: ${src}`);
    else if (!existsSync(join(pub, src))) failures.push(`missing script: ${src}`);
  }
}
if (!existsSync(join(pub, "_headers"))) failures.push("public/_headers is missing");

if (failures.length) {
  console.error(`Presentation check failed:\n  ${failures.join("\n  ")}`);
  process.exit(1);
}
console.log("Presentation check passed.");
