import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/actions/addProductToCart";

type Props = {
  product: Product;
};

export const ItemProduct: React.FC<Props> = ({ product: productItem }) => {
  const dispatch = useDispatch()

  class ProductInit{
    constructor(public item: Product){
    }
    addToCart(){
      dispatch(addProductToCart(this.item))
    }
  }
  const instance = new ProductInit(productItem)
  const product = instance.item
  return (
    <div className="product-item">
      <div>
        <img src={product.image} height="100" alt={product.title} />
        <p>{product.title}</p>
        <p>{product.price}</p>
        <button onClick={()=>instance.addToCart()}>Add to Cart</button>
      </div>
    </div>
  );
};
