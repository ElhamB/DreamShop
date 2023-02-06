import React, { Fragment } from "react";
import OrderList from "../../components/Order/OrderList";
import PaymentForm from "../../components/CreateOrder/PaymentForm";
import Title from "../../components/Title/Title";

export const PaymentPage = () => {
  const title = "Payment";

  return (
    <Fragment>
      <Title title={title}/>
      <div className="container my-5">
        <div className="row ">
          <div className="col-md-8 pe-6">
            <h1>Payment</h1>
            <PaymentForm />
          </div>
          <div className="col-md-4">
            <section className="order-sec ">
              <OrderList />
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
