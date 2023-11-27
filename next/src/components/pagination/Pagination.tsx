import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAllPokemons, setItemsPerPage } from "../../features/pokemonSlice";
import { useGetPokemonsQuery } from "../../services/pokemonApi";
import DisplayPokemon from "../display/DisplayPokemon";

function Pagination() {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const { data: pokemons, isFetching } = useGetPokemonsQuery({ limit, offset });

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
    const newLimit = Number(event.target.value);
    setLimit(newLimit);
    dispatch(setItemsPerPage(newLimit));
    setOffset(0);
  };

  if (isFetching) return <div>Loading...</div>;

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
        <button onClick={goToPrevPage} disabled={offset === 0} type="button">
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
