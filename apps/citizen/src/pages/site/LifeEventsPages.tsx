// Life events (designs: website/pages/LifeEvents.html, LifeEvent.html): the services someone
// usually needs for a common situation, in order, from the tenant's website content.
import { Card, ItemList, Link, Notice, Stack } from "@heartstone/ui";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SourcesNote } from "../../components/ContentBlocks";
import { Disclaimer } from "../../components/Disclaimer";
import { Page } from "../../components/Page";
import { Phone } from "../../components/Phone";
import { SitePage } from "../../components/SiteShell";
import type { LifeEvent } from "../../content/schema";
import { site } from "../../lib/paths";
import { WEBSITE_CONTENT } from "../../tenant";
import { findService } from "./ServicesSitePages";
import { SignInCard } from "./SignInCard";

const C = WEBSITE_CONTENT;

export function LifeEventItems({ events, label }: { events: readonly LifeEvent[]; label: string }) {
  return (
    <ItemList
      label={label}
      variant="grid"
      items={events.map((e) => ({
        id: e.slug,
        title: e.title,
        href: site.lifeEvent(e.slug),
        description: e.summary,
      }))}
    />
  );
}

export function LifeEventsPage() {
  return (
    <SitePage>
      <Breadcrumbs trail={[{ label: "Life events", href: site.lifeEvents }]} />
      <Page
        title="Life events"
        description="Guides for common situations, bringing together the services you are likely to need, in order."
      >
        <LifeEventItems events={C.lifeEvents} label="Life events" />
        <Card title="Can't see your situation?" titleLevel={2}>
          <p>
            <Link href={site.services}>Browse all services</Link> or{" "}
            <Link href={site.contact}>contact {C.organisation.shortName}</Link>.
          </p>
        </Card>
      </Page>
    </SitePage>
  );
}

export function LifeEventPage({ slug }: { slug: string }) {
  const event = C.lifeEvents.find((e) => e.slug === slug);
  if (!event) {
    return (
      <SitePage>
        <Page title="Guide not found">
          <Notice tone="info">
            There is no guide at this address.{" "}
            <Link href={site.lifeEvents}>See all life events</Link>
          </Notice>
        </Page>
      </SitePage>
    );
  }
  return (
    <SitePage>
      <Breadcrumbs
        trail={[
          { label: "Life events", href: site.lifeEvents },
          { label: event.title, href: site.lifeEvent(event.slug) },
        ]}
      />
      <Page title={event.title} description={event.intro}>
        <ol className="site-guide" aria-label={`Steps: ${event.title}`}>
          {event.steps.map((step, i) => (
            <li key={step.title} className="site-guide-step">
              <span className="site-guide-number" aria-hidden="true">
                {i + 1}
              </span>
              <div className="site-guide-body">
                <h2 className="site-h3">
                  <span className="visually-hidden">Step {i + 1}: </span>
                  {step.title}
                </h2>
                <p>{step.detail}</p>
                <ul className="site-plain-list">
                  {step.serviceSlugs.map((s) => {
                    const service = findService(s);
                    return service ? (
                      <li key={s}>
                        <Link href={site.service(s)}>{service.name}</Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <Disclaimer>
          This guide is information, not a decision. Not every step applies to everyone, and{" "}
          {C.organisation.shortName} confirms what your case needs.
        </Disclaimer>
        <SignInCard title="Track every step in one place">
          Sign in and your applications appear together in your account, with what&rsquo;s needed
          next.
        </SignInCard>
        <Card title="Need help?" titleLevel={2}>
          <Stack gap="2">
            <p>
              Service advisers can help by phone: <Phone />.
            </p>
            <Link href={site.contact}>Contact {C.organisation.shortName}</Link>
          </Stack>
        </Card>
        <SourcesNote sources={event.sources} />
      </Page>
    </SitePage>
  );
}
