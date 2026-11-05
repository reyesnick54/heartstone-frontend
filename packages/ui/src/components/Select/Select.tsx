import { forwardRef, type ReactNode, type SelectHTMLAttributes } from "react";
import { cx } from "../../internal/cx";
import { FormField } from "../FormField/FormField";
import formFieldStyles from "../FormField/FormField.module.css";
import styles from "./Select.module.css";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "id" | "required" | "children"
> {
  label: ReactNode;
  options: readonly SelectOption[];
  /** Adds an empty first option, e.g. "Choose an option". */
  placeholder?: string;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  optional?: boolean;
  id?: string;
  className?: string;
  selectClassName?: string;
}

/** Native select (best keyboard, screen-reader and mobile support) with label, hint and error. */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    label,
    options,
    placeholder,
    hint,
    error,
    required,
    optional,
    id,
    className,
    selectClassName,
    ...rest
  },
  ref,
) {
  return (
    <FormField
      label={label}
      hint={hint}
      error={error}
      required={required}
      optional={optional}
      id={id}
      className={className}
    >
      {(control) => (
        <select
          ref={ref}
          className={cx(formFieldStyles.control, styles.root, selectClassName)}
          {...control}
          {...rest}
        >
          {placeholder !== undefined && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </FormField>
  );
});
