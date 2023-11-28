import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemonSlice';
import { pokemonApi } from '../services/pokemonApi';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
