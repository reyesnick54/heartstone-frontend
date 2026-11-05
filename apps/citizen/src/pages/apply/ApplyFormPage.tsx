// Apply (design: ApplyForm.html). The form is built from the backend's rendered form schema
// (GET /experience/citizen/services/{slug}/start → formSchema). Starting creates a draft
// (POST /experience/citizen/services/{slug}/applications); each step saves the draft
// (PATCH /applications/{id}/draft). Nothing is submitted here: that happens on Review.
import { useState } from "react";
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import {
  Button,
  Card,
  Cluster,
  ErrorSummary,
  Link,
  Loading,
  Notice,
  RadioGroup,
  Stack,
  StepIndicator,
} from "@heartstone/ui";
import { ActingAs } from "../../components/ActingAs";
import { ApiErrorNotice, MutationErrorNotice } from "../../components/ApiErrorNotice";
import { DynamicField } from "../../components/DynamicField";
import { Page } from "../../components/Page";
import { saveDraft, type DraftRecord } from "../../lib/applications";
import type { ApplicantCategory, ServiceDetail, StartExperience } from "../../lib/api-types";
import { formatDateTime, humanizeStatus, localized } from "../../lib/format";
import {
  answersFromValues,
  fieldDomId,
  isFieldRequired,
  isFieldVisible,
  stepSections,
  validateFields,
  valuesFromAnswers,
  without,
  type FieldValue,
  type FormValues,
} from "../../lib/forms";
import { activeRepresentations, useMe, type Representation } from "../../lib/me";
import { paths } from "../../lib/paths";
import { useMutation } from "../../lib/query";
import { useNavigate, useSearchParams } from "../../router/router";
import { useApplyContext } from "./useApplyContext";

export function stepLabels(start: StartExperience): string[] {
  const sections = start.formSchema ? stepSections(start.formSchema) : [];
  return [...sections.map((s) => localized(s.title, s.sectionKey)), "Check and submit"];
}

export function applyStepItems(slug: string, applicationId: string, start: StartExperience) {
  return stepLabels(start).map((label, index, all) => ({
    id: `step-${index}`,
    label,
    href:
      index === all.length - 1
        ? paths.review(slug, applicationId)
        : `${paths.apply(slug, applicationId)}&step=${index + 1}`,
  }));
}

export function representationFor(
  reps: Representation[],
  draft: Pick<DraftRecord, "organizationId" | "representativeAuthorityId">,
): { name: string; representation?: Representation } | undefined {
  if (!draft.organizationId) return undefined;
  const rep = reps.find(
    (r) =>
      r.representativeAuthorityId === draft.representativeAuthorityId ||
      r.organizationId === draft.organizationId,
  );
  return {
    name: rep?.organizationName ?? "an organisation",
    ...(rep ? { representation: rep } : {}),
  };
}

/** Explains why a started service cannot be applied for online, or undefined when it can. */
export function cannotApplyReason(start: StartExperience): string | undefined {
  if (!start.applicationCapable)
    return "This service is not open for online applications at the moment.";
  if (!start.formSchema)
    return "This service does not have an online form yet. Contact the office to apply.";
  return undefined;
}

