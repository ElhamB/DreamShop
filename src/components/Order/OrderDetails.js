import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOrder } from "../../store/Order";
import { formatCurrency } from "../../utilities";

import "./Order.css";
import OrderItem from "./OrderItem";
const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailsOrder = useSelector((state) => state.order);
  const { order } = detailsOrder;
  useEffect(() => {
    dispatch(fetchOrder(id));
  }, [dispatch, id]);
  return (
    <div className="order-container">
      <div className="sub-section">
        <span className="title-span">Date: </span>
        <span> {order.date.split(" ")[0]}</span>
        <span className="title-span">Order number: </span>
        <span>{order.id}</span>
      </div>
      <div className="sub-section">
        <span className="title-span">receiver: </span>
        <span>
          {order.shippingInfo.firstName} {order.shippingInfo.lastName}
        </span>
        <span className="title-span">email: </span>
        <span>{order.email}</span>
        <p className="title-span">address: </p>
        <span>
          {order.shippingInfo.region} - {order.shippingInfo.city} -{" "}
          {order.shippingInfo.address}
        </span>
      </div>
      <div className="sub-section">
        <span className="title-span">Total: </span>
        <span>{formatCurrency(order.totalQuantity)}</span>
        <span className="title-span">Your profit from the purchase: </span>
        <span></span>
      </div>
      <OrderItem id={order.id} /> 
    </div>
  );
};

export default OrderDetails;
