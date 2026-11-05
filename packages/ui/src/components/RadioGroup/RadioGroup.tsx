import { useId, useState, type ChangeEvent, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import { describedBy } from "../FormField/FormField";
import { ErrorIcon } from "../icons";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import choice from "../Checkbox/Choice.module.css";
import styles from "./RadioGroup.module.css";

export interface RadioOption {
  value: string;
  label: ReactNode;
  hint?: ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps {
  /** The question. Rendered as the fieldset legend. */
  legend: ReactNode;
  /** Form field name shared by the radios. */
  name: string;
  options: readonly RadioOption[];
  /** Controlled value. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  /** Lay options out side by side (for two short options such as Yes / No). */
  inline?: boolean;
  className?: string;
}

/**
 * Native radio buttons in a fieldset. Arrow keys move between options (browser behaviour), and
 * the legend, hint and error are read when the group is entered.
 */
export function RadioGroup({
  legend,
  name,
  options,
  value,
  defaultValue,
  onChange,
  hint,
  error,
  required,
  inline = false,
  className,
}: RadioGroupProps) {
  const id = useId();
  const hintId = hint ? `hs-radio-${id}-hint` : undefined;
  const errorId = error ? `hs-radio-${id}-error` : undefined;
  const [internal, setInternal] = useState(defaultValue);
  const selected = value ?? internal;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (value === undefined) setInternal(event.target.value);
    onChange?.(event.target.value, event);
  }

  return (
    <fieldset
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
      <div className={cx(inline && styles.inline)}>
        {options.map((option, index) => {
          const optionId = `hs-radio-${id}-${index}`;
          const optionHintId = option.hint ? `${optionId}-hint` : undefined;
          return (
            <label key={option.value} htmlFor={optionId} className={choice.choice}>
              <input
                id={optionId}
                type="radio"
                name={name}
                value={option.value}
                checked={selected === option.value}
                onChange={handleChange}
                disabled={option.disabled}
                required={required}
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
      </div>
    </fieldset>
  );
}
