// Checks the built prototype: every internal link resolves the way Cloudflare static assets
// serve it, and the website → sign in → dashboard → sign out journey is intact.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const dist = resolve(dirname(fileURLToPath(import.meta.url)), "../dist");

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? htmlFiles(p) : p.endsWith(".html") ? [p] : [];
  });
}

/** Resolves a site path the way Workers static assets do with html_handling "auto-trailing-slash". */
function resolves(path) {
  const clean = decodeURI(path.split("#")[0].split("?")[0]);
  if (clean.endsWith("/")) return existsSync(join(dist, clean, "index.html"));
  return [clean, `${clean}.html`, join(clean, "index.html")].some((p) => {
    const f = join(dist, p);
    return existsSync(f) && statSync(f).isFile();
  });
}

const failures = [];
const files = htmlFiles(dist);
let links = 0;
for (const file of files) {
  const html = readFileSync(file, "utf8");
  for (const [, value] of html.matchAll(/\b(?:href|src|action)="(\/[^"/][^"]*|\/)"/g)) {
    links += 1;
    if (!resolves(value)) failures.push(`${relative(dist, file)} → ${value}`);
  }
  if (/\.html["#]|\/_blob\/|\.dc\.html/.test(html))
    failures.push(`${relative(dist, file)} still has a design-canvas or .html link`);
}

const page = (p) => readFileSync(join(dist, p), "utf8");
const journey = [
  ["website home links to sign in", page("index.html").includes('href="/sign-in"')],
  ["sign in continues to the dashboard", page("sign-in.html").includes('href="/dashboard/"')],
  [
    "dashboard signs out to the website",
    page("dashboard/index.html").includes('href="/signed-out"'),
  ],
  ["signed-out page links back to sign in", page("signed-out.html").includes('href="/sign-in"')],
  ["404 page exists", existsSync(join(dist, "404.html"))],
  ["security headers are published", existsSync(join(dist, "_headers"))],
];
for (const [name, ok] of journey) if (!ok) failures.push(`Journey: ${name}`);

if (failures.length) {
  console.error(`Prototype check failed:\n  ${failures.join("\n  ")}`);
  process.exit(1);
}
console.log(
  `Prototype check passed: ${files.length} pages, ${links} internal links, journey intact.`,
);
