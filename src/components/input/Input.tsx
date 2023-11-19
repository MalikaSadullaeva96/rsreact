import React from "react";
import { useDispatch } from "react-redux";
import Search from "../seacrh/Search";
import "./Input.css";
import { setSearchValue } from "../../features/pokemonSlice";

function Input() {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        onChange={(event) => dispatch(setSearchValue(event.target.value))}
      />
      <Search />
    </>
  );
}

export default Input;
