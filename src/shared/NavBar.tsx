import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './navbar.scss'

interface SelectorProps {
  userCart: {
    cart: CartProduct[],
    bank: number
  }
}

export const NavBar: React.FC = () => {
  const {cart} = useSelector<SelectorProps, SelectorProps["userCart"]>(state=>state.userCart)
  const numberInCart = cart.reduce((total, item) => item.count + total,0 )
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
          <Link to="/about">Others</Link>
        </li>
        <li>
          <Link to="/cart">Cart <small className="cart-badge">{numberInCart}</small></Link>
        </li>
      </ul>
    </nav>
  );
};
