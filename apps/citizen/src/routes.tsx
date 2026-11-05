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
import { ApplicationDetailPage, CaseStatusPage } from "./pages/ApplicationDetailPage";
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { AppealsPage, RequestReviewPage } from "./pages/AppealsPage";
import { AppointmentDetailPage } from "./pages/AppointmentDetailPage";
import { AppointmentsPage } from "./pages/AppointmentsPage";
import { CredentialDetailPage } from "./pages/CredentialDetailPage";
import { CredentialsPage } from "./pages/CredentialsPage";
import { DocumentViewPage } from "./pages/DocumentViewPage";
import { DocumentsPage } from "./pages/DocumentsPage";
import { InvoicePage } from "./pages/InvoicePage";
import { MessageDetailPage } from "./pages/MessageDetailPage";
import { MessagesPage } from "./pages/MessagesPage";
import { PaymentReceiptPage } from "./pages/PaymentReceiptPage";
import { PaymentsPage } from "./pages/PaymentsPage";
import { RenewalsPage } from "./pages/RenewalsPage";

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
  { path: "/applications", render: () => <ApplicationsPage /> },
  {
    path: "/applications/:id",
    render: (params) => <ApplicationDetailPage applicationId={p(params, "id")} />,
  },
  { path: "/cases/:id", render: (params) => <CaseStatusPage caseId={p(params, "id")} /> },
  { path: "/appointments", render: () => <AppointmentsPage /> },
  {
    path: "/appointments/:id",
    render: (params) => <AppointmentDetailPage appointmentId={p(params, "id")} />,
  },
  { path: "/documents", render: () => <DocumentsPage /> },
  { path: "/documents/:id", render: (params) => <DocumentViewPage documentId={p(params, "id")} /> },
  { path: "/credentials", render: () => <CredentialsPage /> },
  {
    path: "/credentials/:id",
    render: (params) => <CredentialDetailPage credentialId={p(params, "id")} />,
  },
  { path: "/payments", render: () => <PaymentsPage /> },
  { path: "/payments/:id", render: (params) => <InvoicePage invoiceId={p(params, "id")} /> },
  {
    path: "/payments/:id/receipts/:receiptId",
    render: (params) => (
      <PaymentReceiptPage invoiceId={p(params, "id")} receiptId={p(params, "receiptId")} />
    ),
  },
  { path: "/messages", render: () => <MessagesPage /> },
  { path: "/messages/:id", render: (params) => <MessageDetailPage messageId={p(params, "id")} /> },
  { path: "/renewals", render: () => <RenewalsPage /> },
  { path: "/appeals", render: () => <AppealsPage /> },
  { path: "/appeals/request", render: () => <RequestReviewPage /> },
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
