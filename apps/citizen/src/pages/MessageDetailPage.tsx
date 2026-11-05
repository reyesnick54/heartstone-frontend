// One message (design: MessageDetail.html). GET /experience/citizen/messages/{id}; acknowledging
// is POST /experience/citizen/messages/{id}/acknowledge (once, never retried). Acknowledging
// records receipt; it is not agreement.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Button, Card, Cluster, ItemList, Notice, Stack, StatusBadge } from "@heartstone/ui";
import { MutationErrorNotice } from "../components/ApiErrorNotice";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import { RouteLink } from "../components/RouteLink";
import { formatDate, formatDateTime, humanizeStatus } from "../lib/format";
import { paths } from "../lib/paths";
import { useMutation, useQuery } from "../lib/query";

export function MessageDetailPage({ messageId }: { messageId: string }) {
  const client = useApi();
  const message = useQuery(`message:${messageId}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/messages/{id}", {
        params: { path: { id: messageId } },
        signal,
      }),
    ),
  );
  const ack = useMutation(() =>
    unwrap(
      client.POST("/experience/citizen/messages/{id}/acknowledge", {
        params: { path: { id: messageId } },
      }),
    ),
  );
  return (
    <Page
      title={message.status === "success" ? message.data.subject : "Message"}
      {...(message.status === "success"
        ? {
            description: [
              message.data.messageReference,
              message.data.deliveredAt && formatDate(message.data.deliveredAt),
            ]
              .filter(Boolean)
              .join(" · "),
          }
        : {})}
    >
      <QueryView
        query={message}
        loadingLabel="Loading the message"
        errorTitle="We could not load this message"
        backHref={paths.messages}
        backLabel="Your messages"
      >
        {(m) => (
          <Stack gap="5">
            <Card>
              <p className="message-body">{m.body}</p>
            </Card>
            {m.decisionNoticeReference && (
              <p>Decision notice reference: {m.decisionNoticeReference}</p>
            )}
            {m.caseId && (
              <RouteLink href={paths.caseStatus(m.caseId)} fallback={null}>
                See the case this message is about
              </RouteLink>
            )}
            {m.acknowledged || ack.status === "success" ? (
              <Notice tone="success" title="You have acknowledged this message">
                {ack.status === "success" ? (
                  <Stack gap="1">
                    <span>Recorded {formatDateTime(ack.data.receivedAt)}.</span>
                    <span>{ack.data.disclaimer}</span>
                  </Stack>
                ) : (
                  "The office has a record that you received it."
                )}
              </Notice>
            ) : (
              <Card title="Please acknowledge this message" titleLevel={2}>
                <Stack gap="3">
                  <p>
                    Acknowledging creates an official record that you received this message and
                    when. It does not mean you agree with it.
                  </p>
                  {ack.status === "error" && (
                    <MutationErrorNotice
                      error={ack.error}
                      title="Your acknowledgement was not recorded"
                    />
                  )}
                  <Cluster gap="3">
                    <Button
                      loading={ack.status === "pending"}
                      loadingLabel="Recording"
                      onClick={() => void ack.run().catch(() => undefined)}
                    >
                      I have received this message
                    </Button>
                  </Cluster>
                </Stack>
              </Card>
            )}
            {m.deliveries.length > 0 && (
              <Card title="How this was sent" titleLevel={2}>
                <ItemList
                  label="Deliveries"
                  items={m.deliveries.map((d) => ({
                    id: d.id,
                    title: humanizeStatus(d.channelType),
                    ...(d.completedAt ? { meta: formatDate(d.completedAt) } : {}),
                    status: <StatusBadge status={d.status} />,
                  }))}
                />
              </Card>
            )}
            <RouteLink href={paths.appeals} fallback={null}>
              Disagree with a decision?
            </RouteLink>
          </Stack>
        )}
      </QueryView>
    </Page>
  );
}
