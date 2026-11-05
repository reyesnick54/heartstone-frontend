// Appeals & reviews (designs: Appeals.html, RequestReview.html). There is no citizen redress
// route in the backend yet, so these pages explain the process and say plainly that requests
// cannot be made online. No sample requests, and no form that pretends to submit.
import { Card, Link, Stack, Timeline } from "@heartstone/ui";
import { NotAvailable } from "../components/NotAvailable";
import { Page } from "../components/Page";
import { RouteLink } from "../components/RouteLink";
import { paths } from "../lib/paths";

function NotYet() {
  return (
    <NotAvailable title="Requesting a review online is not available yet">
      <span>
        You cannot see or start review requests here yet. To ask for a decision to be looked at
        again, contact the office that made it, using the details on your decision notice. Check the
        deadline on the notice.
      </span>
    </NotAvailable>
  );
}

export function AppealsPage() {
  return (
    <Page
      title="Appeals & reviews"
      description="If you disagree with a government decision, you can ask for it to be looked at again."
    >
      <NotYet />
      <Card title="How it works" titleLevel={2}>
        <Timeline
          label="How a review works"
          items={[
            {
              id: "ask",
              title: "Ask the office to reconsider",
              description:
                "Usually within a set time after the decision. The notice says how long.",
            },
            {
              id: "review",
              title: "The office reviews it",
              description: "A different officer looks at your case and the reasons you give.",
            },
            {
              id: "independent",
              title: "Independent review",
              description: "If you still disagree, some decisions can go to an independent body.",
            },
          ]}
        />
      </Card>
      <Stack gap="2">
        <p>Asking for a review does not change the decision until the review is decided.</p>
        <Link href={paths.messages}>Find your decision notices in Messages</Link>
        <RouteLink href={paths.help} fallback={null}>
          Get help
        </RouteLink>
      </Stack>
    </Page>
  );
}

export function RequestReviewPage() {
  return (
    <Page title="Request a review of a decision">
      <NotYet />
      <Link href={paths.appeals}>How reviews work</Link>
    </Page>
  );
}
