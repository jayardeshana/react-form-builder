import React, { useState } from "react";
import "../css/Header.css";

const Header = ({ searchString, setSearchString, onAddClick }) => {
  const handleOnChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <header>
      <h1>Book store</h1>

      <div className="item-container">
        <input
          placeholder="Search title..."
          className="input-button"
          value={searchString}
          onChange={handleOnChange}
        />
        <button className="input-button" onClick={onAddClick}>
          Add
        </button>
      </div>
    </header>
  );
};

export default Header;
