import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Input from "./components/input/Input";
import { PokemonData } from "./components/type";
import DisplayPokemon from "./components/display/DisplayPokemon";

function App() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [allPokemons, setAllPokemons] = useState<PokemonData[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        const fetchedPokemons = response.data.results.map(
          (p: { name: string; url: string }) => {
            return {
              name: p.name,
            };
          },
        );
        setAllPokemons(fetchedPokemons);
      });
  }, []);

  const handlePokemonSearch = (pokemonData: PokemonData | null) => {
    if (pokemonData) {
      setPokemon(pokemonData);
    }
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <div>Pokemon Stats</div>
        <Input onPokemonSearch={handlePokemonSearch} />
      </div>
      <DisplayPokemon pokemon={pokemon} allPokemons={allPokemons} />
    </div>
  );
}

export default App;
