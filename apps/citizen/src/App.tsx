// Citizen web app: one site with two areas.
//
//   /, /services, /help, …   the public website (SiteShell), for every visitor
//   /dashboard/…             the signed-in area (AppShell); signed-out visitors get "Sign in"
//                            with the page they asked for as the return path
//
// A signed-in visitor who opens "/" goes to /dashboard. Every page reads the backend through
// @heartstone/api-client and shows only what the backend returned.
import { useEffect, useState, type ReactNode } from "react";
import { SIGNIN_ERROR_PARAM } from "@heartstone/api-client";
import { useSession, type SessionState } from "@heartstone/api-client/react";
import {
  AppShell,
  ApplicationsIcon,
  BrandLockup,
  Button,
  Cluster,
  HomeIcon,
  Link,
  Loading,
  MenuIcon,
  MessagesIcon,
  Notice,
  ServicesIcon,
  type AppShellNavItem,
  type AppShellNavSection,
} from "@heartstone/ui";
import { ApiErrorNotice, currentPath } from "./components/ApiErrorNotice";
import { Page } from "./components/Page";
import { SitePage, SiteShell, siteBanner } from "./components/SiteShell";
import { initials } from "./lib/format";
import { MeProvider, activeRepresentations, useMe } from "./lib/me";
import { FOOTER_NAV, MAIN_NAV, MY_GOVERNMENT, type NavEntry } from "./lib/nav";
import { isDashboardPath, paths, site } from "./lib/paths";
import { hasRoute, renderDashboardRoute, renderSiteRoute } from "./routes";
import { SignInErrorNotice, SignInPage } from "./pages/site/AccountSitePages";
import { RouterProvider, useLocation, useNavigate, useRouteFocus } from "./router/router";
import { TENANT } from "./tenant";

export const EXPERIENCE_NAME = "Citizen services";

/** Reads `?signin_error=` once, then removes it from the address bar. */
function useSignInError(): string | undefined {
  const [code] = useState(() => {
    if (typeof window === "undefined") return undefined;
    return new URLSearchParams(window.location.search).get(SIGNIN_ERROR_PARAM) ?? undefined;
  });
  useEffect(() => {
    if (!code) return;
    const url = new URL(window.location.href);
    url.searchParams.delete(SIGNIN_ERROR_PARAM);
    window.history.replaceState(window.history.state, "", url);
  }, [code]);
  return code;
}

function isCurrent(href: string, pathname: string): boolean {
  if (href === paths.home) return pathname === paths.home;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navItems(entries: NavEntry[], pathname: string): AppShellNavItem[] {
  return entries
    .filter((entry) => hasRoute(entry.href))
    .map((entry) => ({ ...entry, current: isCurrent(entry.href, pathname) }));
}

function tabItems(pathname: string): AppShellNavItem[] {
  const tabs: AppShellNavItem[] = [
    { id: "home", label: "Home", href: paths.home, icon: <HomeIcon size={22} /> },
    { id: "services", label: "Services", href: paths.services, icon: <ServicesIcon size={22} /> },
    {
      id: "applications",
      label: "Applications",
      href: paths.applications,
      icon: <ApplicationsIcon size={22} />,
    },
    { id: "messages", label: "Messages", href: paths.messages, icon: <MessagesIcon size={22} /> },
    { id: "more", label: "More", href: paths.menu, icon: <MenuIcon size={22} /> },
  ];
  return tabs
    .filter((tab) => hasRoute(tab.href))
    .map((tab) => ({ ...tab, current: isCurrent(tab.href, pathname) }));
}

/** Sidebar (Midnight): the lockup with the light wordmark. */
const brand = (
  <BrandLockup href={paths.home} image={TENANT.lockup.onDark} alt={TENANT.lockup.alt} />
);
/** Top bar (light surface, below 900px): the lockup with the dark wordmark. */
const brandCompact = (
  <BrandLockup href={paths.home} image={TENANT.lockup.onLight} alt={TENANT.lockup.alt} size="sm" />
);

function SignOutButton() {
  const { signOut } = useSession();
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <Cluster gap="3">
      <Button
        variant="secondary"
        loading={busy}
        loadingLabel="Signing out"
        onClick={() => {
          setBusy(true);
          setFailed(false);
          signOut()
            .catch(() => setFailed(true))
            .finally(() => setBusy(false));
        }}
      >
        Sign out
      </Button>
      {failed && (
        <Notice tone="error" announce="alert">
          Sign-out did not complete. Please try again.
        </Notice>
      )}
    </Cluster>
  );
}

function AccountBar() {
  const me = useMe();
  return (
    <Cluster gap="3" align="center" justify="end" className="account-bar">
      {me.status === "success" && (
        <span className="account-name">
          Signed in as <strong>{me.data.profile.displayName}</strong>
        </span>
      )}
      <SignOutButton />
    </Cluster>
  );
}

/** Sidebar "Acting as" panel: always the signed-in person; who else they may act for. */
function ActingAsPanel() {
  const me = useMe();
  if (me.status !== "success") return null;
  const name = me.data.profile.displayName;
  const reps = activeRepresentations(me.data);
  return (
    <section className="acting-panel" aria-label="Acting as">
      <p className="acting-panel-label">Acting as</p>
      <p className="acting-panel-person">
        <span className="avatar" aria-hidden="true">
          {initials(name)}
        </span>
        <span>
          <strong>{name}</strong>
          <span className="acting-panel-sub">Yourself</span>
        </span>
      </p>
      {reps.length > 0 && (
        <p className="acting-panel-sub">
          You can also act for {reps.map((r) => r.organizationName).join(", ")} when you start an
          application.
        </p>
      )}
    </section>
  );
}

