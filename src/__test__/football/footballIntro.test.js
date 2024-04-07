import { render, screen } from "@testing-library/react";
import React from "react";
import { FootballIntro } from "../../content/football/footballIntro";

describe("Football Intro content", () => {
  test("mentions Motherwell", () => {
    render(<FootballIntro />);
    const intro = screen.getByText(/motherwell/i);
    expect(intro).toBeInTheDocument();
  });
});
