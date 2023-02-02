import { v4 as uuidv4 } from "uuid";
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:8000";

//action types
const CREATE_ORDER = "CREATE_ORDER";
const FETCH_ORDER = "FETCH_ORDER";
const CLEAR_ORDER = "CLEAR_ORDER";
const CLEAR_CART = "CLEAR_CART";

//action creators
export const createOrder =
  ({ shippingInfo, cardInfo, cartItems, totalQuantity }) =>
  async (dispatch) => {
    try {
      axios
        .post("/order", {
          id: uuidv4(),
          shippingInfo,
          cardInfo,
          cartItems,
          totalQuantity,
        })
        .then((response) => {
          dispatch({ type: CREATE_ORDER, order: response });
          localStorage.clear("cartItems");
          dispatch({ type: CLEAR_CART });
        });
    } catch (error) {
      console.log(error);
    }
  };
export const clearOrder = () => async (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};
export const fetchOrder = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/order");
    dispatch({ type: FETCH_ORDER, order: data });
  } catch (error) {
    console.log(error);
  }
};
//reducers
export const orderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, order: action.order };
    case FETCH_ORDER:
      return { order: action.order };
    case CLEAR_ORDER:
      return { order: {} };
    default:
      return state;
  }
};
