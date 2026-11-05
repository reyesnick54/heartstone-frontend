// F2 citizen shell: real sign-in through the gateway, the signed-in person's name from
// GET /experience/citizen/me, and sign-out. No routing yet (F3), and no other government data.
import { useEffect, useState } from "react";
import {
  SIGNIN_ERROR_PARAM,
  defaultMessageFor,
  loginUrl,
  providerLogoutUrl,
  unwrap,
  type Api,
  type HeartStoneApiError,
} from "@heartstone/api-client";
import { useApi, useSession, type SignedOutReason } from "@heartstone/api-client/react";
import {
  AppShell,
  ApplicationsIcon,
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
  PageHeader,
  ServicesIcon,
  Stack,
  type AppShellNavItem,
} from "@heartstone/ui";
import { LAUNCH, TENANT_PLACEHOLDER } from "./tenant";

export const EXPERIENCE_NAME = "Citizen";

const tabs: AppShellNavItem[] = [
  { id: "home", label: "Home", href: "/", icon: <HomeIcon size={22} />, current: true },
  { id: "services", label: "Services", href: "#services", icon: <ServicesIcon size={22} /> },
  {
    id: "applications",
    label: "Applications",
    href: "#applications",
    icon: <ApplicationsIcon size={22} />,
  },
  { id: "messages", label: "Messages", href: "#messages", icon: <MessagesIcon size={22} /> },
  { id: "more", label: "More", href: "#menu", icon: <MenuIcon size={22} /> },
];

const brand = (
  <a href="/" className="brand">
    {TENANT_PLACEHOLDER.productName}
  </a>
);

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
    const params = new URLSearchParams(window.location.search);
    return params.get(SIGNIN_ERROR_PARAM) ?? undefined;
  });
  useEffect(() => {
    if (!code) return;
    const url = new URL(window.location.href);
    url.searchParams.delete(SIGNIN_ERROR_PARAM);
    window.history.replaceState(window.history.state, "", url);
  }, [code]);
  return code;
}

