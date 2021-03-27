import React from "react";
import { useSelector } from "react-redux";

interface SelectorProps {
  userCart: {
    cart: CartProduct[],
    bank: number
  }
}

export const Cart: React.FC = () => {
    const {cart} = useSelector<SelectorProps, SelectorProps["userCart"]>(state=>state.userCart)
  return (
    <>
      <h3>Cart</h3>
      {cart.map(product => 
      <div key={`${product.id}`}>
        <img src={product.image} height="100" alt={product.title} />
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
    )}
    </>
  );
};
