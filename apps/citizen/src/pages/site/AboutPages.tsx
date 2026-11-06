// About the tenant (design: website/pages/About.html) and its departments. The facts come from
// the tenant's website content; the "This website" card describes the platform itself.
import { Card, ItemList, Link, Notice, Stack } from "@heartstone/ui";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ArticleBody, SourcesNote } from "../../components/ContentBlocks";
import { Page } from "../../components/Page";
import { SitePage } from "../../components/SiteShell";
import { site } from "../../lib/paths";
import { TENANT, WEBSITE_CONTENT } from "../../tenant";
import { ServiceItems } from "./ServicesSitePages";

const C = WEBSITE_CONTENT;

export function AboutPage() {
  return (
    <SitePage>
      <Breadcrumbs trail={[{ label: "About", href: site.about }]} />
      <Page title={C.about.title} description={C.about.summary}>
        <ArticleBody article={C.about} />
        <Card title="This website" titleLevel={2}>
          <Stack gap="3">
            <p>
              {TENANT.displayName} is where you can find services, apply, and track your
              applications, payments and messages with one account.
            </p>
            <p>
              Decisions are made by the people and bodies that hold the authority to make them,
              never by this website. Paying a fee or sending a document does not mean an application
              has been approved. Some staff tools use AI to help organise and summarise information;
              AI does not approve, refuse or issue anything.
            </p>
            <p>
              The site runs on HeartStone, a digital government service platform.{" "}
              <Link href={site.accessibility}>Accessibility</Link> ·{" "}
              <Link href={site.privacy}>Privacy</Link>
            </p>
          </Stack>
        </Card>
      </Page>
    </SitePage>
  );
}

export function DepartmentsPage() {
  return (
    <SitePage>
      <Breadcrumbs
        trail={[
          { label: "About", href: site.about },
          { label: "Departments", href: site.departments },
        ]}
      />
      <Page
        title="Departments"
        description="The departments of the One-Stop Service and what each one does. You don't need to contact them separately: apply once and your case is routed for you."
      >
        <ItemList
          label="Departments"
          items={C.departments.map((d) => ({
            id: d.slug,
            title: d.name,
            href: site.department(d.slug),
            description: d.summary,
          }))}
        />
      </Page>
    </SitePage>
  );
}

export function DepartmentPage({ slug }: { slug: string }) {
  const department = C.departments.find((d) => d.slug === slug);
  if (!department) {
    return (
      <SitePage>
        <Page title="Department not found">
          <Notice tone="info">
            There is no department at this address.{" "}
            <Link href={site.departments}>See all departments</Link>
          </Notice>
        </Page>
      </SitePage>
    );
  }
  const services = C.services.filter((s) => s.departmentSlug === slug);
  return (
    <SitePage>
      <Breadcrumbs
        trail={[
          { label: "About", href: site.about },
          { label: "Departments", href: site.departments },
          { label: department.name, href: site.department(slug) },
        ]}
      />
      <Page title={department.name} description={department.summary}>
        <Card title="What it does" titleLevel={2}>
          <ul className="bullets">
            {department.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Card>
        <Card title="Its authority" titleLevel={2}>
          <p>{department.authorityNote}</p>
        </Card>
        {services.length > 0 && (
          <section aria-labelledby="department-services-heading">
            <h2 id="department-services-heading" className="section-heading">
              Services
            </h2>
            <ServiceItems services={services} label={`Services of the ${department.name}`} />
          </section>
        )}
        <SourcesNote sources={department.sources} />
      </Page>
    </SitePage>
  );
}
