import { v4 as uuidv4 } from "uuid";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

//action types
const ADD_SHIPPING_INFO = "ADD_SHIPPING_INFO";
const ADD_CARD_INFO = "ADD_CARD_INFO";

//action creators
export const addShippingInfo =
  ({ shippingInfo,userId }) =>
  async (dispatch) => {
    axios
      .post("/address", {
        id: uuidv4(),
        shippingInfo,
        userId
      })
      .then((response) => {
        dispatch({ type: ADD_SHIPPING_INFO, shippingInfo: response.data });
      })
      .catch(console.log);
  };

export const addCardInfo =
  ({ cardInfo,userId }) =>
  async (dispatch) => {
    axios
      .post("/card", {
        id: uuidv4(),
        cardInfo,
        userId
      })
      .then((response) => {
        dispatch({ type: ADD_CARD_INFO, cardInfo: response });
      })
      .catch(console.log);
  };

//reducer
export const paymentFormReducer = (
  state = { shippingInfo: {}, cardInfo: {} },
  action
) => {
  switch (action.type) {
    case ADD_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.shippingInfo,
      };
    case ADD_CARD_INFO:
      return { ...state, cardInfo: action.cardInfo };

    default:
      return state;
  }
};
