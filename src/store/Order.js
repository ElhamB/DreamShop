import axios from "axios";
import { showNotification } from "./UI";
import { clearCart } from "./Cart";
axios.defaults.baseURL = "http://localhost:8000";
//action types
const CREATE_ORDER = "CREATE_ORDER";
const FETCH_ORDER = "FETCH_ORDER";
const CLEAR_ORDER = "CLEAR_ORDER";
const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";
const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";

//action creators
export const createOrder =
  ({ addressId, cardId, cartItems, totalQuantity, userId }) =>
  async (dispatch, getState) => {
    try {
      axios
        .post("/orders", {
          addressId,
          cardId,
          cartItems,
          totalQuantity,
          userId,
          date: new Date().toLocaleString(),
        })
        .then((response) => {
          dispatch({ type: CREATE_ORDER, order: response });
          dispatch(clearCart());
          localStorage.removeItem(
            "cartItems",
            JSON.stringify(getState().cart.cartItems)
          );
          dispatch(
            showNotification({
              title: "Order confirmed!",
              status: "success",
              message: "Your order has been placed successfully.",
            })
          );
        });
    } catch (error) {
      console.log(error);
      dispatch(
        showNotification({
          title: "Order Failed!",
          status: "error",
          message: "Unfortunately, an error occurred. Please try again",
        })
      );
    }
  };
export const clearOrder = () => async (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};
export const fetchOrder = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/orders?userId=${userId}`);
    dispatch({ type: FETCH_ORDER, orders: data });
  } catch (error) {
    console.log(error);
    dispatch(
      showNotification({
        title: "Loading orders Failed!",
        status: "error",
        message: "Unfortunately, an error occurred. Please reload the page.",
      })
    );
  }
};

export const orderDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const { data } = await axios.get(`/orders/${id}`);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch(
      showNotification({
        title: "Loading orders Failed!",
        status: "error",
        message: "Unfortunately, an error occurred. Please reload the page.",
      })
    );
  }
};
//reducers
export const orderReducer = (state = { orders: [], order: {} }, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, orders: [...state.orders, action.order] };
    case FETCH_ORDER:
      return { ...state, orders: action.orders };
      case ORDER_DETAILS_REQUEST:
        return { loading: true, ...state};
      case ORDER_DETAILS_SUCCESS:
        return { loading: false, order: action.payload };
    case CLEAR_ORDER:
      return { ...state, order: null };
    default:
      return state;
  }
};
