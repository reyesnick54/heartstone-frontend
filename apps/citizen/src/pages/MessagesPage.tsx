// Messages (design: Messages.html). GET /experience/citizen/messages.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { EmptyState, ItemList, StatusBadge, Tabs } from "@heartstone/ui";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import type { Schemas } from "../lib/api-types";
import { formatShortDate } from "../lib/format";
import { paths } from "../lib/paths";
import { useQuery } from "../lib/query";

type Message = Schemas["CitizenMessageSummaryDto"];

function List({ items, label }: { items: Message[]; label: string }) {
  if (items.length === 0) return <p>None here.</p>;
  return (
    <ItemList
      label={label}
      items={items.map((m) => ({
        id: m.id,
        title: m.subject,
        href: paths.message(m.id),
        meta: [m.messageReference, m.deliveredAt ? formatShortDate(m.deliveredAt) : undefined]
          .filter(Boolean)
          .join(" · "),
        status: m.acknowledged ? (
          <StatusBadge status="ACKNOWLEDGED" label="Acknowledged" tone="success" />
        ) : undefined,
      }))}
    />
  );
}

export function MessagesPage() {
  const client = useApi();
  const messages = useQuery("messages", (signal) =>
    unwrap(client.GET("/experience/citizen/messages", { signal })),
  );
  return (
    <Page
      title="Messages"
      description="Letters and notices from government offices, for you and businesses you represent."
    >
      <QueryView
        query={messages}
        loadingLabel="Loading your messages"
        errorTitle="We could not load your messages"
      >
        {(items) => {
          if (items.length === 0)
            return (
              <EmptyState
                title="You have no messages"
                description="Offices send letters and notices here."
              />
            );
          const open = items.filter((m) => !m.acknowledged);
          return (
            <Tabs
              label="Messages"
              tabs={[
                {
                  id: "all",
                  label: "All",
                  count: items.length,
                  content: <List items={items} label="All messages" />,
                },
                {
                  id: "open",
                  label: "Not yet acknowledged",
                  count: open.length,
                  content: <List items={open} label="Messages not yet acknowledged" />,
                },
              ]}
            />
          );
        }}
      </QueryView>
      <Disclaimer>
        To respond to a request, use the link in the message. Government offices will never ask for
        your password or card details in a message.
      </Disclaimer>
    </Page>
  );
}
