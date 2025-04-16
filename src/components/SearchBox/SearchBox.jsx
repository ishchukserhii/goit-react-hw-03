import React from "react";
import css from "./SearchBox.module.css";
const SearchBox = ({ inputValue, changeInput }) => {
  return (
    <div className={css.box}>
      <label>Find contacts by name</label>
      <input type="text" value={inputValue} onChange={changeInput} />
    </div>
  );
};

export default SearchBox;
