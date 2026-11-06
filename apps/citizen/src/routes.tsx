// Every citizen route, in two areas:
//   SITE_ROUTES       the public website (any visitor, signed in or out), in the website shell
//   DASHBOARD_ROUTES  the signed-in area under /dashboard, in the dashboard shell
// Signed-in users who open "/" are sent to /dashboard (App.tsx).
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
import { ProfilePage, RepresentationPage, SettingsPage } from "./pages/AccountPages";
import { HelpPage } from "./pages/HelpPage";
import { MenuPage } from "./pages/MenuPage";
import { VerifyPage } from "./pages/VerifyPage";
import { HowToTellPage } from "./pages/HowToTellPage";
import { DASHBOARD } from "./lib/paths";
import { SitePage } from "./components/SiteShell";
import { WebsiteHomePage } from "./pages/site/WebsiteHomePage";
import { TopicPage, TopicsPage } from "./pages/site/TopicsPages";
import { AudiencePage } from "./pages/site/AudiencePage";
import {
  DigitalIdPage,
  OfficialsPage,
  SignInHelpPage,
  SignInPage,
  SignedOutPage,
} from "./pages/site/AccountSitePages";
import { PublicHelpPage } from "./pages/site/PublicHelpPage";
import {
  AboutPage,
  AccessibilityPage,
  ContactPage,
  LifeEventsPage,
  OfficesPage,
  PrivacyPage,
  ScamPage,
  StatusPage,
  TermsPage,
} from "./pages/site/InformationPages";
import { BenefitsPage } from "./pages/hubs/BenefitsPage";
import { CivilRecordsPage } from "./pages/hubs/CivilRecordsPage";
import { EducationPage } from "./pages/hubs/EducationPage";
import { HealthPage } from "./pages/hubs/HealthPage";
import { ImmigrationPage } from "./pages/hubs/ImmigrationPage";
import { PropertyPage } from "./pages/hubs/PropertyPage";
import { PublicSafetyPage } from "./pages/hubs/PublicSafetyPage";
import { TaxPage } from "./pages/hubs/TaxPage";
import { VehiclesPage } from "./pages/hubs/VehiclesPage";
import { WorkPage } from "./pages/hubs/WorkPage";

export interface RouteContext {
  signedIn: boolean;
}

export type CitizenRoute = RouteDefinition<RouteContext>;

const p = (params: RouteParams, name: string) => params[name] ?? "";
const d = (path: string) => `${DASHBOARD}${path}`;

export const SITE_ROUTES: readonly CitizenRoute[] = [
  { path: "/", render: () => <WebsiteHomePage /> },
  {
    path: "/services",
    render: () => (
      <SitePage>
        <ServicesPage area="public" />
      </SitePage>
    ),
  },
  {
    path: "/services/:slug",
    render: (params) => (
      <SitePage>
        <ServiceDetailPage area="public" slug={p(params, "slug")} />
      </SitePage>
    ),
  },
  { path: "/topics", render: () => <TopicsPage /> },
  { path: "/topics/:code", render: (params) => <TopicPage code={p(params, "code")} /> },
  { path: "/individuals", render: () => <AudiencePage audience="individuals" /> },
  { path: "/business", render: () => <AudiencePage audience="business" /> },
  { path: "/life-events", render: () => <LifeEventsPage /> },
  { path: "/officials", render: () => <OfficialsPage /> },
  { path: "/digital-id", render: () => <DigitalIdPage /> },
  { path: "/sign-in", render: () => <SignInPage /> },
  { path: "/sign-in-help", render: () => <SignInHelpPage /> },
  { path: "/signed-out", render: () => <SignedOutPage /> },
  { path: "/help", render: () => <PublicHelpPage /> },
  { path: "/contact", render: () => <ContactPage /> },
  { path: "/offices", render: () => <OfficesPage /> },
  { path: "/status", render: () => <StatusPage /> },
  { path: "/report-a-scam", render: () => <ScamPage /> },
  { path: "/about", render: () => <AboutPage /> },
  { path: "/accessibility", render: () => <AccessibilityPage /> },
  { path: "/privacy", render: () => <PrivacyPage /> },
  { path: "/terms", render: () => <TermsPage /> },
  {
    path: "/verify",
    render: () => (
      <SitePage>
        <VerifyPage />
      </SitePage>
    ),
  },
  {
    path: "/how-to-tell",
    render: () => (
      <SitePage>
        <HowToTellPage />
      </SitePage>
    ),
  },
];

