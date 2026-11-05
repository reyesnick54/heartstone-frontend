// The dynamic application form, driven by the backend's rendered form schema
// (GET /experience/citizen/services/{slug}/start → formSchema). The backend validates every
// submission (heartstone-backend FormResponseValidationService); the rules here mirror it so
// people see problems early, and the backend's answer always wins.
import type { FormFieldSchema, FormSchema, FormSection } from "./api-types";
import { localized } from "./format";

/** A field's value while it is being edited. */
export type FieldValue = string | boolean | string[];
export type FormValues = Record<string, FieldValue>;
/** Answers in the shape the backend stores and validates. */
export type FormAnswers = Record<string, unknown>;

type FieldType = FormFieldSchema["fieldType"];

const NUMERIC: ReadonlySet<FieldType> = new Set(["NUMBER", "INTEGER", "DECIMAL", "CURRENCY"]);
const MULTI: ReadonlySet<FieldType> = new Set(["MULTISELECT", "CHECKBOX"]);
const BOOLEAN_TYPES: ReadonlySet<FieldType> = new Set(["BOOLEAN", "DECLARATION"]);

/** Field types this app cannot collect yet (no citizen upload route). */
export const UNSUPPORTED_FIELD_TYPES: ReadonlySet<FieldType> = new Set(["FILE_REFERENCE"]);

export function fieldLabel(field: FormFieldSchema): string {
  return localized(field.label, field.fieldKey);
}

/** DOM id of a field's control (or fieldset), for labels and error-summary links. */
export function fieldDomId(fieldKey: string): string {
  return `field-${fieldKey.replace(/[^A-Za-z0-9_-]/g, "-")}`;
}

export function sortedSections(schema: FormSchema): FormSection[] {
  return [...schema.sections]
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map((section) => ({
      ...section,
      fields: [...section.fields].sort((a, b) => a.displayOrder - b.displayOrder),
    }));
}

export function allFields(schema: FormSchema): FormFieldSchema[] {
  return sortedSections(schema).flatMap((s) => s.fields);
}

/** Sections shown as form steps. Declarations are made on the "Check your answers" page. */
export function stepSections(schema: FormSchema): FormSection[] {
  return sortedSections(schema)
    .map((s) => ({ ...s, fields: s.fields.filter((f) => f.fieldType !== "DECLARATION") }))
    .filter((s) => s.fields.length > 0);
}

export function declarationFields(schema: FormSchema): FormFieldSchema[] {
  return allFields(schema).filter((f) => f.fieldType === "DECLARATION");
}

// ---------- values ⇄ answers ----------

/** Converts stored answers (from a draft) into editable values. */
export function valuesFromAnswers(fields: FormFieldSchema[], answers: FormAnswers): FormValues {
  const values: FormValues = {};
  for (const field of fields) {
    const raw = answers[field.fieldKey];
    if (raw === undefined || raw === null) continue;
    if (MULTI.has(field.fieldType)) {
      if (Array.isArray(raw)) values[field.fieldKey] = raw.map(String);
    } else if (BOOLEAN_TYPES.has(field.fieldType)) {
      if (typeof raw === "boolean") values[field.fieldKey] = raw;
    } else if (typeof raw === "string" || typeof raw === "number") {
      values[field.fieldKey] = String(raw);
    }
  }
  return values;
}

function answerFor(field: FormFieldSchema, value: FieldValue | undefined): unknown {
  if (value === undefined) return undefined;
  if (MULTI.has(field.fieldType)) {
    return Array.isArray(value) && value.length > 0 ? value : undefined;
  }
  if (BOOLEAN_TYPES.has(field.fieldType)) return typeof value === "boolean" ? value : undefined;
  if (typeof value !== "string") return undefined;
  const text = value.trim();
  if (text === "") return undefined;
  if (NUMERIC.has(field.fieldType)) {
    const n = Number(text);
    return Number.isNaN(n) ? text : n;
  }
  return text;
}

/**
 * Converts editable values into answers. Empty values are left out (the backend treats a
 * missing answer as empty). With `visibleOnly`, answers to fields hidden by conditional rules
 * are dropped too, so nothing is sent that the form does not ask for.
 */
