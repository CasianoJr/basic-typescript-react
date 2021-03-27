import React from "react";
import { useSelector } from "react-redux";

export const Cart: React.FC = () => {
    const state = useSelector(state=>state)
  return (
    <>
      <h3>Cart</h3>
    </>
  );
};
