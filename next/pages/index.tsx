// pages/index.tsx
import React from 'react';
import Input from '@/components/input/Input';
import Pagination from '@/components/pagination/Pagination';

export async function getStaticProps() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await res.json();

    return {
      props: {
        allPokemons: data.results || [],
      },
    };
  } catch (error) {
    console.error('Failed to fetch Pokemon data:', error);
    return {
      props: {
        allPokemons: [],
      },
    };
  }
}

const HomePage = ({ allPokemons }) => {
  return (
    <div>
      <h1>All Pokémon</h1>
      <Input />
      <Pagination />
    </div>
  );
};

export default HomePage;
