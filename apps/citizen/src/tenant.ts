// TODO(tenant config): branding and the official-website statement come from the deployment's
// tenant configuration, not from code. These placeholders keep the shell honest: no government,
// agency or programme is named until that wording is approved.
export const TENANT_PLACEHOLDER = {
  productName: "HeartStone",
  officialStatement: "[OFFICIAL WEBSITE STATEMENT — set by tenant configuration]",
  officialInfoHref: "#official-sites",
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
