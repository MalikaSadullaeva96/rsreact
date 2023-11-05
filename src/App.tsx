import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from "./components/input/Input";
import { PokemonData } from "./components/type";
import Pagination from "./components/pagination/Pagination";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";

function App() {
  const [pokemon, setPokemon] = useState<PokemonData[] | null>(null);

  const handlePokemonSearch = (pokemonData: PokemonData[] | null) => {
    if (pokemonData) {
      setPokemon(pokemonData);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div className="TitleSection">
                <div>Pokemon Stats</div>
                <Input onPokemonSearch={handlePokemonSearch} />
              </div>
              <Pagination pokemon={pokemon} />
            </div>
          }
        />
        <Route path="/pokemon/:name" element={<PokemonInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
