import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { ProductDetailReducer,ProductListReducer } from "./reducers/ProductReducer";
import { CategoryListReducer } from "./reducers/CategoryReducer";
const reducer = combineReducers({
    productList:ProductListReducer,
    productDetails:ProductDetailReducer,
    categoryList:CategoryListReducer
});
// const initialState = {};
const middleware = [thunk];
// const store = createStore(
//   reducer,
//   initialState,
//   applyMiddleware(...middleware)
// );

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);
export default store;


