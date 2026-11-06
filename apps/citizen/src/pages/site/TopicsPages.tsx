// Topics (designs: website/pages/Topics.html, Topic.html). A topic is a backend service family:
// GET /public/service-families, and GET /public/services?family=<code> for its services.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { EmptyState, ItemList, Link, Notice } from "@heartstone/ui";
import { Page } from "../../components/Page";
import { QueryView } from "../../components/QueryView";
import { SitePage } from "../../components/SiteShell";
import { site } from "../../lib/paths";
import { useQuery } from "../../lib/query";
import { ServiceList } from "../ServicesPage";
import { SignInCard } from "./SignInCard";

function useFamilies() {
  const client = useApi();
  return useQuery("service-families", (signal) =>
    unwrap(client.GET("/public/service-families", { signal })),
  );
}

export function TopicsPage() {
  const families = useFamilies();
  return (
    <SitePage>
      <Page title="All topics" description="Every government service, grouped by subject.">
        <QueryView
          query={families}
          loadingLabel="Loading topics"
          errorTitle="We could not load topics"
        >
          {(items) =>
            items.length === 0 ? (
              <EmptyState
                title="No topics yet"
                titleLevel={2}
                description="Topics appear here when government offices publish their services."
                action={<Link href={site.services}>Search for a service</Link>}
              />
            ) : (
              <ItemList
                label="Topics"
                variant="grid"
                items={items.map((f) => ({
                  id: f.id,
                  title: f.name,
                  href: site.topic(f.code),
                  ...(f.description ? { description: f.description } : {}),
                }))}
              />
            )
          }
        </QueryView>
      </Page>
    </SitePage>
  );
}

export function TopicPage({ code }: { code: string }) {
  const client = useApi();
  const families = useFamilies();
  const services = useQuery(`public-services:family:${code}`, (signal) =>
    unwrap(
      client.GET("/public/services", {
        params: { query: { family: code, limit: 100 } },
        signal,
      }),
    ),
  );
  if (families.status !== "success") {
    return (
      <SitePage>
        <Page title="Topic">
          <QueryView
            query={families}
            loadingLabel="Loading the topic"
            errorTitle="We could not load this topic"
            backHref={site.topics}
            backLabel="All topics"
          >
            {() => null}
          </QueryView>
        </Page>
      </SitePage>
    );
  }
  const family = families.data.find((f) => f.code === code);
  if (!family) {
    return (
      <SitePage>
        <Page title="Topic not found">
          <Notice tone="info">
            There is no topic at this address. <Link href={site.topics}>See all topics</Link>
          </Notice>
        </Page>
      </SitePage>
    );
  }
  return (
    <SitePage>
      <Page title={family.name} description={family.description}>
        <section aria-labelledby="topic-services-heading">
          <h2 id="topic-services-heading" className="section-heading">
            Services
          </h2>
          <QueryView
            query={services}
            loadingLabel="Loading services"
            errorTitle="We could not load services"
          >
            {(data) =>
              data.items.length === 0 ? (
                <EmptyState
                  title="No services published in this topic yet"
                  titleLevel={3}
                  description="Services appear here when an office publishes them."
                />
              ) : (
                <ServiceList items={data.items} label={`${family.name} services`} area="public" />
              )
            }
          </QueryView>
        </section>
        <SignInCard title="Your applications">
          Sign in to see your applications, documents and messages in one place.
        </SignInCard>
      </Page>
    </SitePage>
  );
}
