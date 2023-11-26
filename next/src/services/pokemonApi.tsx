// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" });

export async function getStaticProps() {
  // Here we directly call the baseQuery with the endpoint we need.
  const { data } = await baseQuery('pokemon?limit=151'); // Fetch first 151 Pokemons for example
  return {
    props: {
      allPokemons: data.results || [],
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
