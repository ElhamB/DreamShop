import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import Notification from "../../components/UI/Notification";
export const OrderStatusPage = () => {
  const notification = useSelector((state) => state.ui.notification);

  const navigate = useNavigate();
  const successClickHandler = () => {
    navigate("/orders");
  };
  const failClickHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 my-5 text-center">

          {notification && (
            <Notification
              title={notification.title}
              message={notification.message}
              status={notification.status}
            />
          )}
          {notification.status === "success" ? (
            <Button type="button" onClick={successClickHandler}>
              Go to your Order
            </Button>
          ) : (
            <Button type="button" onClick={failClickHandler}>
              Go to your Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
