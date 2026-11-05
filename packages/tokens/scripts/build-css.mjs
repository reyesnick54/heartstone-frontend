// Writes dist/tokens.css from the compiled token constants (run after `tsc`).
import { writeFileSync } from "node:fs";
import { renderTokensCss } from "../dist/index.js";

const target = new URL("../dist/tokens.css", import.meta.url);
writeFileSync(target, renderTokensCss());
console.log(`wrote ${target.pathname}`);
