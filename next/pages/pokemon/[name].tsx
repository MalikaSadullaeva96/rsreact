import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGetPokemonsQuery } from '../../src/services/pokemonApi';

const PokemonInfo = () => {
  const router = useRouter();
  const { name } = router.query;
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchPokemon() {
      setIsLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching pokemon:', error);
      }
      setIsLoading(false);
    }

    if (name) {
      fetchPokemon();
    }
  }, [name]);

  if (isLoading) return <div>Loading...</div>;
  if (!pokemon) return <div>No Pokémon data found.</div>;

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="pokemonInfo">
      <div>
        <h1>{pokemon.name}</h1>
        <img
          src={pokemon.sprites.front_default}
          alt={`Sprite of ${pokemon.name}`}
        />
        <h3>Species: {pokemon.species.name}</h3>
        <h3>Type: {pokemon.types[0].type.name}</h3>
        <h4>HP: {pokemon.stats[0].base_stat}</h4>
        <h4>Attack: {pokemon.stats[1].base_stat}</h4>
        <h4>Defense: {pokemon.stats[2].base_stat}</h4>
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
