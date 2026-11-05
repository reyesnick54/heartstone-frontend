// Display formatting. Values are shown as the backend sent them; these helpers only change how
// dates, money and localised text look, never what they mean.
import { humanizeStatus } from "@heartstone/ui";
import { LOCALE } from "../tenant";

export { humanizeStatus };

function toDate(value: string | null | undefined): Date | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

const dateFormat = new Intl.DateTimeFormat(LOCALE.dateLocale, {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const shortDateFormat = new Intl.DateTimeFormat(LOCALE.dateLocale, {
  day: "numeric",
  month: "short",
  year: "numeric",
});
const dateTimeFormat = new Intl.DateTimeFormat(LOCALE.dateLocale, {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
const timeFormat = new Intl.DateTimeFormat(LOCALE.dateLocale, {
  hour: "2-digit",
  minute: "2-digit",
});

/** "1 October 2026", or the fallback when there is no valid date. */
export function formatDate(value: string | null | undefined, fallback = "Not set"): string {
  const date = toDate(value);
  return date ? dateFormat.format(date) : fallback;
}

export function formatShortDate(value: string | null | undefined, fallback = "Not set"): string {
  const date = toDate(value);
  return date ? shortDateFormat.format(date) : fallback;
}

export function formatDateTime(value: string | null | undefined, fallback = "Not set"): string {
  const date = toDate(value);
  return date ? dateTimeFormat.format(date) : fallback;
}

/** "14 October 2026, 10:30 – 11:30" for an appointment window. */
export function formatWindow(
  start: string | null | undefined,
  end: string | null | undefined,
): string {
  const from = toDate(start);
  if (!from) return "Time to be set";
  const to = toDate(end);
  return to
    ? `${dateTimeFormat.format(from)} – ${timeFormat.format(to)}`
    : dateTimeFormat.format(from);
}

/** Money from minor units (cents) and an ISO currency code. */
export function formatMoney(amountCents: number | null | undefined, currency: string): string {
  if (amountCents === null || amountCents === undefined) return "Amount set when you apply";
  const amount = amountCents / 100;
  try {
    return new Intl.NumberFormat(LOCALE.numberLocale, { style: "currency", currency }).format(
      amount,
    );
  } catch {
    return `${amount.toFixed(2)} ${currency}`;
  }
}

/** Picks the tenant locale from a `{ en: "…", es: "…" }` map, falling back to any value. */
export function localized(
  map: Readonly<Record<string, string>> | null | undefined,
  fallback = "",
): string {
  if (!map) return fallback;
  return map[LOCALE.language] ?? map["en"] ?? Object.values(map)[0] ?? fallback;
}

/** A backend `LocalizedLabelDto`. */
export function labelText(label: { label: string; labels?: Record<string, string> }): string {
  return label.labels?.[LOCALE.language] ?? label.label;
}

/** Initials for an avatar, from a display name. */
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return `${first}${last}`.toUpperCase();
}
