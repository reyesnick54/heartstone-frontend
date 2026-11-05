// Renders one backend form field with @heartstone/ui controls. Labels, hints, options and
// required flags come from the schema; nothing is invented here.
import {
  Checkbox,
  CheckboxGroup,
  Notice,
  RadioGroup,
  Select,
  TextArea,
  TextField,
} from "@heartstone/ui";
import type { FormFieldSchema } from "../lib/api-types";
import { localized } from "../lib/format";
import { UNSUPPORTED_FIELD_TYPES, fieldDomId, fieldLabel, type FieldValue } from "../lib/forms";

export interface DynamicFieldProps {
  field: FormFieldSchema;
  value: FieldValue | undefined;
  required: boolean;
  error?: string | undefined;
  onChange: (value: FieldValue) => void;
}

const INPUT_TYPES: Partial<Record<FormFieldSchema["fieldType"], string>> = {
  EMAIL: "email",
  PHONE: "tel",
  DATE: "date",
  DATETIME: "datetime-local",
  NUMBER: "text",
  INTEGER: "text",
  DECIMAL: "text",
  CURRENCY: "text",
};

const INPUT_MODES: Partial<
  Record<FormFieldSchema["fieldType"], "numeric" | "decimal" | "email" | "tel">
> = {
  INTEGER: "numeric",
  NUMBER: "decimal",
  DECIMAL: "decimal",
  CURRENCY: "decimal",
  EMAIL: "email",
  PHONE: "tel",
};

const AUTOCOMPLETE: Partial<Record<FormFieldSchema["fieldType"], string>> = {
  EMAIL: "email",
  PHONE: "tel",
};

export function DynamicField({ field, value, required, error, onChange }: DynamicFieldProps) {
  const id = fieldDomId(field.fieldKey);
  const label = fieldLabel(field);
  const hint = field.description ? localized(field.description) : undefined;
  const placeholder = field.placeholder ? localized(field.placeholder) : undefined;
  const text = typeof value === "string" ? value : "";
  const common = {
    ...(hint ? { hint } : {}),
    ...(error ? { error } : {}),
  };
  const options = (field.options ?? []).map((o) => ({
    value: o.value,
    label: localized(o.label, o.value),
  }));

  if (UNSUPPORTED_FIELD_TYPES.has(field.fieldType)) {
    return (
      <div id={id} tabIndex={-1}>
        <Notice tone="info" title={label} titleLevel={3}>
          Documents cannot be uploaded online yet. The office will tell you how to send this
          document after you submit.
          {error && <span className="field-error-inline"> {error}</span>}
        </Notice>
      </div>
    );
  }

  switch (field.fieldType) {
    case "INFORMATION_DISPLAY":
      return (
        <div className="information-display">
          <p className="information-display-title">{label}</p>
          {hint && <p>{hint}</p>}
        </div>
      );
    case "TEXTAREA":
    case "ADDRESS":
      return (
        <TextArea
          id={id}
          label={label}
          required={required}
          optional={!required}
          value={text}
          rows={field.fieldType === "ADDRESS" ? 4 : 5}
          {...(field.fieldType === "ADDRESS" ? { autoComplete: "street-address" } : {})}
          {...(placeholder ? { placeholder } : {})}
          onChange={(e) => onChange(e.target.value)}
          {...common}
        />
      );
    case "SELECT":
    case "COUNTRY":
      return (
        <Select
          id={id}
          label={label}
          required={required}
          optional={!required}
          value={text}
          options={options}
          placeholder={placeholder ?? "Select an option"}
          onChange={(e) => onChange(e.target.value)}
          {...common}
        />
      );
    case "RADIO":
      return (
        <div id={id} tabIndex={-1}>
          <RadioGroup
            legend={label}
            name={field.fieldKey}
            options={options}
            value={text}
            required={required}
            onChange={(v) => onChange(v)}
            {...common}
          />
        </div>
      );
    case "BOOLEAN":
      return (
        <div id={id} tabIndex={-1}>
          <RadioGroup
            legend={label}
            name={field.fieldKey}
            inline
            options={[
              { value: "true", label: "Yes" },
              { value: "false", label: "No" },
            ]}
            value={typeof value === "boolean" ? String(value) : ""}
            required={required}
            onChange={(v) => onChange(v === "true")}
            {...common}
          />
        </div>
      );
    case "MULTISELECT":
    case "CHECKBOX":
      return (
        <CheckboxGroup
          id={id}
          legend={label}
          name={field.fieldKey}
          options={options}
          value={Array.isArray(value) ? value : []}
          onChange={(v) => onChange(v)}
          {...common}
        />
      );
    case "DECLARATION":
      return (
        <Checkbox
          id={id}
          label={field.declaration ? localized(field.declaration.declarationText, label) : label}
          checked={value === true}
          onChange={(e) => onChange(e.target.checked)}
          {...common}
        />
      );
    default: {
      const type = INPUT_TYPES[field.fieldType] ?? "text";
      const inputMode = INPUT_MODES[field.fieldType];
      const autoComplete = AUTOCOMPLETE[field.fieldType];
      return (
        <TextField
          id={id}
          label={label}
          type={type}
          required={required}
          optional={!required}
          value={text}
          {...(inputMode ? { inputMode } : {})}
          {...(autoComplete ? { autoComplete } : {})}
          {...(placeholder ? { placeholder } : {})}
          onChange={(e) => onChange(e.target.value)}
          {...common}
        />
      );
    }
  }
}
