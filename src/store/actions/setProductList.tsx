import { actionTypes } from "../constants";

export const setProductList = (payload: ListProduct) => {
  return { type: actionTypes.SET_PRODUCT_LIST, payload: payload };
};
