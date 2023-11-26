import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../features/pokemonSlice";
import Search from "../seacrh/Search";

function Input() {
  const dispatch = useDispatch();
  const [localSearchValue, setLocalSearchValue] = useState("");

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLocalSearchValue(event.target.value);
    dispatch(setSearchValue(event.target.value));
  };

  return (
    <>
      <input
        type="text"
        value={localSearchValue}
        onChange={handleSearchChange}
      />
      <Search searchValue={localSearchValue} />
    </>
  );
}

export default Input;
