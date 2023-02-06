import React from "react";
import Orders from "../../components/Order/Orders";

export const OrdersPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 my-5">
            <h1 className="fs-3 text-center mb-5">Your Orders With Us</h1>
            <Orders/>
        </div>
      </div>
    </div>
  );
};

 
