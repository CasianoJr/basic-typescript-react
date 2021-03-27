import { actionTypes } from "../constants";

interface StateProps {
  cart: CartProduct[];
  bank: number;
}
interface Actions {
  type: string;
  payload: Product;
}
const initialValue = {
    cart: [],
    bank: 0
}
export const userCartReducer = (state: StateProps =initialValue, action: Actions) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const item = state.cart.find((item)=> item.id === action.payload.id)
      const filtered = state.cart.filter((item)=> item.id !== action.payload.id)
        return item ? { ...state, cart: [...filtered, 
          {...action.payload, count: item.count + 1}  ] }
          : { ...state, cart: [...state.cart, {...action.payload, count: 1}] }
    }
    default:
      return state;
  }
};
