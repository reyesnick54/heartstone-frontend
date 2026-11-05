import { useId, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import { ErrorIcon } from "../icons";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import styles from "./FormField.module.css";

/** Props a FormField passes to its control so the label, hint and error are announced. */
export interface FormControlProps {
  id: string;
  "aria-describedby"?: string;
  "aria-invalid"?: true;
  required?: boolean;
}

export interface FormFieldProps {
  label: ReactNode;
  /** Help text shown under the label and read with the control. */
  hint?: ReactNode | undefined;
  /**
   * Error message. When present the control is marked `aria-invalid` and the message is read
   * with it. Write it as an instruction ("Enter the registration number"), not "Invalid".
   */
  error?: ReactNode | undefined;
  /** Marks the control required. Optional fields are labelled "(optional)" instead. */
  required?: boolean | undefined;
  /** Shows "(optional)" after the label. Prefer this over marking required fields with "*". */
  optional?: boolean | undefined;
  /** Use a specific id for the control; generated otherwise. */
  id?: string | undefined;
  className?: string | undefined;
  /** Renders the control with the props it needs. */
  children: (control: FormControlProps) => ReactNode;
}

export function describedBy(...ids: (string | false | undefined)[]): string | undefined {
  const joined = ids.filter(Boolean).join(" ");
  return joined || undefined;
}

/**
 * Label, hint and error for one form control, wired with `htmlFor` and `aria-describedby`.
 * Order follows the designs: label, hint, error, control.
 */
export function FormField({
  label,
  hint,
  error,
  required,
  optional,
  id,
  className,
  children,
}: FormFieldProps) {
  const generated = useId();
  const controlId = id ?? `hs-field-${generated}`;
  const hintId = hint ? `${controlId}-hint` : undefined;
  const errorId = error ? `${controlId}-error` : undefined;

  const control: FormControlProps = { id: controlId };
  const ariaDescribedBy = describedBy(hintId, errorId);
  if (ariaDescribedBy) control["aria-describedby"] = ariaDescribedBy;
  if (error) control["aria-invalid"] = true;
  if (required) control.required = true;

  return (
    <div className={cx(styles.root, className)}>
      <label htmlFor={controlId} className={styles.label}>
        {label}
        {optional && (
          <>
            {" "}
            <span className={styles.optional}>(optional)</span>
          </>
        )}
      </label>
      {hint && (
        <span id={hintId} className={styles.hint}>
          {hint}
        </span>
      )}
      {error && (
        <span id={errorId} className={styles.error}>
          <ErrorIcon size={18} className={styles.errorIcon} />
          <span>
            <VisuallyHidden>Error:</VisuallyHidden> {error}
          </span>
        </span>
      )}
      {children(control)}
    </div>
  );
}
