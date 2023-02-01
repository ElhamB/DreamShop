import { v4 as uuidv4 } from "uuid";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

//action types
const MAKE_ORDER="MAKE_ORDER";
//const FETCH_ORDER="FETCH_ORDER";

//action creators
export const makeOrder=({shippingInfo, cardInfo , cartItems,totalQuantity })=>async(dispatch)=>{
    try {
        const { data } = await axios({
            method: 'put',
            url: '/order',
            data: {
                id: uuidv4(),
                shippingInfo,
                cardInfo,
                cartItems,
                totalQuantity
            } 
        });
        dispatch({
            type: MAKE_ORDER,
            order: data
        })
      } catch (error) {
        console.log(error);
      }

}

//reducers
export const makeOrderReducer=(state={order:[]},action)=>{
    switch(action.type){
        case MAKE_ORDER:
        return [ ...state, action.order ]
        default:
            return state;
    }
}