function WhoIsApplying({
  slug,
  service,
  start,
}: {
  slug: string;
  service: ServiceDetail;
  start: StartExperience;
}) {
  const client = useApi();
  const navigate = useNavigate();
  const me = useMe();
  const reps = me.status === "success" ? activeRepresentations(me.data) : [];
  const categories = service.eligibleApplicantCategories;
  const selfCategories = categories.filter((c) => c !== "AUTHORIZED_REPRESENTATIVE");
  const canRepresent = categories.includes("AUTHORIZED_REPRESENTATIVE");
  const options = [
    ...selfCategories.map((c) => ({
      value: `self:${c}`,
      label: selfCategories.length > 1 ? `Myself, as ${humanizeStatus(c).toLowerCase()}` : "Myself",
    })),
    ...(canRepresent
      ? reps.map((r) => ({
          value: `rep:${r.representativeAuthorityId}`,
          label: `${r.organizationName}, as its authorised representative`,
          hint: `Your authority covers ${r.scopeDescription}.`,
        }))
      : []),
  ];
  const [choice, setChoice] = useState(options.length === 1 ? (options[0]?.value ?? "") : "");
  const [error, setError] = useState<string | undefined>();
  const create = useMutation(
    (body: {
      applicantCategory: ApplicantCategory;
      organizationId?: string;
      representativeAuthorityId?: string;
    }) =>
      unwrap(
        client.POST("/experience/citizen/services/{slug}/applications", {
          params: { path: { slug } },
          body: {
            configurationFingerprint: start.configurationFingerprint,
            serviceVersionId: start.serviceVersionId,
            ...body,
          },
        }),
      ),
  );

  if (options.length === 0) {
    return (
      <Notice tone="info" title="You cannot apply for this service online">
        This service is not published for the kinds of applicant your account can apply as.
      </Notice>
    );
  }

  return (
    <form
      className="stack-form"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        if (!choice) {
          setError("Select who is applying");
          return;
        }
        setError(undefined);
        const [kind, value] = choice.split(":") as [string, string];
        const rep =
          kind === "rep" ? reps.find((r) => r.representativeAuthorityId === value) : undefined;
        void create
          .run(
            rep
              ? {
                  applicantCategory: "AUTHORIZED_REPRESENTATIVE",
                  organizationId: rep.organizationId,
                  representativeAuthorityId: rep.representativeAuthorityId,
                }
              : { applicantCategory: value as ApplicantCategory },
          )
          .then((record) => navigate(`${paths.apply(slug, record.id)}&step=1`, { replace: true }))
          .catch(() => undefined);
      }}
    >
      {error && <ErrorSummary errors={[{ targetId: "who-is-applying", message: error }]} />}
      <div id="who-is-applying" tabIndex={-1}>
        <RadioGroup
          legend="Who is applying?"
          name="who"
          options={options}
          value={choice}
          onChange={setChoice}
          {...(error ? { error } : {})}
        />
      </div>
      {create.status === "error" && (
        <MutationErrorNotice
          error={create.error}
          title="Your application was not started"
          checkHint={
            <>
              Check <Link href={paths.applications}>your applications</Link> for a new draft
            </>
          }
        />
      )}
      <Cluster gap="3">
        <Button type="submit" loading={create.status === "pending"} loadingLabel="Starting">
          Start application
        </Button>
      </Cluster>
      <p className="muted">
        Your progress is saved as a draft. Nothing is sent to the office until you submit.
      </p>
    </form>
  );
}

