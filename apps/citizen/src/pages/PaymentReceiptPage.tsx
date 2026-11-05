// A payment receipt (design: PaymentReceipt.html). From GET /experience/citizen/payments/{id}:
// the receipt the backend lists for the invoice, with the invoice's paid and remaining amounts.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Card, Link, Notice, Stack, SummaryList } from "@heartstone/ui";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import { formatDateTime, formatMoney, humanizeStatus } from "../lib/format";
import { paths } from "../lib/paths";
import { useQuery } from "../lib/query";
import { PAYMENT_IS_NOT_APPROVAL } from "./PaymentsPage";

export function PaymentReceiptPage({
  invoiceId,
  receiptId,
}: {
  invoiceId: string;
  receiptId: string;
}) {
  const client = useApi();
  const invoice = useQuery(`invoice:${invoiceId}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/payments/{id}", {
        params: { path: { id: invoiceId } },
        signal,
      }),
    ),
  );
  const receipt =
    invoice.status === "success"
      ? invoice.data.receipts.find((r) => r.id === receiptId)
      : undefined;
  return (
    <Page title={receipt ? `Receipt ${receipt.receiptNumber}` : "Receipt"}>
      <QueryView
        query={invoice}
        loadingLabel="Loading the receipt"
        errorTitle="We could not load this receipt"
        backHref={paths.payments}
        backLabel="Your payments"
      >
        {(p) =>
          !receipt ? (
            <Notice tone="warning" title="We could not find this receipt">
              <Link href={paths.invoice(p.id)}>Go to invoice {p.invoiceNumber}</Link>
            </Notice>
          ) : (
            <Stack gap="5">
              <Card title="Receipt details" titleLevel={2}>
                <SummaryList
                  rows={[
                    { id: "number", label: "Receipt", value: receipt.receiptNumber },
                    { id: "when", label: "Issued", value: formatDateTime(receipt.issuedAt) },
                    {
                      id: "invoice",
                      label: "Invoice",
                      value: <Link href={paths.invoice(p.id)}>{p.invoiceNumber}</Link>,
                    },
                    { id: "status", label: "Invoice status", value: humanizeStatus(p.status) },
                    {
                      id: "paid",
                      label: "Paid so far on this invoice",
                      value: formatMoney(p.amountPaidCents, p.currency),
                    },
                    {
                      id: "balance",
                      label: "Balance remaining",
                      value: formatMoney(p.balanceCents, p.currency),
                    },
                  ]}
                />
              </Card>
              <Card title="What happens now" titleLevel={2}>
                <p>
                  {PAYMENT_IS_NOT_APPROVAL} Your fee is recorded, but this does not mean your
                  application is approved. You will get the decision in your messages.
                </p>
              </Card>
              <Disclaimer>
                Think there is a mistake with this payment? Contact the office and quote{" "}
                {receipt.receiptNumber}.
              </Disclaimer>
            </Stack>
          )
        }
      </QueryView>
    </Page>
  );
}
