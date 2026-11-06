// Website information pages (designs: website/pages/LifeEvents.html, Contact.html, Offices.html,
// Status.html, Scam.html, About.html, Accessibility.html, Privacy.html, Terms.html).
//
// Where the design shows content that needs a backend feed, an approved legal text or an
// operator's details that do not exist yet, the page says plainly that it is coming, instead of
// showing example data. Statements kept here are true of the platform itself.
import { loginUrl } from "@heartstone/api-client";
import { Card, EmptyState, Link, Notice, Stack } from "@heartstone/ui";
import { Page } from "../../components/Page";
import { Phone } from "../../components/Phone";
import { SitePage } from "../../components/SiteShell";
import { paths, site } from "../../lib/paths";
import { TENANT } from "../../tenant";

function NeedHelp() {
  return (
    <Card title="Need help?" titleLevel={2}>
      <p>
        Service advisers can help by phone: <Phone />. <Link href={site.contact}>Contact us</Link>
      </p>
    </Card>
  );
}

/** A statement that must be approved before it is published (legal, accessibility). */
function DraftNotice({ what }: { what: string }) {
  return (
    <Notice tone="warning" title="Being prepared">
      The full {what} is being prepared and has not been approved yet. What follows describes how
      this website works today.
    </Notice>
  );
}

export function LifeEventsPage() {
  return (
    <SitePage>
      <Page
        title="Life events"
        description="Step-by-step guides for big moments, bringing together everything you need to do, in order, across every government office."
      >
        <EmptyState
          title="Guides are coming soon"
          titleLevel={2}
          description="Life event guides are being prepared with the offices involved. Until then, search for the service you need."
          action={<Link href={site.services}>Search all services</Link>}
        />
        <NeedHelp />
      </Page>
    </SitePage>
  );
}

export function ContactPage() {
  return (
    <SitePage>
      <Page
        title="Contact us"
        description="Service advisers can help with any government service. If you've already applied, have your application reference ready."
      >
        <Notice tone="info" title="In an emergency">
          Call {TENANT.emergencyNumber}. Do not use this website to report an emergency.
        </Notice>
        <Card title="By phone" titleLevel={2}>
          <p>
            <Phone />. Hours: {TENANT.supportHours}.
          </p>
        </Card>
        <Card title="In person" titleLevel={2}>
          <p>
            <Link href={site.offices}>Find an office</Link>
          </p>
        </Card>
        <Card title="About an application you've made" titleLevel={2}>
          <p>
            Sign in to see its status, what&rsquo;s needed next and any messages from the
            department. <Link href={loginUrl({ returnTo: paths.applications })}>Sign in</Link>
          </p>
        </Card>
        <Card title="Unhappy with a decision or our service?" titleLevel={2}>
          <p>
            A decision tells you how to ask for it to be looked at again.{" "}
            <Link href={site.help}>Help</Link>
          </p>
        </Card>
      </Page>
    </SitePage>
  );
}

export function OfficesPage() {
  return (
    <SitePage>
      <Page
        title="Find a government office"
        description="Many services are online. If you need to visit, check what to bring and whether you need an appointment."
      >
        <EmptyState
          title="Office details are coming soon"
          titleLevel={2}
          description="Addresses, opening hours and the services each office offers will be listed here once they are confirmed."
          action={<Link href={site.contact}>Contact us</Link>}
        />
      </Page>
    </SitePage>
  );
}

export function StatusPage() {
  return (
    <SitePage>
      <Page
        title="Service status"
        description="Check whether online services are working, and when maintenance is planned."
      >
        <EmptyState
          title="Live service status is not available yet"
          titleLevel={2}
          description="This page will show problems and planned maintenance once a live status feed is connected. If something is not working, please try again later or contact us."
          action={<Link href={site.contact}>Contact us</Link>}
        />
      </Page>
    </SitePage>
  );
}

export function ScamPage() {
  return (
    <SitePage>
      <Page
        title="Report a scam"
        description="Tell us about a message, call or website pretending to be from government."
      >
        <Notice tone="warning" title="If you've lost money or shared bank details">
          Contact your bank straight away. If you&rsquo;re in danger, call {TENANT.emergencyNumber}.
        </Notice>
        <Card title="How to report it" titleLevel={2}>
          <Stack gap="3">
            <p>
              Reporting a scam online is not available yet. Please call a service adviser on{" "}
              <Phone /> and tell them how you were contacted and what was asked of you.
            </p>
            <p>Shared your sign-in details? Change your password straight away, then call us.</p>
          </Stack>
        </Card>
        <Card title="Spotting a scam" titleLevel={2}>
          <Link href={site.howToTell}>How to tell this site is official</Link>
        </Card>
      </Page>
    </SitePage>
  );
}

