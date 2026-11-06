/**
 * The branding a deployment (tenant) supplies to every persona app. This package defines only the
 * shape: the values (names, statements, image files, phone numbers) live in each app's tenant
 * configuration, never in shared code, so the same components serve any government.
 */
export interface TenantImage {
  /** URL of the image, normally under the app's `public/brand/`. */
  src: string;
  /** Intrinsic size in pixels, so the browser reserves space before the image loads. */
  width: number;
  height: number;
}

export interface TenantBranding {
  /** Name of the platform as the public sees it, e.g. in page titles. */
  displayName: string;
  /** Logo lockup (crest + wordmark): one file for light backgrounds, one for dark. */
  lockup: {
    onLight: TenantImage;
    onDark: TenantImage;
    /** Alternative text for the lockup. */
    alt: string;
  };
  /** Crest or emblem on its own. */
  crest: TenantImage & { alt: string };
  /** "An official website of …". Must be approved by the tenant before it is shown. */
  officialStatement: string;
  /** Page explaining how to recognise the official site. */
  howToTellHref: string;
  /**
   * Public contact phone. `tel` (digits, optional `+`) is set only when the number is real; while
   * it is a placeholder the number is shown as text and not linked.
   */
  contactPhone: { display: string; tel?: string };
  /**
   * Environment banner shown on every page until a launch is authorised and recorded, e.g.
   * "Development build. Not a live government service." Omit only for an authorised live service.
   */
  environmentNotice?: string;
}
