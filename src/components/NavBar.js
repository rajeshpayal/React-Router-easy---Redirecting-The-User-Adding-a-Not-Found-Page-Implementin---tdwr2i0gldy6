import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className="index-link">
          <a href="/">Index</a>
        </li>
        <li className="home-link" to="/hone">
          <a href="/home">Home</a>
        </li>
      </ul>
    </nav>
  );
};
