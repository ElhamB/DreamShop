import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
//action types
const CART_ADD_ITEM = "CART_ADD_ITEM";
const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";

//action creators
export const addToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/products/${id}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.id,
            title: data.name,
            price: data.price,
            image1: data.image,
        },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//reducers
export default function CartReducer (state = { cartItems: [] }, action)  {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existingItem = state.cartItems.find((i) => i.product === item.product)
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) => i.product === existingItem.product ? item : i)
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product !== action.payload)
            }
        default:
            return state
    }

}