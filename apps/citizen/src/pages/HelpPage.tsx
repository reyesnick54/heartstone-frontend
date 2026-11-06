// Help (design: Help.html). Static guidance; contact details come from tenant configuration.
import { Card, Link, Stack, SummaryList } from "@heartstone/ui";
import { Page } from "../components/Page";
import { RouteLink } from "../components/RouteLink";
import { paths } from "../lib/paths";
import { TENANT } from "../tenant";

export function HelpPage() {
  return (
    <Page title="Help" description="Answers to common questions, and how to reach a person.">
      <Card title="Using this site" titleLevel={2}>
        <ul className="bullets">
          <li>
            You sign in with {TENANT.digitalIdName}. If it asks you to sign in again, that keeps
            your records safe.
          </li>
          <li>
            To act for a business, choose it when you start an application. You need a recorded
            authority to represent it.
          </li>
          <li>
            Applications are saved as drafts as you go. Nothing is sent to the office until you
            submit.
          </li>
          <li>
            Documents cannot be uploaded online yet. The office will tell you how to send them.
          </li>
        </ul>
      </Card>
      <Card title="Applications and decisions" titleLevel={2}>
        <ul className="bullets">
          <li>The status you see is the one the office has recorded. Times shown are estimates.</li>
          <li>Paying a fee does not decide your application.</li>
          <li>Decisions and their reasons are sent to your messages.</li>
          <li>
            <RouteLink
              href={paths.appeals}
              fallback="If you disagree with a decision, contact the office that made it."
            >
              Disagreeing with a decision
            </RouteLink>
          </li>
        </ul>
      </Card>
      <Card title="Talk to someone" titleLevel={2}>
        <Stack gap="3">
          <p>Service advisers can help you find the right service and complete forms.</p>
          <SummaryList
            rows={[
              { id: "phone", label: "Phone", value: TENANT.contactPhone.display },
              { id: "hours", label: "Hours", value: TENANT.supportHours },
            ]}
          />
        </Stack>
      </Card>
      <Card title="Find a service" titleLevel={2}>
        <Link href={paths.services}>Describe what you need and we will find the service</Link>
      </Card>
    </Page>
  );
}
