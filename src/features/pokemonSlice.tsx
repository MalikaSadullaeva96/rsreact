import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemon: null,
  searchValue: "",
  allPokemons: [],
  itemsPerPage: 10,
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
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { setPokemon, setSearchValue, setAllPokemons, setItemsPerPage } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
