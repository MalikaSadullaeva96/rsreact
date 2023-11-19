import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemon } from "../../features/pokemonSlice";
import { RootState } from "../../store/store";
import { PokemonData, SearchProps } from "../type";

function Search({ searchValue }: SearchProps) {
  const dispatch = useDispatch();
  const allPokemons = useSelector(
    (state: RootState) => state.pokemon.allPokemons,
  );

  const searchPokemon = () => {
    const filteredPokemons = allPokemons.filter((pokemon: PokemonData) =>
      pokemon.name.toLowerCase().startsWith(searchValue.toLowerCase()),
    );
    dispatch(setPokemon(filteredPokemons));
  };

  return (
    <button onClick={searchPokemon} type="submit">
      Search Pokemon
    </button>
  );
}

export default Search;
