// Services for individuals and families (design: website/pages/Individuals.html): the tenant's
// services for individuals, grouped by area, with the life events that concern them.
import { Card, Link } from "@heartstone/ui";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Page } from "../../components/Page";
import { Phone } from "../../components/Phone";
import { SiteSearchForm } from "../../components/SiteSearch";
import { SitePage } from "../../components/SiteShell";
import { site } from "../../lib/paths";
import { WEBSITE_CONTENT } from "../../tenant";
import { LifeEventItems } from "./LifeEventsPages";
import { ServiceItems } from "./ServicesSitePages";
import { SignInCard } from "./SignInCard";

const C = WEBSITE_CONTENT;

export function IndividualsPage() {
  const services = C.services.filter((s) => s.audiences.includes("individuals"));
  const areas = C.categories.filter((c) => services.some((s) => s.categoryCode === c.code));
  const slugs = new Set(services.map((s) => s.slug));
  const events = C.lifeEvents.filter((e) =>
    e.steps.some((step) => step.serviceSlugs.some((slug) => slugs.has(slug))),
  );
  return (
    <SitePage>
      <Breadcrumbs trail={[{ label: "Individuals and families", href: site.individuals }]} />
      <Page
        title="Services for individuals and families"
        description={`Working, living and moving in the ${C.organisation.fullName}.`}
      >
        <SiteSearchForm
          label="Search services for individuals"
          hint={C.home.searchHint}
          className="site-inline-search"
          landmarkLabel="Search services for individuals"
        />
        {areas.map((area) => (
          <section key={area.code} aria-labelledby={`individuals-${area.code}`}>
            <h2 id={`individuals-${area.code}`} className="section-heading">
              {area.name}
            </h2>
            <ServiceItems
              services={services.filter((s) => s.categoryCode === area.code)}
              label={`${area.name}: services for individuals`}
            />
          </section>
        ))}
        <section aria-labelledby="individuals-events">
          <h2 id="individuals-events" className="section-heading">
            Step-by-step guides
          </h2>
          <LifeEventItems events={events} label="Guides for individuals and families" />
        </section>
        <SignInCard title="Already applied for something?">
          Sign in to see your applications, documents, payments and messages in one place.
        </SignInCard>
        <Card title="Need help?" titleLevel={2}>
          <p>
            Service advisers can help by phone: <Phone />.{" "}
            <Link href={site.contact}>Contact {C.organisation.shortName}</Link>
          </p>
        </Card>
      </Page>
    </SitePage>
  );
}
