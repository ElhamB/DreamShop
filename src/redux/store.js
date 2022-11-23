import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { ProductDetailReducer,ProductListReducer } from "./reducers/ProductReducer";
const reducer = combineReducers({
    productList:ProductListReducer,
    productDetails:ProductDetailReducer
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
