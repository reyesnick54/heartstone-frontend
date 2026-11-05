import type { ServiceSummary } from "./api-types";

type Availability = ServiceSummary["availabilityStatus"];

/** Plain words for how a service can be used. The value itself comes from the backend. */
export function availabilityText(service: {
  availabilityStatus?: Availability;
  serviceAvailability?: Availability;
  applicationCapable: boolean;
  isInformationOnly?: boolean;
  isPilotOnly?: boolean;
}): { label: string; tone: "info" | "neutral" | "warning" } {
  const status = service.availabilityStatus ?? service.serviceAvailability;
  if (service.isInformationOnly || status === "INFORMATION_ONLY")
    return { label: "Information only", tone: "neutral" };
  if (status === "SUSPENDED") return { label: "Suspended", tone: "warning" };
  if (status === "UNAVAILABLE") return { label: "Unavailable", tone: "warning" };
  if (status === "UNDER_DEVELOPMENT") return { label: "Not open yet", tone: "neutral" };
  if (service.isPilotOnly || status === "PILOT_ONLY")
    return { label: "Pilot · limited availability", tone: "info" };
  if (status === "PRE_APPLICATION") return { label: "Pre-application", tone: "info" };
  if (service.applicationCapable) return { label: "Apply online", tone: "info" };
  return { label: "Not available online", tone: "neutral" };
}