function StepForm({
  slug,
  start,
  draft,
  step,
}: {
  slug: string;
  start: StartExperience;
  draft: DraftRecord;
  step: number;
}) {
  const client = useApi();
  const navigate = useNavigate();
  const me = useMe();
  const schema = start.formSchema;
  const sections = schema ? stepSections(schema) : [];
  const allStepFields = sections.flatMap((s) => s.fields);
  const [values, setValues] = useState<FormValues>(() =>
    valuesFromAnswers(allStepFields, draft.draftAnswers),
  );
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const save = useMutation((answers: Record<string, unknown>) =>
    saveDraft(client, draft.id, answers),
  );

  const index = Math.min(Math.max(step, 1), Math.max(sections.length, 1)) - 1;
  const section = sections[index];
  const reps = me.status === "success" ? activeRepresentations(me.data) : [];
  const forOrg = representationFor(reps, draft);
  if (!section) return null;

  const answers = answersFromValues(allStepFields, values);
  const visibleFields = section.fields.filter((f) => isFieldVisible(f, answers));

  function setValue(key: string, value: FieldValue) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => (e[key] ? without(e, key) : e));
  }

  async function persist(): Promise<boolean> {
    try {
      const record = await save.run(
        answersFromValues(allStepFields, values, { visibleOnly: true }),
      );
      setSavedAt(record.updatedAt || new Date().toISOString());
      return true;
    } catch {
      return false;
    }
  }

  const summary = visibleFields
    .filter((f) => errors[f.fieldKey])
    .map((f) => ({ targetId: fieldDomId(f.fieldKey), message: errors[f.fieldKey]?.[0] ?? "" }));

  return (
    <Stack gap="5">
      <StepIndicator
        label="Application steps"
        current={index}
        steps={applyStepItems(slug, draft.id, start)}
      />
      <ActingAs forOrganization={forOrg} />
      {summary.length > 0 && <ErrorSummary errors={summary} />}
      <form
        className="stack-form"
        noValidate
        aria-labelledby="section-title"
        onSubmit={(event) => {
          event.preventDefault();
          const problems = validateFields(visibleFields, answers);
          setErrors(problems);
          if (Object.keys(problems).length > 0) return;
          void persist().then((ok) => {
            if (!ok) return;
            navigate(
              index + 1 < sections.length
                ? `${paths.apply(slug, draft.id)}&step=${index + 2}`
                : paths.review(slug, draft.id),
            );
          });
        }}
      >
        <h2 id="section-title" className="section-heading">
          {localized(section.title, section.sectionKey)}
        </h2>
        {section.description && <p>{localized(section.description)}</p>}
        {visibleFields.map((field) => (
          <DynamicField
            key={field.fieldKey}
            field={field}
            value={values[field.fieldKey]}
            required={isFieldRequired(field, answers)}
            error={errors[field.fieldKey]?.[0]}
            onChange={(v) => setValue(field.fieldKey, v)}
          />
        ))}
        {save.status === "error" && (
          <MutationErrorNotice error={save.error} title="Your answers were not saved" />
        )}
        {savedAt && save.status === "success" && (
          <Notice tone="success">Draft saved {formatDateTime(savedAt)}.</Notice>
        )}
        <Cluster gap="3">
          <Button type="submit" loading={save.status === "pending"} loadingLabel="Saving">
            Save and continue
          </Button>
          <Button
            variant="secondary"
            onClick={() => void persist()}
            disabled={save.status === "pending"}
          >
            Save as draft
          </Button>
        </Cluster>
      </form>
      <p className="muted">Fields marked “(optional)” can be left blank.</p>
    </Stack>
  );
}

export function ApplyFormPage({ slug }: { slug: string }) {
  const params = useSearchParams();
  const applicationId = params.get("application");
  const step = Number(params.get("step") ?? "1") || 1;
  const { service, start, draft } = useApplyContext(slug, applicationId);
  const title = service.status === "success" ? service.data.publicName : "Apply";

  let body;
  if (
    service.status === "loading" ||
    start.status === "loading" ||
    (applicationId && draft.status === "loading")
  ) {
    body = <Loading label="Loading the application" />;
  } else if (service.status === "error") {
    body = (
      <ApiErrorNotice
        error={service.error}
        title="We could not load this service"
        onRetry={service.reload}
        backHref={paths.services}
        backLabel="Find a service"
      />
    );
  } else if (start.status === "error") {
    body = (
      <ApiErrorNotice
        error={start.error}
        title="This service cannot be started"
        onRetry={start.reload}
        backHref={paths.service(slug)}
        backLabel="Back to the service"
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
  } else if (service.status === "success" && start.status === "success") {
    const reason = cannotApplyReason(start.data);
    if (reason) {
      body = (
        <Notice tone="info" title="You cannot apply for this online">
          {reason}
        </Notice>
      );
    } else if (!applicationId || draft.status !== "success") {
      body = (
        <Card title="Before you start" titleLevel={2}>
          <WhoIsApplying slug={slug} service={service.data} start={start.data} />
        </Card>
      );
    } else if (draft.data.status !== "DRAFT") {
      body = (
        <Notice tone="info" title="This application has already been sent">
          You cannot change it now.{" "}
          <Link href={paths.application(draft.data.id)}>See its progress</Link>.
        </Notice>
      );
    } else if (draft.data.configurationFingerprint !== start.data.configurationFingerprint) {
      body = (
        <Notice tone="warning" title="The rules for this service have changed">
          This draft was started under an earlier version of the service and can no longer be
          submitted. <Link href={paths.apply(slug)}>Start a new application</Link>.
        </Notice>
      );
    } else {
      body = (
        <StepForm
          key={`${draft.data.id}:${step}`}
          slug={slug}
          start={start.data}
          draft={draft.data}
          step={step}
        />
      );
    }
  }

  return (
    <Page title={title} eyebrow="Application">
      {body}
    </Page>
  );
}
