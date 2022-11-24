import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
export const CategoryListAction = () => async (dispatch) => {
 try {
   dispatch({ type: "CATEGORY_LIST_REQUEST" });
   const { data } = await axios.get("/category");
   dispatch({ type: "CATEGORY_LIST_SUCCESS", payload: data });
 } catch (error) {
   console.log(error);
 }
};