import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import { PokemonData } from "../type";

interface SearchProps {
  pokemonName: string;
  onPokemonSearch: (pokemon: PokemonData | null) => void;
}

function Search({ pokemonName, onPokemonSearch }: SearchProps) {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        const newPokemon: PokemonData = {
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        };
        setPokemon(newPokemon);
        onPokemonSearch(newPokemon);
        console.log(pokemon);
      });
  };

  return (
    <button onClick={searchPokemon} type="submit">
      Search Pokemon
    </button>
  );
}

export default Search;
