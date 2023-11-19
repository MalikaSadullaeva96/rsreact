import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemon } from "../../features/pokemonSlice";
import { RootState } from "../../store/store";
import { PokemonData } from "../type";

function Search() {
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.pokemon.searchValue,
  );
  const allPokemons = useSelector(
    (state: RootState) => state.pokemon.allPokemons,
  );

  const searchPokemon = () => {
    const filteredPokemons = allPokemons.filter((pokemon: PokemonData) =>
      pokemon.name.startsWith(searchValue.toLowerCase()),
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
