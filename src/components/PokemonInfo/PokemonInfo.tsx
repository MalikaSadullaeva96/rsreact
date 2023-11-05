import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Pokemons.css";

function PokemonInfo() {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      const newPokemonDetails = {
        name: response.data.name,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,
      };
      setPokemonDetails(newPokemonDetails);
    });
  }, [name]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }
  console.log("INFO", pokemonDetails);
  return (
    <div className="pokemonInfo">
      {pokemonDetails && (
        <div>
          <h1>{pokemonDetails.name}</h1>
          <img
            src={pokemonDetails.img}
            alt={`Sprite of ${pokemonDetails.name}`}
          />
          <h3>Species: {pokemonDetails.species}</h3>
          <h3>Type: {pokemonDetails.type}</h3>
          <h4>HP: {pokemonDetails.hp}</h4>
          <h4>Attack: {pokemonDetails.attack}</h4>
          <h4>Defense: {pokemonDetails.defense}</h4>
        </div>
      )}
    </div>
  );
}

export default PokemonInfo;
