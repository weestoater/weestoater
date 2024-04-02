import { render, screen } from "@testing-library/react";
import React from "react";
import { AboutPage } from "../pages/About";

describe("About page", () => {
  test("renders correctly", () => {
    render(<AboutPage />);
    const heading = screen.getByText(/about weestoater/i);
    expect(heading).toBeInTheDocument();
  });
});
