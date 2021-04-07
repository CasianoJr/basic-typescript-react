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
const sortAscend = (arr: Product[]) => {
  arr.sort((a, b) => b.title.localeCompare(b.title))
}
export const userCartReducer = (state: StateProps =initialValue, action: Actions) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const item = state.cart.find((item)=> item.id === action.payload.id)
      const filtered = state.cart.filter((item)=> item.id !== action.payload.id)
      const newState = item ? { ...state, cart: [...filtered, 
        {...action.payload, count: item.count + 1}  ]
        .sort((a, b)=> a.title.localeCompare(b.title)) }
        : { ...state, cart: [...state.cart, {...action.payload, count: 1}]
        .sort((a, b)=> a.title.localeCompare(b.title)) }
        return newState;
    }
    case actionTypes.REMOVE_FROM_CART: {
      const item = state.cart.find((item)=> item.id === action.payload.id)
      const filtered = state.cart.filter((item)=> item.id !== action.payload.id)
      const newState = item && item.count > 1 ? { ...state, cart: [...filtered, 
        {...action.payload, count: item.count - 1}  ]
        .sort((a, b)=> a.title.localeCompare(b.title)) }
        : { ...state, cart: filtered }
        return newState;
    }
    default:
      return state;
  }
};
