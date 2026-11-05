// Every citizen route. Signed-in pages render inside the dashboard shell; `public: true` pages
// also render for signed-out visitors.
import type { ReactNode } from "react";
import { resolveRoute, type RouteDefinition, type RouteParams } from "./router/router";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { EligibilityPage } from "./pages/EligibilityPage";
import { ApplyFormPage } from "./pages/apply/ApplyFormPage";
import { ReviewPage } from "./pages/apply/ReviewPage";
import { SubmittedPage } from "./pages/apply/SubmittedPage";

export interface RouteContext {
  signedIn: boolean;
}

export interface CitizenRoute extends RouteDefinition<RouteContext> {
  /** Shown to signed-out visitors too. */
  public?: boolean;
}

const p = (params: RouteParams, name: string) => params[name] ?? "";

export const ROUTES: readonly CitizenRoute[] = [
  { path: "/", render: () => <HomePage /> },
  { path: "/services", render: () => <ServicesPage /> },
  { path: "/services/:slug", render: (params) => <ServiceDetailPage slug={p(params, "slug")} /> },
  {
    path: "/services/:slug/eligibility",
    render: (params) => <EligibilityPage slug={p(params, "slug")} />,
  },
  { path: "/services/:slug/apply", render: (params) => <ApplyFormPage slug={p(params, "slug")} /> },
  { path: "/services/:slug/review", render: (params) => <ReviewPage slug={p(params, "slug")} /> },
  {
    path: "/applications/:id/submitted",
    render: (params) => <SubmittedPage applicationId={p(params, "id")} />,
  },
];

/** True when `href` (a path) has a page, so links to pages that do not exist are not shown. */
export function hasRoute(href: string): boolean {
  const pathname = href.split(/[?#]/)[0] ?? href;
  return resolveRoute(ROUTES, pathname) !== undefined;
}

export function renderRoute(pathname: string, context: RouteContext): ReactNode | undefined {
  const match = resolveRoute(ROUTES, pathname);
  if (!match) return undefined;
  if (!context.signedIn && !(match.route as CitizenRoute).public) return undefined;
  return match.route.render(match.params, context);
}

export function isPublicRoute(pathname: string): boolean {
  const match = resolveRoute(ROUTES, pathname);
  return Boolean(match && (match.route as CitizenRoute).public);
}
