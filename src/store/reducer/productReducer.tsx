import { actionTypes } from "../constants";

interface Actions {
    type: string,
    payload: Product[],
}

export const productListReducer = (state :ListProduct= [], action : Actions) =>{
    switch(action.type){
        case actionTypes.SET_PRODUCT_LIST:
            return action.payload
        default:
            return state
    }


}