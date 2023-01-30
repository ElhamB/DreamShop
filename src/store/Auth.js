
//action types
const SIGN_UP = "SIGN_UP";
const SIGN_IN = "SIGN_IN";

//action creators
export const addShippingInfo = (payload) => async (dispatch) => {
  dispatch({
    type: SIGN_UP,
   
  });
};

export const authReducer=(state={user:{},isLoggedIn:null},action)=>{
switch(action.type){
    case SIGN_UP:
        return {...state,user:[...state.user]}
        case SIGN_IN:
            return{...state,user:action.payload}
    default:
        return state;
}
}