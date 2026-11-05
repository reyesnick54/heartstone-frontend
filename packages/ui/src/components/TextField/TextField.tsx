import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import { FormField } from "../FormField/FormField";
import formFieldStyles from "../FormField/FormField.module.css";

export interface TextFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "required"
> {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  optional?: boolean;
  id?: string;
  /** Class for the wrapping field. */
  className?: string;
  /** Class for the input itself (e.g. to limit width). */
  inputClassName?: string;
}

/** Single-line text input with label, hint and error. */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, hint, error, required, optional, id, className, inputClassName, type = "text", ...rest },
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
        <input
          ref={ref}
          type={type}
          className={cx(formFieldStyles.control, inputClassName)}
          {...control}
          {...rest}
        />
      )}
    </FormField>
  );
});
