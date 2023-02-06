import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchOrder } from "../../store/Order";
import {formatCurrency} from '../../utilities'
import Button from "../UI/Button";
import "./Order.css";
const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.order.orders);
  const user = localStorage.getItem("user");
  const currentUser = JSON.parse(user);
  console.log(orders);
  console.log(currentUser.id);
  useEffect(() => {
    if(currentUser){
      dispatch(fetchOrder(currentUser.id));
    }
  }, [dispatch, currentUser]);

  const showDetailshandler = (id) => {
    navigate(`/orders/${id}`);
  };


  return (
    <Fragment>
      { orders.length === 0 &&(
        <div className="text-center my-5">
          <p className="fs-4 mt-4">WE ARE YET TO RECEIVE YOUR FIRST ORDER</p>
        </div>
      )}
      {orders.map((order) => (
        <div
          key={order.id}
          className="d-flex justify-content-between order-container"
        >
          <div>
            <p>
              <strong>Date: {order.date.split(' ')[0]}</strong>
            </p>
            <span className="title-span">Order number: </span>
            <span>{order.id}</span>
            <span className="title-span">Total: </span>
            <span>{formatCurrency(order.totalQuantity)}</span>
          </div>
          <div>
            <Button onClick={()=>showDetailshandler(order.id)}>Show details</Button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Orders;
