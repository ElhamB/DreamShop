import React, { Fragment } from "react";
import Orders from "../../components/Order/Orders";
import Title from "../../components/Title/Title";

export const OrdersPage = () => {
  const title = "Orders";
  return (
    <Fragment>
      <Title title={title} />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-8 my-5">
            <h1 className="fs-3 text-center mb-5">Your Orders With Us</h1>
            <Orders />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
