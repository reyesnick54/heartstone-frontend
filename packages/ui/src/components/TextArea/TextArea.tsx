import { forwardRef, type ReactNode, type TextareaHTMLAttributes } from "react";
import { cx } from "../../internal/cx";
import { FormField } from "../FormField/FormField";
import formFieldStyles from "../FormField/FormField.module.css";
import styles from "./TextArea.module.css";

export interface TextAreaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id" | "required"
> {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  optional?: boolean;
  id?: string;
  className?: string;
  textAreaClassName?: string;
}

/** Multi-line text input with label, hint and error. */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { label, hint, error, required, optional, id, className, textAreaClassName, rows = 4, ...rest },
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
        <textarea
          ref={ref}
          rows={rows}
          className={cx(formFieldStyles.control, styles.root, textAreaClassName)}
          {...control}
          {...rest}
        />
      )}
    </FormField>
  );
});
