// Immigration & residency (design: Immigration.html). /experience/citizen/immigration
// (+ /status, /applications, /credentials, /actions).
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Stack, StatusBadge, SummaryList } from "@heartstone/ui";
import { Disclaimer } from "../../components/Disclaimer";
import { HubSection, HubServices } from "../../components/Hub";
import { Page } from "../../components/Page";
import { routeHref } from "../../components/RouteLink";
import { formatDate } from "../../lib/format";
import { paths } from "../../lib/paths";
import { useQuery } from "../../lib/query";

export function ImmigrationPage() {
  const client = useApi();
  const home = useQuery("immigration", (signal) =>
    unwrap(client.GET("/experience/citizen/immigration", { signal })),
  );
  const status = useQuery("immigration-status", (signal) =>
    unwrap(client.GET("/experience/citizen/immigration/status", { signal })),
  );
  const apps = useQuery("immigration-apps", (signal) =>
    unwrap(client.GET("/experience/citizen/immigration/applications", { signal })),
  );
  const creds = useQuery("immigration-creds", (signal) =>
    unwrap(client.GET("/experience/citizen/immigration/credentials", { signal })),
  );
  return (
    <Page
      title="Immigration & residency"
      description="Your residency status, permits and immigration applications."
    >
      <HubSection
        title="Your status"
        query={status}
        empty=""
        render={(s) => (
          <Stack gap="4">
            {s.statuses.length === 0 ? (
              <p>No immigration status is recorded for you.</p>
            ) : (
              s.statuses.map((st) => (
                <Stack gap="1" key={st.verifiedStatusLabel}>
                  <p>
                    <StatusBadge
                      status={st.verifiedStatusLabel}
                      label={st.verifiedStatusLabel}
                      tone="info"
                    />
                  </p>
                  {st.publicMessage && <p>{st.publicMessage}</p>}
                  <Disclaimer>{st.disclaimer}</Disclaimer>
                </Stack>
              ))
            )}
            <SummaryList
              rows={[
                {
                  id: "rfi",
                  label: "Requests for information",
                  value: String(s.requestedInformationCount),
                },
                {
                  id: "interviews",
                  label: "Upcoming interviews",
                  value: String(s.upcomingInterviewsCount),
                },
                {
                  id: "biometrics",
                  label: "Upcoming biometrics",
                  value: String(s.upcomingBiometricsCount),
                },
                { id: "fees", label: "Fees to pay", value: String(s.outstandingFeesCount) },
                { id: "appeals", label: "Open appeals", value: String(s.openAppealsCount) },
              ]}
            />
          </Stack>
        )}
      />
      <HubSection
        title="Applications"
        query={apps}
        empty="You have no immigration applications."
        render={(a) =>
          a.items.map((i) => ({
            id: i.applicationId,
            title: i.serviceName,
            ...(routeHref(paths.application(i.applicationId))
              ? { href: paths.application(i.applicationId) }
              : {}),
            status: <StatusBadge status={i.statusLabel} label={i.statusLabel} />,
          }))
        }
      />
      <HubSection
        title="Permits and visas"
        query={creds}
        empty="You have no immigration permits on record."
        render={(c) =>
          c.items.map((i) => ({
            id: i.credentialId,
            title: i.label,
            href: paths.credential(i.credentialId),
            meta: i.effectiveUntil ? `Valid until ${formatDate(i.effectiveUntil)}` : undefined,
            status: <StatusBadge status={i.status} />,
          }))
        }
      />
      <HubServices
        examples={["Apply for residency", "Renew a residency permit", "Apply for a visa"]}
      />
      {home.status === "success" && <Disclaimer>{home.data.disclaimer}</Disclaimer>}
    </Page>
  );
}
