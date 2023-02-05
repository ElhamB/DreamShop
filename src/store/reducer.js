import {combineReducers } from "redux";
import CategoryListReducer from "./Category";
import CartReducer from "./Cart";
import uiReducer from "./UI";
import { ProductDetailReducer,ProductListReducer } from "./Product";
import { FilterProductReducer } from "./Filter";
import { slideshowDetailReducer,slideshowListReducer } from "./SlideShow";
import { authReducer } from "./Auth";
import { paymentFormReducer } from "./Payment";
import { orderReducer } from "./Order";
 export default combineReducers({
    productList: ProductListReducer,
    productDetails: ProductDetailReducer,
    categoryList: CategoryListReducer,
    cart: CartReducer,
    ui:uiReducer,
    filter:FilterProductReducer,
    slideList:slideshowListReducer,
    slideDetails:slideshowDetailReducer,
    auth:authReducer,
    payment:paymentFormReducer,
    order:orderReducer
  });