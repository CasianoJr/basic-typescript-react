import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import './detail.scss'

interface ParamsId {
  id: string;
}
interface SelectorProps {
  productList: Product[];
}

export const Detail: React.FC = (props) => {
  const { id }: ParamsId = useParams();
  const productId = parseInt(id);
  const productList = useSelector<SelectorProps, SelectorProps["productList"]>(
    (state) => state.productList
  );
  const selectedProduct = productList.find((item) => item.id === productId);
  const [product, setProduct] = useState(selectedProduct);

  useEffect(() => {
    if (!product) {
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err));
    }
  }, [product, productId]);

  if (!product) return <div>Loading</div>;

  return (
    <>
      <div className="product-detail">
        <div>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};
