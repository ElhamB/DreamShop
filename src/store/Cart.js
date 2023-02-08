import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
//action types
const ADD_CART_ITEM = "ADD_CART_ITEM";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
const CLEAR_CART = "CLEAR_CART";

//action creators
export const addToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/products/${id}`);
    dispatch({
        type: ADD_CART_ITEM,
        payload: {
            id: data.id,
            title: data.title,
            price: data.price,
            image1: data.image1,
        },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: id,
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const clearCart = () => async (dispatch) => {
    dispatch({ type: CLEAR_CART });
  };
//reducers
export default function CartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case ADD_CART_ITEM:
            const newItem = action.payload
            const existingItem = state.cartItems.find((item) => item.id === newItem.id)
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === existingItem.id ? { ...item, qty: item.qty + 1} : item)
                }
            }
            else {
                return {
                    ...state,                  
                    cartItems: [...state.cartItems, { ...newItem, qty: 1}]
                }
            }
       
        case REMOVE_CART_ITEM:
            const foundItem = state.cartItems.find(({ id }) => id === action.payload);
            if (foundItem?.qty > 1) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload
                            ? {
                                ...item,
                                qty: item.qty !== 1 ? item.qty - 1 : 1,
                            }
                            : item,
                    ),
                }
            } else {
              return {
                ...state,
                cartItems:state.cartItems.filter(({ id }) => id !== action.payload)
              }
            }
     case CLEAR_CART:
        return{...state,cartItems:null}
        default:
            return state
    }

}

