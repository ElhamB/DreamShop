import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchOrder, orderDetailsAction } from "../../store/Order";
import { fetchShippingInfo } from "../../store/Payment";
import {formatCurrency} from '../../utilities'
import Button from "../UI/Button";
import "./Order.css";
const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.order.orders);
  const user = localStorage.getItem("user");
  const currentUser = JSON.parse(user);
  useEffect(() => {
    if(currentUser){
      dispatch(fetchOrder(currentUser.id));
    }
  }, [dispatch, currentUser.id]);

  const showDetailshandler = (id) => {
    dispatch(orderDetailsAction(id));
    dispatch(fetchShippingInfo(currentUser.id))
    navigate(`/order/${id}`);
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
          className="d-flex justify-content-between order-container mb-3"
        >
          <div>
            <p>
              <strong>Date: {(order.date).split(',')[0]}</strong>
            </p>
            <span className="title-span">Order number: </span>
            <span className="me-3">{order.id}</span>
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
