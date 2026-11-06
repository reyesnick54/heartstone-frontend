// Website services (designs: website/pages/PublicServices.html, PublicServiceDetail.html,
// Topics.html, Topic.html). Everything shown comes from the tenant's website content; the backend
// only adds an "Apply online" button when a service is published in its catalogue
// (OnlineApplication). Signed-in service pages stay at /dashboard/services.
import { useEffect } from "react";
import { Card, ItemList, Link, Notice, Stack } from "@heartstone/ui";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ContentTable, SourcesNote, StepList } from "../../components/ContentBlocks";
import { Disclaimer } from "../../components/Disclaimer";
import { OnlineApplication } from "../../components/OnlineApplication";
import { Page } from "../../components/Page";
import { SiteSearchForm } from "../../components/SiteSearch";
import { SitePage } from "../../components/SiteShell";
import type { ServiceCategory, ServiceContent } from "../../content/schema";
import { site } from "../../lib/paths";
import { useNavigate, useSearchParams } from "../../router/router";
import { TENANT, WEBSITE_CONTENT } from "../../tenant";

const C = WEBSITE_CONTENT;
const SERVICE_BY_SLUG = new Map(C.services.map((s) => [s.slug, s]));
const CATEGORY_BY_CODE = new Map(C.categories.map((c) => [c.code, c]));
const DEPARTMENT_BY_SLUG = new Map(C.departments.map((d) => [d.slug, d]));

export function findService(slug: string): ServiceContent | undefined {
  return SERVICE_BY_SLUG.get(slug);
}

export function servicesIn(categoryCode: string): ServiceContent[] {
  return C.services.filter((s) => s.categoryCode === categoryCode);
}

/** A list of services, each linking to its page, with its department. */
export function ServiceItems({
  services,
  label,
}: {
  services: readonly ServiceContent[];
  label: string;
}) {
  return (
    <ItemList
      label={label}
      items={services.map((s) => ({
        id: s.slug,
        title: s.name,
        href: site.service(s.slug),
        description: s.summary,
        meta: DEPARTMENT_BY_SLUG.get(s.departmentSlug)?.name,
      }))}
    />
  );
}

/** Service areas as link tiles. */
export function CategoryTiles({ categories }: { categories: readonly ServiceCategory[] }) {
  return (
    <ItemList
      label="Service areas"
      variant="grid"
      items={categories.map((c) => ({
        id: c.code,
        title: c.name,
        href: site.topic(c.code),
        description: c.summary,
      }))}
    />
  );
}

function NotFound({
  what,
  backHref,
  backLabel,
}: {
  what: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <SitePage>
      <Page title={`${what} not found`}>
        <Notice tone="info">
          There is nothing at this address. <Link href={backHref}>{backLabel}</Link>
        </Notice>
      </Page>
    </SitePage>
  );
}

