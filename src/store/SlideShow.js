import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

//action types
const SLIDESHOW_LIST_REQUEST="SLIDESHOW_LIST_REQUEST"
const SLIDESHOW_LIST_SUCCESS="SLIDESHOW_LIST_SUCCESS";
const SLIDESHOW_DETAIL_REQUEST="SLIDESHOW_DETAIL_REQUEST";
const SLIDESHOW_DETAIL_SUCCESS="SLIDESHOW_DETAIL_SUCCESS";

//action creators
export const slideshowListAction = () => async (dispatch) => {
    try {
      dispatch({ type: SLIDESHOW_LIST_REQUEST });
      const { data } = await axios.get("/slides");
      dispatch({ type: SLIDESHOW_LIST_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
   };

   export const slideshowDetailAction = (id) => async (dispatch) => {
    try {
      dispatch({ type: SLIDESHOW_DETAIL_REQUEST });
      const { data } = await axios.get(`/slides/${id}`);
      dispatch({ type: SLIDESHOW_DETAIL_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  //reducers
 export const slideshowListReducer = (state = { slides: [] }, action) => {
    switch (action.type) {
      case SLIDESHOW_LIST_REQUEST:
        return { slides: [] };
      case SLIDESHOW_LIST_SUCCESS:
        return {  slides: action.payload };
      default:
        return state;
    }
  };
  
  export const slideshowDetailReducer = (state = { slide: {} }, action) => {
      switch (action.type) {
        case SLIDESHOW_DETAIL_REQUEST:
          return { loading: true, ...state};
        case SLIDESHOW_DETAIL_SUCCESS:
          return { loading: false, slide: action.payload };
  
        default:
          return state;
      }
    };