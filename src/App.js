import { Routes, Route, BrowserRouter,Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartToggleAction } from "./store/UI";
import CartModal from "./components/Cart/CartModal";
import { HomePage, NotFoundPage, ProductPage,CheckOutPage,ContactPage,SearchPage,SignUpPage,PaymentPage } from "./pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

const AppLayout = () => (
  <Fragment>
      <Header/>
      <main> <Outlet /></main>
      <Footer/>
    </Fragment>
);

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const hideCartModalHandler=()=>{
    dispatch(CartToggleAction());
  }

  return (
    <BrowserRouter>
        <Routes> 
        <Route element={<AppLayout />} >
        <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/search/:categoryId" element={<SearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Route>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {showCart && <CartModal onClose={hideCartModalHandler} />}
    </BrowserRouter>
  );
}

export default App;
