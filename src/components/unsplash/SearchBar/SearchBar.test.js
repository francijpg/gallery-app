import React from "react";
import { render } from "@testing-library/react";

import SearchBar from "./";

describe("SearchBar component", () => {
  it("should render properly", () => {
    const placeholderText = "Look for something you like";
    const { getByTestId, getByPlaceholderText } = render(<SearchBar />);

    expect(getByTestId("search-bar")).toBeInTheDocument();
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });
});