function DashboardNotFound() {
  return (
    <Page title="Page not found" description="The page you asked for does not exist here.">
      <p>
        If you typed the address, check it is correct. You can{" "}
        <Link href={paths.home}>go to your home page</Link>.
      </p>
    </Page>
  );
}

function SiteNotFound() {
  return (
    <SitePage>
      <Page title="Page not found">
        <p>
          If you typed the web address, check it&rsquo;s correct. If you followed a link, it may be
          out of date.
        </p>
        <ul className="bullets">
          <li>
            <Link href={site.home}>Go to the homepage</Link>
          </li>
          <li>
            <Link href={site.services}>Browse all services</Link>
          </li>
          <li>
            <Link href={site.signIn}>Sign in to your account</Link>
          </li>
        </ul>
        <p>
          Still can&rsquo;t find it? <Link href={site.contact}>Contact us</Link>.
        </p>
      </Page>
    </SitePage>
  );
}

function DashboardShell({ pathname, children }: { pathname: string; children: ReactNode }) {
  const navigation: AppShellNavSection[] = [
    { id: "main", items: navItems(MAIN_NAV, pathname) },
    { id: "my-government", heading: "My government", items: navItems(MY_GOVERNMENT, pathname) },
  ].filter((section) => section.items.length > 0);
  return (
    <AppShell
      brand={brand}
      brandCompact={brandCompact}
      navigation={navigation}
      sidebarHeader={<ActingAsPanel />}
      sidebarFooter={navItems(FOOTER_NAV, pathname)}
      tabs={tabItems(pathname)}
      topBar={<AccountBar />}
      banner={siteBanner}
    >
      {children}
    </AppShell>
  );
}

/** Pages need the signed-in person; show why if /me fails, and keep the shell. */
function MeGate({ children }: { children: ReactNode }) {
  const me = useMe();
  if (me.status === "loading") return <Loading label="Loading your details" />;
  if (me.status === "error") {
    return (
      <Page title="We could not load your account">
        <ApiErrorNotice
          error={me.error}
          title="We could not load your details"
          onRetry={me.reload}
        />
      </Page>
    );
  }
  return <>{children}</>;
}

function DashboardArea({
  pathname,
  session,
  refresh,
}: {
  pathname: string;
  session: SessionState;
  refresh: () => void;
}) {
  if (session.status === "loading") {
    return (
      <SiteShell signedIn={false}>
        <SitePage>
          <Loading label="Checking whether you are signed in" />
        </SitePage>
      </SiteShell>
    );
  }
  if (session.status === "error") {
    return (
      <SiteShell signedIn={false}>
        <SitePage>
          <Page title="We could not check whether you are signed in">
            <ApiErrorNotice
              error={session.error}
              title="Sign-in could not be checked"
              onRetry={refresh}
            />
          </Page>
        </SitePage>
      </SiteShell>
    );
  }
  if (session.status === "unauthenticated") {
    return (
      <SiteShell signedIn={false}>
        <SignInPage returnTo={currentPath()} reason={session.reason} />
      </SiteShell>
    );
  }
  const content = renderDashboardRoute(pathname, { signedIn: true }) ?? <DashboardNotFound />;
  return (
    <MeProvider identityId={session.session.identityId ?? ""}>
      <DashboardShell pathname={pathname}>
        <MeGate>{content}</MeGate>
      </DashboardShell>
    </MeProvider>
  );
}

function SiteArea({
  pathname,
  signedIn,
  signInError,
}: {
  pathname: string;
  signedIn: boolean;
  signInError: string | undefined;
}) {
  const page = renderSiteRoute(pathname, { signedIn }) ?? <SiteNotFound />;
  return (
    <SiteShell signedIn={signedIn}>
      {signInError && (
        <div className="site-wrap site-page-notice">
          <SignInErrorNotice code={signInError} />
        </div>
      )}
      {page}
    </SiteShell>
  );
}

function Routed() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { state: session, refresh } = useSession();
  const signInError = useSignInError();
  useRouteFocus(pathname);

  const signedIn = session.status === "authenticated";
  const signedOutByUser = session.status === "unauthenticated" && session.reason === "signed-out";
  const dashboard = isDashboardPath(pathname);

  useEffect(() => {
    // Signed in: "/" is the dashboard home.
    if (signedIn && pathname === site.home && !signInError) {
      navigate(paths.home, { replace: true });
    }
    // Just signed out from a signed-in page: confirm it on the signed-out page.
    if (signedOutByUser && dashboard) navigate(site.signedOut, { replace: true });
  }, [signedIn, signedOutByUser, dashboard, pathname, signInError, navigate]);

  if (dashboard) {
    return <DashboardArea pathname={pathname} session={session} refresh={() => void refresh()} />;
  }
  return <SiteArea pathname={pathname} signedIn={signedIn} signInError={signInError} />;
}

export function App() {
  return (
    <RouterProvider>
      <Routed />
    </RouterProvider>
  );
}
