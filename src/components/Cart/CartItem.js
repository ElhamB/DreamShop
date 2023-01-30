import React from "react";
import CounterButton from "../UI/CounterButton";
import { useLocation } from "react-router-dom";
import { removeFromCart } from "../../store/Cart";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const location = useLocation();
  const isPaymentPage = location.pathname.includes("payment");

  return (
    <li>
      <div className="pic">
        {!isPaymentPage && (
          <span
            className="close-basket"
            onClick={() => removeFromCartHandler(cartItem.id)}
          >
            <i className="fa fa-close"></i>
          </span>
        )}

        <Link to={`/product/${cartItem.id}`} title="">
          <img src={cartItem.image1} alt={cartItem.title} />
        </Link>
      </div>
      <div className="left">
        <span>{cartItem.title}</span>
        <div className="price-count">
          <span className="price">${cartItem.price}</span>
        </div>
        <div className="count-basket">
          <CounterButton
            item={{
              id: cartItem.id,
            }}
          />
        </div>
      </div>
    </li>
  );
};
export default CartItem;
