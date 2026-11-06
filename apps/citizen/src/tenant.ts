// Tenant configuration for this deployment: Antigua and Barbuda Special Economic Zone (ABSEZ),
// the first HeartStone tenant. Everything that names a government, programme or contact lives
// here, never in shared packages. The ABSEZ wording and crest are authorised by ABSEZ (confirmed
// by the product owner, November 2026).
import type { TenantBranding } from "@heartstone/ui";

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
  howToTellHref: "/how-to-tell",
  /**
   * The address of the official public site, shown on "How to tell this site is official".
   * The ABSEZ site is absez.org.
   */
  officialSiteAddress: "absez.org",
  // Placeholder until the public number is confirmed: shown as text, not linked.
  contactPhone: { display: "[PHONE]" },
  environmentNotice: "Development build. Not a live government service.",
  /** Name of the national digital ID used to sign in. */
  digitalIdName: "your digital ID",
  /** Service-adviser hours shown on Help. */
  supportHours: "[SUPPORT HOURS — set by tenant configuration]",
  /** Emergency phone number shown on Public safety and in the website footer. */
  emergencyNumber: "911",
} as const satisfies TenantBranding & Record<string, unknown>;

/** Language and formatting for this deployment. */
export const LOCALE = {
  /** Key used to pick localised text from backend `{ en: "…" }` maps. */
  language: "en",
  dateLocale: "en-GB",
  numberLocale: "en-GB",
} as const;

/**
 * Currency for amounts the backend sends without one (e.g. tax balances). Set by tenant
 * configuration; ISO 4217.
 */
export const LOCALE_CURRENCY = "XCD";

/**
 * Launch state of this deployment. Until a launch is authorised and recorded in tenant
 * configuration, every page says it is not a live government service. Do not change this in
 * code to "go live": it moves to tenant configuration with the launch decision.
 */
export const LAUNCH = {
  isLiveService: false,
  notLiveNotice: TENANT.environmentNotice,
} as const;
