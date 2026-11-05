import "@testing-library/jest-dom/vitest";

// jsdom has no layout: scrolling is a no-op.
Element.prototype.scrollIntoView = function scrollIntoView() {};
