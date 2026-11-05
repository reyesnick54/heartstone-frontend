// Work & employment (design: Work.html). /experience/citizen/employment (+ /relationships,
// /work-permits, /actions).
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Notice, StatusBadge, SummaryList } from "@heartstone/ui";
import { Disclaimer } from "../../components/Disclaimer";
import { HubSection, HubServices } from "../../components/Hub";
import { Page } from "../../components/Page";
import { formatDate } from "../../lib/format";
import { useQuery } from "../../lib/query";

export function WorkPage() {
  const client = useApi();
  const home = useQuery("employment", (signal) =>
    unwrap(client.GET("/experience/citizen/employment", { signal })),
  );
  const employers = useQuery("employment-rel", (signal) =>
    unwrap(client.GET("/experience/citizen/employment/relationships", { signal })),
  );
  const permits = useQuery("employment-permits", (signal) =>
    unwrap(client.GET("/experience/citizen/employment/work-permits", { signal })),
  );
  const actions = useQuery("employment-actions", (signal) =>
    unwrap(client.GET("/experience/citizen/employment/actions", { signal })),
  );
  return (
    <Page title="Work & employment" description="Your work permits, worker record and employers.">
      <HubSection
        title="Work permits"
        query={permits}
        empty="You have no work permits on record."
        render={(items) =>
          items.map((p) => ({
            id: p.id,
            title: `Work permit ${p.permitNumber}`,
            meta: p.validUntil ? `Valid until ${formatDate(p.validUntil)}` : undefined,
            status: <StatusBadge status={p.lifecycleStatus} />,
          }))
        }
      />
      <Notice tone="info" title="A work permit is not residency">
        A work permit lets you work for the employer named on it. It does not give you residency,
        which is a separate application.
      </Notice>
      <HubSection
        title="Employers"
        query={employers}
        empty="No employers are recorded for you."
        render={(items) =>
          items.map((r) => ({
            id: r.id,
            title: r.roleTitle,
            meta: [
              `Employer ${r.employerRegistryRecord.registryNumber}`,
              r.startDate && `since ${formatDate(r.startDate)}`,
            ]
              .filter(Boolean)
              .join(" · "),
            status: <StatusBadge status={r.status} />,
          }))
        }
      />
      <HubSection
        title="Your worker record"
        query={home}
        empty=""
        render={(h) => (
          <>
            <SummaryList
              rows={[
                { id: "ref", label: "Worker reference", value: h.profileReferenceNumber },
                { id: "employers", label: "Active employers", value: String(h.activeEmployers) },
                {
                  id: "pending",
                  label: "Pending applications",
                  value: String(h.pendingApplications),
                },
                ...(h.workPermit
                  ? [
                      {
                        id: "linked",
                        label: "Linked to residency record",
                        value: h.workPermit.residencyCoordinationLinked ? "Yes" : "No",
                      },
                    ]
                  : []),
              ]}
            />
            <Disclaimer>{h.immigrationCoordinationDisclaimer}</Disclaimer>
          </>
        )}
      />
      <HubSection
        title="What you can do"
        query={actions}
        empty="There is nothing to do here right now."
        render={(a) =>
          a.items.map((i) => ({
            id: i.actionKey,
            title: i.label,
            status: (
              <StatusBadge
                status={i.available ? "AVAILABLE" : "NOT_AVAILABLE"}
                label={i.available ? "Available" : "Not available"}
              />
            ),
          }))
        }
      />
      <HubServices
        examples={["Apply for a work permit", "Change your employer", "Register as an employer"]}
      />
      {home.status === "success" && <Disclaimer>{home.data.disclaimer}</Disclaimer>}
    </Page>
  );
}