export function ServicesIndexPage() {
  const params = useSearchParams();
  const navigate = useNavigate();
  const legacyQuery = params.get("q");
  // Old links searched here (/services?q=…): send them to the website search.
  useEffect(() => {
    if (legacyQuery) navigate(site.search(legacyQuery), { replace: true });
  }, [legacyQuery, navigate]);

  return (
    <SitePage>
      <Breadcrumbs trail={[{ label: "Services", href: site.services }]} />
      <Page
        title="Services"
        description={`Every service of the ${C.organisation.fullName}, grouped by area. You don't need to know which department handles it.`}
      >
        <SiteSearchForm
          label="Search for a service"
          hint={C.home.searchHint}
          className="site-inline-search"
          landmarkLabel="Search services"
        />
        <nav aria-labelledby="areas-heading">
          <h2 id="areas-heading" className="section-heading">
            Service areas
          </h2>
          <ul className="site-area-index">
            {C.categories.map((c) => (
              <li key={c.code}>
                <a href={`#area-${c.code}`}>{c.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        {C.categories.map((c) => (
          <section key={c.code} id={`area-${c.code}`} aria-labelledby={`area-${c.code}-heading`}>
            <div className="site-section-head">
              <h2 id={`area-${c.code}-heading`} className="section-heading">
                {c.name}
              </h2>
              <Link href={site.topic(c.code)}>About this area</Link>
            </div>
            <ServiceItems services={servicesIn(c.code)} label={`${c.name} services`} />
          </section>
        ))}
        <Disclaimer>
          Service information is guidance. {C.organisation.shortName} confirms the requirements for
          each case, and decisions are made by the responsible department or authority.
        </Disclaimer>
      </Page>
    </SitePage>
  );
}

export function TopicsPage() {
  return (
    <SitePage>
      <Breadcrumbs trail={[{ label: "Service areas", href: site.topics }]} />
      <Page title="Service areas" description="Every service, grouped by subject.">
        <CategoryTiles categories={C.categories} />
      </Page>
    </SitePage>
  );
}

export function TopicPage({ code }: { code: string }) {
  const category = CATEGORY_BY_CODE.get(code);
  if (!category)
    return (
      <NotFound what="Service area" backHref={site.topics} backLabel="See all service areas" />
    );
  const services = servicesIn(code);
  const departments = [...new Set(services.map((s) => s.departmentSlug))]
    .map((slug) => DEPARTMENT_BY_SLUG.get(slug))
    .filter((d) => d !== undefined);
  return (
    <SitePage>
      <Breadcrumbs
        trail={[
          { label: "Service areas", href: site.topics },
          { label: category.name, href: site.topic(code) },
        ]}
      />
      <Page title={category.name} description={category.summary}>
        <section aria-labelledby="topic-services-heading">
          <h2 id="topic-services-heading" className="section-heading">
            Services
          </h2>
          <ServiceItems services={services} label={`${category.name} services`} />
        </section>
        <Card title={departments.length === 1 ? "Department" : "Departments"} titleLevel={2}>
          <ul className="site-plain-list">
            {departments.map((d) => (
              <li key={d.slug}>
                <Link href={site.department(d.slug)}>{d.name}</Link>
              </li>
            ))}
          </ul>
        </Card>
        <SourcesNote sources={category.sources} />
      </Page>
    </SitePage>
  );
}

function standardsFor(service: ServiceContent) {
  const always = ["acknowledgement", "initial-response"];
  const ids = new Set([...always, ...(service.standardIds ?? [])]);
  return C.help.serviceStandards.filter((s) => ids.has(s.id));
}

export function ServicePage({ slug }: { slug: string }) {
  const service = findService(slug);
  if (!service)
    return <NotFound what="Service" backHref={site.services} backLabel="See all services" />;
  const category = CATEGORY_BY_CODE.get(service.categoryCode);
  const department = DEPARTMENT_BY_SLUG.get(service.departmentSlug);
  const related = service.relatedServices
    .map((r) => SERVICE_BY_SLUG.get(r))
    .filter((s) => s !== undefined);
  const standards = standardsFor(service);

  return (
    <SitePage>
      <Breadcrumbs
        trail={[
          { label: "Services", href: site.services },
          ...(category ? [{ label: category.name, href: site.topic(category.code) }] : []),
          { label: service.name, href: site.service(service.slug) },
        ]}
      />
      <Page title={service.name} eyebrow={category?.name} description={service.summary}>
        {department && (
          <p className="muted">
            Handled by the <Link href={site.department(department.slug)}>{department.name}</Link>
          </p>
        )}

        {service.emergencyNotice && (
          <Notice tone="warning" title="In an emergency" announce="none">
            Call {TENANT.emergencyNumber}. Do not use this website to report an emergency.
          </Notice>
        )}

        <div className="site-service-grid">
          <Stack gap="6">
            <Card title="Who this is for" titleLevel={2}>
              <ul className="bullets">
                {service.whoFor.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </Card>

            <Card title="What you can do" titleLevel={2}>
              <ul className="bullets">
                {service.whatYouCanDo.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </Card>

            <Card title="What to prepare" titleLevel={2}>
              <Stack gap="3">
                {service.documents.items && (
                  <ul className="bullets">
                    {service.documents.items.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
                <p>{service.documents.note}</p>
                <p className="muted">{C.decisions.documentsNote}</p>
              </Stack>
            </Card>

            <Card title="How it works" titleLevel={2}>
              <Stack gap="3">
                {service.steps ? (
                  <>
                    <StepList
                      label={`Steps: ${service.steps.basedOn}`}
                      items={service.steps.items}
                    />
                    <p className="muted">
                      Steps from the standard workflow: {service.steps.basedOn}.
                    </p>
                  </>
                ) : (
                  <>
                    <p>Applications go through the One-Stop Service in these steps:</p>
                    <StepList
                      label="How applications are handled"
                      items={C.decisions.generalSteps}
                    />
                  </>
                )}
              </Stack>
            </Card>

            <Card title="Service standards" titleLevel={2}>
              <Stack gap="3">
                <ContentTable
                  caption="Target times"
                  columns={["Step", "Target"]}
                  rows={standards.map((s) => [s.item, s.target])}
                />
                <p className="muted">
                  These are targets for administrative steps, not for the decision itself.{" "}
                  <Link href={site.helpArticle("service-standards")}>All service standards</Link>
                </p>
              </Stack>
            </Card>

            <Card title="How the decision is made" titleLevel={2}>
              <Stack gap="3">
                <p>{service.decision}</p>
                <details className="site-details">
                  <summary>Types of decision</summary>
                  <dl className="site-definitions">
                    {C.decisions.types.map((t) => (
                      <div key={t.label}>
                        <dt>{t.label}</dt>
                        <dd>{t.meaning}</dd>
                      </div>
                    ))}
                  </dl>
                </details>
              </Stack>
            </Card>

            <Card title="If you disagree with a decision" titleLevel={2}>
              <Stack gap="3">
                {C.decisions.reconsideration.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <Link href={site.helpArticle("reconsideration")}>
                  Asking for a decision to be reconsidered
                </Link>
              </Stack>
            </Card>
          </Stack>

          <aside className="site-service-aside" aria-label="Applying">
            <OnlineApplication service={service} />
          </aside>
        </div>

        {related.length > 0 && (
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="section-heading">
              Related services
            </h2>
            <ServiceItems services={related} label="Related services" />
          </section>
        )}

        <Disclaimer>
          This page is guidance, not a decision. {C.organisation.shortName} confirms the
          requirements for your case when you apply.
        </Disclaimer>
        <SourcesNote sources={service.sources} />
      </Page>
    </SitePage>
  );
}
