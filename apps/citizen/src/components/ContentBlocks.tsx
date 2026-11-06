// Renders tenant website content (content/schema.ts): article sections and their blocks, steps,
// tables, notes, and the small "Based on" note citing where the content comes from. These
// components hold no facts of their own.
import { Card, Link, Notice, Stack, Table, Timeline } from "@heartstone/ui";
import type { Article, Block, ContentLink, Section, SourceRef, Step } from "../content/schema";

export function StepList({ label, items }: { label: string; items: readonly Step[] }) {
  return (
    <Timeline
      label={label}
      items={items.map((step, i) => ({
        id: String(i),
        title: `${i + 1}. ${step.title}`,
        ...(step.detail ? { description: step.detail } : {}),
      }))}
    />
  );
}

export function ContentTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  interface Row {
    i: number;
    cells: readonly string[];
  }
  return (
    <Table<Row>
      caption={caption}
      rows={rows.map((cells, i) => ({ i, cells }))}
      rowKey={(row) => String(row.i)}
      columns={columns.map((header, c) => ({
        key: String(c),
        header,
        cell: (row) => row.cells[c] ?? "",
        ...(c === 0 ? { rowHeader: true } : {}),
      }))}
    />
  );
}

export function LinkList({ items }: { items: readonly ContentLink[] }) {
  return (
    <ul className="site-plain-list">
      {items.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export function ContentBlock({ block, headingLevel = 3 }: { block: Block; headingLevel?: 3 | 4 }) {
  switch (block.kind) {
    case "p":
      return <p>{block.text}</p>;
    case "list":
      return (
        <ul className="bullets">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "steps":
      return <StepList label={block.label} items={block.items} />;
    case "table":
      return <ContentTable caption={block.caption} columns={block.columns} rows={block.rows} />;
    case "note":
      return (
        <Notice
          tone="info"
          announce="none"
          titleLevel={headingLevel}
          {...(block.title ? { title: block.title } : {})}
        >
          {block.text}
        </Notice>
      );
    case "links":
      return <LinkList items={block.items} />;
  }
}

export function ContentSection({ section }: { section: Section }) {
  return (
    <Card title={section.heading} titleLevel={2} id={section.id}>
      <Stack gap="3">
        {section.blocks.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </Stack>
    </Card>
  );
}

/** Where the content on a page comes from, for readers who want to check it. */
export function SourcesNote({ sources }: { sources: readonly SourceRef[] }) {
  if (sources.length === 0) return null;
  return (
    <p className="site-sources">
      <span className="site-sources-label">Based on: </span>
      {[...new Set(sources)].join("; ")}.
    </p>
  );
}

/** An article's sections, related links and sources. The page supplies the title. */
export function ArticleBody({ article }: { article: Article }) {
  return (
    <>
      {article.sections.map((section) => (
        <ContentSection key={section.id} section={section} />
      ))}
      {article.related && article.related.length > 0 && (
        <Card title="Related" titleLevel={2}>
          <LinkList items={article.related} />
        </Card>
      )}
      <SourcesNote sources={article.sources} />
    </>
  );
}
