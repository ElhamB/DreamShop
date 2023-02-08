import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderDetailsAction } from "../../store/Order";
import { formatCurrency } from "../../utilities";
import Loading from "../UI/Loading";
import "./Order.css";
import OrderItem from "./OrderItem";
const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.order);
  const { loading, order } = orderDetails;
  console.log(order);

  useEffect(() => {
    dispatch(orderDetailsAction(id));
  }, [dispatch, id]);

  const shippingInfo = useSelector((state) =>
    state.payment.shippingInfo?.find?.((item) => item.id === order.addressId)
  );
  const user = localStorage.getItem("user");
  const email = JSON.parse(user).email;
  // const categoryTitle = useSelector(
  //   (state) => state.categoryList.categories?.find?.((item) => item.id === product.categoryId)?.title
  // );

  return (
    <Fragment>
      {loading && <Loading />}
      {!loading && (
        <div className="order-container">
          <div className="sub-section">
            <span className="title-span">Date: </span>
            <span> {order.date.split(",")[0]}</span>
            <span className="title-span">Order number: </span>
            <span>{order.id}</span>
          </div>
          <div className="sub-section">
            <span className="title-span">receiver: </span>
            <span>
              {shippingInfo.firstName} {shippingInfo.lastName}
            </span>
            <span className="title-span">email: </span>
            <span>{email}</span>
            <p className="title-span">address: </p>
            <span>
              {shippingInfo.region} - {shippingInfo.city} -{" "}
              {shippingInfo.address}
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
      )}
    </Fragment>
  );
};

export default OrderDetails;
