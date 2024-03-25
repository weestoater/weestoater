import { render, screen } from "@testing-library/react";
import React from "react";
import { HomePage } from "../pages/Home";

describe("Home page", () => {
  test("renders correctly", () => {
    render(<HomePage />);
    const heading = screen.getByText(/home/i);
    expect(heading).toBeInTheDocument();
  });
});
