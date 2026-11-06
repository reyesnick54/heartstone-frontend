// Citizen web app: the gateway session decides between the signed-out landing and the signed-in
// dashboard; the router decides the page. Every page reads the backend through
// @heartstone/api-client and shows only what the backend returned.
import { useEffect, useState, type ReactNode } from "react";
import { SIGNIN_ERROR_PARAM, loginUrl, providerLogoutUrl } from "@heartstone/api-client";
import { useSession, type SignedOutReason } from "@heartstone/api-client/react";
import {
  AppShell,
  ApplicationsIcon,
  BrandLockup,
  Button,
  Card,
  Cluster,
  HomeIcon,
  Link,
  Loading,
  MenuIcon,
  MessagesIcon,
  Notice,
  OfficialMark,
  ServicesIcon,
  ShieldIcon,
  Stack,
  type AppShellNavItem,
  type AppShellNavSection,
} from "@heartstone/ui";
import { ApiErrorNotice, currentPath } from "./components/ApiErrorNotice";
import { Page } from "./components/Page";
import { initials } from "./lib/format";
import { MeProvider, activeRepresentations, useMe } from "./lib/me";
import { FOOTER_NAV, MAIN_NAV, MY_GOVERNMENT, type NavEntry } from "./lib/nav";
import { paths } from "./lib/paths";
import { hasRoute, isPublicRoute, renderRoute } from "./routes";
import { RouterProvider, useLocation, useRouteFocus } from "./router/router";
import { LAUNCH, TENANT } from "./tenant";

export const EXPERIENCE_NAME = "Citizen services";

const SIGN_IN_ERRORS: Record<string, { title: string; body: string }> = {
  cancelled: { title: "Sign-in cancelled", body: "You can sign in again when you are ready." },
  expired: {
    title: "Sign-in took too long",
    body: "For your security the sign-in link expired. Please sign in again.",
  },
  "not-linked": {
    title: "We could not find your account",
    body: "Your digital ID signed you in, but it is not linked to an account here yet.",
  },
  unavailable: {
    title: "Sign-in is not available right now",
    body: "Please try again later.",
  },
  failed: { title: "Sign-in did not complete", body: "Please try signing in again." },
};

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
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navItems(entries: NavEntry[], pathname: string): AppShellNavItem[] {
  return entries
    .filter((entry) => hasRoute(entry.href))
    .map((entry) => ({ ...entry, current: isCurrent(entry.href, pathname) }));
}

