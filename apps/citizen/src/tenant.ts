// TODO(tenant config): branding and the official-website statement come from the deployment's
// tenant configuration, not from code. These placeholders keep the shell honest: no government,
// agency or programme is named until that wording is approved.
export const TENANT_PLACEHOLDER = {
  productName: "HeartStone",
  officialStatement: "[OFFICIAL WEBSITE STATEMENT — set by tenant configuration]",
  officialInfoHref: "#official-sites",
  /** Name of the national digital ID used to sign in. */
  digitalIdName: "your digital ID",
  /** Service-adviser phone line and hours shown on Help. */
  supportPhone: "[SUPPORT PHONE — set by tenant configuration]",
  supportHours: "[SUPPORT HOURS — set by tenant configuration]",
} as const;

/** Language and formatting for this deployment. */
export const LOCALE = {
  /** Key used to pick localised text from backend `{ en: "…" }` maps. */
  language: "en",
  dateLocale: "en-GB",
  numberLocale: "en-GB",
} as const;

/**
 * Launch state of this deployment. Until a launch is authorised and recorded in tenant
 * configuration, every page says it is not a live government service. Do not change this in
 * code to "go live": it moves to tenant configuration with the launch decision.
 */
export const LAUNCH = {
  isLiveService: false,
  notLiveNotice: "Development build. Not a live government service.",
} as const;
