import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CartToggleAction } from "./store/UI";
import CartModal from "./components/Cart/CartModal";
import Layout from "./components/Layout/Layout";
import { HomePage, NotFoundPage, ProductPage,CartPage,ContactPage,SearchPage } from "./pages";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const hideCartModalHandler=()=>{
    dispatch(CartToggleAction());
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart/:id" element={<CartPage />} />
          <Route path="/search/:category" element={<SearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {showCart && <CartModal onClose={hideCartModalHandler} />}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
