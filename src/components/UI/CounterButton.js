import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart } from "../../store/Cart";
const CounterButton = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = props.item;
  const qty = useSelector(
    (state) => state.cart.cartItems?.find((item) => item.id === id)?.qty
  );

  const increaseQuantitytHandler = () => {
    dispatch(addToCart(id));
  };
  const decreaseQuantitytHandler = () => {
    dispatch(removeFromCart(id));
  };

  const isPaymentPage = location.pathname.includes("payment");

  return (
    <Fragment>
      {isPaymentPage ? (
        <p>x {qty}</p>
      ) : (
        <div className="btn-quantity">
          <button className="btn-add" onClick={increaseQuantitytHandler}>
            +
          </button>
          <input type="number" value={qty} readOnly min="1" max="12" />
          <button className="btn-decrease" onClick={decreaseQuantitytHandler}>
            -
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default CounterButton;
