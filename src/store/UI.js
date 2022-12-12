//action types
const TOGGLE_CART = "TOGGLE_CART";

//action creators
export const CartToggleAction = () => (dispatch) => {
    dispatch({ type: TOGGLE_CART });
};

//reducers
export default function UIReducer(state = { cartIsVisible: false }, action) {
    switch (action.type) {
        case TOGGLE_CART:
            return { cartIsVisible: !state.cartIsVisible };
        default:
            return state;
    }
};
