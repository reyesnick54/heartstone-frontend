// Pay an invoice (design: Invoice.html). GET /experience/citizen/payments/{id}; "Continue to
// payment" creates a payment intent with POST /experience/citizen/payments/{invoiceId}/intents
// (once, never retried). Payment is a financial event, not approval.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import {
  Button,
  Card,
  Cluster,
  ItemList,
  Link,
  Notice,
  Stack,
  StatusBadge,
  SummaryList,
} from "@heartstone/ui";
import { ActingAs } from "../components/ActingAs";
import { MutationErrorNotice } from "../components/ApiErrorNotice";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import { formatDate, formatMoney, humanizeStatus } from "../lib/format";
import { paths } from "../lib/paths";
import { useMutation, useQuery } from "../lib/query";
import { PAYMENT_IS_NOT_APPROVAL } from "./PaymentsPage";

const PAYABLE = new Set(["ISSUED", "PARTIALLY_PAID", "OVERDUE"]);

export function InvoicePage({ invoiceId }: { invoiceId: string }) {
  const client = useApi();
  const invoice = useQuery(`invoice:${invoiceId}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/payments/{id}", {
        params: { path: { id: invoiceId } },
        signal,
      }),
    ),
  );
  const intent = useMutation(() =>
    unwrap(
      client.POST("/experience/citizen/payments/{invoiceId}/intents", {
        params: { path: { invoiceId } },
      }),
    ),
  );
  return (
    <Page
      title={invoice.status === "success" ? `Invoice ${invoice.data.invoiceNumber}` : "Invoice"}
    >
      <Notice tone="info" title="Payment is not approval">
        {PAYMENT_IS_NOT_APPROVAL} The office decides your application separately.
      </Notice>
      <QueryView
        query={invoice}
        loadingLabel="Loading the invoice"
        errorTitle="We could not load this invoice"
        backHref={paths.payments}
        backLabel="Your payments"
      >
        {(p) => {
          const payable = PAYABLE.has(p.status) && p.balanceCents > 0;
          return (
            <Stack gap="5">
              <p>
                <StatusBadge
                  status={p.status}
                  tone={p.status === "OVERDUE" ? "warning" : "neutral"}
                />
              </p>
              <ActingAs />
              <Card title="Invoice" titleLevel={2}>
                <SummaryList
                  rows={[
                    ...(p.dueAt ? [{ id: "due", label: "Due", value: formatDate(p.dueAt) }] : []),
                    ...(p.issuedAt
                      ? [{ id: "issued", label: "Issued", value: formatDate(p.issuedAt) }]
                      : []),
                    {
                      id: "assessment",
                      label: "Assessment",
                      value: p.feeAssessment.assessmentReference,
                    },
                    ...p.lines.map((l) => ({
                      id: `line-${l.lineCode}`,
                      label: l.description,
                      value: formatMoney(l.lineAmountCents, p.currency),
                    })),
                    {
                      id: "total",
                      label: "Total",
                      value: formatMoney(p.totalAmountCents, p.currency),
                    },
                    {
                      id: "paid",
                      label: "Paid so far",
                      value: formatMoney(p.amountPaidCents, p.currency),
                    },
                    {
                      id: "balance",
                      label: "Amount due",
                      value: <strong>{formatMoney(p.balanceCents, p.currency)}</strong>,
                    },
                  ]}
                />
              </Card>
              {p.paymentIntents.length > 0 && (
                <Card title="Payment requests" titleLevel={2}>
                  <ItemList
                    label="Payment requests for this invoice"
                    items={p.paymentIntents.map((i) => ({
                      id: i.id,
                      title: i.intentReference,
                      meta: formatMoney(i.amountCents, p.currency),
                      status: <StatusBadge status={i.status} />,
                    }))}
                  />
                </Card>
              )}
              {payable && (
                <Card title="Pay this invoice" titleLevel={2}>
                  {intent.status === "success" ? (
                    <Notice tone="success" title="Payment request created">
                      <Stack gap="2">
                        <span>
                          Reference {intent.data.intentReference} for{" "}
                          {formatMoney(intent.data.amountCents, intent.data.currency)}. Status:{" "}
                          {humanizeStatus(intent.data.status)}.
                        </span>
                        <span>
                          Online card payment is not connected yet, so nothing has been charged. The
                          office will tell you how to complete the payment.
                        </span>
                        <span>{intent.data.disclaimer}</span>
                      </Stack>
                    </Notice>
                  ) : (
                    <Stack gap="3">
                      <p>
                        This creates a payment request for the amount due. HeartStone never sees or
                        stores your card number.
                      </p>
                      {intent.status === "error" && (
                        <MutationErrorNotice
                          error={intent.error}
                          title="The payment request was not created"
                          checkHint={<>Reload this invoice and check its payment requests</>}
                        />
                      )}
                      <Cluster gap="3">
                        <Button
                          loading={intent.status === "pending"}
                          loadingLabel="Creating payment request"
                          onClick={() =>
                            void intent
                              .run()
                              .then(() => invoice.reload())
                              .catch(() => undefined)
                          }
                        >
                          Continue to pay {formatMoney(p.balanceCents, p.currency)}
                        </Button>
                      </Cluster>
                    </Stack>
                  )}
                </Card>
              )}
              {p.receipts.length > 0 && (
                <Card title="Receipts" titleLevel={2}>
                  <ul className="bullets">
                    {p.receipts.map((r) => (
                      <li key={r.id}>
                        <Link href={paths.receipt(p.id, r.id)}>Receipt {r.receiptNumber}</Link> ·{" "}
                        {formatDate(r.issuedAt)}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
              <Disclaimer>{p.disclaimer}</Disclaimer>
            </Stack>
          );
        }}
      </QueryView>
    </Page>
  );
}
