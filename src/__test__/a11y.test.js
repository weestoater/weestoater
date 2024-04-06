import React from "react";
import { render, screen } from "@testing-library/react";

import { A11yPage } from "../pages/A11y";

describe("A11y page", () => {
  test("renders h1 correctly ", () => {
    render(<A11yPage />);
    const heading = screen.getByTestId("page-title");
    expect(heading).toBeInTheDocument();
  });
});
