import {combineReducers } from "redux";
import CategoryListReducer from "./Category";
import CartReducer from "./Cart";
import UIReducer from "./UI";
import { ProductDetailReducer,ProductListReducer } from "./Product";
import { FilterProductReducer } from "./Filter";
import { slideshowDetailReducer,slideshowListReducer } from "./SlideShow";
import { authReducer } from "./Auth";
import { paymentFormReducer } from "./Payment";
import { makeOrderReducer } from "./Order";
 export default combineReducers({
    productList: ProductListReducer,
    productDetails: ProductDetailReducer,
    categoryList: CategoryListReducer,
    cart: CartReducer,
    ui:UIReducer,
    filter:FilterProductReducer,
    slideList:slideshowListReducer,
    slideDetails:slideshowDetailReducer,
    auth:authReducer,
    payment:paymentFormReducer,
    order:makeOrderReducer
  });