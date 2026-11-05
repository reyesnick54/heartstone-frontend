// Building blocks for the "My government" hubs: each section loads one backend projection and
// shows its own loading, error and empty states, so one failing source does not hide the rest.
import type { ReactNode } from "react";
import { Card, ItemList, Link, Loading, Stack, type ItemListItem } from "@heartstone/ui";
import type { QueryResult } from "../lib/query";
import { paths } from "../lib/paths";
import { ApiErrorNotice } from "./ApiErrorNotice";

export interface HubSectionProps<T> {
  title: string;
  query: QueryResult<T>;
  /** Items to list, or a node for custom content. */
  render: (data: T) => ItemListItem[] | ReactNode;
  empty: string;
}

export function HubSection<T>({ title, query, render, empty }: HubSectionProps<T>) {
  let body: ReactNode;
  if (query.status === "loading") body = <Loading label={`Loading ${title.toLowerCase()}`} />;
  else if (query.status === "error")
    body = (
      <ApiErrorNotice
        error={query.error}
        title={`We could not load ${title.toLowerCase()}`}
        onRetry={query.reload}
      />
    );
  else {
    const content = render(query.data);
    if (Array.isArray(content)) {
      body =
        content.length === 0 ? (
          <p>{empty}</p>
        ) : (
          <ItemList label={title} items={content as ItemListItem[]} />
        );
    } else body = content;
  }
  return (
    <Card title={title} titleLevel={2}>
      {body}
    </Card>
  );
}

/** "Services in this area": the person describes what they need in Find a service. */
export function HubServices({ examples }: { examples: string[] }) {
  return (
    <Card title="Services in this area" titleLevel={2}>
      <Stack gap="2">
        <ul className="bullets">
          {examples.map((e) => (
            <li key={e}>
              <Link href={`${paths.services}?q=${encodeURIComponent(e)}`}>{e}</Link>
            </li>
          ))}
        </ul>
        <Link href={paths.services}>Find another service</Link>
      </Stack>
    </Card>
  );
}
