import React, { Fragment } from 'react';

import Modal from "../UI/Modal";
import CartBox from './CartBox';
import "./CartModal.css";

const CartModal = (props) => {

  const cartContentModal = (
    <Fragment>
      <div className="cart-list">
        <div className="cart-menu">
          <div className="cart-bg"></div>
          <i onClick={props.onClose} className="fa fa-remove closeBasketList"></i>
          <h2 className="title-basketBag text-center">Your Shopping Cart</h2>
          <CartBox />
       
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


