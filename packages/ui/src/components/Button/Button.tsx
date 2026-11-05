import { forwardRef, type ButtonHTMLAttributes, type MouseEvent, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "quiet" | "danger";
export type ButtonSize = "default" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  /**
   * Shows a spinner, sets `aria-busy` and ignores clicks. The button keeps its label, so screen
   * readers still know what it does; pass `loadingLabel` to announce progress instead.
   */
  loading?: boolean;
  loadingLabel?: string;
  /** Icon before the label. Decorative: hidden from assistive technology. */
  icon?: ReactNode;
}

/**
 * Disabled buttons use `aria-disabled` rather than the `disabled` attribute, so they stay in the
 * tab order and screen-reader users can discover them (and any adjacent explanation of why).
 * Clicks are suppressed. A disabled button is a UI hint only: the backend enforces every rule.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "default",
    fullWidth = false,
    loading = false,
    loadingLabel,
    disabled = false,
    icon,
    type = "button",
    className,
    children,
    onClick,
    ...rest
  },
  ref,
) {
  const inert = disabled || loading;

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (inert) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  }

  return (
    <button
      ref={ref}
      type={type}
      className={cx(
        styles.root,
        styles[variant],
        size === "large" && styles.large,
        fullWidth && styles.fullWidth,
        className,
      )}
      aria-disabled={inert || undefined}
      aria-busy={loading || undefined}
      onClick={handleClick}
      {...rest}
    >
      {loading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : (
        icon && <span aria-hidden="true">{icon}</span>
      )}
      {loading && loadingLabel ? loadingLabel : children}
    </button>
  );
});
