import React, { useState, useEffect } from "react";
import "./Search.css";
import axios from "axios";
import { PokemonData } from "../type";

interface SearchProps {
  pokemonName: string;
  onPokemonSearch: (pokemons: PokemonData[] | null) => void;
}

function Search({ pokemonName, onPokemonSearch }: SearchProps) {
  const [allPokemons, setAllPokemons] = useState<PokemonData[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1118")
      .then((response) => {
        console.log("-------->", response);
        setAllPokemons(response.data.results);
      });
  }, []);

  const searchPokemon = () => {
    const filteredPokemons = allPokemons.filter((pokemon) =>
      pokemon.name.startsWith(pokemonName.toLowerCase()),
    );
    console.log("filtered", filteredPokemons);
    onPokemonSearch(filteredPokemons);
  };

  return (
    <button onClick={searchPokemon} type="submit">
      Search Pokemon
    </button>
  );
}

export default Search;
