import type { ReactNode } from "react";
import { Link, type LinkProps } from "@heartstone/ui";
import { hasRoute } from "../routes";

/**
 * A link to an in-app page that renders as plain text when the page does not exist in this
 * build, so nobody follows a link to a page that is not there.
 */
export function RouteLink({
  href,
  children,
  fallback,
  ...rest
}: LinkProps & { fallback?: ReactNode }) {
  if (!hasRoute(href)) return <>{fallback ?? children}</>;
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

/** The href when the page exists, otherwise undefined (for components that take `href`). */
export function routeHref(href: string): string | undefined {
  if (href.startsWith("#")) return href;
  return hasRoute(href) ? href : undefined;
}
