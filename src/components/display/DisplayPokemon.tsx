import React from "react";
import { PokemonData } from "../type";
import "./DisplayPokemon.css";

interface DisplayPokemonProps {
  pokemon: PokemonData | null;
}

function DisplayPokemon({ pokemon }: DisplayPokemonProps) {
  if (pokemon) {
    console.log("---->", pokemon.attack);
  }

  return (
    <div className="DisplaySelection">
      {pokemon ? (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.img} alt={`Sprite of ${pokemon.name}`} />
          <h3>Species: {pokemon.species}</h3>
          <h3>Type: {pokemon.type}</h3>
          <h4>HP: {pokemon.hp}</h4>
          <h4>Attack: {pokemon.attack}</h4>
          <h4>Defense: {pokemon.defense}</h4>
        </div>
      ) : (
        <h1>No Pokemon selected</h1>
      )}
    </div>
  );
}

export default DisplayPokemon;
