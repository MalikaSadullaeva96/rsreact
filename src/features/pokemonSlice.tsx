import { createSlice } from "@reduxjs/toolkit";
import { PokemonState } from "../components/type";

const initialState: PokemonState = {
  pokemon: null,
  searchValue: "",
  allPokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setAllPokemons: (state, action) => {
      state.allPokemons = action.payload;
    },
  },
});

export const { setPokemon, setSearchValue, setAllPokemons } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
