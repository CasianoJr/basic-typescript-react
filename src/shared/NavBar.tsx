import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Others</Link>
        </li>
      </ul>
    </nav>
  );
};