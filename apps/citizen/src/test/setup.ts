import "@testing-library/jest-dom/vitest";
import { configure } from "@testing-library/react";

// The first page of a test file renders the whole app (session check, /me, page data). On a busy
// CI runner that can exceed the default 1 s `findBy*` timeout, so allow more.
configure({ asyncUtilTimeout: 5000 });

// jsdom has no layout: scrolling is a no-op.
Element.prototype.scrollIntoView = function scrollIntoView() {};
