import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utilities";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import "./CartBox.css";
const CartBox = ({ onCheckout }) => {

  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  //calculate total sum
  let totalSum = 0;
  let subTotal = [];
  cartItems.map((item) => {
    return subTotal.push(item.qty * item.price);
  });
  totalSum = subTotal.reduce((acc, val) => acc + val, 0);
  
  //disable checkout button if cart is empty
  const checkoutDisabled =cartItems.length === 0;

  const onClickHandler = () => {
    const isCheckoutPage = location.pathname.includes("checkout");
    if (isCheckoutPage) {
      onCheckout();
    } else {
      navigate("/checkout");
    }
  };
  return (
    <Fragment>
      <div className="cart-box">
        {cartItems.length === 0 && (
          <div className="no-item text-center">
            Your cart is currently empty
          </div>
        )}
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </ul>
      </div>
      <div className="total-basket mt-2">
        <div className="cart-total">
          <span className="price-title">Sub Total</span>
          <span className="price-total">{formatCurrency(totalSum)}</span>
        </div>
        <div className="cart-total">
          <span className="price-title">Shipping</span>
          <span className="price-total">$50</span>
        </div>
        {/* <div className="cart-total">
              <span className="price-title">Discounts</span>
              <span className="price-total">$500</span>
            </div> */}
        <div className="cart-total">
          <span className="price-title">Total</span>
          <span className="price-total">{formatCurrency(totalSum + 50)}</span>
        </div>
        <Button disabled={checkoutDisabled} onClick={onClickHandler}>
          Check out
        </Button>
      </div>
    </Fragment>
  );
};
export default CartBox;
