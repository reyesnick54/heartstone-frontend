// Check if you can apply (design: Eligibility.html). The questions are the service's
// eligibility rules from GET /experience/citizen/services/{slug}/start; the answer is
// POST /experience/citizen/services/{slug}/eligibility. Nothing is saved, and the result is
// guidance, not a decision.
import { useState } from "react";
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Button, Card, Cluster, Link, Notice, RadioGroup, Stack } from "@heartstone/ui";
import { MutationErrorNotice } from "../components/ApiErrorNotice";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import type { ApplicantCategory, Schemas } from "../lib/api-types";
import { humanizeStatus } from "../lib/format";
import { activeRepresentations, useMe } from "../lib/me";
import { paths } from "../lib/paths";
import { useMutation, useQuery } from "../lib/query";

export function EligibilityPage({ slug }: { slug: string }) {
  const client = useApi();
  const me = useMe();
  const start = useQuery(`start:${slug}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/services/{slug}/start", {
        params: { path: { slug } },
        signal,
      }),
    ),
  );
  const service = useQuery(`service:${slug}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/services/{slug}", { params: { path: { slug } }, signal }),
    ),
  );
  const [category, setCategory] = useState<string>("");
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const check = useMutation(
    ({
      attributes,
      ...rest
    }: {
      applicantCategory?: ApplicantCategory;
      attributes: Record<string, boolean>;
      serviceVersionId: string;
    }) =>
      unwrap(
        client.POST("/experience/citizen/services/{slug}/eligibility", {
          params: { path: { slug } },
          // CONTRACT GAP: `attributes` is typed Record<string, never>; the backend reads any
          // key/value pairs (PublicServiceEligibilityDto.attributes).
          body: {
            ...rest,
            attributes:
              attributes as unknown as Schemas["PublicServiceEligibilityDto"]["attributes"] &
                object,
          },
        }),
      ),
  );

  const reps = me.status === "success" ? activeRepresentations(me.data) : [];
  const title =
    service.status === "success"
      ? `Check if you can apply: ${service.data.publicName}`
      : "Check if you can apply";

  return (
    <Page
      title={title}
      description="Answer a few questions. Your answers are not saved and are not part of an application."
    >
      <QueryView
        query={start}
        loadingLabel="Loading the questions"
        errorTitle="We could not load the questions"
        backHref={paths.service(slug)}
        backLabel="Back to the service"
      >
        {(data) => {
          const categories =
            service.status === "success" ? service.data.eligibleApplicantCategories : [];
          return (
            <form
              className="stack-form"
              noValidate
              onSubmit={(event) => {
                event.preventDefault();
                void check
                  .run({
                    ...(category ? { applicantCategory: category as ApplicantCategory } : {}),
                    attributes: answers,
                    serviceVersionId: data.serviceVersionId,
                  })
                  .catch(() => undefined);
              }}
            >
              {categories.length > 1 && (
                <RadioGroup
                  legend="Who is applying?"
                  name="applicantCategory"
                  value={category}
                  onChange={setCategory}
                  options={categories.map((c) => ({
                    value: c,
                    label:
                      c === "AUTHORIZED_REPRESENTATIVE" && reps.length > 0
                        ? `A business I represent (${reps.map((r) => r.organizationName).join(", ")})`
                        : humanizeStatus(c),
                  }))}
                />
              )}
              {data.eligibilityGuidance.map((rule) => (
                <RadioGroup
                  key={rule.ruleCode}
                  legend={rule.label}
                  hint={rule.description}
                  name={rule.ruleCode}
                  inline
                  value={answers[rule.ruleCode] === undefined ? "" : String(answers[rule.ruleCode])}
                  onChange={(v) => setAnswers((a) => ({ ...a, [rule.ruleCode]: v === "true" }))}
                  options={[
                    { value: "true", label: "Yes" },
                    { value: "false", label: "No" },
                  ]}
                />
              ))}
              {data.eligibilityGuidance.length === 0 && categories.length <= 1 && (
                <p>
                  This service has no eligibility questions. You can go straight to the application.
                </p>
              )}
              <Cluster gap="3">
                <Button type="submit" loading={check.status === "pending"} loadingLabel="Checking">
                  Check my answers
                </Button>
              </Cluster>
            </form>
          );
        }}
      </QueryView>

      {check.status === "error" && (
        <MutationErrorNotice error={check.error} title="We could not check your answers" />
      )}
      {check.status === "success" && (
        <Card
          title={
            check.data.eligible === true
              ? "You appear to meet the requirements"
              : check.data.eligible === false
                ? "You may not be able to apply"
                : "We cannot tell from these answers"
          }
          titleLevel={2}
          aria-live="polite"
        >
          <Stack gap="3">
            {check.data.guidanceNotes.length > 0 && (
              <ul className="bullets">
                {check.data.guidanceNotes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            )}
            {check.data.eligible !== false &&
              start.status === "success" &&
              start.data.applicationCapable && (
                <Link href={paths.apply(slug)} standalone className="button-link">
                  Start application
                </Link>
              )}
            {check.data.eligible === false && (
              <Notice tone="info">
                You can still contact the office if you think your situation is different.
              </Notice>
            )}
            <Disclaimer>{check.data.nonbindingDisclaimer}</Disclaimer>
          </Stack>
        </Card>
      )}
    </Page>
  );
}
