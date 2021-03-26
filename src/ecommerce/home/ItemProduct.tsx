import React from "react";

type Props = {
  product: Product;
};

export const ItemProduct: React.FC<Props> = ({ product }) => {
  return (
    <div style={{ border: "1px solid blue" }}>
      <img src={product.image} height="100" alt={product.title}/>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
};
