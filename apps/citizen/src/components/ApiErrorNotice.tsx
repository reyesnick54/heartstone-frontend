// One place that turns a HeartStoneApiError into calm, honest copy. Reads can offer "Try again";
// writes never do so automatically (see MutationErrorNotice).
import { defaultMessageFor, loginUrl, type HeartStoneApiError } from "@heartstone/api-client";
import { Button, Cluster, Link, Notice, Stack } from "@heartstone/ui";
import type { ReactNode } from "react";

export function currentPath(): string {
  if (typeof window === "undefined") return "/";
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function Reference({ error }: { error: HeartStoneApiError }) {
  return error.correlationId ? (
    <span className="error-reference">Reference: {error.correlationId}</span>
  ) : null;
}

export interface ApiErrorNoticeProps {
  error: HeartStoneApiError;
  /** What failed, in the person's terms: "We could not load your applications". */
  title?: string;
  /** Offered for reads only. */
  onRetry?: () => void;
  /** Where "not found" sends people back to. */
  backHref?: string;
  backLabel?: string;
}

/** Explains a failed read (or a failed write, when `onRetry` is omitted). */
export function ApiErrorNotice({
  error,
  title = "We could not load this",
  onRetry,
  backHref,
  backLabel = "Go back",
}: ApiErrorNoticeProps) {
  switch (error.kind) {
    case "safe-halt":
      return (
        <Notice tone="warning" title="This service is paused" announce="alert">
          <Stack gap="2">
            <span>
              {defaultMessageFor("safe-halt")} Nothing you have submitted has been lost. The office
              will continue once its checks are complete.
            </span>
            <Reference error={error} />
          </Stack>
        </Notice>
      );
    case "step-up-required":
      return (
        <Notice tone="info" title="Please sign in again" announce="alert">
          <Stack gap="3">
            <span>
              {defaultMessageFor("step-up-required")} This keeps your records safe. You will come
              back to this page.
            </span>
            <Link href={loginUrl({ returnTo: currentPath(), reauth: true })} standalone>
              Sign in again
            </Link>
          </Stack>
        </Notice>
      );
    case "unauthenticated":
      return (
        <Notice tone="info" title="Your session has ended" announce="alert">
          <Link href={loginUrl({ returnTo: currentPath() })} standalone>
            Sign in
          </Link>
        </Notice>
      );
    case "forbidden":
      return (
        <Notice tone="warning" title="You cannot see this" announce="alert">
          <Stack gap="2">
            <span>
              {defaultMessageFor("forbidden")} If you think you should have access, contact the
              office responsible.
            </span>
            <Reference error={error} />
          </Stack>
        </Notice>
      );
    case "not-found":
      return (
        <Notice tone="warning" title="We could not find this" announce="alert">
          <Stack gap="3">
            <span>It may have been removed, or the link may be wrong.</span>
            {backHref && (
              <Link href={backHref} standalone>
                {backLabel}
              </Link>
            )}
          </Stack>
        </Notice>
      );
    case "rate-limited":
      return (
        <Notice tone="warning" title="Please wait a moment" announce="alert">
          <Stack gap="3">
            <span>
              {defaultMessageFor("rate-limited")}
              {error.retryAfterSeconds !== undefined &&
                ` You can try again in ${error.retryAfterSeconds} seconds.`}
            </span>
            {onRetry && <RetryButton onRetry={onRetry} />}
          </Stack>
        </Notice>
      );
    case "validation":
    case "conflict":
      return (
        <Notice tone="error" title={title}>
          <Stack gap="2">
            {error.messages.map((m) => (
              <span key={m}>{m}</span>
            ))}
            <Reference error={error} />
            {onRetry && <RetryButton onRetry={onRetry} />}
          </Stack>
        </Notice>
      );
    case "network":
    case "server":
    default:
      return (
        <Notice tone="error" title={title}>
          <Stack gap="3">
            <span>{defaultMessageFor(error.kind)}</span>
            <Reference error={error} />
            {onRetry && <RetryButton onRetry={onRetry} />}
          </Stack>
        </Notice>
      );
  }
}

function RetryButton({ onRetry }: { onRetry: () => void }) {
  return (
    <Cluster gap="3">
      <Button variant="secondary" onClick={onRetry}>
        Try again
      </Button>
    </Cluster>
  );
}

export interface MutationErrorNoticeProps {
  error: HeartStoneApiError;
  /** What did not happen: "Your appointment was not confirmed". */
  title: string;
  /** Where to check whether a request that may have reached the office went through. */
  checkHint?: ReactNode;
}

/**
 * Explains a failed write. Never retries. For a network failure the request may have reached
 * the office, so the person is told to check before trying again.
 */
export function MutationErrorNotice({ error, title, checkHint }: MutationErrorNoticeProps) {
  if (error.kind === "network") {
    return (
      <Notice tone="error" title="We do not know whether this went through">
        <Stack gap="2">
          <span>
            We lost the connection before the office replied. {checkHint ?? "Reload the page"}{" "}
            before you try again, so it is not done twice.
          </span>
          <Reference error={error} />
        </Stack>
      </Notice>
    );
  }
  if (
    error.kind === "safe-halt" ||
    error.kind === "step-up-required" ||
    error.kind === "unauthenticated" ||
    error.kind === "rate-limited"
  ) {
    return <ApiErrorNotice error={error} />;
  }
  if (error.kind === "forbidden") {
    return (
      <Notice tone="warning" title={title}>
        <Stack gap="2">
          <span>{error.denial?.summary ?? error.message}</span>
          <Reference error={error} />
        </Stack>
      </Notice>
    );
  }
  return <ApiErrorNotice error={error} title={title} />;
}