function currentPath(): string {
  if (typeof window === "undefined") return "/";
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function ApiErrorNotice({ error, onRetry }: { error: HeartStoneApiError; onRetry?: () => void }) {
  switch (error.kind) {
    case "safe-halt":
      return (
        <Notice tone="warning" title="This service is paused">
          {defaultMessageFor("safe-halt")} Nothing you have submitted has been lost.
        </Notice>
      );
    case "step-up-required":
      return (
        <Notice tone="info" title="Please sign in again">
          <Stack gap="3">
            <span>{defaultMessageFor("step-up-required")}</span>
            <Link href={loginUrl({ returnTo: currentPath(), reauth: true })} standalone>
              Sign in again
            </Link>
          </Stack>
        </Notice>
      );
    case "forbidden":
      return (
        <Notice tone="warning" title="We could not show your details">
          {defaultMessageFor("forbidden")}
        </Notice>
      );
    case "rate-limited":
    case "network":
    case "server":
    default:
      return (
        <Notice tone="error" title="We could not load your details">
          <Stack gap="3">
            <span>{defaultMessageFor(error.kind)}</span>
            {error.correlationId && <span>Reference: {error.correlationId}</span>}
            {onRetry && (
              <Cluster gap="3">
                <Button variant="secondary" onClick={onRetry}>
                  Try again
                </Button>
              </Cluster>
            )}
          </Stack>
        </Notice>
      );
  }
}

type MeState =
  | { status: "idle" | "loading" }
  | { status: "ready"; me: Api.CitizenMe }
  | { status: "error"; error: HeartStoneApiError };

type MeResult = Exclude<MeState, { status: "idle" | "loading" }> & { key: string };

/**
 * Loads GET /experience/citizen/me for the signed-in identity. `identityId` is undefined when
 * signed out. Loading is derived (no result yet for this identity and attempt), so the effect only
 * sets state from the response.
 */
function useCitizenMe(identityId: string | undefined): { state: MeState; reload: () => void } {
  const client = useApi();
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<MeResult | null>(null);
  const key = `${identityId ?? ""}:${attempt}`;

  useEffect(() => {
    if (identityId === undefined) return;
    let active = true;
    unwrap(client.GET("/experience/citizen/me"))
      .then((me) => active && setResult({ key, status: "ready", me }))
      .catch((error: HeartStoneApiError) => active && setResult({ key, status: "error", error }));
    return () => {
      active = false;
    };
  }, [client, identityId, key]);

  let state: MeState = { status: "idle" };
  if (identityId !== undefined) state = result?.key === key ? result : { status: "loading" };
  return { state, reload: () => setAttempt((n) => n + 1) };
}

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

function AccountBar({ me }: { me: MeState }) {
  const { state } = useSession();
  if (state.status !== "authenticated") return null;
  return (
    <Cluster gap="3" align="center" justify="end">
      {me.status === "ready" && (
        <span className="account-name">
          Signed in as <strong>{me.me.profile.displayName}</strong>
        </span>
      )}
      <SignOutButton />
    </Cluster>
  );
}

function SignedOut({ reason }: { reason: SignedOutReason | undefined }) {
  return (
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
        {reason === undefined && <p>Sign in with your digital ID to see your details.</p>}
        <Link href={loginUrl({ returnTo: currentPath() })} standalone className="sign-in-link">
          Sign in
        </Link>
      </Stack>
    </Card>
  );
}

function SignedIn({ me }: { me: MeState }) {
  if (me.status === "error") return null;
  if (me.status !== "ready") return <Loading label="Loading your details" />;
  const { profile, disclaimer } = me.me;
  return (
    <Card title="Your account" titleLevel={2}>
      <Stack gap="3">
        <p>
          Signed in as <strong>{profile.displayName}</strong>.
        </p>
        <p>{disclaimer.label}</p>
      </Stack>
    </Card>
  );
}

export function App() {
  const { state: session, refresh } = useSession();
  const signInError = useSignInError();
  const authenticated = session.status === "authenticated";
  const { state: me, reload } = useCitizenMe(
    authenticated ? (session.session.identityId ?? "") : undefined,
  );

  const errorCopy = signInError
    ? (SIGN_IN_ERRORS[signInError] ?? SIGN_IN_ERRORS["failed"])
    : undefined;

  return (
    <AppShell
      brand={brand}
      navigation={[{ id: "main", items: tabs.slice(0, 4) }]}
      tabs={tabs}
      topBar={<AccountBar me={me} />}
      banner={
        <OfficialMark
          statement={TENANT_PLACEHOLDER.officialStatement}
          learnMoreHref={TENANT_PLACEHOLDER.officialInfoHref}
          {...(LAUNCH.isLiveService ? {} : { aside: LAUNCH.notLiveNotice })}
        />
      }
    >
      <PageHeader
        title={`HeartStone — ${EXPERIENCE_NAME}`}
        description="Sign in and see your account. More services arrive in later stages."
      />

      {!LAUNCH.isLiveService && (
        <Notice tone="info" title="Development build">
          Not a live government service. Do not use real personal information.
        </Notice>
      )}

      {errorCopy && !authenticated && (
        <Notice tone="error" title={errorCopy.title}>
          {errorCopy.body}
        </Notice>
      )}

      {session.status === "loading" && <Loading label="Checking whether you are signed in" />}

      {session.status === "error" && (
        <ApiErrorNotice error={session.error} onRetry={() => void refresh()} />
      )}

      {session.status === "unauthenticated" && <SignedOut reason={session.reason} />}

      {authenticated && (
        <>
          {me.status === "error" && <ApiErrorNotice error={me.error} onRetry={reload} />}
          <SignedIn me={me} />
        </>
      )}
    </AppShell>
  );
}
