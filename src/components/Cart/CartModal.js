import React, { Fragment } from 'react';
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import "./CartModal.css";

const CartModal = (props) => {
const cartItems=useSelector(state=>state.cart.cartItems);

const cartContentModal = (
      <Fragment>
 <div className="cart-list">
   <div className="cart-menu">
     <div className="cart-bg"></div>
     <i onClick={props.onClose} className="fa fa-remove closeBasketList"></i>
     <h2 className="title-basketBag text-center">Your Shopping Cart</h2>
     <div className="cart-box">
       {/* <div className="no-item">در حال حاضر سبد شما خالی است </div> */}
       <ul>
        {
          cartItems.map((item)=><CartItem key={item.id} cartItem={item}/>)
        }
        
       </ul>
     </div>
     <div className="total-basket mt-2">
       <div className="cart-total">
         <span className="price-title">Cart Total</span>
         <span className="price-total money">$30000</span>
       </div>
       <div className="cart-total">
         <span className="price-title">Discounts</span>
         <span className="price-total money">$500</span>
       </div>
       <div className="cart-total">
         <span className="price-title">Total Payable Amount</span>
         <span className="price-total money">$25000</span>
       </div>
     </div>
     <button className="btn btn-default">
       <span className="text">Check out</span>
     </button>
   </div>
   </div>
      </Fragment>
   )
  return (
  <Modal onClose={props.onClose} >
{cartContentModal}
  </Modal>
  )
}

export default CartModal


