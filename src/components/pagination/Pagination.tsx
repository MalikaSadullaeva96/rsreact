import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DisplayPokemon from "../display/DisplayPokemon";
import { PokemonContext } from "../state/PokemonContext";
import "./Pagination.css";

function Pagination() {
  const context = useContext(PokemonContext);
  if (!context) return null;

  const { setAllPokemons } = context;

  const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  const [currentPageUrl, setCurrentPageUrl] = useState(baseUrl);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const url = `${baseUrl}?limit=${limit}&offset=${offset}`;
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
  }, [currentPageUrl, limit, offset]);

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
    setOffset(offset + limit);
  };

  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
    setOffset(Math.max(0, offset - limit));
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = Number(event.target.value);
    const newOffset = Math.floor(offset / limit) * limit + (offset % limit);
    setLimit(newLimit);
    setOffset(newOffset);
    setCurrentPageUrl(`${baseUrl}?limit=${newLimit}&offset=${newOffset}`);
  };

  return (
    <>
      <div>
        <label htmlFor="limit">Pokemon per page:</label>
        <input
          type="number"
          id="limit"
          value={limit}
          onChange={handleLimitChange}
          min="1"
          max="100"
        />
      </div>
      <DisplayPokemon />
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
