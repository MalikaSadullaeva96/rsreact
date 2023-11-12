import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../state/PokemonContext";
import "./DisplayPokemon.css";

function DisplayPokemon() {
  const context = useContext(PokemonContext);
  if (!context) return null;

  const { pokemon, allPokemons } = context;

  console.log("------->", pokemon);
  return (
    <div className="DisplaySelection">
      {pokemon ? (
        <div>
          {pokemon.map(
            (
              value: {
                name:
                  | string
                  | number
                  | boolean
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              idx: number,
            ) => (
              <div key={idx}>
                <h3>
                  <Link to={`/pokemon/${value.name}`}>{value.name}</Link>
                </h3>
              </div>
            ),
          )}
        </div>
      ) : (
        <>
          <h1>All Pokémon</h1>
          <div className="allPokemons">
            {allPokemons.map((poke, index) => (
              <div key={index}>
                <h3>{poke.name}</h3>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default DisplayPokemon;
