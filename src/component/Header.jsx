import React, { useState } from "react";
import "../css/Header.css";

const Header = ({ onAddClick }) => {
  const [searchString, setSearchString] = useState("");

  const handleOnChange = (event) => {
    setSearchString(event.target.value);
  };

  console.log(searchString);

  return (
    <header>
      <h1>Book store</h1>

      <div className="item-container">
        <button className="input-button" onClick={onAddClick}>
          Add
        </button>
      </div>
    </header>
  );
};

export default Header;
