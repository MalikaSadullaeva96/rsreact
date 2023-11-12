import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from "./components/input/Input";
import Pagination from "./components/pagination/Pagination";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import { PokemonProvider } from "./components/state/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <div className="TitleSection">
                  <div>Pokemon Stats</div>
                  <Input />
                </div>
                <Pagination />
              </div>
            }
          />
          <Route path="/pokemon/:name" element={<PokemonInfo />} />
        </Routes>
      </Router>
    </PokemonProvider>
  );
}

export default App;
