import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "../../store/store";


function DisplayPokemon() {
  const { pokemon, allPokemons } = useSelector(
    (state: RootState) => state.pokemon,
  );

  return (
    <div className="DisplaySelection">
      {pokemon ? (
        <div>
          {pokemon.map((value, idx) => (
            <div key={idx} data-testid="pokemon-item">
              <h3>
                <Link href={`/pokemon/${value.name}`}>
                {value.name}
                </Link>
              </h3>
            </div>
          ))}
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
