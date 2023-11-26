import React, { useContext } from "react";
import { PokemonContext } from "../state/PokemonContext";

export function TestComponent() {
  const context = useContext(PokemonContext);
  if (!context) return null;

  const { pokemon } = context;

  return <div data-testid="pokemon-length">{pokemon?.length ?? 4}</div>;
}

export default TestComponent;
