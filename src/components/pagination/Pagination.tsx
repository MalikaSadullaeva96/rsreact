import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAllPokemons } from "../../features/pokemonSlice";
import { useGetPokemonsQuery } from "../../services/pokemonApi";
import DisplayPokemon from "../display/DisplayPokemon";
import "./Pagination.css";

function Pagination() {
  const dispatch = useDispatch();

  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const { data: pokemons } = useGetPokemonsQuery({ limit, offset });

  useEffect(() => {
    if (pokemons?.results) {
      dispatch(setAllPokemons(pokemons.results));
    }
  }, [pokemons, dispatch]);

  const goToNextPage = () => {
    setOffset(offset + limit);
  };

  const goToPrevPage = () => {
    setOffset(Math.max(0, offset - limit));
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(Number(event.target.value));
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
      {console.log("oaoaoaoao")}
      <div className="pagination">
        <button onClick={goToPrevPage} type="button">
          Previous
        </button>
        <button onClick={goToNextPage} type="button">
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
