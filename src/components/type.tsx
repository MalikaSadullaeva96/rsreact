export type PokemonData = {
  name: string;
  species: string;
  img: string;
  hp: number;
  attack: number;
  defense: number;
  type: string;
};

export interface PokemonState {
  pokemon: PokemonData[] | null;
  searchValue: string;
  allPokemons: PokemonData[];
}

export interface DisplayPokemonProps {
  pokemons: PokemonData[];
}
