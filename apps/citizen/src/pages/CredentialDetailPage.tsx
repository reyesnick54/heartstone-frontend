// One credential (design: CredentialDetail.html). GET /experience/citizen/credentials/{id}.
// The gold "Government issued" mark appears only when the backend's public verification
// (GET /public/instruments/verify/{code}) reports it current AND cryptographically verified.
import { useState } from "react";
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Button, Card, Cluster, Link, Stack, StatusBadge, SummaryList } from "@heartstone/ui";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import { RouteLink } from "../components/RouteLink";
import { formatDate, humanizeStatus } from "../lib/format";
import { paths } from "../lib/paths";
import { useQuery } from "../lib/query";
import { conditionText, credentialTone } from "../lib/records";

const ISSUED = new Set(["ISSUED", "EFFECTIVE", "RENEWED", "REINSTATED"]);

function OfficialMark({ code, status }: { code: string; status: string }) {
  const client = useApi();
  const check = useQuery(ISSUED.has(status) ? `verify:${code}` : null, (signal) =>
    unwrap(
      client.GET("/public/instruments/verify/{verificationCode}", {
        params: { path: { verificationCode: code } },
        signal,
      }),
    ),
  );
  if (check.status !== "success") return null;
  if (
    check.data.verificationStatus !== "CURRENT" ||
    check.data.cryptographicVerificationPassed !== true
  )
    return null;
  return <StatusBadge official status="GOVERNMENT_ISSUED" label="Government issued · verified" />;
}

function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState<"idle" | "copied" | "failed">("idle");
  return (
    <Cluster gap="3" align="center">
      <Button
        variant="secondary"
        onClick={() => {
          navigator.clipboard
            ?.writeText(code)
            .then(() => setCopied("copied"))
            .catch(() => setCopied("failed"));
        }}
      >
        Copy code
      </Button>
      <span role="status">
        {copied === "copied"
          ? "Code copied"
          : copied === "failed"
            ? "Could not copy. Select the code and copy it yourself."
            : ""}
      </span>
    </Cluster>
  );
}

export function CredentialDetailPage({ credentialId }: { credentialId: string }) {
  const client = useApi();
  const cred = useQuery(`credential:${credentialId}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/credentials/{id}", {
        params: { path: { id: credentialId } },
        signal,
      }),
    ),
  );
  return (
    <Page
      title={cred.status === "success" ? (cred.data.instrumentType ?? "Credential") : "Credential"}
    >
      <QueryView
        query={cred}
        loadingLabel="Loading the credential"
        errorTitle="We could not load this credential"
        backHref={paths.credentials}
        backLabel="Your credentials"
      >
        {(c) => {
          const conditions = c.conditions.map(conditionText).filter((t): t is string => Boolean(t));
          return (
            <Stack gap="5">
              <Cluster gap="3" align="center">
                <StatusBadge status={c.status} tone={credentialTone(c.status)} />
                {c.verificationReference && (
                  <OfficialMark code={c.verificationReference} status={c.status} />
                )}
              </Cluster>
              <Card title="What it covers" titleLevel={2}>
                <SummaryList
                  rows={[
                    ...(c.instrumentNumber
                      ? [{ id: "number", label: "Number", value: c.instrumentNumber }]
                      : []),
                    ...(c.holderDisplay
                      ? [{ id: "holder", label: "Held by", value: c.holderDisplay }]
                      : []),
                    ...(c.scopeSummary
                      ? [{ id: "scope", label: "Scope", value: c.scopeSummary }]
                      : []),
                    { id: "issuer", label: "Issued by", value: c.issuer.name },
                    { id: "from", label: "Valid from", value: formatDate(c.effectiveFrom, "—") },
                    {
                      id: "until",
                      label: "Valid until",
                      value: formatDate(c.effectiveUntil, "No end date"),
                    },
                    ...(c.currentVersionNumber
                      ? [{ id: "version", label: "Version", value: String(c.currentVersionNumber) }]
                      : []),
                    { id: "status", label: "Status", value: humanizeStatus(c.status) },
                  ]}
                />
              </Card>
              {conditions.length > 0 && (
                <Card title="Conditions" titleLevel={2}>
                  <ul className="bullets">
                    {conditions.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </Card>
              )}
              {c.verificationReference && (
                <Card title="Prove it is genuine" titleLevel={2}>
                  <Stack gap="3">
                    <p>
                      Verification code:{" "}
                      <code className="verification-code">{c.verificationReference}</code>
                    </p>
                    <p>
                      Anyone, such as an employer or an insurer, can check this with the code. They
                      see whether it is valid, not your personal details.
                    </p>
                    <CopyCode code={c.verificationReference} />
                    <RouteLink
                      href={`${paths.verify}?code=${encodeURIComponent(c.verificationReference)}`}
                      fallback={null}
                    >
                      Check it now
                    </RouteLink>
                  </Stack>
                </Card>
              )}
              {c.renewal && (
                <Card title="Renewal" titleLevel={2}>
                  <p>
                    {c.renewal.eligible
                      ? (c.renewal.nextStep ?? "You can renew this credential.")
                      : (c.renewal.reason ?? "This credential cannot be renewed online yet.")}
                  </p>
                </Card>
              )}
              {c.downloadPath && (
                <Link href={c.downloadPath} download standalone>
                  Download this credential
                </Link>
              )}
            </Stack>
          );
        }}
      </QueryView>
    </Page>
  );
}
