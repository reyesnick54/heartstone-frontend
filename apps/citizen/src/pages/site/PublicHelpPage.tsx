// Public help (design: website/pages/PublicHelp.html). Signed-in help stays at /dashboard/help.
import { Card, Link } from "@heartstone/ui";
import { Page } from "../../components/Page";
import { Phone } from "../../components/Phone";
import { SitePage } from "../../components/SiteShell";
import { site } from "../../lib/paths";
import { TENANT } from "../../tenant";

const GROUPS = [
  {
    title: "Your account and digital ID",
    links: [
      { label: "Get a digital ID", href: site.digitalId },
      { label: "Help with signing in", href: site.signInHelp },
      { label: "Acting for a business", href: site.business },
      { label: "Government official sign in", href: site.officials },
    ],
  },
  {
    title: "Staying safe",
    links: [
      { label: "How to tell this site is official", href: site.howToTell },
      { label: "Report a scam", href: site.scam },
      { label: "Check a document is genuine", href: site.verify },
    ],
  },
  {
    title: "Finding a service",
    links: [
      { label: "Search all services", href: site.services },
      { label: "Browse by topic", href: site.topics },
      { label: "Life events", href: site.lifeEvents },
    ],
  },
  {
    title: "Something not working?",
    links: [
      { label: "Service status", href: site.status },
      { label: "Accessibility statement", href: site.accessibility },
      { label: "Privacy notice", href: site.privacy },
    ],
  },
];

// Answers that follow from how the platform works (payment is not approval, upload is not
// verification, recorded authority). Nothing here states a department's rules.
const QUESTIONS = [
  {
    q: "How long will my application take?",
    a: "Each service shows an estimated time before you start, when the office has published one. Once you've applied, sign in to see where your application is and what happens next.",
  },
  {
    q: "Does paying the fee mean I'm approved?",
    a: "No. Paying is a separate step. Your application is decided by the responsible office, and you'll see the decision in your account.",
  },
  {
    q: "I sent a document. Has it been accepted?",
    a: "Not yet. Documents show as “not yet checked” until an officer has looked at them.",
  },
  {
    q: "Can someone apply for me?",
    a: "Yes, if you give them authority and it is recorded. They'll see only what that authority covers, until it ends.",
  },
  {
    q: "What if I disagree with a decision?",
    a: "The decision tells you how to ask for it to be looked at again and by when.",
  },
];

export function PublicHelpPage() {
  return (
    <SitePage>
      <Page title="Help" description="Answers to common questions, and how to reach a person.">
        <div className="site-link-groups">
          {GROUPS.map((group) => (
            <Card key={group.title} title={group.title} titleLevel={2}>
              <ul className="site-plain-list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="section-heading">
            Common questions
          </h2>
          <div className="site-faq">
            {QUESTIONS.map((item) => (
              <details key={item.q} className="site-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
        <Card title="Talk to someone" titleLevel={2}>
          <p>
            Service advisers can help you find the right service and complete forms. Phone:{" "}
            <Phone />. Hours: {TENANT.supportHours}.
          </p>
          <p>
            <Link href={site.offices}>Find an office</Link> ·{" "}
            <Link href={site.contact}>All contact options</Link>
          </p>
        </Card>
      </Page>
    </SitePage>
  );
}
