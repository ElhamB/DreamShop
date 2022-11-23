 import axios from "axios";
 axios.defaults.baseURL = "http://localhost:8000";
// export const ProductListAction = () => async (dispatch) => {
//   try {
//     dispatch({ type: "PRODUCT_LIST_REQUEST" });
//     const { data } = await axios.get('/products');
//     dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
//   } catch (err) {
//     console.log(err);
//   }
// };
// export const ProductDetailsAction = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: "PRODUCT_DETAIL_REQUEST" });
//     const { data } = await axios.get(`/products/${id}`);
//     dispatch({ type: "PRODUCT_DETAIL_SUCCESS", payload: data });
//   } catch (err) {
//     console.log(err);
//   }
// };
export const ProductListAction = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios.get("/products");
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const productDetailAction = (id) => async (dispatch) => {
    try {
      dispatch({ type: "PRODUCT_DETAIL_REQUEST" });
      const { data } = await axios.get(`/products/${id}`);
      dispatch({ type: "PRODUCT_DETAIL_SUCCESS", payload: data });
      dispatch({ type: "COMMENT_ADD", payload: data.comments || [] });
    } catch (error) {
      console.log(error);
    }
  };
