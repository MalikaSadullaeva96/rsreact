import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayPokemon from "../display/DisplayPokemon";
import { PokemonData } from "../type";
import "./Pagination.css";

interface PaginationProps {
  pokemon: PokemonData[] | null;
}

function Pagination({ pokemon }: PaginationProps) {
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon",
  );
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [allPokemons, setAllPokemons] = useState<PokemonData[]>([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const url = `${currentPageUrl}?limit=${limit}`;
    axios.get(url).then((response) => {
      setNextPageUrl(response.data.next);
      setPrevPageUrl(response.data.previous);
      const fetchedPokemons = response.data.results.map(
        (p: { name: string; url: string }) => ({
          name: p.name,
        }),
      );
      setAllPokemons(fetchedPokemons);
    });
  }, [currentPageUrl, limit]);

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(Number(event.target.value));
  };

  return (
    <>
      <div>
        <label htmlFor="limit">Pokémon per page:</label>
        <input
          type="number"
          id="limit"
          value={limit}
          onChange={handleLimitChange}
          min="1"
          max="100"
        />
      </div>
      <DisplayPokemon pokemon={pokemon} allPokemons={allPokemons} />
      <div className="pagination">
        {prevPageUrl && (
          <button onClick={goToPrevPage} type="button">
            Previous
          </button>
        )}
        {nextPageUrl && (
          <button onClick={goToNextPage} type="button">
            Next
          </button>
        )}
      </div>
    </>
  );
}

export default Pagination;
