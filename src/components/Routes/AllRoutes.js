import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CartToggleAction } from "../../store/UI";
import CartModal from "../Cart/CartModal";
import Layout from "../Layout/Layout";
import {
  HomePage,
  NotFoundPage,
  ProductPage,
  CheckOutPage,
  ContactPage,
  SearchPage,
  SignUpPage,
  PaymentPage,
  SignInPage,
  OrderStatusPage
} from "../../pages";

const AllRoutes = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const hideCartModalHandler = () => {
    dispatch(CartToggleAction());
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/search/:categoryId" element={<SearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/orderstatus" element={<OrderStatusPage />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {showCart && <CartModal onClose={hideCartModalHandler} />}
    </BrowserRouter>
  );
};

export default AllRoutes;
