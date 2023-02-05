import React,{ Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./Order.css";
const OrderItem = () => {
  const navigate = useNavigate();
  const orders = useSelector((state) => state.order.orders);
  const user=useSelector(state=>state.auth.user);
  const myOrders=orders.find(order=>order.email === user.email );
  console.log(orders)
  const showDetailshandler = () => {
    navigate("/showdetails");
  };
  return (
    <Fragment>
      {myOrders.map((order) => (
        <div key={order.id} className="d-flex justify-content-between order-container">
          <div>
            <p>
              <strong>Date: </strong>
            </p>
            <span className="title-span">Order number: </span>
            <span>{order.id}</span>
            <span className="title-span">Total: </span>
            <span>{order.totalQuantity}</span>
          </div>
          <div>
            <Button onClick={showDetailshandler}>Show details</Button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default OrderItem;
