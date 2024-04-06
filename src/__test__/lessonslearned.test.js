import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { LessonsLearned } from "../pages/agile/LessonsLearned";

describe("LessonsLearned page", () => {
  test("renders h1 correctly", () => {
    render(
      <MemoryRouter>
        <LessonsLearned />
      </MemoryRouter>
    );
    const heading = screen.getByTestId("page-title");
    expect(heading).toBeInTheDocument();
  });
});
