// A case's public progress (GET /experience/citizen/cases/{id}/status): the backend's public
// status and stage labels, its milestones as a timeline, and applicant-visible communications.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Card, ItemList, Stack, StatusBadge, Timeline, type TimelineState } from "@heartstone/ui";
import { formatDate, humanizeStatus, labelText } from "../lib/format";
import { useQuery } from "../lib/query";
import { Disclaimer } from "./Disclaimer";
import { QueryView } from "./QueryView";

/** Marker for a milestone status (CaseMilestoneStatus). The text shown is always the status. */
function milestoneState(status: string): TimelineState {
  switch (status) {
    case "COMPLETED":
      return "done";
    case "IN_PROGRESS":
    case "AT_RISK":
    case "DELAYED":
      return "current";
    case "UPCOMING":
      return "upcoming";
    default:
      return "neutral";
  }
}

export function CaseProgress({ caseId }: { caseId: string }) {
  const client = useApi();
  const status = useQuery(`case-status:${caseId}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/cases/{id}/status", {
        params: { path: { id: caseId } },
        signal,
      }),
    ),
  );
  return (
    <QueryView
      query={status}
      loadingLabel="Loading progress"
      errorTitle="We could not load the progress of this case"
    >
      {(s) => (
        <Stack gap="5">
          <Card title="Progress" titleLevel={2}>
            <Stack gap="4">
              <p>
                <StatusBadge status={s.publicStatusLabel} label={s.publicStatusLabel} tone="info" />{" "}
                <span className="muted">Stage: {s.publicStageLabel}</span>
              </p>
              {s.publicMessage && <p>{s.publicMessage}</p>}
              {s.milestones.length > 0 ? (
                <Timeline
                  label="Case milestones"
                  items={s.milestones.map((m) => ({
                    id: m.milestoneId,
                    title: m.name,
                    statusText: humanizeStatus(m.status),
                    state: milestoneState(m.status),
                    ...(m.reachedAt ? { meta: formatDate(m.reachedAt) } : {}),
                  }))}
                />
              ) : (
                <p className="muted">The office has not published milestones for this case yet.</p>
              )}
              <p className="muted">
                Case {s.caseNumber} ·{" "}
                {s.attribution.departmentName ?? s.attribution.institutionName}
              </p>
            </Stack>
          </Card>
          <Card title="Messages about this case" titleLevel={2}>
            {s.recentCommunications.length === 0 ? (
              <p>No messages yet.</p>
            ) : (
              <ItemList
                label="Messages about this case"
                items={s.recentCommunications.map((c) => ({
                  id: c.communicationId,
                  title: c.subject ?? humanizeStatus(c.communicationType),
                  meta: `${humanizeStatus(c.communicationType)} · ${formatDate(c.sentAt)}`,
                }))}
              />
            )}
          </Card>
          <Disclaimer>{labelText(s.applicantDisclaimer)}</Disclaimer>
        </Stack>
      )}
    </QueryView>
  );
}
