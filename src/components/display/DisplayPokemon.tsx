import React from "react";
import { PokemonData } from "../type";
import "./DisplayPokemon.css"

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
          <p>Species: {pokemon.species}</p>
          <p>HP: {pokemon.hp}</p>
          <p>Attack: {pokemon.attack}</p>
          <p>Defense: {pokemon.defense}</p>
          <p>Type: {pokemon.type}</p>
        </div>
      ) : (
        <h1>No Pokemon selected</h1>
      )}
    </div>
  );
}

export default DisplayPokemon;