export function answersFromValues(
  fields: FormFieldSchema[],
  values: FormValues,
  options: { visibleOnly?: boolean } = {},
): FormAnswers {
  const answers: FormAnswers = {};
  for (const field of fields) {
    if (field.fieldType === "INFORMATION_DISPLAY" || UNSUPPORTED_FIELD_TYPES.has(field.fieldType))
      continue;
    const answer = answerFor(field, values[field.fieldKey]);
    if (answer !== undefined) answers[field.fieldKey] = answer;
  }
  if (!options.visibleOnly) return answers;
  const hidden = new Set(fields.filter((f) => !isFieldVisible(f, answers)).map((f) => f.fieldKey));
  return Object.fromEntries(Object.entries(answers).filter(([key]) => !hidden.has(key)));
}

// ---------- conditional rules (mirrors FormConditionalLogicService) ----------

type Rule = FormFieldSchema["conditionalRules"][number];
type Clause = Rule["conditions"][number];

function isEmptyValue(value: unknown): boolean {
  return (
    value === undefined ||
    value === null ||
    value === "" ||
    (Array.isArray(value) && value.length === 0)
  );
}

function compareNumbers(actual: unknown, expected: unknown): number {
  const a = Number(actual);
  const b = Number(expected);
  if (Number.isNaN(a) || Number.isNaN(b)) return Number.NaN;
  return a - b;
}

function evaluateCondition(condition: Clause, answers: FormAnswers): boolean {
  const actual = answers[condition.fieldKey];
  // The contract types `value` as an object; it is any JSON value (see report).
  const expected = condition.value as unknown;
  switch (condition.operator) {
    case "EQUALS":
      return actual === expected;
    case "NOT_EQUALS":
      return actual !== expected;
    case "IN":
      return Array.isArray(expected) && expected.includes(actual);
    case "NOT_IN":
      return Array.isArray(expected) && !expected.includes(actual);
    case "IS_EMPTY":
      return isEmptyValue(actual);
    case "IS_NOT_EMPTY":
      return !isEmptyValue(actual);
    case "GREATER_THAN":
      return compareNumbers(actual, expected) > 0;
    case "LESS_THAN":
      return compareNumbers(actual, expected) < 0;
    case "GREATER_THAN_OR_EQUAL":
      return compareNumbers(actual, expected) >= 0;
    case "LESS_THAN_OR_EQUAL":
      return compareNumbers(actual, expected) <= 0;
    default:
      return false;
  }
}

function evaluateRule(rule: Rule, answers: FormAnswers): boolean {
  if (rule.conditions.length === 0) return false;
  const results = rule.conditions.map((c) => evaluateCondition(c, answers));
  return rule.logic === "OR" ? results.some(Boolean) : results.every(Boolean);
}

export function isFieldVisible(field: FormFieldSchema, answers: FormAnswers): boolean {
  const rules = field.conditionalRules;
  if (rules.some((r) => r.action === "HIDE" && evaluateRule(r, answers))) return false;
  const show = rules.filter((r) => r.action === "SHOW");
  return show.length === 0 || show.some((r) => evaluateRule(r, answers));
}

export function isFieldRequired(field: FormFieldSchema, answers: FormAnswers): boolean {
  const rules = field.conditionalRules;
  if (rules.some((r) => r.action === "OPTIONAL" && evaluateRule(r, answers))) return false;
  if (rules.some((r) => r.action === "REQUIRE" && evaluateRule(r, answers))) return true;
  return field.required;
}

// ---------- validation (mirrors form-field-validation.util.ts, in plain language) ----------

const PRESETS: Record<string, RegExp> = {
  ALPHANUMERIC: /^[A-Za-z0-9]+$/,
  NUMERIC: /^[0-9]+$/,
  POSTAL_CODE: /^[A-Za-z0-9 -]{3,12}$/,
};

function safeRegExp(pattern: string): RegExp | undefined {
  try {
    return new RegExp(pattern);
  } catch {
    return undefined;
  }
}

