// Tenant configuration for this deployment: Antigua and Barbuda Special Economic Zone (ABSEZ),
// the first HeartStone tenant. Everything that names a government, programme or contact lives
// here, never in shared packages. The ABSEZ wording and crest are authorised by ABSEZ (confirmed
// by the product owner, November 2026).
import type { TenantBranding } from "@heartstone/ui";

/**
 * The public (citizen) site for each host this app is deployed on. "How to tell this site is
 * official" lives there. Add a row when the app gets a new address.
 */
const CITIZEN_SITE_BY_HOST: Readonly<Record<string, string>> = {
  "staging-gov.heartstone.site": "https://staging.heartstone.site",
  "staging-exec.heartstone.site": "https://staging.heartstone.site",
  "staging-admin.heartstone.site": "https://staging.heartstone.site",
  "gov.absez.org": "https://absez.org",
  "exec.absez.org": "https://absez.org",
  "admin.absez.org": "https://absez.org",
};

/** The production public site, used for any host not listed above. */
const CITIZEN_SITE_DEFAULT = "https://absez.org";

function citizenSite(): string {
  if (typeof window === "undefined") return CITIZEN_SITE_DEFAULT;
  return CITIZEN_SITE_BY_HOST[window.location.hostname] ?? CITIZEN_SITE_DEFAULT;
}

/** Logo files are in public/brand/ (optimised copies of design/brand/logo/). */
export const TENANT = {
  displayName: "ABSEZ e-Gov Platform",
  lockup: {
    onLight: { src: "/brand/absez-lockup.png", width: 553, height: 160 },
    onDark: { src: "/brand/absez-lockup-light.png", width: 553, height: 160 },
    alt: "ABSEZ e-Gov Platform",
  },
  crest: {
    src: "/brand/absez-crest.png",
    width: 140,
    height: 160,
    alt: "Coat of arms of Antigua and Barbuda",
  },
  officialStatement: "An official website of the Government of Antigua and Barbuda",
  howToTellHref: `${citizenSite()}/how-to-tell`,
  // Placeholder until the public number is confirmed: shown as text, not linked.
  contactPhone: { display: "[PHONE]" },
  environmentNotice: "Development build. Not a live government service.",
} as const satisfies TenantBranding;