export function AboutPage() {
  return (
    <SitePage>
      <Page
        title="About this site"
        description={`${TENANT.displayName}: find, apply for and track government services with one account.`}
      >
        <Card title="What you can do here" titleLevel={2}>
          <ul className="bullets">
            <li>Find a government service, and see what you need before you start</li>
            <li>Apply once, even when several departments are involved</li>
            <li>Track your applications, payments and appointments in one place</li>
            <li>Check that a government document is genuine</li>
            <li>Act for a business or another person, when you have recorded authority to</li>
          </ul>
        </Card>
        <Card title="Who makes decisions" titleLevel={2}>
          <Stack gap="3">
            <p>
              Decisions are made by the government officials who hold the authority to make them,
              never by this website. Paying a fee or sending a document does not mean an application
              has been approved.
            </p>
            <p>
              Some staff tools use AI to help organise and summarise information. AI does not
              approve, refuse or issue anything.
            </p>
          </Stack>
        </Card>
        <Card title="Our standards" titleLevel={2}>
          <ul className="bullets">
            <li>Plain language that anyone can follow</li>
            <li>
              Accessible to people with disabilities: see the{" "}
              <Link href={site.accessibility}>accessibility statement</Link>
            </li>
            <li>
              Your information used only for the service you asked for: see the{" "}
              <Link href={site.privacy}>privacy notice</Link>
            </li>
            <li>Every important action recorded, so decisions can be explained and checked</li>
          </ul>
        </Card>
        <Card title="The platform" titleLevel={2}>
          <p>
            The site runs on HeartStone, a digital government service platform. The same platform
            supports the workstation that government staff use to handle applications.
          </p>
        </Card>
      </Page>
    </SitePage>
  );
}

export function AccessibilityPage() {
  return (
    <SitePage>
      <Page
        title="Accessibility statement"
        description="We want everyone to be able to use this website, including people with disabilities."
      >
        <DraftNotice what="accessibility statement, including the results of an independent audit," />
        <Card title="Using this website" titleLevel={2}>
          <Stack gap="3">
            <p>The website is built so that you should be able to:</p>
            <ul className="bullets">
              <li>zoom in without text spilling off the screen</li>
              <li>navigate the whole site using just a keyboard</li>
              <li>use the site with a screen reader or speech recognition software</li>
              <li>use the site on a phone, with large touch targets</li>
            </ul>
            <p>
              We aim to meet the Web Content Accessibility Guidelines (WCAG) version 2.2 at level
              AA. The site has not yet been independently audited.
            </p>
          </Stack>
        </Card>
        <Card title="Reporting a problem" titleLevel={2}>
          <p>
            If you find a part of the site you can&rsquo;t use, call <Phone /> and tell us which
            page and what went wrong.
          </p>
        </Card>
      </Page>
    </SitePage>
  );
}

export function PrivacyPage() {
  return (
    <SitePage>
      <Page
        title="Privacy notice"
        description="How your personal information is used when you use this website and its services."
      >
        <DraftNotice what="privacy notice, with the responsible organisation and your rights under data protection law," />
        <Card title="Who we share it with" titleLevel={2}>
          <p>
            Your information is shared only with the departments that need it to handle your
            request, or where the law requires it. Departments do not get access to your information
            just because they use the same platform.
          </p>
        </Card>
        <Card title="Automated tools" titleLevel={2}>
          <p>Decisions about you are made by government officials, not by automated tools.</p>
        </Card>
        <Card title="Cookies" titleLevel={2}>
          <p>
            This website uses only the cookies needed to sign you in and keep your session secure.
            It does not use advertising or analytics cookies.
          </p>
        </Card>
      </Page>
    </SitePage>
  );
}

export function TermsPage() {
  return (
    <SitePage>
      <Page title="Terms of use" description="The rules for using this website.">
        <DraftNotice what="terms of use" />
        <Card title="Your account" titleLevel={2}>
          <ul className="bullets">
            <li>Keep your sign-in details private. Don&rsquo;t let anyone else use your account</li>
            <li>Tell us straight away if you think someone else has used it</li>
            <li>
              You can act for a business or another person only when that authority has been
              recorded
            </li>
          </ul>
        </Card>
        <Card title="Guidance on this site" titleLevel={2}>
          <p>
            Guides and eligibility checks on this site help you understand a service. They are not
            decisions. Only the responsible department can decide an application.
          </p>
        </Card>
        <Card title="Payments" titleLevel={2}>
          <p>Paying a fee does not mean your application is approved.</p>
        </Card>
      </Page>
    </SitePage>
  );
}
