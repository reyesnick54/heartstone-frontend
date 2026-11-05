// Application submitted (design: Submitted.html). Reads the application back from
// GET /experience/citizen/applications/{id}: the reference and status shown are the backend's.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Card, Link, Notice, Stack, SummaryList } from "@heartstone/ui";
import { Disclaimer } from "../../components/Disclaimer";
import { Page } from "../../components/Page";
import { QueryView } from "../../components/QueryView";
import { RouteLink } from "../../components/RouteLink";
import { formatDateTime, humanizeStatus, labelText } from "../../lib/format";
import { paths } from "../../lib/paths";
import { useQuery } from "../../lib/query";

export function SubmittedPage({ applicationId }: { applicationId: string }) {
  const client = useApi();
  const app = useQuery(`application:${applicationId}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/applications/{id}", {
        params: { path: { id: applicationId } },
        signal,
      }),
    ),
  );
  return (
    <Page title="Application submitted">
      <QueryView
        query={app}
        loadingLabel="Loading your application"
        errorTitle="We could not load your application"
        backHref={paths.applications}
        backLabel="Your applications"
      >
        {(a) =>
          a.status === "DRAFT" ? (
            <Notice tone="warning" title="This application has not been submitted">
              It is still a draft. <Link href={paths.applications}>Go to your applications</Link> to
              finish it.
            </Notice>
          ) : (
            <Stack gap="5">
              <Notice tone="success" title="Your application has been sent to the office">
                <Stack gap="1">
                  <span>Your reference number</span>
                  <strong className="reference">{a.applicationNumber ?? a.applicationId}</strong>
                </Stack>
              </Notice>
              <Card title="Details" titleLevel={2}>
                <SummaryList
                  rows={[
                    { id: "service", label: "Service", value: a.attribution.serviceName ?? "—" },
                    {
                      id: "office",
                      label: "Office",
                      value: a.attribution.departmentName ?? a.attribution.institutionName,
                    },
                    ...(a.organizationName
                      ? [{ id: "for", label: "Applied for", value: a.organizationName }]
                      : []),
                    {
                      id: "status",
                      label: "Status",
                      value: a.publicStatusLabel ?? humanizeStatus(a.status),
                    },
                    ...(a.caseNumber ? [{ id: "case", label: "Case", value: a.caseNumber }] : []),
                    { id: "when", label: "Last updated", value: formatDateTime(a.updatedAt) },
                  ]}
                />
              </Card>
              <Card title="What happens next" titleLevel={2}>
                <Stack gap="3">
                  <p>
                    The office will check your application. If anything is missing, they will ask
                    you in your messages. If there is a fee, it will appear in your payments. Paying
                    does not mean your application is approved.
                  </p>
                  <RouteLink href={paths.application(a.applicationId)} standalone fallback={null}>
                    Track this application
                  </RouteLink>
                  <RouteLink href={paths.payments} standalone fallback={null}>
                    Go to payments
                  </RouteLink>
                </Stack>
              </Card>
              <Disclaimer>{labelText(a.disclaimer)}</Disclaimer>
            </Stack>
          )
        }
      </QueryView>
    </Page>
  );
}
