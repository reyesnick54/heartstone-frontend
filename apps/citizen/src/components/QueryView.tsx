import type { ReactNode } from "react";
import { Loading } from "@heartstone/ui";
import type { QueryResult } from "../lib/query";
import { ApiErrorNotice } from "./ApiErrorNotice";

export interface QueryViewProps<T> {
  query: QueryResult<T>;
  /** Announced while loading, e.g. "Loading your applications". */
  loadingLabel: string;
  errorTitle: string;
  backHref?: string;
  backLabel?: string;
  children: (data: T) => ReactNode;
}

/** Renders loading, error (with "Try again") or the loaded data. */
export function QueryView<T>({
  query,
  loadingLabel,
  errorTitle,
  backHref,
  backLabel,
  children,
}: QueryViewProps<T>) {
  if (query.status === "loading") return <Loading label={loadingLabel} />;
  if (query.status === "error") {
    return (
      <ApiErrorNotice
        error={query.error}
        title={errorTitle}
        onRetry={query.reload}
        {...(backHref ? { backHref } : {})}
        {...(backLabel ? { backLabel } : {})}
      />
    );
  }
  return <>{children(query.data)}</>;
}
