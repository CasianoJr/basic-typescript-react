import { combineReducers } from "redux";
import { productListReducer } from "./reducer/productReducer";

export const allReducers = combineReducers({
    productList: productListReducer
})