function tabItems(pathname: string, signedIn: boolean): AppShellNavItem[] {
  if (!signedIn) {
    return [
      {
        id: "home",
        label: "Home",
        href: "/",
        icon: <HomeIcon size={22} />,
        current: pathname === "/",
      },
      {
        id: "verify",
        label: "Check a document",
        href: paths.verify,
        icon: <ShieldIcon size={22} />,
        current: isCurrent(paths.verify, pathname),
      },
    ].filter((item) => item.href === "/" || hasRoute(item.href));
  }
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
const brand = <BrandLockup href="/" image={TENANT.lockup.onDark} alt={TENANT.lockup.alt} />;
/** Top bar (light surface, below 900px): the lockup with the dark wordmark. */
const brandCompact = (
  <BrandLockup href="/" image={TENANT.lockup.onLight} alt={TENANT.lockup.alt} size="sm" />
);

const banner = (
  <OfficialMark
    statement={TENANT.officialStatement}
    learnMoreHref={TENANT.howToTellHref}
    {...(LAUNCH.isLiveService ? {} : { aside: LAUNCH.notLiveNotice })}
  />
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

function NotFoundPage() {
  return (
    <Page title="Page not found" description="The page you asked for does not exist here.">
      <p>
        If you typed the address, check it is correct. You can{" "}
        <Link href={paths.home}>go to your home page</Link>.
      </p>
    </Page>
  );
}

function Landing({
  reason,
  signInError,
}: {
  reason: SignedOutReason | undefined;
  signInError: string | undefined;
}) {
  const errorCopy = signInError
    ? (SIGN_IN_ERRORS[signInError] ?? SIGN_IN_ERRORS["failed"])
    : undefined;
  return (
    <Page
      title={`${TENANT.displayName} — ${EXPERIENCE_NAME}`}
      description="Apply for government services, track your applications, pay fees and read messages from government offices, in one place."
    >
      {!LAUNCH.isLiveService && (
        <Notice tone="info" title="Development build">
          Not a live government service. Do not use real personal information.
        </Notice>
      )}
      {errorCopy && (
        <Notice tone="error" title={errorCopy.title}>
          {errorCopy.body}
        </Notice>
      )}
      <Card title="Sign in" titleLevel={2}>
        <Stack gap="4">
          {reason === "signed-out" && (
            <p>
              You have signed out of this service.{" "}
              <Link href={providerLogoutUrl()}>Also sign out of your digital ID</Link>
            </p>
          )}
          {reason === "session-ended" && (
            <p>Your session has ended. Please sign in again to continue.</p>
          )}
          {reason === undefined && (
            <p>Sign in with {TENANT.digitalIdName} to see your services and records.</p>
          )}
          <Link href={loginUrl({ returnTo: currentPath() })} standalone className="sign-in-link">
            Sign in
          </Link>
        </Stack>
      </Card>
      {hasRoute(paths.verify) && (
        <Card title="Has someone shown you a government document?" titleLevel={2}>
          <p>
            Anyone can check that a licence or certificate is genuine using its verification code.
            No account needed. <Link href={paths.verify}>Check a document</Link>
          </p>
        </Card>
      )}
    </Page>
  );
}

function SignedInApp({ pathname }: { pathname: string }) {
  const navigation: AppShellNavSection[] = [
    { id: "main", items: navItems(MAIN_NAV, pathname) },
    { id: "my-government", heading: "My government", items: navItems(MY_GOVERNMENT, pathname) },
  ].filter((section) => section.items.length > 0);
  const content = renderRoute(pathname, { signedIn: true }) ?? <NotFoundPage />;
  return (
    <AppShell
      brand={brand}
      brandCompact={brandCompact}
      navigation={navigation}
      sidebarHeader={<ActingAsPanel />}
      sidebarFooter={navItems(FOOTER_NAV, pathname)}
      tabs={tabItems(pathname, true)}
      topBar={<AccountBar />}
      banner={banner}
    >
      <MeGate>{content}</MeGate>
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

function SignedOutApp({
  pathname,
  reason,
  signInError,
}: {
  pathname: string;
  reason: SignedOutReason | undefined;
  signInError: string | undefined;
}) {
  const publicPage = isPublicRoute(pathname)
    ? renderRoute(pathname, { signedIn: false })
    : undefined;
  return (
    <AppShell
      brand={brand}
      brandCompact={brandCompact}
      navigation={[{ id: "main", items: tabItems(pathname, false) }]}
      tabs={tabItems(pathname, false)}
      banner={banner}
    >
      {publicPage ?? <Landing reason={reason} signInError={signInError} />}
    </AppShell>
  );
}

function Routed() {
  const { pathname } = useLocation();
  const { state: session, refresh } = useSession();
  const signInError = useSignInError();
  useRouteFocus(pathname);

  if (session.status === "loading") {
    return (
      <AppShell brand={brand} brandCompact={brandCompact} navigation={[]} tabs={[]} banner={banner}>
        <Loading label="Checking whether you are signed in" />
      </AppShell>
    );
  }
  if (session.status === "error") {
    return (
      <AppShell brand={brand} brandCompact={brandCompact} navigation={[]} tabs={[]} banner={banner}>
        <Page title={`${TENANT.displayName} — ${EXPERIENCE_NAME}`}>
          <ApiErrorNotice
            error={session.error}
            title="We could not check whether you are signed in"
            onRetry={() => void refresh()}
          />
        </Page>
      </AppShell>
    );
  }
  if (session.status === "unauthenticated") {
    return <SignedOutApp pathname={pathname} reason={session.reason} signInError={signInError} />;
  }
  return (
    <MeProvider identityId={session.session.identityId ?? ""}>
      <SignedInApp pathname={pathname} />
    </MeProvider>
  );
}

export function App() {
  return (
    <RouterProvider>
      <Routed />
    </RouterProvider>
  );
}
