import { combineReducers } from "redux";
import { productListReducer } from "./reducer/productReducer";
import { userCartReducer } from "./reducer/userCartReducer";

export const allReducers = combineReducers({
    productList: productListReducer,
    userCart: userCartReducer
})