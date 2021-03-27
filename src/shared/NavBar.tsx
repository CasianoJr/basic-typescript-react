import React from "react";
import { Link } from "react-router-dom";
import './navbar.scss'

export const NavBar: React.FC = () => {
  return (
    <nav className="main-nav">
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
        <li>
          <Link to="/cart">Cart <small className="cart-badge">3</small></Link>
        </li>
      </ul>
    </nav>
  );
};
