import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../services/pokemonApi";
import "./Pokemons.css";

function PokemonInfo() {
  const { name } = useParams();
  const navigate = useNavigate();

  const { data: pokemonDetails, isFetching } = useGetPokemonByNameQuery(name);

  if (isFetching || !pokemonDetails) {
    return <div>Loading...</div>;
  }

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="pokemonInfo">
      <div>
        <h1>{pokemonDetails.name}</h1>
        <img
          src={pokemonDetails.sprites.front_default}
          alt={`Sprite of ${pokemonDetails.name}`}
        />
        <h3>Species: {pokemonDetails.species.name}</h3>
        <h3>Type: {pokemonDetails.types[0].type.name}</h3>
        <h4>HP: {pokemonDetails.stats[0].base_stat}</h4>
        <h4>Attack: {pokemonDetails.stats[1].base_stat}</h4>
        <h4>Defense: {pokemonDetails.stats[2].base_stat}</h4>
      </div>
      <div>
        <button onClick={handleClose} type="submit" className="closeInfo">
          Close
        </button>
      </div>
    </div>
  );
}

export default PokemonInfo;
