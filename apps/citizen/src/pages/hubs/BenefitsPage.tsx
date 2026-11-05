// Benefits & support (design: Benefits.html). /experience/citizen/benefits (+ /programs,
// /applications, /awards).
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Notice, StatusBadge } from "@heartstone/ui";
import { Disclaimer } from "../../components/Disclaimer";
import { HubSection, HubServices } from "../../components/Hub";
import { Page } from "../../components/Page";
import { humanizeStatus } from "../../lib/format";
import { useQuery } from "../../lib/query";

export function BenefitsPage() {
  const client = useApi();
  const home = useQuery("benefits", (signal) =>
    unwrap(client.GET("/experience/citizen/benefits", { signal })),
  );
  const programs = useQuery("benefit-programs", (signal) =>
    unwrap(client.GET("/experience/citizen/benefits/programs", { signal })),
  );
  const apps = useQuery("benefit-apps", (signal) =>
    unwrap(client.GET("/experience/citizen/benefits/applications", { signal })),
  );
  const awards = useQuery("benefit-awards", (signal) =>
    unwrap(client.GET("/experience/citizen/benefits/awards", { signal })),
  );
  return (
    <Page
      title="Benefits & support"
      description="Support you receive, your applications, and programmes you may be able to apply for."
    >
      <HubSection
        title="Support you receive"
        query={awards}
        empty="You are not receiving any benefit."
        render={(items) =>
          items.map((a) => ({
            id: a.id,
            title: `Award ${a.awardNumber}`,
            status: <StatusBadge status={a.lifecycleStatus} />,
          }))
        }
      />
      <HubSection
        title="Your applications"
        query={apps}
        empty="You have no benefit applications."
        render={(items) =>
          items.map((a) => ({
            id: a.id,
            title: a.benefitProgram.programName,
            meta: `Profile ${a.profileNumber}`,
            status: <StatusBadge status={a.status} />,
          }))
        }
      />
      <HubSection
        title="Programmes"
        query={programs}
        empty="No programmes are published."
        render={(items) =>
          items.map((p) => ({
            id: p.programCode,
            title: p.programName,
            meta: humanizeStatus(p.categoryKind),
          }))
        }
      />
      {home.status === "success" && (
        <Notice tone="info" title="This is not a decision about your eligibility">
          {home.data.preliminaryMatchDisclaimer} {home.data.paymentDisclaimer}
        </Notice>
      )}
      <HubServices examples={["Apply for income support", "Apply for housing assistance"]} />
      {home.status === "success" && <Disclaimer>{home.data.disclaimer}</Disclaimer>}
    </Page>
  );
}
