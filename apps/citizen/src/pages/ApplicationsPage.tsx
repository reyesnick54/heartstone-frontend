// My applications (design: Applications.html). GET /experience/citizen/applications.
import { useState } from "react";
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Button, Cluster, EmptyState, ItemList, Link, StatusBadge, Tabs } from "@heartstone/ui";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import type { ApplicationSummary } from "../lib/api-types";
import { formatShortDate, humanizeStatus } from "../lib/format";
import { paths } from "../lib/paths";
import { useQuery } from "../lib/query";

const PAGE_SIZE = 20;

function hrefFor(a: ApplicationSummary): string {
  if (a.status === "DRAFT" && a.attribution.serviceSlug)
    return paths.apply(a.attribution.serviceSlug, a.applicationId);
  return paths.application(a.applicationId);
}

function List({ items, label }: { items: ApplicationSummary[]; label: string }) {
  if (items.length === 0) return <p>None here.</p>;
  return (
    <ItemList
      label={label}
      items={items.map((a) => ({
        id: a.applicationId,
        title: a.attribution.serviceName ?? "Application",
        href: hrefFor(a),
        meta: [
          a.applicationNumber ?? (a.status === "DRAFT" ? "Draft" : undefined),
          a.attribution.departmentName ?? a.attribution.institutionName,
          `Updated ${formatShortDate(a.updatedAt)}`,
        ]
          .filter(Boolean)
          .join(" · "),
        status: (
          <StatusBadge status={a.status} label={a.publicStatusLabel ?? humanizeStatus(a.status)} />
        ),
        ...(a.status === "DRAFT" ? { description: "Finish and submit when you are ready." } : {}),
      }))}
    />
  );
}

export function ApplicationsPage() {
  const client = useApi();
  const [page, setPage] = useState(1);
  const apps = useQuery(`applications:${page}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/applications", {
        params: { query: { page, pageSize: PAGE_SIZE } },
        signal,
      }),
    ),
  );
  return (
    <Page
      title="My applications"
      description="Everything you have applied for, and what happens next."
    >
      <QueryView
        query={apps}
        loadingLabel="Loading your applications"
        errorTitle="We could not load your applications"
      >
        {(data) =>
          data.items.length === 0 ? (
            <EmptyState
              title="You have no applications yet"
              description="When you apply for a service, it appears here."
              action={<Link href={paths.services}>Find a service</Link>}
            />
          ) : (
            <>
              <Tabs
                label="Filter applications"
                tabs={[
                  {
                    id: "all",
                    label: "All",
                    count: data.items.length,
                    content: <List items={data.items} label="All applications" />,
                  },
                  {
                    id: "drafts",
                    label: "Drafts",
                    count: data.items.filter((a) => a.status === "DRAFT").length,
                    content: (
                      <List
                        items={data.items.filter((a) => a.status === "DRAFT")}
                        label="Draft applications"
                      />
                    ),
                  },
                  {
                    id: "sent",
                    label: "Sent",
                    count: data.items.filter(
                      (a) => a.status === "SUBMITTED" || a.status === "RECEIVED",
                    ).length,
                    content: (
                      <List
                        items={data.items.filter(
                          (a) => a.status === "SUBMITTED" || a.status === "RECEIVED",
                        )}
                        label="Sent applications"
                      />
                    ),
                  },
                  {
                    id: "closed",
                    label: "Closed or withdrawn",
                    count: data.items.filter(
                      (a) => a.status === "CLOSED" || a.status === "WITHDRAWN",
                    ).length,
                    content: (
                      <List
                        items={data.items.filter(
                          (a) => a.status === "CLOSED" || a.status === "WITHDRAWN",
                        )}
                        label="Closed or withdrawn applications"
                      />
                    ),
                  },
                ]}
              />
              {data.pagination.totalPages > 1 && (
                <nav aria-label="Pages of applications" className="pager">
                  <Cluster gap="3" align="center">
                    {data.pagination.hasPreviousPage && (
                      <Button variant="secondary" onClick={() => setPage((p) => p - 1)}>
                        Previous page
                      </Button>
                    )}
                    <span>
                      Page {data.pagination.page} of {data.pagination.totalPages}
                    </span>
                    {data.pagination.hasNextPage && (
                      <Button variant="secondary" onClick={() => setPage((p) => p + 1)}>
                        Next page
                      </Button>
                    )}
                  </Cluster>
                </nav>
              )}
            </>
          )
        }
      </QueryView>
    </Page>
  );
}
