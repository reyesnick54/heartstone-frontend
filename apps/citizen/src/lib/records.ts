// Shared helpers for credential and document records.
import type { Schemas } from "./api-types";

export type CredentialStatus = Schemas["CitizenCredentialSummaryDto"]["status"];

/** Statuses after which a credential no longer has effect. */
const ENDED: ReadonlySet<CredentialStatus> = new Set([
  "EXPIRED",
  "REVOKED",
  "SURRENDERED",
  "SUPERSEDED",
  "REPLACED",
  "CLOSED",
]);

export function isEnded(status: CredentialStatus): boolean {
  return ENDED.has(status);
}

/** Tone for a credential status. Never gold: "official" needs a separate backend verification. */
export function credentialTone(
  status: CredentialStatus,
): "success" | "warning" | "error" | "neutral" | "info" {
  if (
    status === "EFFECTIVE" ||
    status === "ISSUED" ||
    status === "RENEWED" ||
    status === "REINSTATED"
  )
    return "success";
  if (status === "SUSPENDED" || status === "PARTIALLY_SUSPENDED" || status === "REVOCATION_DECIDED")
    return "warning";
  if (status === "REVOKED") return "error";
  if (status === "PENDING_ISSUANCE" || status === "DRAFT") return "info";
  return "neutral";
}

/** Renders a backend credential condition (any JSON) as text, or undefined when it has none. */
export function conditionText(condition: unknown): string | undefined {
  if (typeof condition === "string") return condition;
  if (condition && typeof condition === "object") {
    const record = condition as Record<string, unknown>;
    for (const key of ["text", "description", "label", "summary", "condition"]) {
      const value = record[key];
      if (typeof value === "string" && value) return value;
    }
  }
  return undefined;
}
