// App.test.tsx
import { it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { TestComponent } from "./TestComponent";
import { PokemonProvider } from "../state/PokemonContext";

it("displays the correct number of pokemons based on limit", async () => {
  render(
    <PokemonProvider>
      <TestComponent />
    </PokemonProvider>,
  );

  await waitFor(() => {
    const pokemonLengthElement = screen.getByTestId("pokemon-length");
    expect(pokemonLengthElement.textContent).toBe("4");
  });
});
