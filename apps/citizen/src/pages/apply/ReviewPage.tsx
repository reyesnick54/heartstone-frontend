// Check your answers and submit (design: Review.html). Declarations from the form schema are
// made here. Submitting is POST /applications/{id}/submit with the form answers, the
// configuration fingerprint and an idempotency key; it is never retried automatically.
import { useState } from "react";
import { useApi } from "@heartstone/api-client/react";
import {
  Button,
  Card,
  Cluster,
  ErrorSummary,
  Link,
  Loading,
  Notice,
  Stack,
  StepIndicator,
  SummaryList,
} from "@heartstone/ui";
import { ActingAs } from "../../components/ActingAs";
import { ApiErrorNotice, MutationErrorNotice } from "../../components/ApiErrorNotice";
import { DynamicField } from "../../components/DynamicField";
import { Page } from "../../components/Page";
import { submitApplication, type DraftRecord } from "../../lib/applications";
import type { StartExperience } from "../../lib/api-types";
import { formatMoney, localized } from "../../lib/format";
import {
  answersFromValues,
  allFields,
  declarationFields,
  displayAnswer,
  fieldDomId,
  fieldLabel,
  isFieldVisible,
  stepSections,
  validateFields,
  without,
  type FieldValue,
  type FormValues,
} from "../../lib/forms";
import { activeRepresentations, useMe } from "../../lib/me";
import { paths } from "../../lib/paths";
import { useMutation } from "../../lib/query";
import { useNavigate, useSearchParams } from "../../router/router";
import { applyStepItems, cannotApplyReason, representationFor } from "./ApplyFormPage";
import { useApplyContext } from "./useApplyContext";

/** One key per submit attempt on this page; the backend refuses a second use. */
function newIdempotencyKey(): string {
  return globalThis.crypto.randomUUID();
}

