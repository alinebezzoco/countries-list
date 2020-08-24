import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { FilterSearch } from "../filter-search";

describe("Filter Search", () => {
  it("renders Filter Search component without errors", () => {
    render(<FilterSearch />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should be empty", () => {
    const { getByTestId } = render(<FilterSearch />);
    expect(getByTestId("filter-search")).toBeEmpty();
  });

  it("should have Germany text", () => {
    const { getByTestId } = render(<FilterSearch />);
    fireEvent.keyUp(getByTestId("filter-search"), {
      target: {
        value: "Germany",
      },
    });
    expect(getByTestId("filter-search")).toHaveValue("Germany");
  });
});
