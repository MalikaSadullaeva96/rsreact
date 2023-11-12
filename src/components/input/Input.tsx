import React, { useContext } from "react";
import Search from "../seacrh/Search";
import "./Input.css";
import { PokemonContext } from "../state/PokemonContext";

function Input() {
  const context = useContext(PokemonContext);
  if (!context) return null;

  const { setSearchValue } = context;

  return (
    <>
      <input
        type="text"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Search />
    </>
  );
}

export default Input;
