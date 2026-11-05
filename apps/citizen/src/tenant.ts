// TODO(tenant config, F2): branding and the official-website statement come from the
// deployment's tenant configuration, not from code. These placeholders keep the shell honest:
// no government, agency or programme is named until that wording is approved.
export const TENANT_PLACEHOLDER = {
  productName: "HeartStone",
  officialStatement: "[OFFICIAL WEBSITE STATEMENT — set by tenant configuration]",
  officialInfoHref: "#official-sites",
} as const;
