// One application (design: ApplicationDetail.html). GET /experience/citizen/applications/{id};
// its case progress from GET /experience/citizen/cases/{id}/status; related invoices from
// GET /experience/citizen/payments (matched on the case id the backend returns).
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Card, ItemList, Link, Notice, Stack, StatusBadge, SummaryList } from "@heartstone/ui";
import { ActingAs } from "../components/ActingAs";
import { CaseProgress } from "../components/CaseProgress";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import { formatDate, formatMoney, humanizeStatus, labelText } from "../lib/format";
import { activeRepresentations, useMe } from "../lib/me";
import { paths } from "../lib/paths";
import { useQuery } from "../lib/query";

function RelatedPayments({ caseId }: { caseId: string }) {
  const client = useApi();
  const payments = useQuery(`payments`, (signal) =>
    unwrap(client.GET("/experience/citizen/payments", { signal })),
  );
  if (payments.status !== "success") return null;
  const related = payments.data.filter((p) => p.relatedCaseId === caseId);
  if (related.length === 0) return null;
  return (
    <Card title="Fees" titleLevel={2}>
      <ItemList
        label="Invoices for this application"
        items={related.map((p) => ({
          id: p.id,
          title: `Invoice ${p.invoiceNumber}`,
          href: paths.invoice(p.id),
          meta: `${formatMoney(p.totalAmountCents, p.currency)}${p.dueAt ? ` · due ${formatDate(p.dueAt)}` : ""}`,
          status: <StatusBadge status={p.status} />,
        }))}
      />
      <p>Paying a fee does not decide your application.</p>
    </Card>
  );
}

export function ApplicationDetailPage({ applicationId }: { applicationId: string }) {
  const client = useApi();
  const me = useMe();
  const app = useQuery(`application:${applicationId}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/applications/{id}", {
        params: { path: { id: applicationId } },
        signal,
      }),
    ),
  );
  const title =
    app.status === "success" ? (app.data.attribution.serviceName ?? "Application") : "Application";
  const reps = me.status === "success" ? activeRepresentations(me.data) : [];

  return (
    <Page
      title={title}
      {...(app.status === "success"
        ? {
            description: [
              app.data.applicationNumber && `Application ${app.data.applicationNumber}`,
              app.data.caseNumber && `Case ${app.data.caseNumber}`,
              app.data.attribution.departmentName ?? app.data.attribution.institutionName,
            ]
              .filter(Boolean)
              .join(" · "),
          }
        : {})}
    >
      <QueryView
        query={app}
        loadingLabel="Loading the application"
        errorTitle="We could not load this application"
        backHref={paths.applications}
        backLabel="Your applications"
      >
        {(a) => (
          <Stack gap="5">
            <p>
              <StatusBadge
                status={a.status}
                label={a.publicStatusLabel ?? humanizeStatus(a.status)}
                tone="info"
              />
            </p>
            <ActingAs
              forOrganization={
                a.organizationId
                  ? {
                      name: a.organizationName ?? "an organisation",
                      representation: reps.find(
                        (r) => r.representativeAuthorityId === a.representativeAuthorityId,
                      ),
                    }
                  : null
              }
            />
            {a.status === "DRAFT" && (
              <Notice tone="info" title="This application is a draft">
                Nothing has been sent to the office yet.{" "}
                {a.attribution.serviceSlug && (
                  <Link href={paths.apply(a.attribution.serviceSlug, a.applicationId)}>
                    Continue your application
                  </Link>
                )}
              </Notice>
            )}
            {a.caseId ? (
              <CaseProgress caseId={a.caseId} />
            ) : (
              a.status !== "DRAFT" && (
                <p>
                  The office has not opened a case for this application yet. Progress will appear
                  here when it does.
                </p>
              )
            )}
            {a.caseId && <RelatedPayments caseId={a.caseId} />}
            <Card title="Application details" titleLevel={2}>
              <SummaryList
                rows={[
                  { id: "service", label: "Service", value: a.attribution.serviceName ?? "—" },
                  { id: "for", label: "Applied for", value: a.organizationName ?? "Yourself" },
                  { id: "started", label: "Started", value: formatDate(a.createdAt) },
                  { id: "updated", label: "Last updated", value: formatDate(a.updatedAt) },
                  ...(a.applicationNumber
                    ? [{ id: "number", label: "Application number", value: a.applicationNumber }]
                    : []),
                ]}
              />
            </Card>
            <Card title="Decision" titleLevel={2}>
              <p>
                When the office makes a decision, it will be sent to your messages with the reasons
                and any conditions.
              </p>
            </Card>
            <Disclaimer>{labelText(a.disclaimer)}</Disclaimer>
          </Stack>
        )}
      </QueryView>
    </Page>
  );
}

export function CaseStatusPage({ caseId }: { caseId: string }) {
  return (
    <Page title="Case progress">
      <CaseProgress caseId={caseId} />
      <Link href={paths.applications}>All your applications</Link>
    </Page>
  );
}
