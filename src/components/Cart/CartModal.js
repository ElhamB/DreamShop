import { Link } from "react-router-dom";
import Modal from "../UI/Modal";
import CounterButton from "../UI/CounterButton";
import "./CartModal.css";
import React, { Fragment } from 'react'

const CartModal = () => {
   const cartContentModal = (
      <Fragment>
 <div className="cart-list">
   <div className="cart-menu">
     <div className="cart-bg"></div>
     <i className="fa fa-remove closeBasketList"></i>
     <h2 className="title-basketBag text-center">Your Shopping Cart</h2>
     <div className="cart-box">
       {/* <div className="no-item">در حال حاضر سبد شما خالی است </div> */}
       <ul>
         <li>
           <div className="pic">
             <span className="close-basket">
               <i className="fa fa-close"></i>
             </span>
             <Link to="#" title="">
               <img src="/images/13.jpg" className="" alt="" />
             </Link>
           </div>
           <div className="left">
             <span>Furniture</span>
             <div className="price-count">
               <div>
                 <span className="price">3000</span>
               </div>
               <div className="count-basket">
                 <CounterButton />
               </div>
             </div>
           </div>
         </li>
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
  <Modal >
{cartContentModal}
  </Modal>
  )
}

export default CartModal


