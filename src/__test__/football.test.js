import React from "react";
import { render, screen } from "@testing-library/react";

import { FootballPage } from "../pages/Football";

describe("Football Page -> ", () => {
  it("renders h1 correctly ", () => {
    render(<FootballPage />);
    const heading = screen.getByText(/football/i);
    expect(heading).toBeInTheDocument();
  });
});
