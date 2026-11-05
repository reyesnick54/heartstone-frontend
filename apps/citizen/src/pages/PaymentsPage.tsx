// Payments (design: Payments.html). GET /experience/citizen/payments.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Cluster, EmptyState, Link, Notice, StatusBadge, Table, Tabs } from "@heartstone/ui";
import { ActingAs } from "../components/ActingAs";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import type { Schemas } from "../lib/api-types";
import { formatMoney, formatShortDate } from "../lib/format";
import { paths } from "../lib/paths";
import { useQuery } from "../lib/query";

type Payment = Schemas["CitizenPaymentSummaryDto"];
const PAYABLE = new Set<Payment["status"]>(["ISSUED", "PARTIALLY_PAID", "OVERDUE"]);

export const PAYMENT_IS_NOT_APPROVAL = "Paying a fee does not decide your application.";

function PaymentTable({ rows, caption }: { rows: Payment[]; caption: string }) {
  if (rows.length === 0) return <p>None here.</p>;
  return (
    <Table<Payment>
      caption={caption}
      hideCaption
      rows={rows}
      rowKey={(p) => p.id}
      columns={[
        {
          key: "invoice",
          header: "Invoice",
          rowHeader: true,
          cell: (p) => <Link href={paths.invoice(p.id)}>{p.invoiceNumber}</Link>,
        },
        {
          key: "status",
          header: "Status",
          cell: (p) => (
            <StatusBadge status={p.status} tone={p.status === "OVERDUE" ? "warning" : "neutral"} />
          ),
        },
        {
          key: "amount",
          header: "Amount",
          align: "end",
          cell: (p) => formatMoney(p.totalAmountCents, p.currency),
        },
        {
          key: "balance",
          header: "To pay",
          align: "end",
          cell: (p) => formatMoney(p.balanceCents, p.currency),
        },
        { key: "due", header: "Due", cell: (p) => formatShortDate(p.dueAt, "—") },
        {
          key: "actions",
          header: "Actions",
          hideHeader: true,
          cell: (p) => (
            <Cluster gap="3">
              {PAYABLE.has(p.status) && p.balanceCents > 0 && (
                <Link href={paths.invoice(p.id)}>Pay invoice {p.invoiceNumber}</Link>
              )}
              {p.receipts.map((r) => (
                <Link key={r.id} href={paths.receipt(p.id, r.id)}>
                  Receipt {r.receiptNumber}
                </Link>
              ))}
            </Cluster>
          ),
        },
      ]}
    />
  );
}

export function PaymentsPage() {
  const client = useApi();
  const payments = useQuery("payments", (signal) =>
    unwrap(client.GET("/experience/citizen/payments", { signal })),
  );
  return (
    <Page title="Payments" description="Fees for your applications and services, with receipts.">
      <Notice tone="info" title="Payment is not approval">
        {PAYMENT_IS_NOT_APPROVAL} The office decides your application separately.
      </Notice>
      <ActingAs />
      <QueryView
        query={payments}
        loadingLabel="Loading your payments"
        errorTitle="We could not load your payments"
      >
        {(items) => {
          if (items.length === 0)
            return (
              <EmptyState
                title="You have no invoices"
                description="When a fee is due for one of your applications, the invoice appears here."
              />
            );
          const toPay = items.filter((p) => PAYABLE.has(p.status) && p.balanceCents > 0);
          const paid = items.filter((p) => p.status === "PAID");
          const refunds = items.filter((p) => p.refunds.length > 0);
          return (
            <Tabs
              label="Invoices"
              tabs={[
                {
                  id: "all",
                  label: "All",
                  count: items.length,
                  content: <PaymentTable rows={items} caption="All invoices" />,
                },
                {
                  id: "topay",
                  label: "To pay",
                  count: toPay.length,
                  content: <PaymentTable rows={toPay} caption="Invoices to pay" />,
                },
                {
                  id: "paid",
                  label: "Paid",
                  count: paid.length,
                  content: <PaymentTable rows={paid} caption="Paid invoices" />,
                },
                {
                  id: "refunds",
                  label: "Refunds",
                  count: refunds.length,
                  content: <PaymentTable rows={refunds} caption="Invoices with refunds" />,
                },
              ]}
            />
          );
        }}
      </QueryView>
      <Disclaimer>
        If you think you were charged wrongly, contact the office named on the invoice.
      </Disclaimer>
    </Page>
  );
}
