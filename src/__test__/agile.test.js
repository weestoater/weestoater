import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { AgilePage } from "../pages/agile/Agile";

describe("Agile page", () => {
  test("renders h1 correctly", () => {
    render(
      <MemoryRouter>
        <AgilePage />
      </MemoryRouter>
    );
    const heading = screen.getByTestId("page-title");
    expect(heading).toBeInTheDocument();
  });
});
