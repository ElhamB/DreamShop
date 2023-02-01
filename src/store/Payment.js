import { v4 as uuidv4 } from "uuid";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

//action types
const ADD_SHIPPING_INFO = "ADD_SHIPPING_INFO";
const ADD_CARD_INFO = "ADD_CARD_INFO";

//action creators
export const addShippingInfo = ({ firstName , lastName , address, city, region, zip }) => async (dispatch) => {
  dispatch({
    type: ADD_SHIPPING_INFO,
    shippingInfo: {
      id: uuidv4(),
      firstName,
      lastName,
      address,
      city,
      region,
      zip
    },
  });
};

export const addCardInfo = ({ cardHolder, cardNumber, expiryDate , CVV }) => async (dispatch) => {
  dispatch({
    type: ADD_CARD_INFO,
    cardInfo: {
      id: uuidv4(),
      cardHolder,
      cardNumber,
      expiryDate,
      CVV
    },
  });
};

//reducers
export const paymentFormReducer = (state = { shippingInfo: {}, cardInfo: {} }, action) => {
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
