import { actionTypes } from "../constants";

export const removeProductFromCart =(product: Product)=>{
    return {type: actionTypes.REMOVE_FROM_CART, payload: product}
}