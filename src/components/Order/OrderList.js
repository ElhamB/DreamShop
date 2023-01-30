import React, { Fragment } from "react";

import { useSelector } from "react-redux";
import { formatCurrency } from "../../utilities";
import CartItem from "../Cart/CartItem";

const OrderList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  //calculate total sum
  let totalSum = 0;
  let subTotal = [];
  cartItems.map((item) => {
    return subTotal.push(item.qty * item.price);
  });
  totalSum = subTotal.reduce((acc, val) => acc + val, 0);

 
  return (
    <Fragment>
      <div className="cart-box">
        <ul>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
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
      </div>
    </Fragment>
  );
};

export default OrderList;
