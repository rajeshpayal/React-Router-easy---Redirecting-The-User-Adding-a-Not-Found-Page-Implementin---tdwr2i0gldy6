import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className="index-link">
          <NavLink className="index-link" to="/">
            Index
          </NavLink>
        </li>
        <li className="home-link" to="/hone">
          <NavLink className="home-link" to="/home">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
