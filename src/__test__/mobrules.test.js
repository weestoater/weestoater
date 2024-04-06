import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { MobRules } from "../pages/agile/MobRules";

describe("MobRules page", () => {
  test("renders h1 correctly", () => {
    render(
      <MemoryRouter>
        <MobRules />
      </MemoryRouter>
    );
    const heading = screen.getByTestId("page-title");
    expect(heading).toBeInTheDocument();
  });
});
