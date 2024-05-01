import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h1>My Website</h1>
      <div>
        <Link to="/register" className="login-btn">
          Add User
        </Link>
      </div>
    </header>
  );
};

export default Header;
