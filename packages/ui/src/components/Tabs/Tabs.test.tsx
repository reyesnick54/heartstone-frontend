import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "./Tabs";

const tabs = [
  { id: "all", label: "All", count: 5, content: <p>All items</p> },
  { id: "action", label: "Needs your action", count: 1, content: <p>Action items</p> },
  { id: "drafts", label: "Drafts", content: <p>Draft items</p> },
];

describe("Tabs", () => {
  it("exposes a labelled tablist with one selected tab controlling its panel", () => {
    render(<Tabs label="Filter items" tabs={tabs} />);
    expect(screen.getByRole("tablist", { name: "Filter items" })).toBeInTheDocument();
    const selected = screen.getByRole("tab", { selected: true });
    expect(selected).toHaveAccessibleName("All 5");
    const panel = screen.getByRole("tabpanel");
    expect(panel).toHaveAccessibleName("All 5");
    expect(selected).toHaveAttribute("aria-controls", panel.id);
  });

  it("moves selection with arrow keys, Home and End, keeping one tab stop", async () => {
    const user = userEvent.setup();
    render(<Tabs label="Filter items" tabs={tabs} />);
    await user.tab();
    expect(screen.getByRole("tab", { name: /All/ })).toHaveFocus();

    await user.keyboard("{ArrowRight}");
    const action = screen.getByRole("tab", { name: /Needs your action/ });
    expect(action).toHaveFocus();
    expect(action).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Action items");

    await user.keyboard("{End}");
    expect(screen.getByRole("tab", { name: "Drafts" })).toHaveFocus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: /All/ })).toHaveFocus();
    await user.keyboard("{ArrowLeft}");
    expect(screen.getByRole("tab", { name: "Drafts" })).toHaveFocus();
    await user.keyboard("{Home}");
    expect(screen.getByRole("tab", { name: /All/ })).toHaveFocus();

    const tabStops = screen.getAllByRole("tab").filter((t) => t.tabIndex === 0);
    expect(tabStops).toHaveLength(1);
  });

  it("selects on click and reports the change", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Tabs label="Filter items" tabs={tabs} onChange={onChange} />);
    await user.click(screen.getByRole("tab", { name: "Drafts" }));
    expect(onChange).toHaveBeenCalledWith("drafts");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Draft items");
  });
});
