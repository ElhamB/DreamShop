import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  ProductDetailReducer,
  ProductListReducer,
} from "./reducers/ProductReducer";
import { CategoryListReducer } from "./reducers/CategoryReducer";
import { UIReducer } from "./reducers/UIReducer";
import { CartReducer } from "./reducers/CartReducer";
const reducer = combineReducers({
  productList: ProductListReducer,
  productDetails: ProductDetailReducer,
  categoryList: CategoryListReducer,
  cart: CartReducer,
  ui:UIReducer
});
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
