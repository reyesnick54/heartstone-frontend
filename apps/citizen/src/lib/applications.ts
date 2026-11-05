// Draft and submit calls for an application.
//
// CONTRACT GAP (reported): in heartstone-backend the generic application routes are not typed in
// the OpenAPI contract. `UpdateApplicationDraftDto` and `SubmitApplicationDto` are empty schemas
// (no @ApiProperty), and GET /applications/{id}, PATCH …/draft and POST …/submit have no
// response schema. Until the backend types them, this file is the only place that bridges the
// gap. The two request shapes below copy the backend DTOs exactly:
//   src/application-processing/applications/dto/update-application-draft.dto.ts
//   src/application-processing/applications/dto/submit-application.dto.ts
// Responses are read with runtime checks into the contract's own ApplicationRecordDto fields.
import { unwrap, type HeartStoneClient } from "@heartstone/api-client";
import type { Schemas } from "./api-types";
import type { FormAnswers } from "./forms";

/** heartstone-backend UpdateApplicationDraftDto (not yet in the contract). */
interface UpdateDraftBody {
  draftAnswers: FormAnswers;
}

/** heartstone-backend SubmitApplicationDto (not yet in the contract). */
interface SubmitBody {
  answers: FormAnswers;
  configurationFingerprint: string;
  idempotencyKey?: string;
}

export type DraftRecord = Pick<
  Schemas["ApplicationRecordDto"],
  | "id"
  | "status"
  | "configurationFingerprint"
  | "governmentServiceVersionId"
  | "organizationId"
  | "representativeAuthorityId"
  | "applicantCategory"
  | "updatedAt"
> & { draftAnswers: FormAnswers };

function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

const STATUSES = new Set(["DRAFT", "SUBMITTED", "RECEIVED", "WITHDRAWN", "CLOSED"]);

/** Reads the fields the form needs from an untyped application record, or throws. */
export function parseDraftRecord(value: unknown): DraftRecord {
  if (
    !isObject(value) ||
    typeof value["id"] !== "string" ||
    typeof value["status"] !== "string" ||
    !STATUSES.has(value["status"]) ||
    typeof value["configurationFingerprint"] !== "string" ||
    typeof value["governmentServiceVersionId"] !== "string"
  ) {
    throw new Error("HeartStone: the application record is not in the expected shape.");
  }
  const str = (key: string) => (typeof value[key] === "string" ? (value[key] as string) : null);
  return {
    id: value["id"],
    status: value["status"] as DraftRecord["status"],
    configurationFingerprint: value["configurationFingerprint"],
    governmentServiceVersionId: value["governmentServiceVersionId"],
    organizationId: str("organizationId"),
    representativeAuthorityId: str("representativeAuthorityId"),
    applicantCategory: (str("applicantCategory") ??
      "INDIVIDUAL") as DraftRecord["applicantCategory"],
    updatedAt: str("updatedAt") ?? "",
    draftAnswers: isObject(value["draftAnswers"]) ? value["draftAnswers"] : {},
  };
}

export async function getDraft(
  client: HeartStoneClient,
  id: string,
  signal?: AbortSignal,
): Promise<DraftRecord> {
  const data: unknown = await unwrap(
    client.GET("/applications/{id}", { params: { path: { id } }, ...(signal ? { signal } : {}) }),
  );
  return parseDraftRecord(data);
}

export async function saveDraft(
  client: HeartStoneClient,
  id: string,
  draftAnswers: FormAnswers,
): Promise<DraftRecord> {
  const body: UpdateDraftBody = { draftAnswers };
  const data: unknown = await unwrap(
    client.PATCH("/applications/{id}/draft", {
      params: { path: { id } },
      // The contract types this body as an empty object (see the note at the top).
      body: body as unknown as Schemas["UpdateApplicationDraftDto"],
    }),
  );
  return parseDraftRecord(data);
}

/** Submits once. Never retried: the idempotency key lets the backend refuse a duplicate. */
export async function submitApplication(
  client: HeartStoneClient,
  id: string,
  body: SubmitBody,
): Promise<void> {
  await unwrap(
    client.POST("/applications/{id}/submit", {
      params: { path: { id } },
      body: body as unknown as Schemas["SubmitApplicationDto"],
    }),
  );
}
