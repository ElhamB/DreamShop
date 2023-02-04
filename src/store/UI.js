//action types
const TOGGLE_CART = "TOGGLE_CART";
const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
//action creators
export const CartToggleAction = () => (dispatch) => {
  dispatch({ type: TOGGLE_CART });
};
export const showNotification =
  ({ status, title, message }) =>
  async (dispatch) => {
    dispatch({
      type: SHOW_NOTIFICATION,
      notification: {
        title,
        status,
        message,
      },
    });
  };
//reducers
export default function UIReducer(
  state = { cartIsVisible: false, notification: {} },
  action
) {
  switch (action.type) {
    case TOGGLE_CART:
      return { cartIsVisible: !state.cartIsVisible };
    case SHOW_NOTIFICATION:
      return { notification: action.notification };

    default:
      return state;
  }
}
