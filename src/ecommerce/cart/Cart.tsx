import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../store/actions/addProductToCart";
import { removeProductFromCart } from "../../store/actions/removeProductFromCart";
import './cart.scss'

interface SelectorProps {
  userCart: {
    cart: CartProduct[],
    bank: number
  }
}

export const Cart: React.FC = () => {
    const {cart} = useSelector<SelectorProps, SelectorProps["userCart"]>(state=>state.userCart)
    const dispatch = useDispatch()
    const cartTotal = cart.reduce((total, item)=> (item.count * item.price) + total, 0 )
    return (
    <div className="product-cart">
      <div>
        <p>&nbsp;</p>
        <h4>Product</h4>
        <p>Price</p>
        <p>Count</p>
        <p>Subtotal</p>
      </div>
      {cart.map(product => 
      <div key={`${product.id}`}>
        <p>
        <img src={product.image} alt={product.title} />
        </p>
        <h4><Link to={`/product/${product.id}/detail`}> {product.title} </Link></h4>
        <p>{product.price}</p>
        <p>
          <button className="product-add" onClick={()=>dispatch(removeProductFromCart(product))}>-</button>
          {product.count}
          <button className="product-add" onClick={()=>dispatch(addProductToCart(product))}>+</button></p>
        <p>{product.count * product.price}</p>
      </div>
    )}
    <div className="cart-total">Total: {parseFloat(`${cartTotal}`).toFixed(2)}</div>
    </div>
  );
};
