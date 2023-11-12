import { render, screen } from "@testing-library/react";
import React from "react";
import { test } from "vitest";
import App from "./App";
import { PokemonProvider } from "./components/state/PokemonContext";

test("heading test", () => {
  render(
    <PokemonProvider>
      <App />
    </PokemonProvider>,
  );
  const element = screen.getByRole("heading", { name: "AAAAA" });
  expect(element).toBeInTheDocument();
});
