import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../../store/actions/setProductList";
import { ItemProduct } from "./ItemProduct";
import axios from "axios";

interface SelectorProducts{
  productList: ListProduct
}

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const productList = useSelector<SelectorProducts, SelectorProducts["productList"]>((state) => state.productList);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
    .then(res=> dispatch(setProductList(res.data)))
    .catch(err=> console.log(err))
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     dispatch(setProductList(json));
    //   });
  }, [dispatch]);

  return (
    <div>
      <h3>Home</h3>
      {productList.map((product) => (
        <ItemProduct key={`${product.id}`} product={product} />
      ))}
    </div>
  );
};