function ReviewForm({
  slug,
  start,
  draft,
}: {
  slug: string;
  start: StartExperience;
  draft: DraftRecord;
}) {
  const client = useApi();
  const navigate = useNavigate();
  const me = useMe();
  const schema = start.formSchema;
  const fields = schema ? allFields(schema) : [];
  const sections = schema ? stepSections(schema) : [];
  const declarations = schema ? declarationFields(schema) : [];
  const steps = applyStepItems(slug, draft.id, start);
  const [declared, setDeclared] = useState<FormValues>({});
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [idempotencyKey] = useState(newIdempotencyKey);
  const submit = useMutation(() =>
    submitApplication(client, draft.id, {
      answers: answersFromValues(
        fields,
        { ...valuesFromDraft(), ...declared },
        { visibleOnly: true },
      ),
      configurationFingerprint: start.configurationFingerprint,
      idempotencyKey,
    }),
  );

  function valuesFromDraft(): FormValues {
    const values: FormValues = {};
    for (const [key, value] of Object.entries(draft.draftAnswers)) {
      if (typeof value === "string" || typeof value === "boolean") values[key] = value;
      else if (typeof value === "number") values[key] = String(value);
      else if (Array.isArray(value)) values[key] = value.map(String);
    }
    return values;
  }

  const reps = me.status === "success" ? activeRepresentations(me.data) : [];
  const forOrg = representationFor(reps, draft);
  const answers = draft.draftAnswers;

  const stepOf = (fieldKey: string) =>
    sections.findIndex((s) => s.fields.some((f) => f.fieldKey === fieldKey));
  const changeHref = (fieldKey: string) => {
    const i = stepOf(fieldKey);
    return i < 0 ? undefined : steps[i]?.href;
  };

  // Server field errors from a failed submit: shown in the summary, linked to the step.
  const serverFieldErrors =
    submit.status === "error" && submit.error.kind === "validation" ? submit.error.fieldErrors : {};
  const summary = [
    ...Object.entries(errors).map(([key, messages]) => ({
      targetId: fieldDomId(key),
      message: messages[0] ?? "",
    })),
    ...Object.entries(serverFieldErrors)
      .filter(([key]) => !errors[key])
      .map(([key, messages]) => {
        const field = fields.find((f) => f.fieldKey === key);
        const message = `${field ? fieldLabel(field) : key}: ${messages[0] ?? ""}`;
        const href = changeHref(key);
        return declarations.some((d) => d.fieldKey === key) || !href
          ? { targetId: fieldDomId(key), message }
          : { href, message };
      }),
  ];

  return (
    <Stack gap="5">
      <StepIndicator label="Application steps" current={steps.length - 1} steps={steps} />
      <ActingAs forOrganization={forOrg} />
      {summary.length > 0 && <ErrorSummary errors={summary} />}
      {submit.status === "error" && submit.error.kind !== "validation" && (
        <MutationErrorNotice
          error={submit.error}
          title="Your application was not submitted"
          checkHint={
            <>
              Check <Link href={paths.applications}>your applications</Link> to see whether it was
              submitted
            </>
          }
        />
      )}
      <Card title="Applicant" titleLevel={2}>
        <SummaryList
          rows={[
            {
              id: "for",
              label: "Applying for",
              value: forOrg ? forOrg.name : "Yourself",
            },
            ...(me.status === "success"
              ? [
                  {
                    id: "by",
                    label: "Submitted by",
                    value: forOrg
                      ? `${me.data.profile.displayName}, authorised representative`
                      : me.data.profile.displayName,
                  },
                ]
              : []),
          ]}
        />
      </Card>
      {sections.map((section, i) => {
        const shown = section.fields.filter(
          (f) => f.fieldType !== "INFORMATION_DISPLAY" && isFieldVisible(f, answers),
        );
        if (shown.length === 0) return null;
        return (
          <Card
            key={section.sectionKey}
            title={localized(section.title, section.sectionKey)}
            titleLevel={2}
          >
            <SummaryList
              rows={shown.map((f) => ({
                id: f.fieldKey,
                label: fieldLabel(f),
                value: displayAnswer(f, answers[f.fieldKey]),
                action: steps[i]?.href ? (
                  <Link href={steps[i]?.href ?? ""}>
                    Change <span className="visually-hidden">{fieldLabel(f).toLowerCase()}</span>
                  </Link>
                ) : undefined,
              }))}
            />
          </Card>
        );
      })}
      {start.feeDefinitions.length > 0 && (
        <Card title="Fees" titleLevel={2}>
          <SummaryList
            rows={start.feeDefinitions.map((fee) => ({
              id: fee.code,
              label: fee.label,
              value: formatMoney(fee.amountCents, fee.currency),
            }))}
          />
          <p>
            You will be asked to pay after you submit. Paying the fee does not mean your application
            is approved.
          </p>
        </Card>
      )}
      <form
        className="stack-form"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          const merged = answersFromValues(
            fields,
            { ...valuesFromDraft(), ...declared },
            { visibleOnly: true },
          );
          const problems = validateFields(fields, merged);
          setErrors(
            Object.fromEntries(
              Object.entries(problems).filter(([key]) =>
                declarations.some((d) => d.fieldKey === key),
              ),
            ),
          );
          const otherProblems = Object.keys(problems).filter(
            (key) => !declarations.some((d) => d.fieldKey === key),
          );
          if (Object.keys(problems).length > 0) {
            if (otherProblems.length > 0) {
              setErrors((e) => ({
                ...e,
                ...Object.fromEntries(otherProblems.map((key) => [key, problems[key] ?? []])),
              }));
            }
            return;
          }
          void submit
            .run()
            .then(() => navigate(paths.submitted(draft.id), { replace: true }))
            .catch(() => undefined);
        }}
      >
        {declarations.length > 0 && (
          <fieldset className="declarations">
            <legend className="section-heading">Declaration</legend>
            {declarations.map((field) => (
              <DynamicField
                key={field.fieldKey}
                field={field}
                value={declared[field.fieldKey]}
                required
                error={errors[field.fieldKey]?.[0]}
                onChange={(v: FieldValue) => {
                  setDeclared((d) => ({ ...d, [field.fieldKey]: v }));
                  setErrors((e) => without(e, field.fieldKey));
                }}
              />
            ))}
          </fieldset>
        )}
        <p className="muted">
          You are applying under version {start.versionLabel} of this service. If the rules change
          before a decision, your application keeps the rules that applied when you started.
        </p>
        <Cluster gap="3">
          <Button type="submit" loading={submit.status === "pending"} loadingLabel="Submitting">
            Submit application
          </Button>
        </Cluster>
      </form>
    </Stack>
  );
}

export function ReviewPage({ slug }: { slug: string }) {
  const params = useSearchParams();
  const applicationId = params.get("application");
  const { service, start, draft } = useApplyContext(slug, applicationId);

  let body;
  if (!applicationId) {
    body = (
      <Notice tone="info" title="There is nothing to check yet">
        <Link href={paths.apply(slug)}>Start your application</Link> first.
      </Notice>
    );
  } else if (start.status === "loading" || draft.status === "loading") {
    body = <Loading label="Loading your answers" />;
  } else if (start.status === "error") {
    body = (
      <ApiErrorNotice
        error={start.error}
        title="This service cannot be started"
        onRetry={start.reload}
      />
    );
  } else if (draft.status === "error") {
    body = (
      <ApiErrorNotice
        error={draft.error}
        title="We could not load your draft"
        onRetry={draft.reload}
        backHref={paths.applications}
        backLabel="Your applications"
      />
    );
  } else if (start.status === "success" && draft.status === "success") {
    const reason = cannotApplyReason(start.data);
    if (reason)
      body = (
        <Notice tone="info" title="You cannot apply for this online">
          {reason}
        </Notice>
      );
    else if (draft.data.status !== "DRAFT")
      body = (
        <Notice tone="info" title="This application has already been sent">
          <Link href={paths.application(draft.data.id)}>See its progress</Link>.
        </Notice>
      );
    else body = <ReviewForm slug={slug} start={start.data} draft={draft.data} />;
  }

  return (
    <Page
      title="Check your answers"
      eyebrow={service.status === "success" ? service.data.publicName : "Application"}
      description="Make sure everything is correct. You can't change your answers after you submit, but the office may ask you for more information."
    >
      {body}
    </Page>
  );
}
