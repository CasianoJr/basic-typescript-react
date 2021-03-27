import React from "react";
import { useSelector } from "react-redux";
import './cart.scss'

interface SelectorProps {
  userCart: {
    cart: CartProduct[],
    bank: number
  }
}

export const Cart: React.FC = () => {
    const {cart} = useSelector<SelectorProps, SelectorProps["userCart"]>(state=>state.userCart)
    const cartTotal = cart.reduce((total, item)=> (item.count * item.price) + total, 0 )
  
  
    return (
    <div className="product-cart">
      {cart.map(product => 
      <div key={`${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        <p>Count: {product.count}</p>
        <p>Sub Total: {product.count * product.price}</p>
      </div>
    )}
    <div className="cart-total">Total: {cartTotal}</div>
    </div>
  );
};
