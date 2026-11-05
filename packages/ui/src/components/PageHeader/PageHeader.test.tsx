import { render, screen } from "@testing-library/react";
import { PageHeader } from "./PageHeader";

describe("PageHeader", () => {
  it("renders the page's single h1 with description and actions", () => {
    render(
      <PageHeader
        title="My applications"
        description="Everything you have applied for."
        actions={<button type="button">Start a new application</button>}
      />,
    );
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("My applications");
    expect(screen.getByRole("button", { name: "Start a new application" })).toBeInTheDocument();
  });
});
