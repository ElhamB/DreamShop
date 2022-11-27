export const UIReducer = (state = { cartIsVisible: false }, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return { cartIsVisible: !state.cartIsVisible };
    default:
      return state;
  }
};
