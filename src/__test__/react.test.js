import { render, screen } from "@testing-library/react";
import React from "react";
import { ReactPage } from "../pages/React";

describe("React page", () => {
  test("renders h1 correctly", () => {
    render(<ReactPage />);
    const heading = screen.getByTestId("page-title");
    expect(heading).toBeInTheDocument();
  });

  test("renders what is weestoater heading", () => {
    render(<ReactPage />);
    const heading = screen.getByText(/needs a little salt/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders who is weestoater heading", () => {
    render(<ReactPage />);
    const heading = screen.getByText(/nextjs things next/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders who is weestoater heading", () => {
    render(<ReactPage />);
    const heading = screen.getByText(/hook, line & sinker/i);
    expect(heading).toBeInTheDocument();
  });
});
