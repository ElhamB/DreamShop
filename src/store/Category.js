import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
//action types
const CATEGORY_LIST_REQUEST = "CATEGORY_LIST_REQUEST";
const CATEGORY_LIST_SUCCESS = "CATEGORY_LIST_SUCCESS";

//action creators
export const CategoryListAction = () => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST });
        const { data } = await axios.get("/category");
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        console.log(error);
    }
};
//reducers
export default function CategoryListReducer(state = { categories: [] }, action) {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { categories: [] };
        case CATEGORY_LIST_SUCCESS:
            return { categories: action.payload };
        default:
            return state;
    }
};