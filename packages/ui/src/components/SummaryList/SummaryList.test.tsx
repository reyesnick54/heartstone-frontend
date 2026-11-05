import { render, screen, within } from "@testing-library/react";
import { SummaryList } from "./SummaryList";

describe("SummaryList", () => {
  it("renders a description list of terms and values with optional actions", () => {
    render(
      <SummaryList
        rows={[
          { id: "name", label: "Business name", value: "Example Ltd" },
          {
            id: "addr",
            label: "Trading address",
            value: "1 Main Street",
            action: <a href="#addr">Change trading address</a>,
          },
        ]}
      />,
    );
    const terms = screen.getAllByRole("term");
    expect(terms.map((t) => t.textContent)).toEqual(["Business name", "Trading address"]);
    const values = screen.getAllByRole("definition");
    expect(values[0]).toHaveTextContent("Example Ltd");
    expect(within(values[2] as HTMLElement).getByRole("link")).toHaveAccessibleName(
      "Change trading address",
    );
  });
});
