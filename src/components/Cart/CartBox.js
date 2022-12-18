import { Fragment } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import './CartBox.css';

const CartBox = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    let totalSum = 0;
    let subTotal = [];
    cartItems.map(item => {
        subTotal.push(item.qty * item.price)
    })
    totalSum = subTotal.reduce((acc, val) => (acc + val), 0)
    return (
        <Fragment>
            <div className="cart-box">
                {cartItems.length === 0 && <div className="no-item text-center">No items Found!</div>}
                <ul>
                    {
                        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                    }
                </ul>
            </div>
            <div className="total-basket mt-2">
                <div className="cart-total">
                    <span className="price-title">Sub Total</span>
                    <span className="price-total">${totalSum}</span>
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
                    <span className="price-total">${totalSum + 50}</span>
                </div>
            </div>
        </Fragment>
    )
}
export default CartBox