export const DASHBOARD_ROUTES: readonly CitizenRoute[] = [
  { path: d(""), render: () => <HomePage /> },
  { path: d("/services"), render: () => <ServicesPage area="account" /> },
  {
    path: d("/services/:slug"),
    render: (params) => <ServiceDetailPage area="account" slug={p(params, "slug")} />,
  },
  {
    path: d("/services/:slug/eligibility"),
    render: (params) => <EligibilityPage slug={p(params, "slug")} />,
  },
  {
    path: d("/services/:slug/apply"),
    render: (params) => <ApplyFormPage slug={p(params, "slug")} />,
  },
  {
    path: d("/services/:slug/review"),
    render: (params) => <ReviewPage slug={p(params, "slug")} />,
  },
  {
    path: d("/applications/:id/submitted"),
    render: (params) => <SubmittedPage applicationId={p(params, "id")} />,
  },
  { path: d("/applications"), render: () => <ApplicationsPage /> },
  {
    path: d("/applications/:id"),
    render: (params) => <ApplicationDetailPage applicationId={p(params, "id")} />,
  },
  { path: d("/cases/:id"), render: (params) => <CaseStatusPage caseId={p(params, "id")} /> },
  { path: d("/appointments"), render: () => <AppointmentsPage /> },
  {
    path: d("/appointments/:id"),
    render: (params) => <AppointmentDetailPage appointmentId={p(params, "id")} />,
  },
  { path: d("/documents"), render: () => <DocumentsPage /> },
  {
    path: d("/documents/:id"),
    render: (params) => <DocumentViewPage documentId={p(params, "id")} />,
  },
  { path: d("/credentials"), render: () => <CredentialsPage /> },
  {
    path: d("/credentials/:id"),
    render: (params) => <CredentialDetailPage credentialId={p(params, "id")} />,
  },
  { path: d("/payments"), render: () => <PaymentsPage /> },
  { path: d("/payments/:id"), render: (params) => <InvoicePage invoiceId={p(params, "id")} /> },
  {
    path: d("/payments/:id/receipts/:receiptId"),
    render: (params) => (
      <PaymentReceiptPage invoiceId={p(params, "id")} receiptId={p(params, "receiptId")} />
    ),
  },
  { path: d("/messages"), render: () => <MessagesPage /> },
  {
    path: d("/messages/:id"),
    render: (params) => <MessageDetailPage messageId={p(params, "id")} />,
  },
  { path: d("/renewals"), render: () => <RenewalsPage /> },
  { path: d("/appeals"), render: () => <AppealsPage /> },
  { path: d("/appeals/request"), render: () => <RequestReviewPage /> },
  { path: d("/work"), render: () => <WorkPage /> },
  { path: d("/immigration"), render: () => <ImmigrationPage /> },
  { path: d("/tax"), render: () => <TaxPage /> },
  { path: d("/property"), render: () => <PropertyPage /> },
  { path: d("/vehicles"), render: () => <VehiclesPage /> },
  { path: d("/health"), render: () => <HealthPage /> },
  { path: d("/benefits"), render: () => <BenefitsPage /> },
  { path: d("/education"), render: () => <EducationPage /> },
  { path: d("/civil-records"), render: () => <CivilRecordsPage /> },
  { path: d("/public-safety"), render: () => <PublicSafetyPage /> },
  { path: d("/profile"), render: () => <ProfilePage /> },
  { path: d("/settings"), render: () => <SettingsPage /> },
  { path: d("/representation"), render: () => <RepresentationPage /> },
  { path: d("/help"), render: () => <HelpPage /> },
  { path: d("/menu"), render: () => <MenuPage /> },
];

const ALL_ROUTES = [...SITE_ROUTES, ...DASHBOARD_ROUTES];

/** True when `href` (a path) has a page, so links to pages that do not exist are not shown. */
export function hasRoute(href: string): boolean {
  const pathname = href.split(/[?#]/)[0] ?? href;
  return resolveRoute(ALL_ROUTES, pathname) !== undefined;
}

/** Renders a public website page, or undefined when there is none at `pathname`. */
export function renderSiteRoute(pathname: string, context: RouteContext): ReactNode | undefined {
  const match = resolveRoute(SITE_ROUTES, pathname);
  return match ? match.route.render(match.params, context) : undefined;
}

/** Renders a signed-in page, or undefined when there is none at `pathname`. */
export function renderDashboardRoute(
  pathname: string,
  context: RouteContext,
): ReactNode | undefined {
  const match = resolveRoute(DASHBOARD_ROUTES, pathname);
  return match ? match.route.render(match.params, context) : undefined;
}
