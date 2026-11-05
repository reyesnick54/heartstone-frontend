import { useId, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import { describedBy } from "../FormField/FormField";
import { ErrorIcon } from "../icons";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import choice from "../Checkbox/Choice.module.css";
import styles from "../RadioGroup/RadioGroup.module.css";

export interface CheckboxGroupOption {
  value: string;
  label: ReactNode;
  hint?: ReactNode;
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  /** The question. Rendered as the fieldset legend. */
  legend: ReactNode;
  name: string;
  options: readonly CheckboxGroupOption[];
  /** Selected values (controlled). */
  value: readonly string[];
  onChange: (value: string[]) => void;
  hint?: ReactNode;
  error?: ReactNode;
  /** Id of the fieldset, e.g. for an error summary link. */
  id?: string;
  className?: string;
}

/** Several native checkboxes for one question ("select all that apply"), in a fieldset. */
export function CheckboxGroup({
  legend,
  name,
  options,
  value,
  onChange,
  hint,
  error,
  id,
  className,
}: CheckboxGroupProps) {
  const generated = useId();
  const baseId = id ?? `hs-checks-${generated}`;
  const hintId = hint ? `${baseId}-hint` : undefined;
  const errorId = error ? `${baseId}-error` : undefined;

  function toggle(optionValue: string, checked: boolean) {
    const next = checked
      ? [...value.filter((v) => v !== optionValue), optionValue]
      : value.filter((v) => v !== optionValue);
    onChange(options.map((o) => o.value).filter((v) => next.includes(v)));
  }

  return (
    <fieldset
      id={baseId}
      className={cx(styles.root, error && choice.invalid, className)}
      aria-describedby={describedBy(hintId, errorId)}
    >
      <legend className={styles.legend}>{legend}</legend>
      {hint && (
        <span id={hintId} className={styles.hint}>
          {hint}
        </span>
      )}
      {error && (
        <span id={errorId} className={choice.error}>
          <ErrorIcon size={18} />
          <span>
            <VisuallyHidden>Error:</VisuallyHidden> {error}
          </span>
        </span>
      )}
      {options.map((option, index) => {
        const optionId = `${baseId}-${index}`;
        const optionHintId = option.hint ? `${optionId}-hint` : undefined;
        return (
          <label key={option.value} htmlFor={optionId} className={choice.choice}>
            <input
              id={optionId}
              type="checkbox"
              name={name}
              value={option.value}
              checked={value.includes(option.value)}
              onChange={(event) => toggle(option.value, event.target.checked)}
              disabled={option.disabled}
              aria-describedby={optionHintId}
              className={choice.input}
            />
            <span className={choice.text}>
              {option.label}
              {option.hint && (
                <span id={optionHintId} className={choice.choiceHint}>
                  {option.hint}
                </span>
              )}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
}
