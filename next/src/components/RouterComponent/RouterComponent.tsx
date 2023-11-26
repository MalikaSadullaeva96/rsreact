import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from "../input/Input";
import Pagination from "../pagination/Pagination";
import PokemonInfo from "../PokemonInfo/PokemonInfo";
import { NotFoundPage } from "../notfound/NotFoundPage";

function RouterComponent() {
  return (
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default RouterComponent;
