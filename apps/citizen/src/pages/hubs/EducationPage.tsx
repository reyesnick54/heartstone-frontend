// Education (design: Education.html). /experience/citizen/education (+ /enrollments,
// /credentials, /actions).
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { StatusBadge } from "@heartstone/ui";
import { Disclaimer } from "../../components/Disclaimer";
import { HubSection, HubServices } from "../../components/Hub";
import { Page } from "../../components/Page";
import { useQuery } from "../../lib/query";

export function EducationPage() {
  const client = useApi();
  const home = useQuery("education", (signal) =>
    unwrap(client.GET("/experience/citizen/education", { signal })),
  );
  const enrollments = useQuery("education-enrol", (signal) =>
    unwrap(client.GET("/experience/citizen/education/enrollments", { signal })),
  );
  const creds = useQuery("education-creds", (signal) =>
    unwrap(client.GET("/experience/citizen/education/credentials", { signal })),
  );
  const actions = useQuery("education-actions", (signal) =>
    unwrap(client.GET("/experience/citizen/education/actions", { signal })),
  );
  return (
    <Page title="Education" description="Your enrolments, transcripts and education applications.">
      <HubSection
        title="Enrolments"
        query={enrollments}
        empty="You have no enrolments on record."
        render={(items) =>
          items.map((e) => ({
            id: e.enrollmentReference,
            title: e.institutionName,
            meta: `Enrolment ${e.enrollmentReference}`,
            status: <StatusBadge status={e.status} />,
          }))
        }
      />
      <HubSection
        title="Qualifications and transcripts"
        query={creds}
        empty="No qualifications are recorded for you."
        render={(items) =>
          items.map((c) => ({
            id: c.credentialReference,
            title: `Record ${c.credentialReference}`,
            status: <StatusBadge status={c.lifecycleStatus} />,
          }))
        }
      />
      <HubSection
        title="What you can do"
        query={actions}
        empty="There is nothing to do here right now."
        render={(a) => a.actions.map((x) => ({ id: x.actionKey, title: x.label }))}
      />
      <HubServices
        examples={["Apply for a school place", "Apply for a scholarship", "Request a transcript"]}
      />
      {home.status === "success" && <Disclaimer>{home.data.disclaimer}</Disclaimer>}
    </Page>
  );
}
