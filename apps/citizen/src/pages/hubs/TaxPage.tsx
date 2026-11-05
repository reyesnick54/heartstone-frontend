// Tax & revenue (design: Tax.html). /experience/citizen/revenue (+ /actions).
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { ItemList, Notice, Stack, StatusBadge, SummaryList } from "@heartstone/ui";
import { Disclaimer } from "../../components/Disclaimer";
import { HubSection, HubServices } from "../../components/Hub";
import { Page } from "../../components/Page";
import { formatDate, formatMoney, humanizeStatus } from "../../lib/format";
import { useQuery } from "../../lib/query";
import { LOCALE_CURRENCY } from "../../tenant";

export function TaxPage() {
  const client = useApi();
  const home = useQuery("revenue", (signal) =>
    unwrap(client.GET("/experience/citizen/revenue", { signal })),
  );
  return (
    <Page title="Tax & revenue" description="Your tax accounts, returns, assessments and payments.">
      <HubSection
        title="Tax accounts"
        query={home}
        empty=""
        render={(h) => (
          <Stack gap="3">
            <SummaryList
              rows={[
                { id: "tin", label: "Taxpayer number", value: h.taxpayerIdentifier },
                { id: "account", label: "Account", value: h.accountNumber },
                ...(h.registrationStatus
                  ? [
                      {
                        id: "reg",
                        label: "Registration",
                        value: humanizeStatus(h.registrationStatus),
                      },
                    ]
                  : []),
                {
                  id: "returns",
                  label: "Returns outstanding",
                  value: String(h.outstandingReturns),
                },
                {
                  id: "balance",
                  label: "Balance owed",
                  value: formatMoney(h.outstandingBalanceCents, LOCALE_CURRENCY),
                },
              ]}
            />
            {h.activeTaxAccounts.length > 0 && (
              <ItemList
                label="Active tax accounts"
                items={h.activeTaxAccounts.map((a) => ({
                  id: a.accountId,
                  title: a.displayName,
                  meta: `Account ${a.accountNumber} · ${humanizeStatus(a.accountKind)}`,
                }))}
              />
            )}
            {h.paymentDoesNotAlterAssessment && (
              <Notice tone="info">
                Paying tax does not change an assessment. To disagree with an assessment, ask for a
                review.
              </Notice>
            )}
          </Stack>
        )}
      />
      <HubSection
        title="Coming up"
        query={home}
        empty="Nothing is due."
        render={(h) =>
          h.upcomingObligations.map((o) => ({
            id: o.obligationId,
            title: o.description,
            meta: o.dueDate ? `Due ${formatDate(o.dueDate)}` : undefined,
            status: <StatusBadge status={o.status} />,
          }))
        }
      />
      <HubSection
        title="Assessments"
        query={home}
        empty="You have no assessments."
        render={(h) =>
          h.assessments.map((a) => ({
            id: a.assessmentId,
            title: `Assessment ${a.assessmentReference}`,
            status: <StatusBadge status={a.status} />,
          }))
        }
      />
      <HubSection
        title="Refunds"
        query={home}
        empty="You have no refund claims."
        render={(h) =>
          h.refunds.map((r) => ({
            id: r.refundClaimId,
            title: formatMoney(r.requestedAmountCents, LOCALE_CURRENCY),
            status: <StatusBadge status={r.status} />,
          }))
        }
      />
      <HubSection
        title="Tax compliance"
        query={home}
        empty="You have not asked for a tax compliance certificate."
        render={(h) =>
          h.complianceClearance.map((c) => ({
            id: c.requestId,
            title: "Tax compliance certificate request",
            status: <StatusBadge status={c.status} />,
          }))
        }
      />
      <HubServices
        examples={["File a tax return", "Claim a refund", "Request a tax compliance certificate"]}
      />
      {home.status === "success" && (
        <Disclaimer>
          {home.data.disclaimer} Amounts and deadlines on your official notices take precedence.
        </Disclaimer>
      )}
    </Page>
  );
}
