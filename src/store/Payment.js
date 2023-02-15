import axios from "axios";
import { showNotification } from "./UI";
axios.defaults.baseURL = "http://localhost:8000";

//action types
const ADD_SHIPPING_INFO = "ADD_SHIPPING_INFO";
const ADD_CARD_INFO = "ADD_CARD_INFO";
const FETCH_SHIPPING_INFO="FETCH_SHIPPING_INFO";

//action creators
export const addShippingInfo =
  ({ shippingInfo,userId }) =>
  async (dispatch) => {
    axios
      .post("/address", {
        shippingInfo,
        userId
      })
      .then((response) => {
        dispatch({ type: ADD_SHIPPING_INFO, shippingInfo: response.data });
      })
      .catch(console.log);
  };
export const fetchShippingInfo=(userId)=>async(dispatch)=>{
  try{
    const { data } = await axios.get(`/address?userId=${userId}`);
    dispatch({type:FETCH_SHIPPING_INFO,shippingInfo:data});
  }
  catch (error) {
    console.log(error);
    dispatch(
      showNotification({
        title: "Loading orders Failed!",
        status: "error",
        message: "Unfortunately, an error occurred. Please reload the page.",
      })
    );
  }
}
export const addCardInfo =
  ({ cardInfo,userId }) =>
  async (dispatch) => {
    axios
      .post("/card", {
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
        shippingInfo: action.shippingInfo
      };
    case ADD_CARD_INFO:
      return { ...state, cardInfo: action.cardInfo };
 case FETCH_SHIPPING_INFO:
  return{...state, shippingInfo: action.shippingInfo}
    default:
      return state;
  }
};
