import React, { useState } from "react";
import Search from "../seacrh/Search";
import "./Input.css";

function Input() {
  const [pokemonName, setPokemonName] = useState("");
  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setPokemonName(event.target.value);
        }}
      />
      <Search pokemonName={pokemonName} />
    </>
  );
}

export default Input;
