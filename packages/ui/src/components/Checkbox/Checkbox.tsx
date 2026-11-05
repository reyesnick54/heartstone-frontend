import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import { describedBy } from "../FormField/FormField";
import { ErrorIcon } from "../icons";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import styles from "./Choice.module.css";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
}

/** A single checkbox with its label (the whole row is clickable). */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, hint, error, id, className, "aria-describedby": extraDescribedBy, ...rest },
  ref,
) {
  const generated = useId();
  const inputId = id ?? `hs-checkbox-${generated}`;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className={cx(error && styles.invalid, className)}>
      {error && (
        <span id={errorId} className={styles.error}>
          <ErrorIcon size={18} />
          <span>
            <VisuallyHidden>Error:</VisuallyHidden> {error}
          </span>
        </span>
      )}
      <label htmlFor={inputId} className={styles.choice}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className={styles.input}
          aria-describedby={describedBy(hintId, errorId, extraDescribedBy)}
          aria-invalid={error ? true : undefined}
          {...rest}
        />
        <span className={styles.text}>
          {label}
          {hint && (
            <span id={hintId} className={styles.choiceHint}>
              {hint}
            </span>
          )}
        </span>
      </label>
    </div>
  );
});
