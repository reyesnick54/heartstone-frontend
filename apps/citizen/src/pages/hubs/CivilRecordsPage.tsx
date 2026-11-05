// Civil records (design: CivilRecords.html). /experience/citizen/civil-status, /vital-records,
// /certificates, /civil-registry/actions.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { StatusBadge, SummaryList } from "@heartstone/ui";
import { Disclaimer } from "../../components/Disclaimer";
import { HubSection } from "../../components/Hub";
import { Page } from "../../components/Page";
import { formatDate, humanizeStatus } from "../../lib/format";
import { paths } from "../../lib/paths";
import { useQuery } from "../../lib/query";

export function CivilRecordsPage() {
  const client = useApi();
  const status = useQuery("civil-status", (signal) =>
    unwrap(client.GET("/experience/citizen/civil-status", { signal })),
  );
  const records = useQuery("vital-records", (signal) =>
    unwrap(client.GET("/experience/citizen/vital-records", { signal })),
  );
  const certs = useQuery("certificates", (signal) =>
    unwrap(client.GET("/experience/citizen/certificates", { signal })),
  );
  const actions = useQuery("civil-actions", (signal) =>
    unwrap(client.GET("/experience/citizen/civil-registry/actions", { signal })),
  );
  return (
    <Page
      title="Civil records"
      description="Birth, marriage and other records held by the civil registry, and certified copies."
    >
      <HubSection
        title="Your records"
        query={records}
        empty="No civil records are linked to you."
        render={(items) =>
          items.map((r) => ({
            id: r.id,
            title: r.summaryLabel ?? humanizeStatus(r.eventType),
            meta: `Record ${r.recordNumber} · ${r.institutionName}`,
            ...(r.isRestricted
              ? { description: "This record is restricted. Some details are not shown." }
              : {}),
            status: <StatusBadge status={r.status} />,
          }))
        }
      />
      <HubSection
        title="Certificates"
        query={certs}
        empty="You have no certificates."
        render={(items) =>
          items.map((c) => ({
            id: c.id,
            title: humanizeStatus(c.certificateType),
            meta: c.issuedAt ? `Issued ${formatDate(c.issuedAt)}` : undefined,
            ...(c.requestViaServiceSlug
              ? { description: "You can request a certified copy." }
              : {}),
            status: <StatusBadge status={c.status} />,
          }))
        }
      />
      <HubSection
        title="What you can do"
        query={actions}
        empty="There is nothing to do here right now."
        render={(items) =>
          items.map((a) => ({
            id: a.actionCode,
            title: a.label,
            href: paths.service(a.serviceSlug),
            description: a.description,
          }))
        }
      />
      <HubSection
        title="Summary"
        query={status}
        empty=""
        render={(s) => (
          <>
            <SummaryList
              rows={[
                { id: "official", label: "Official records", value: String(s.officialRecordCount) },
                {
                  id: "pending",
                  label: "Registrations pending",
                  value: String(s.pendingSubmissionCount),
                },
              ]}
            />
            <Disclaimer>{s.templateDisclaimer}</Disclaimer>
          </>
        )}
      />
      <Disclaimer>
        The civil register held by the registry is the official record. To correct a record, ask the
        civil registry.
      </Disclaimer>
    </Page>
  );
}
