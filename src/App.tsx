import React, { useState } from "react";
import "./App.css";
import Input from "./components/input/Input";
import { PokemonData } from "./components/type";
import Pagination from "./components/pagination/Pagination";

function App() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

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
      <Pagination pokemon={pokemon} />
    </div>
  );
}

export default App;
