import {combineReducers } from "redux";
import CategoryListReducer from "./Category";
import CartReducer from "./Cart";
import UIReducer from "./UI";
import { ProductDetailReducer,ProductListReducer } from "./Product";

 export default combineReducers({
    productList: ProductListReducer,
    productDetails: ProductDetailReducer,
    categoryList: CategoryListReducer,
    cart: CartReducer,
    ui:UIReducer
  });