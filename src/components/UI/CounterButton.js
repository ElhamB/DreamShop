import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart } from "../../store/Cart";
const CounterButton = (props) => {
  const dispatch = useDispatch();
  const { id } = props.item;
  const qty = useSelector(state => state.cart.cartItems?.find(item => item.id === id)?.qty);
  const increaseQuantitytHandler = () => {
    dispatch(addToCart(id));
  };
  const decreaseQuantitytHandler = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="btn-quantity">
      <button className="btn-add" onClick={increaseQuantitytHandler}>+</button>
      <input type="number" value={qty} readOnly min="1" max="12" />
      <button className="btn-decrease" onClick={decreaseQuantitytHandler}>-</button>
    </div>
  );
};

export default CounterButton;
