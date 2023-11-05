import React, { useState } from "react";
import Search from "../seacrh/Search";
import "./Input.css";
import { PokemonData } from "../type";

interface InputProps {
  onPokemonSearch: (pokemon: PokemonData | null) => void;
}

function Input({ onPokemonSearch }: InputProps) {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setPokemonName(event.target.value);
        }}
      />
      <Search pokemonName={pokemonName} onPokemonSearch={onPokemonSearch} />
    </>
  );
}

export default Input;
