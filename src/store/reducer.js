import {combineReducers } from "redux";
import CategoryListReducer from "./Category";
import CartReducer from "./Cart";
import UIReducer from "./UI";
import { ProductDetailReducer,ProductListReducer } from "./Product";
import { FilterProductReducer } from "./Filter";

 export default combineReducers({
    productList: ProductListReducer,
    productDetails: ProductDetailReducer,
    categoryList: CategoryListReducer,
    cart: CartReducer,
    ui:UIReducer,
    filter:FilterProductReducer
  });