import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CartToggleAction } from "./redux/actions/UIAction";
import CartModal from "./components/Cart/CartModal";
import Layout from "./components/Layout/Layout";
import { HomePage, NotFoundPage, ProductPage } from "./pages";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui);
  const { cartIsVisible } = showCart;
  dispatch(CartToggleAction());
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {cartIsVisible && <CartModal />}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
