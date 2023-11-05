import React from "react";
import "./Search.css";
import axios from "axios";

interface SearchProps {
  pokemonName: string;
}

function Search({ pokemonName }: SearchProps) {
  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => console.log(response));
  };

  return (
    <button onClick={searchPokemon} type="submit">
      Search Pokemon
    </button>
  );
}

export default Search;
