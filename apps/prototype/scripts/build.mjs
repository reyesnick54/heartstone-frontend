// Builds the clickable HeartStone prototype from the static design reference in /design.
//
// The design pages stay the single source of truth: this script copies them into dist/ with
// clean URLs and rewrites every internal link, so the website, sign-in and dashboard click
// through as one site.
//
//   /                       public website home
//   /<page>                 public website pages (e.g. /life-events, /sign-in)
//   /dashboard/             citizen dashboard home (after "Continue with digital ID")
//   /dashboard/<page>       dashboard pages
//   /brand/logo/<file>      logo files
//
// The prototype has no real authentication. Access to the deployed site is controlled by
// Cloudflare Access (docs/deployment.md). The build fails on any internal link it cannot map.

import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, posix, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const app = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const design = resolve(app, "../../design");
const dist = join(app, "dist");

const kebab = (name) => name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// Readable URLs where the file name is not a good address.
const WEBSITE_SLUGS = {
  WebsiteHome: "",
  PublicServices: "services",
  PublicServiceDetail: "services/register-as-an-employer",
  PublicHelp: "help",
  PublicSignIn: "sign-in",
  Official: "how-to-tell",
};
const DASHBOARD_SLUGS = { Main: "", Mobile: "mobile-home" };

/** Every page: design path (relative to /design) → output file and public URL. */
const pages = new Map();
function addSection(folder, prefix, slugs) {
  for (const file of readdirSync(join(design, folder, "pages")).filter((f) =>
    f.endsWith(".html"),
  )) {
    const name = file.slice(0, -5);
    const slug = name in slugs ? slugs[name] : kebab(name);
    const path = prefix + slug;
    pages.set(`${folder}/pages/${file}`, {
      source: join(design, folder, "pages", file),
      out: path === "" || path.endsWith("/") ? `${path}index.html` : `${path}.html`,
      url: `/${path}`,
    });
  }
}
addSection("website", "", WEBSITE_SLUGS);
addSection("citizen", "dashboard/", DASHBOARD_SLUGS);

const unresolved = [];
function rewrite(html, fromDesignPath) {
  return html.replace(/\b(href|src|action)="([^"]*)"/g, (whole, attr, value) => {
    if (/^(#|[a-z]+:|\/\/)/i.test(value) || value === "") return whole; // anchors, tel:, https:, …
    const [target, hash = ""] = value.split(/(?=#)/);
    const designPath = posix.normalize(posix.join(posix.dirname(fromDesignPath), target));
    const page = pages.get(designPath);
    if (page) return `${attr}="${page.url}${hash}"`;
    if (designPath.startsWith("brand/logo/")) return `${attr}="/${designPath}"`;
    unresolved.push(`${fromDesignPath}: ${value}`);
    return whole;
  });
}

rmSync(dist, { recursive: true, force: true });
for (const [designPath, page] of pages) {
  const html = rewrite(readFileSync(page.source, "utf8"), designPath).replace(
    "<!-- HeartStone design reference (not production code).",
    "<!-- HeartStone clickable prototype (not production code). Built from the design reference.",
  );
  const out = join(dist, page.out);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
}
if (unresolved.length) {
  console.error(`Unmapped internal links:\n  ${unresolved.join("\n  ")}`);
  process.exit(1);
}

// "Page not found" doubles as the site's 404 response.
writeFileSync(join(dist, "404.html"), readFileSync(join(dist, "not-found.html")));
cpSync(join(design, "brand/logo"), join(dist, "brand/logo"), { recursive: true });
cpSync(join(app, "public"), dist, { recursive: true });

if (!existsSync(join(dist, "index.html")) || !existsSync(join(dist, "dashboard/index.html"))) {
  console.error("Build is missing the website or dashboard home page.");
  process.exit(1);
}
console.log(`Prototype built: ${pages.size} pages → ${dist}`);
