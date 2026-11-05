import { useEffect, useId, useRef, type MouseEvent, type ReactNode, type RefObject } from "react";
import { createPortal } from "react-dom";
import { cx } from "../../internal/cx";
import { CloseIcon } from "../icons";
import { focusableElements } from "./focusable";
import styles from "./Dialog.module.css";

export interface DialogProps {
  open: boolean;
  /** Called on Escape, the close button, or a backdrop click (unless disabled). */
  onClose: () => void;
  /** Dialog title: becomes the accessible name. */
  title: ReactNode;
  /** Short description: becomes the accessible description. */
  description?: ReactNode;
  children?: ReactNode;
  /** Actions, e.g. Cancel / Confirm buttons. */
  footer?: ReactNode;
  /**
   * `alertdialog` for confirmations that interrupt the user (destructive or consequential
   * actions). Backdrop clicks do not close an alert dialog.
   */
  role?: "dialog" | "alertdialog";
  /** Element to focus when the dialog opens. Defaults to the first focusable element. */
  initialFocusRef?: RefObject<HTMLElement | null>;
  /** Accessible label of the close button. */
  closeLabel?: string;
  closeOnBackdropClick?: boolean;
  className?: string;
}

/**
 * Modal dialog. Focus moves into the dialog on open, Tab and Shift+Tab are trapped inside it,
 * Escape closes it, the rest of the page is made `inert`, and focus returns to the element that
 * opened it when it closes.
 *
 * Rendered in a portal on `document.body`. Content behind it gets `inert` and `aria-hidden` so
 * screen readers stay inside the dialog.
 */
export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  role = "dialog",
  initialFocusRef,
  closeLabel = "Close",
  closeOnBackdropClick = role === "dialog",
  className,
}: DialogProps) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const portalRoot = dialog.closest<HTMLElement>("[data-hs-dialog-root]");
    const siblings = Array.from(document.body.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement && el !== portalRoot,
    );
    const previous = siblings.map((el) => ({
      el,
      inert: el.getAttribute("inert"),
      ariaHidden: el.getAttribute("aria-hidden"),
    }));
    for (const el of siblings) {
      el.setAttribute("inert", "");
      el.setAttribute("aria-hidden", "true");
    }
    document.body.classList.add("hs-scroll-locked");

    const target = initialFocusRef?.current ?? focusableElements(dialog)[0] ?? dialog;
    target.focus();

    // Escape closes; Tab and Shift+Tab wrap inside the dialog. Registered here rather than as a
    // JSX handler so it is attached for exactly as long as the dialog is open.
    function onKeyDown(event: KeyboardEvent) {
      if (!dialog) return;
      if (event.key === "Escape") {
        event.stopPropagation();
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusableElements(dialog);
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) {
        event.preventDefault();
        dialog.focus();
        return;
      }
      const active = document.activeElement;
      if (event.shiftKey && (active === first || active === dialog)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }
    dialog.addEventListener("keydown", onKeyDown);

    return () => {
      dialog.removeEventListener("keydown", onKeyDown);
      for (const { el, inert, ariaHidden } of previous) {
        if (inert === null) el.removeAttribute("inert");
        else el.setAttribute("inert", inert);
        if (ariaHidden === null) el.removeAttribute("aria-hidden");
        else el.setAttribute("aria-hidden", ariaHidden);
      }
      document.body.classList.remove("hs-scroll-locked");
      if (opener && opener.isConnected) opener.focus();
    };
  }, [open, initialFocusRef]);

  if (!open) return null;

  function onBackdropClick(event: MouseEvent<HTMLDivElement>) {
    if (closeOnBackdropClick && event.target === event.currentTarget) onCloseRef.current();
  }

  return createPortal(
    <div data-hs-dialog-root="">
      {/* The backdrop click is a pointer convenience; Escape and the close button are the
          keyboard equivalents, so this handler needs no key handler of its own. */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div className={styles.backdrop} onClick={onBackdropClick}>
        <div
          ref={dialogRef}
          role={role}
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={description ? descriptionId : undefined}
          tabIndex={-1}
          className={cx(styles.dialog, className)}
        >
          <div className={styles.header}>
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
            <button
              type="button"
              className={styles.close}
              aria-label={closeLabel}
              onClick={() => onCloseRef.current()}
            >
              <CloseIcon size={22} />
            </button>
          </div>
          {description && (
            <p id={descriptionId} className={styles.description}>
              {description}
            </p>
          )}
          {children}
          {footer && <div className={styles.footer}>{footer}</div>}
        </div>
      </div>
    </div>,
    document.body,
  );
}
