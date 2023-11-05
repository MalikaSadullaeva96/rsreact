import React, { useState } from "react";
import "./App.css";
import Input from "./components/input/Input";
import { PokemonData } from "./components/type";
import DisplayPokemon from "./components/display/DisplayPokemon";

function App() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  const handlePokemonSearch = (pokemonData: PokemonData | null) => {
    if (pokemonData) {
      setPokemon(pokemonData);
      console.log("in app", pokemon);
    }
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <div>Pokemon Stats</div>
        <Input onPokemonSearch={handlePokemonSearch} />
      </div>
      <DisplayPokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
