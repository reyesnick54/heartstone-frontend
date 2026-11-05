// Check a government document (design: Verify.html). Public: works signed in or out.
// GET /public/instruments/verify/{verificationCode}. The result is the backend's; "genuine" is
// only said when the backend reports the record CURRENT and its cryptographic check passed.
import { useState } from "react";
import { unwrap, type HeartStoneApiError } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import {
  Button,
  Card,
  Cluster,
  ErrorSummary,
  Notice,
  Stack,
  StatusBadge,
  SummaryList,
  TextField,
} from "@heartstone/ui";
import { ApiErrorNotice } from "../components/ApiErrorNotice";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import type { Schemas } from "../lib/api-types";
import { formatDate, formatDateTime, humanizeStatus } from "../lib/format";
import { paths } from "../lib/paths";
import { useQuery } from "../lib/query";
import { useNavigate, useSearchParams } from "../router/router";

type Result = Schemas["PublicInstrumentVerificationResponseDto"];

const NOT_VALID = new Set([
  "EXPIRED",
  "SUSPENDED",
  "REVOKED",
  "SUPERSEDED",
  "REPLACED",
  "SURRENDERED",
]);

function headline(r: Result): { title: string; tone: "success" | "warning" | "error" | "info" } {
  if (r.verificationStatus === "CURRENT") {
    return r.cryptographicVerificationPassed === true
      ? { title: "Genuine and current", tone: "success" }
      : { title: "Current record found", tone: "info" };
  }
  if (r.verificationStatus === "NOT_YET_EFFECTIVE")
    return { title: "Not yet in effect", tone: "warning" };
  if (NOT_VALID.has(r.verificationStatus))
    return {
      title: `Not valid: ${humanizeStatus(r.verificationStatus).toLowerCase()}`,
      tone: "error",
    };
  if (r.verificationStatus === "NOT_PUBLICLY_DISCLOSABLE")
    return { title: "This record cannot be shown publicly", tone: "info" };
  if (r.verificationStatus === "VALID_REFERENCE")
    return { title: "The code matches a record", tone: "info" };
  return { title: "We could not verify this code", tone: "warning" };
}

function signatureText(r: Result): string {
  if (r.cryptographicVerificationPassed === true) return "Digital signature checked and valid";
  if (r.cryptographicVerificationPassed === false) return "Digital signature check did not pass";
  return "Digital signature not checked";
}

function ResultView({ code }: { code: string }) {
  const client = useApi();
  const result = useQuery(`public-verify:${code}`, (signal) =>
    unwrap(
      client.GET("/public/instruments/verify/{verificationCode}", {
        params: { path: { verificationCode: code } },
        signal,
      }),
    ),
  );
  if (result.status === "loading") return <p role="status">Checking the code</p>;
  if (result.status === "error")
    return <VerifyError error={result.error} onRetry={result.reload} />;
  const r = result.data;
  const h = headline(r);
  const official = r.verificationStatus === "CURRENT" && r.cryptographicVerificationPassed === true;
  return (
    <Card title={h.title} titleLevel={2} official={official} aria-live="polite">
      <Stack gap="3">
        <p>
          {official ? (
            <StatusBadge official status="GOVERNMENT_ISSUED" label="Government issued · verified" />
          ) : (
            <StatusBadge
              status={r.verificationStatus}
              tone={h.tone === "success" ? "success" : h.tone}
            />
          )}
        </p>
        <SummaryList
          rows={[
            ...(r.instrumentType
              ? [{ id: "type", label: "Document", value: r.instrumentType }]
              : []),
            ...(r.instrumentNumber
              ? [{ id: "number", label: "Number", value: r.instrumentNumber }]
              : []),
            ...(r.issuer ? [{ id: "issuer", label: "Issued by", value: r.issuer }] : []),
            ...(r.holderDisplay
              ? [{ id: "holder", label: "Held by", value: r.holderDisplay }]
              : []),
            ...(r.scopeSummary ? [{ id: "scope", label: "Covers", value: r.scopeSummary }] : []),
            ...(r.effectiveDate
              ? [{ id: "from", label: "Valid from", value: formatDate(r.effectiveDate) }]
              : []),
            ...(r.expiryDate
              ? [{ id: "until", label: "Valid until", value: formatDate(r.expiryDate) }]
              : []),
            { id: "sig", label: "Signature", value: signatureText(r) },
            { id: "checked", label: "Checked", value: formatDateTime(r.verificationTimestamp) },
          ]}
        />
        <p className="muted">Only the details needed to confirm the document are shown.</p>
        <Disclaimer>{r.qrReferenceDisclaimer}</Disclaimer>
      </Stack>
    </Card>
  );
}

function VerifyError({ error, onRetry }: { error: HeartStoneApiError; onRetry: () => void }) {
  if (error.kind === "not-found") {
    return (
      <Notice tone="warning" title="No match" announce="alert">
        The code was not recognised. Check you typed it exactly as printed. If it still does not
        match, do not rely on the document.
      </Notice>
    );
  }
  return <ApiErrorNotice error={error} title="We could not check the code" onRetry={onRetry} />;
}

export function VerifyPage() {
  const navigate = useNavigate();
  const params = useSearchParams();
  const code = (params.get("code") ?? "").trim();
  const [text, setText] = useState(code);
  const [error, setError] = useState<string | undefined>();
  return (
    <Page
      title="Check a government document"
      description="Enter the verification code printed on a licence, permit or certificate to see whether it is genuine and still valid."
    >
      <form
        className="stack-form"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          const value = text.trim();
          if (!value) {
            setError("Enter the verification code");
            return;
          }
          setError(undefined);
          navigate(`${paths.verify}?code=${encodeURIComponent(value)}`);
        }}
      >
        {error && <ErrorSummary errors={[{ targetId: "verify-code", message: error }]} />}
        <TextField
          id="verify-code"
          label="Verification code"
          hint="For example TB7K-Q2MX-84RD"
          autoComplete="off"
          spellCheck={false}
          value={text}
          onChange={(e) => setText(e.target.value)}
          {...(error ? { error } : {})}
        />
        <Cluster gap="3">
          <Button type="submit">Check</Button>
        </Cluster>
      </form>
      {code && <ResultView key={code} code={code} />}
      <Disclaimer>
        If a document does not check out, do not rely on it. Contact the office named on it.
      </Disclaimer>
    </Page>
  );
}
