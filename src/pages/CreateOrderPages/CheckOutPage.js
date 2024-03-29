import React, { Fragment } from "react";
import Title from "../../components/Title/Title";
import CartBox from "../../components/Cart/CartBox";
import AddressForm from "../../components/CreateOrder/AddressForm";
import './CheckOutPage.css'
export const CheckOutPage = () => {
const title = "Checkout";
 
    return (
        <Fragment>
        <Title title={title} />
        <div className="container my-5">
            <div className="row cart-page">
                <div className="col-md-8">
                    <h1>Checkout</h1>
                       <AddressForm />
                </div>
                <div className="col-md-4">
                    <section className="order-sec ">
                        <CartBox  />           
                    </section>
                </div>
            </div>
        </div>
        </Fragment>
    )
}
