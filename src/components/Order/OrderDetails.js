import React from "react";
import { formatCurrency } from "../../utilities";
import "./Order.css";
import OrderItem from "./OrderItem";
const OrderDetails = ({ shipInfo, order }) => {
  const user = localStorage.getItem("user");
  const email = JSON.parse(user).email;
  const address = shipInfo.address;
  const region = shipInfo.region;
  const city = shipInfo.city;
  const ship2=JSON.stringify(shipInfo)
  console.log("shipInfo "+ ship2)
  const reciever =
    `${shipInfo.userId}  ${shipInfo.lastName}`;
  return (
    <div className="order-container">
      <div className="sub-section">
        <span className="title-span">Date: </span>
        <span className="me-3"> {order.date.split(",")[0]}</span>
        <span className="title-span">Order number: </span>
        <span>{order.id}</span>
      </div>
      <div className="sub-section">
        <span className="title-span">receiver: </span>
        <span className="me-3">{reciever}</span>
        <span className="title-span">email: </span>
        <span>{email}</span>
        <p className="mt-3"><span className="title-span">address:</span> <span> {region} - {city} - {address}</span></p>
       
      </div>
      <div className="sub-section">
        <span className="title-span">Total: </span>
        <span className="me-3">{formatCurrency(order.totalQuantity)}</span>
        <span className="title-span me-3">Your profit from the purchase: </span>
        <span></span>
      </div>
      <OrderItem id={order.id} />
    </div>
  );
};

export default OrderDetails;
