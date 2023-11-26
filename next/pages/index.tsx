// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import { getPokemonByName } from '../src/services/pokemonApi'; // Adjust the import based on your actual API utility functions

export async function getStaticProps() {
  const allPokemons = await getPokemonByName();
  return {
    props: {
      allPokemons,
    },
  };
}

const HomePage = ({ allPokemons }) => {
  return (
    <div>
      <h1>All Pokémon</h1>
      <div className="allPokemons">
        {allPokemons.map((pokemon, index) => (
          <div key={index}>
            <h3>
              <Link href={`/pokemon/${pokemon.name}`}>
                <a>{pokemon.name}</a>
              </Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
