import { render, screen } from "@testing-library/react";
import { Timeline } from "./Timeline";

describe("Timeline", () => {
  it("is a labelled ordered list that announces each step's state as text", () => {
    render(
      <Timeline
        label="Progress"
        items={[
          { id: "a", title: "Submitted", statusText: "Completed", state: "done", meta: "18 Sep" },
          { id: "b", title: "Inspection", statusText: "In progress", state: "current" },
          { id: "c", title: "Decision", state: "upcoming" },
        ]}
      />,
    );
    const list = screen.getByRole("list", { name: "Progress" });
    expect(list.tagName).toBe("OL");
    const items = screen.getAllByRole("listitem");
    expect(items[0]).toHaveTextContent("Completed step: Submitted Completed");
    expect(items[1]).toHaveAttribute("aria-current", "step");
    expect(items[2]).toHaveTextContent("Upcoming step: Decision");
  });
});
