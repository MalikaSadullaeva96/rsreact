import React from "react";
import { PokemonData } from "../type";
import "./DisplayPokemon.css";

interface DisplayPokemonProps {
  pokemon: PokemonData | null;
  allPokemons: PokemonData[];
}

function DisplayPokemon({ pokemon, allPokemons }: DisplayPokemonProps) {
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
