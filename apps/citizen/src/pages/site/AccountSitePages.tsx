// Website pages about accounts and signing in (designs: website/pages/PublicSignIn.html,
// SignedOut.html, DigitalId.html, Officials.html, SignInHelp.html).
//
// A digital ID created here is a BASIC account: the identity provider confirms the email address,
// nobody has checked the person's identity. These pages never say otherwise.
import { loginUrl, providerLogoutUrl, registerUrl } from "@heartstone/api-client";
import type { SignedOutReason } from "@heartstone/api-client/react";
import { Card, Cluster, Link, Notice, Stack } from "@heartstone/ui";
import { Page } from "../../components/Page";
import { Phone } from "../../components/Phone";
import { SitePage } from "../../components/SiteShell";
import { paths, site } from "../../lib/paths";
import { workstationUrl } from "../../tenant";

export const SIGN_IN_ERRORS: Record<string, { title: string; body: string }> = {
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

/** The notice for a gateway `?signin_error=` code. */
export function SignInErrorNotice({ code }: { code: string }) {
  const copy = SIGN_IN_ERRORS[code] ?? SIGN_IN_ERRORS["failed"];
  if (!copy) return null;
  return (
    <Notice tone="error" title={copy.title}>
      {copy.body}
    </Notice>
  );
}

export interface SignInPageProps {
  /** Where to land after signing in. Defaults to the dashboard home. */
  returnTo?: string;
  /** Why the visitor is here, when the app knows (session ended). */
  reason?: SignedOutReason | undefined;
}

/**
 * Sign in. Shown at /sign-in, and in place of any signed-in page a signed-out visitor opens (with
 * that page as `returnTo`, so deep links survive sign-in).
 */
export function SignInPage({ returnTo = paths.home, reason }: SignInPageProps) {
  const workstation = workstationUrl();
  return (
    <SitePage>
      <Page
        title="Sign in"
        description="Sign in to apply for services, track applications, pay fees and see your documents."
      >
        {reason === "session-ended" && (
          <Notice tone="info" title="Your session has ended">
            For your security you were signed out. Please sign in again to continue.
          </Notice>
        )}
        <Card>
          <Stack gap="4">
            <Cluster gap="4" align="center">
              <Link href={loginUrl({ returnTo })} standalone className="button-link">
                Sign in with your digital ID
              </Link>
            </Cluster>
            <ul className="site-plain-list">
              <li>
                <Link href={registerUrl({ returnTo })}>I don&rsquo;t have a digital ID yet</Link>
              </li>
              <li>
                <Link href={site.signInHelp}>I can&rsquo;t sign in</Link>
              </li>
              <li>
                <Link href={site.verify}>Check a government document without signing in</Link>
              </li>
            </ul>
          </Stack>
        </Card>
        <Card title="Acting for a business?" titleLevel={2}>
          <p>
            Sign in as yourself. You can then act for any business that has recorded your authority
            to represent it. <Link href={site.business}>About acting for a business</Link>
          </p>
        </Card>
        <Notice tone="info" title="Stay safe">
          We will never ask for your password or a sign-in code by email, text message or phone
          call. <Link href={site.howToTell}>How to tell this site is official</Link>
        </Notice>
        <Card title="Government official?" titleLevel={2}>
          <Link href={workstation ?? site.officials}>Sign in to the official workstation</Link>
        </Card>
      </Page>
    </SitePage>
  );
}

export function SignedOutPage() {
  return (
    <SitePage>
      <Page
        title="You've signed out"
        description="You're no longer signed in to your government account on this device."
      >
        <Card>
          <Stack gap="4">
            <p>
              Using a shared or public computer? Also sign out of your digital ID, then close the
              browser window, so no one else can see the pages you viewed.
            </p>
            <Cluster gap="4" align="center">
              <Link href={providerLogoutUrl()} standalone className="button-link">
                Also sign out of your digital ID
              </Link>
              <Link href={loginUrl({ returnTo: paths.home })} standalone>
                Sign in again
              </Link>
              <Link href={site.home} standalone>
                Go to the homepage
              </Link>
            </Cluster>
          </Stack>
        </Card>
        <p className="muted">
          Anything you hadn&rsquo;t submitted before signing out may not have been saved.
        </p>
      </Page>
    </SitePage>
  );
}

export function DigitalIdPage() {
  return (
    <SitePage>
      <Page
        title="Get a digital ID"
        description="Your digital ID is how you sign in to government services online. You use the same one for every service, so you only set it up once."
      >
        <Card title="With a digital ID you can" titleLevel={2}>
          <ul className="bullets">
            <li>Find services and start applications online</li>
            <li>Track your applications, payments and appointments in one place</li>
            <li>Receive messages and notices from government offices</li>
            <li>Act for a business, once the business has recorded your authority</li>
          </ul>
        </Card>
        <Card title="How to get one" titleLevel={2}>
          <ol className="bullets">
            <li>Choose &ldquo;Create your digital ID&rdquo; below.</li>
            <li>Enter your name and email address, and choose a password.</li>
            <li>Confirm your email address using the link we send you.</li>
            <li>You are then signed in and can use your account.</li>
          </ol>
        </Card>
        <Notice tone="info" title="This is a basic digital ID">
          Creating a digital ID confirms your email address. It does not check who you are. Checking
          your identity online, for example against your passport or national ID card, will be
          available later. Until then, some services may ask you to confirm your identity in person.
        </Notice>
        <Card title="Ready to start?" titleLevel={2} raised>
          <Cluster gap="4" align="center">
            <Link href={registerUrl({ returnTo: paths.home })} standalone className="button-link">
              Create your digital ID
            </Link>
            <Link href={loginUrl({ returnTo: paths.home })} standalone>
              Already have one? Sign in
            </Link>
          </Cluster>
        </Card>
        <Card title="Can't get one?" titleLevel={2}>
          <p>
            You can still get help in person, or someone you trust can be given authority to help
            you. <Link href={site.contact}>Contact us</Link>
          </p>
        </Card>
      </Page>
    </SitePage>
  );
}

export function OfficialsPage() {
  const workstation = workstationUrl();
  return (
    <SitePage>
      <Page
        title="Government official sign in"
        description="The official workstation is for authorised staff of government departments, agencies and approved external authorities."
      >
        <Card title="Sign in to the official workstation" titleLevel={2} raised>
          <Stack gap="4">
            {workstation ? (
              <div>
                <Link href={workstation} standalone className="button-link">
                  Go to the official workstation
                </Link>
              </div>
            ) : (
              <Notice tone="info">
                Your department&rsquo;s system administrator will give you the workstation address.
              </Notice>
            )}
            <p>
              You&rsquo;ll confirm it&rsquo;s you with your government account, then with a second
              step such as a security key or authenticator app.
            </p>
            <p>
              <strong>Authorised use only.</strong> Activity on the official workstation is recorded
              and audited.
            </p>
          </Stack>
        </Card>
        <Card title="What you can do depends on your role and authority" titleLevel={2}>
          <p>
            Signing in gives you access to the workstation. What you can see and decide is set by
            your office, your appointment and any delegation you hold, and is checked every time you
            act.
          </p>
        </Card>
        <Card title="Getting access" titleLevel={2}>
          <p>
            New staff get access through their department&rsquo;s system administrator once their
            appointment is recorded.
          </p>
        </Card>
        <Card title="Problems signing in?" titleLevel={2}>
          <p>
            Contact your department&rsquo;s IT service desk. Never share your security key or codes.
            Looking for services for yourself?{" "}
            <Link href={site.signIn}>Use the citizen sign in</Link>
          </p>
        </Card>
      </Page>
    </SitePage>
  );
}

const SIGN_IN_PROBLEMS = [
  {
    q: "I didn't get the email to confirm my address",
    a: "Check your spam or junk folder. The link expires after a while, so if it has been some time, start again from “Get a digital ID”.",
  },
  {
    q: "I've forgotten my password",
    a: "Choose “Sign in with your digital ID”, then “Forgot password?” on the sign-in page. We will email you a link to choose a new one.",
  },
  {
    q: "It says “We could not find your account”",
    a: "Your digital ID worked, but it is not linked to an account here yet. Contact us and we will help.",
  },
  {
    q: "I can't see a business I work for",
    a: "You can only act for a business that has given you recorded authority to represent it. Ask the business to record your authority.",
  },
  {
    q: "I think someone else has used my account",
    a: "Change your password straight away, then contact us so we can help you secure your account.",
  },
];

export function SignInHelpPage() {
  return (
    <SitePage>
      <Page title="Help with signing in" description="Choose the problem you're having.">
        <div className="site-faq">
          {SIGN_IN_PROBLEMS.map((item) => (
            <details key={item.q} className="site-faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <Notice tone="info" title="Stay safe">
          We will never ask for your password or sign-in code by phone, text message or email. If
          someone does, it&rsquo;s a scam.
        </Notice>
        <Card title="Still stuck?" titleLevel={2}>
          <p>
            Call a service adviser: <Phone />. Or <Link href={site.contact}>contact us</Link>.
            Government official? <Link href={site.officials}>Staff sign-in help</Link>.
          </p>
        </Card>
      </Page>
    </SitePage>
  );
}
