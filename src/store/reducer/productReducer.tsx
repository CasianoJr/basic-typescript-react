import { actionTypes } from "../constants";

interface Actions {
    type: string,
    payload: Product[],
}

export const productListReducer = (state= [], action : Actions) =>{
    switch(action.type){
        case actionTypes.SET_PRODUCT_LIST:
            return [...state, ...action.payload]
        default:
            return state
    }


}