import { render, screen, within } from "@testing-library/react";
import { ItemList } from "./ItemList";

describe("ItemList", () => {
  it("is a labelled list whose titles are the links", () => {
    render(
      <ItemList
        label="Things to do"
        items={[
          {
            id: "1",
            title: "Pay invoice",
            href: "/payments/1",
            meta: "Due 10 October",
            status: <span>Issued</span>,
          },
          { id: "2", title: "Read notice", description: "From an office" },
        ]}
      />,
    );
    const list = screen.getByRole("list", { name: "Things to do" });
    const items = within(list).getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(
      within(items[0] as HTMLElement).getByRole("link", { name: "Pay invoice" }),
    ).toHaveAttribute("href", "/payments/1");
    expect(items[0]).toHaveTextContent("Due 10 October");
    expect(within(items[1] as HTMLElement).queryByRole("link")).not.toBeInTheDocument();
  });
});
