// Citation helpers for ABSEZ content. The documents are:
//   - ABSEZ One-Stop Service System Implementation Protocol (v4)
//   - Annexes to the One-Stop Service Implementation Protocol (Appendices A–P)
//   - ABSEZ Volume 1 — Acronym and Plain-English Glossary
import type { SourceRef } from "../schema";

/** Implementation Protocol, by article number(s). */
export const art = (...articles: (number | string)[]): SourceRef =>
  `Implementation Protocol, Article${articles.length > 1 ? "s" : ""} ${articles.join(", ")}`;

/** Annexes, by appendix letter and optional part. */
export const appx = (letter: string, part?: string): SourceRef =>
  `Annexes, Appendix ${letter}${part ? `, ${part}` : ""}`;

/** Volume 1 plain-English glossary. */
export const glossary = (section: string): SourceRef => `Volume 1 Glossary, ${section}`;
