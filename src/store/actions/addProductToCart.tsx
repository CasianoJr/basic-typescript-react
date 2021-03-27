import { actionTypes } from "../constants"

export const addProductToCart = (product: Product) =>{
    return {type: actionTypes.ADD_TO_CART, payload: product }
}