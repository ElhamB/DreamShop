import React from "react";
import CounterButton from "../UI/CounterButton";
import { Link } from "react-router-dom";

const CartItem=({cartItem})=>{
return(
    <li>
    <div className="pic">
      <span className="close-basket">
        <i className="fa fa-close"></i>
      </span>
      <Link to={`/product/${cartItem.id}`} title="">
        <img src={cartItem.image1} alt={cartItem.title}/>
      </Link>
    </div>
    <div className="left">
      <span>Furniture</span>
      <div className="price-count">
        <div>
          <span className="price">${cartItem.price}</span>
        </div>
        <div className="count-basket">
          <CounterButton />
        </div>
      </div>
    </div>
  </li>
)
}
export default CartItem