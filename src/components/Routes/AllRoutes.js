import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartToggleAction } from "../../store/UI";
import CartModal from "../Cart/CartModal";
import Layout from "../Layout/Layout";
import {
  HomePage,
  NotFoundPage,
  ProductPage,
  CheckOutPage,
  ContactPage,
  SearchPage,
  RegisterPage,
  PaymentPage,
  LoginPage,
  OrderStatusPage,
  OrdersPage,
  ShowDetailsOrderPage,
  FavoritePage,
  ProfilePage
} from "../../pages";

const AllRoutes = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const hideCartModalHandler = () => {
    dispatch(cartToggleAction());
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/search/" element={<SearchPage />} />
          <Route path="/search/:categoryId" element={<SearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/orderstatus" element={<OrderStatusPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/order/:id" element={<ShowDetailsOrderPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {showCart && <CartModal onClose={hideCartModalHandler} />}
    </BrowserRouter>
  );
};

export default AllRoutes;
