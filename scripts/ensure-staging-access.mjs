// Ensures the staging hostnames sit behind Cloudflare Access before any staging Worker is
// deployed to them. Run by .github/workflows/deploy-staging.yml; fails closed.
//
// Env:
//   CLOUDFLARE_API_TOKEN        required (Access: Apps and Policies Edit, Account Settings Read)
//   CLOUDFLARE_ACCOUNT_ID       optional; looked up when the token sees exactly one account
//   STAGING_HOSTNAMES           required, space-separated
//   STAGING_ACCESS_EMAIL_DOMAIN optional, e.g. abraxas-eu.com
//   STAGING_ACCESS_EMAILS       optional, comma-separated named people
//
// Never prints the token or any secret.

const API = "https://api.cloudflare.com/client/v4";
const APP_NAME = "HeartStone staging (synthetic data)";

const token = process.env.CLOUDFLARE_API_TOKEN;
const hostnames = (process.env.STAGING_HOSTNAMES ?? "").split(/\s+/).filter(Boolean);
const emailDomain = (process.env.STAGING_ACCESS_EMAIL_DOMAIN ?? "").trim();
const emails = (process.env.STAGING_ACCESS_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

function fail(message) {
  console.error(`Cloudflare Access check failed: ${message}`);
  process.exit(1);
}

if (!token) fail("CLOUDFLARE_API_TOKEN is not set");
if (hostnames.length === 0) fail("STAGING_HOSTNAMES is empty");
if (!emailDomain && emails.length === 0) {
  fail(
    "set STAGING_ACCESS_EMAIL_DOMAIN or STAGING_ACCESS_EMAILS so only named people can open staging",
  );
}

async function cf(method, path, body) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.success === false) {
    const errors = (json.errors ?? []).map((e) => `${e.code}: ${e.message}`).join("; ");
    fail(`${method} ${path.replace(/accounts\/[^/]+/, "accounts/…")} → ${res.status} ${errors}`);
  }
  return json.result;
}

let accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
if (!accountId) {
  const accounts = await cf("GET", "/accounts?per_page=50");
  if (accounts.length !== 1) {
    fail(`the token sees ${accounts.length} accounts; set CLOUDFLARE_ACCOUNT_ID`);
  }
  accountId = accounts[0].id;
}

const include = [
  ...(emailDomain ? [{ email_domain: { domain: emailDomain } }] : []),
  ...emails.map((email) => ({ email: { email } })),
];

const apps = await cf("GET", `/accounts/${accountId}/access/apps?per_page=100`);
const existing = apps.find((a) => a.name === APP_NAME);

if (!existing) {
  await cf("POST", `/accounts/${accountId}/access/apps`, {
    name: APP_NAME,
    type: "self_hosted",
    domain: hostnames[0],
    self_hosted_domains: hostnames,
    session_duration: "12h",
    app_launcher_visible: false,
    policies: [{ name: "HeartStone staging testers", decision: "allow", include, precedence: 1 }],
  });
  console.log(`Created Access application covering ${hostnames.join(", ")}.`);
} else {
  const covered = new Set(existing.self_hosted_domains ?? [existing.domain]);
  const missing = hostnames.filter((h) => !covered.has(h));
  if (missing.length > 0) {
    fail(
      `Access application "${APP_NAME}" does not cover ${missing.join(", ")}. ` +
        "Add them in Zero Trust → Access → Applications, then re-run.",
    );
  }
  const allows = (existing.policies ?? []).filter((p) => p.decision === "allow");
  if (allows.length === 0) fail(`Access application "${APP_NAME}" has no allow policy`);
  console.log(`Access application already covers ${hostnames.join(", ")}.`);
}
