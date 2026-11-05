// One appointment (design: AppointmentDetail.html). GET /experience/citizen/appointments/{id};
// the actions offered are the backend's `availableActions` (CONFIRM, RESCHEDULE_REQUEST,
// CANCEL), each a single POST that is never retried.
import { useState } from "react";
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import {
  Button,
  Card,
  Cluster,
  Dialog,
  ErrorSummary,
  Notice,
  Stack,
  StatusBadge,
  SummaryList,
  TextArea,
  TextField,
} from "@heartstone/ui";
import { ActingAs } from "../components/ActingAs";
import { MutationErrorNotice } from "../components/ApiErrorNotice";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import type { Schemas } from "../lib/api-types";
import { formatWindow, humanizeStatus, labelText } from "../lib/format";
import { paths } from "../lib/paths";
import { useMutation, useQuery } from "../lib/query";

type Record = Schemas["ServiceAppointmentRecordDto"];

function toIso(local: string): string | undefined {
  if (!local) return undefined;
  const d = new Date(local);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
}

export function AppointmentDetailPage({ appointmentId }: { appointmentId: string }) {
  const client = useApi();
  const detail = useQuery(`appointment:${appointmentId}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/appointments/{id}", {
        params: { path: { id: appointmentId } },
        signal,
      }),
    ),
  );
  const path = { params: { path: { id: appointmentId } } };
  const confirm = useMutation(() =>
    unwrap(client.POST("/experience/citizen/appointments/{id}/confirm", path)),
  );
  const reschedule = useMutation(
    (body: { requestedStartsAt?: string; requestedEndsAt?: string; reason?: string }) =>
      unwrap(
        client.POST("/experience/citizen/appointments/{id}/reschedule-request", { ...path, body }),
      ),
  );
  const cancel = useMutation((body: { reason?: string }) =>
    unwrap(client.POST("/experience/citizen/appointments/{id}/cancel", { ...path, body })),
  );
  const [done, setDone] = useState<{ message: string; record: Record } | null>(null);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [why, setWhy] = useState("");
  const [rescheduleError, setRescheduleError] = useState<string | undefined>();
  const [cancelOpen, setCancelOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState("");

  function finished(message: string) {
    return (record: Record) => {
      setDone({ message, record });
      detail.reload();
    };
  }

  const title =
    detail.status === "success" ? (detail.data.reasonName ?? "Appointment") : "Appointment";
  return (
    <Page
      title={title}
      {...(detail.status === "success"
        ? { description: formatWindow(detail.data.scheduledStartsAt, detail.data.scheduledEndsAt) }
        : {})}
    >
      {done && (
        <Notice tone="success" title={done.message}>
          The office's record now shows: {humanizeStatus(done.record.status)}.
        </Notice>
      )}
      <QueryView
        query={detail}
        loadingLabel="Loading the appointment"
        errorTitle="We could not load this appointment"
        backHref={paths.appointments}
        backLabel="Your appointments"
      >
        {(a) => {
          const can = (action: string) => a.availableActions.includes(action);
          return (
            <Stack gap="5">
              <p>
                <StatusBadge status={a.status} label={humanizeStatus(a.status)} tone="info" />
              </p>
              <ActingAs />
              {can("CONFIRM") && (
                <Card title="Can you make this time?" titleLevel={2}>
                  <Stack gap="3">
                    <p>Confirm so the office knows to expect you.</p>
                    {confirm.status === "error" && (
                      <MutationErrorNotice
                        error={confirm.error}
                        title="Your appointment was not confirmed"
                      />
                    )}
                    <Cluster gap="3">
                      <Button
                        loading={confirm.status === "pending"}
                        loadingLabel="Confirming"
                        onClick={() =>
                          void confirm
                            .run()
                            .then(finished("Appointment confirmed"))
                            .catch(() => undefined)
                        }
                      >
                        Confirm this time
                      </Button>
                    </Cluster>
                  </Stack>
                </Card>
              )}
              <Card title="Details" titleLevel={2}>
                <SummaryList
                  rows={[
                    {
                      id: "when",
                      label: "When",
                      value: formatWindow(a.scheduledStartsAt, a.scheduledEndsAt),
                    },
                    {
                      id: "where",
                      label: "Where",
                      value: a.isVirtual
                        ? "Online video call"
                        : (a.locationName ?? "The office will tell you"),
                    },
                    ...(a.isVirtual && a.virtualMeetingUrl
                      ? [{ id: "link", label: "Meeting link", value: a.virtualMeetingUrl }]
                      : []),
                    {
                      id: "with",
                      label: "With",
                      value:
                        a.attribution?.departmentName ??
                        a.attribution?.institutionName ??
                        "The office",
                    },
                    ...(a.attribution?.serviceName
                      ? [{ id: "for", label: "For", value: a.attribution.serviceName }]
                      : []),
                    { id: "ref", label: "Reference", value: a.appointmentReference },
                  ]}
                />
              </Card>
              {can("RESCHEDULE_REQUEST") && (
                <Card title="Ask for another time" titleLevel={2} id="reschedule">
                  <form
                    className="stack-form"
                    noValidate
                    onSubmit={(event) => {
                      event.preventDefault();
                      const startsAt = toIso(first);
                      if (!startsAt) {
                        setRescheduleError("Enter the date and time that suits you");
                        return;
                      }
                      setRescheduleError(undefined);
                      const endsAt = toIso(second);
                      void reschedule
                        .run({
                          requestedStartsAt: startsAt,
                          ...(endsAt ? { requestedEndsAt: endsAt } : {}),
                          ...(why.trim() ? { reason: why.trim() } : {}),
                        })
                        .then(finished("Your request has been sent"))
                        .catch(() => undefined);
                    }}
                  >
                    <p>
                      Suggest a time that suits you. The office will accept it or offer another
                      time. Until they reply, your current time still stands.
                    </p>
                    {rescheduleError && (
                      <ErrorSummary
                        errors={[{ targetId: "resched-first", message: rescheduleError }]}
                      />
                    )}
                    <TextField
                      id="resched-first"
                      type="datetime-local"
                      label="Preferred date and time"
                      required
                      value={first}
                      onChange={(e) => setFirst(e.target.value)}
                      {...(rescheduleError ? { error: rescheduleError } : {})}
                    />
                    <TextField
                      id="resched-second"
                      type="datetime-local"
                      label="Latest end time"
                      optional
                      value={second}
                      onChange={(e) => setSecond(e.target.value)}
                    />
                    <TextArea
                      id="resched-why"
                      label="Why do you need a different time?"
                      optional
                      value={why}
                      onChange={(e) => setWhy(e.target.value)}
                    />
                    {reschedule.status === "error" && (
                      <MutationErrorNotice
                        error={reschedule.error}
                        title="Your request was not sent"
                      />
                    )}
                    <Cluster gap="3">
                      <Button
                        type="submit"
                        variant="secondary"
                        loading={reschedule.status === "pending"}
                        loadingLabel="Sending"
                      >
                        Send request
                      </Button>
                    </Cluster>
                  </form>
                </Card>
              )}
              {can("CANCEL") && (
                <Card title="Cancel this appointment" titleLevel={2}>
                  <Stack gap="3">
                    <p>
                      If the appointment is part of an application, cancelling may delay a decision.
                    </p>
                    {cancel.status === "error" && (
                      <MutationErrorNotice
                        error={cancel.error}
                        title="Your appointment was not cancelled"
                      />
                    )}
                    <Cluster gap="3">
                      <Button variant="danger" onClick={() => setCancelOpen(true)}>
                        Cancel appointment
                      </Button>
                    </Cluster>
                  </Stack>
                </Card>
              )}
              <Dialog
                open={cancelOpen}
                onClose={() => setCancelOpen(false)}
                role="alertdialog"
                title="Cancel this appointment?"
                description="The office will be told. You can ask for a new appointment later."
                footer={
                  <Cluster gap="3">
                    <Button
                      variant="danger"
                      loading={cancel.status === "pending"}
                      loadingLabel="Cancelling"
                      onClick={() =>
                        void cancel
                          .run(cancelReason.trim() ? { reason: cancelReason.trim() } : {})
                          .then((r) => {
                            setCancelOpen(false);
                            finished("Appointment cancelled")(r);
                          })
                          .catch(() => setCancelOpen(false))
                      }
                    >
                      Yes, cancel it
                    </Button>
                    <Button variant="secondary" onClick={() => setCancelOpen(false)}>
                      Keep the appointment
                    </Button>
                  </Cluster>
                }
              >
                <TextArea
                  id="cancel-reason"
                  label="Reason"
                  optional
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                />
              </Dialog>
              {a.availableActions.filter((x) => x !== "VIEW").length === 0 && (
                <p>There is nothing to do for this appointment.</p>
              )}
              <Disclaimer>
                {labelText(a.disclaimer)} Booking or attending an appointment does not mean your
                application is approved.
              </Disclaimer>
            </Stack>
          );
        }}
      </QueryView>
    </Page>
  );
}
