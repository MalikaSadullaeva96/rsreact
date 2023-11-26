import React from 'react';
import { useRouter } from 'next/router';
import { useGetPokemonByNameQuery } from '../../src/services/pokemonApi';

const PokemonInfo = () => {
  const router = useRouter();
  const { name } = router.query;

  const { data: pokemonDetails, isFetching } = useGetPokemonByNameQuery(name);

  if (isFetching || !pokemonDetails) {
    return <div>Loading...</div>;
  }

  const handleClose = () => {
    router.push("/");
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
        <button onClick={handleClose} type="button" className="closeInfo">
          Close
        </button>
      </div>
    </div>
  );
};

export default PokemonInfo;