/** Plain-language problems with one field's answer, or [] when it is fine. */
export function validateField(field: FormFieldSchema, answers: FormAnswers): string[] {
  if (field.fieldType === "INFORMATION_DISPLAY") return [];
  if (!isFieldVisible(field, answers)) return [];
  const label = fieldLabel(field);
  const value = answers[field.fieldKey];
  const required = isFieldRequired(field, answers);
  if (isEmptyValue(value) || (field.fieldType === "DECLARATION" && value !== true)) {
    if (!required) return [];
    if (field.fieldType === "DECLARATION") return ["Confirm this declaration to continue"];
    if (MULTI.has(field.fieldType)) return [`Select at least one option for ${lowerFirst(label)}`];
    if (UNSUPPORTED_FIELD_TYPES.has(field.fieldType))
      return [`${label} is required, and documents cannot be uploaded online yet`];
    return [`Enter ${lowerFirst(label)}`];
  }
  const problems: string[] = [];
  const v = field.validation;
  switch (field.fieldType) {
    case "EMAIL":
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value)))
        problems.push("Enter an email address in the correct format, like name@example.com");
      break;
    case "INTEGER":
      if (!Number.isInteger(Number(value))) problems.push(`${label} must be a whole number`);
      break;
    case "NUMBER":
    case "DECIMAL":
    case "CURRENCY":
      if (Number.isNaN(Number(value))) problems.push(`${label} must be a number`);
      break;
    case "COUNTRY":
      if (!/^[A-Z]{2}$/.test(String(value)))
        problems.push(`Select a country for ${lowerFirst(label)}`);
      break;
    case "DATE":
    case "DATETIME":
      if (Number.isNaN(new Date(String(value)).getTime()))
        problems.push(`${label} must be a real date`);
      break;
    default:
      break;
  }
  if (typeof value === "string") {
    if (v.minLength !== undefined && value.length < v.minLength)
      problems.push(`${label} must be ${v.minLength} characters or more`);
    if (v.maxLength !== undefined && value.length > v.maxLength)
      problems.push(`${label} must be ${v.maxLength} characters or fewer`);
    const preset = v.patternPreset ? PRESETS[v.patternPreset] : undefined;
    if (preset && !preset.test(value)) problems.push(`${label} is not in the right format`);
    const pattern = v.pattern ? safeRegExp(v.pattern) : undefined;
    if (pattern && !pattern.test(value)) problems.push(`${label} is not in the right format`);
  }
  if ((v.min !== undefined || v.max !== undefined) && !Number.isNaN(Number(value))) {
    const n = Number(value);
    if (v.min !== undefined && n < v.min) problems.push(`${label} must be ${v.min} or more`);
    if (v.max !== undefined && n > v.max) problems.push(`${label} must be ${v.max} or less`);
  }
  if (v.allowedValues && v.allowedValues.length > 0) {
    const list = Array.isArray(value) ? value.map(String) : [String(value)];
    if (list.some((x) => !v.allowedValues?.includes(x)))
      problems.push(`Select a valid option for ${lowerFirst(label)}`);
  }
  if (v.equalsField && answers[v.equalsField] !== value)
    problems.push(`${label} must match the earlier answer`);
  if (v.notEqualsField && answers[v.notEqualsField] === value)
    problems.push(`${label} must be different from the earlier answer`);
  return problems;
}

function lowerFirst(text: string): string {
  return text ? text.charAt(0).toLowerCase() + text.slice(1) : text;
}

/** A copy of `record` without `key`. */
export function without<T>(record: Record<string, T>, key: string): Record<string, T> {
  return Object.fromEntries(Object.entries(record).filter(([k]) => k !== key));
}

/** Problems for every field given, keyed by fieldKey. */
export function validateFields(
  fields: FormFieldSchema[],
  answers: FormAnswers,
): Record<string, string[]> {
  const errors: Record<string, string[]> = {};
  for (const field of fields) {
    const problems = validateField(field, answers);
    if (problems.length > 0) errors[field.fieldKey] = problems;
  }
  return errors;
}

/** Shows an answer on the "Check your answers" page. */
export function displayAnswer(field: FormFieldSchema, answer: unknown): string {
  if (answer === undefined || answer === null || answer === "") return "Not given";
  const option = (value: string) => field.options?.find((o) => o.value === value)?.label;
  if (Array.isArray(answer)) {
    return answer.map((a) => localized(option(String(a)), String(a))).join(", ");
  }
  if (typeof answer === "boolean") {
    if (field.fieldType === "DECLARATION") return answer ? "Confirmed" : "Not confirmed";
    return answer ? "Yes" : "No";
  }
  const text = String(answer);
  return field.options ? localized(option(text), text) : text;
}
