import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

//action types
const PRODUCT_LIST_REQUEST="PRODUCT_LIST_REQUEST"
const PRODUCT_LIST_SUCCESS="PRODUCT_LIST_SUCCESS";
const PRODUCT_DETAIL_REQUEST="PRODUCT_DETAIL_REQUEST";
const PRODUCT_DETAIL_SUCCESS="PRODUCT_DETAIL_SUCCESS";

//action creators
export const ProductListAction = () => async (dispatch) => {
 try {
   dispatch({ type: PRODUCT_LIST_REQUEST });
   const { data } = await axios.get("/products");
   dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
 } catch (error) {
   console.log(error);
 }
};

export const productDetailAction = (id) => async (dispatch) => {
   try {
     dispatch({ type: PRODUCT_DETAIL_REQUEST });
     const { data } = await axios.get(`/products/${id}`);
     dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
     dispatch({ type: "COMMENT_ADD", payload: data.comments || [] });
   } catch (error) {
     console.log(error);
   }
 };

//reducers
 export const ProductListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] };
      case PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload };
      default:
        return state;
    }
  };
  
  export const ProductDetailReducer = (state = { product: {} }, action) => {
      switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
          return { loading: true, ...state};
        case PRODUCT_DETAIL_SUCCESS:
          return { loading: false, product: action.payload };
          case "COMMENT_ADD":
            return {...state,comment: action.payload };
        default:
          return state;
      }
    };