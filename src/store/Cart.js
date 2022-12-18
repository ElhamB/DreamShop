import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
//action types
const CART_ADD_ITEM = "CART_ADD_ITEM";
const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
//action creators
export const addToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/products/${id}`);
    dispatch({
        type: CART_ADD_ITEM,
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
        type: CART_REMOVE_ITEM,
        payload: id,
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const increaseQuantity = (id) => (dispatch, getState) => {
    dispatch({
        type: INCREASE_QUANTITY,
        payload: id
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}
export const decreaseQuantity = (id) => (dispatch, getState) => {
    dispatch({
        type: DECREASE_QUANTITY,
        payload: id
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

//reducers
export default function CartReducer(state = { cartItems: [], totalQuantity: 0 }, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const newItem = action.payload
            const existingItem = state.cartItems.find((item) => item.id === newItem.id)
            if (existingItem) {
                return {
                    ...state,
                    // totalQuantity: state.totalQuantity + 1,
                    cartItems: state.cartItems.map((item) => item.id === existingItem.id ? { ...item, qty: item.qty + 1} : item)
                }
            }
            else {
                return {
                    ...state,
                    // totalQuantity: state.totalQuantity + 1,
                  
                    cartItems: [...state.cartItems, { ...newItem, qty: 1}]
                }
            }
        case CART_REMOVE_ITEM:
            const quantity = state.cartItems[action.payload].qty
            return {
                ...state,
                // totalQuantity: state.totalQuantity - quantity,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload)
            }

        case INCREASE_QUANTITY:
            // state.totalQuantity = state.totalQuantity + 1;
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload
                        ? { ...item, qty: item.qty + 1 }
                        : item,
                ),
            }
        case DECREASE_QUANTITY:
            // state.totalQuantity = state.totalQuantity - 1;
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
            };
        default:
            return state
    }

}

