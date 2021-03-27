import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../../store/actions/setProductList";
import { ItemProduct } from "./ItemProduct";
import axios from "axios";
import './home.scss'

interface SelectorProducts{
  productList: ListProduct
}

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const productList = useSelector<SelectorProducts, SelectorProducts["productList"]>((state) => state.productList);

  useEffect(() => {
    if (productList.length < 2){
      axios.get(`https://fakestoreapi.com/products`)
      .then(res=> dispatch(setProductList(res.data)))
      .catch(err=> console.log(err))
    }
  }, [dispatch, productList]);

  return (
    <div>
      <div className="product-list">
      {productList.map((product) => (
        <ItemProduct key={`${product.id}`} product={product} />
        ))}
        </div>
    </div>
  );
};
