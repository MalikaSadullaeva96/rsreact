import React, { useState, useEffect, useContext } from "react";
import "./Search.css";
import axios from "axios";
import { PokemonData } from "../type";
import { PokemonContext } from "../state/PokemonContext";

function Search() {
  const context = useContext(PokemonContext);

  if (!context) return null;

  const { setPokemon, searchValue } = context;
  const [allPokemons, setAllPokemons] = useState<PokemonData[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1118")
      .then((response) => {
        console.log("Fetched Pokemons:", response);
        setAllPokemons(response.data.results);
      });
  }, []);

  const searchPokemon = () => {
    const filteredPokemons = allPokemons.filter((pokemon) =>
      pokemon.name.startsWith(searchValue.toLowerCase()),
    );
    console.log("Filtered Pokemons:", filteredPokemons);
    setPokemon(filteredPokemons);
  };

  return (
    <button onClick={searchPokemon} type="submit">
      Search Pokemon
    </button>
  );
}

export default Search;
