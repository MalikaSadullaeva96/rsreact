import React, { createContext, useState, ReactNode } from "react";
import { PokemonData } from "../type";

interface PokemonContextProps {
  children: ReactNode;
}

interface ContextType {
  pokemon: PokemonData[] | null;
  setPokemon: (pokemonData: PokemonData[] | null) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  allPokemons: PokemonData[];
  setAllPokemons: (pokemons: PokemonData[]) => void;
}

export const PokemonContext = createContext<ContextType | null>(null);

export function PokemonProvider({ children }: PokemonContextProps) {
  const [pokemon, setPokemon] = useState<PokemonData[] | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [allPokemons, setAllPokemons] = useState<PokemonData[]>([]);

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        searchValue,
        setSearchValue,
        allPokemons,
        setAllPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
