import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import styles from "./Tabs.module.css";

export interface TabItem {
  id: string;
  label: ReactNode;
  /** Optional count shown in a pill after the label (e.g. number of items). */
  count?: number;
  content: ReactNode;
}

export interface TabsProps {
  /** Accessible name of the tab list, e.g. "Filter applications". */
  label: string;
  tabs: readonly TabItem[];
  /** Controlled selected tab id. */
  selectedId?: string;
  defaultSelectedId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

/**
 * WAI-ARIA tabs with automatic activation: Left/Right arrows move and select, Home/End jump to
 * the first/last tab, and only the selected tab is in the tab order.
 */
export function Tabs({
  label,
  tabs,
  selectedId,
  defaultSelectedId,
  onChange,
  className,
}: TabsProps) {
  const baseId = useId();
  const [internal, setInternal] = useState(defaultSelectedId ?? tabs[0]?.id);
  const current = selectedId ?? internal;
  const refs = useRef(new Map<string, HTMLButtonElement>());

  function select(id: string, focus = false) {
    if (selectedId === undefined) setInternal(id);
    onChange?.(id);
    if (focus) refs.current.get(id)?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = tabs.length - 1;
    const next =
      event.key === "ArrowRight"
        ? index === last
          ? 0
          : index + 1
        : event.key === "ArrowLeft"
          ? index === 0
            ? last
            : index - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : undefined;
    const target = next === undefined ? undefined : tabs[next];
    if (!target) return;
    event.preventDefault();
    select(target.id, true);
  }

  const tabId = (id: string) => `${baseId}-tab-${id}`;
  const panelId = (id: string) => `${baseId}-panel-${id}`;

  return (
    <div className={className}>
      <div role="tablist" aria-label={label} className={styles.list}>
        {tabs.map((tab, index) => {
          const selected = tab.id === current;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                if (node) refs.current.set(tab.id, node);
                else refs.current.delete(tab.id);
              }}
              type="button"
              role="tab"
              id={tabId(tab.id)}
              aria-selected={selected}
              aria-controls={panelId(tab.id)}
              tabIndex={selected ? 0 : -1}
              className={styles.tab}
              onClick={() => select(tab.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {tab.label}
              {tab.count !== undefined && (
                <>
                  {" "}
                  <span className={styles.count}>{tab.count}</span>
                </>
              )}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={panelId(tab.id)}
          aria-labelledby={tabId(tab.id)}
          hidden={tab.id !== current}
          className={cx(styles.panel)}
          // Panels are focusable so keyboard users can reach content that has no focusable
          // element (WAI-ARIA APG tabs pattern), which this rule does not recognise.
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
        >
          {tab.id === current && tab.content}
        </div>
      ))}
    </div>
  );
}
