import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { PokemonProvider } from "./components/state/PokemonContext";
import { NotFoundPage } from "./components/notfound/NotFoundPage";

it("displays the 404 page for an invalid route", async () => {
  render(
    <PokemonProvider>
      <NotFoundPage />
    </PokemonProvider>,
  );

  const element = screen.getByRole("heading");
  expect(element).toBeInTheDocument();
});
