import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import OrderDetails from "../../components/Order/OrderDetails";
import Title from "../../components/Title/Title";
import Loading from "../../components/UI/Loading";
import { orderDetailsAction } from "../../store/Order";
import { fetchShippingInfo } from "../../store/Payment";

export const ShowDetailsOrderPage = () => {
  const title = "Show details";
  const { id } = useParams();
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.order);
  const { loading, order } = orderDetails;
  const user = localStorage.getItem("user");
  const currentUser = JSON.parse(user);
  const shipInfo = useSelector((state) =>
    state.payment.shippingInfo
  );

  useEffect(() => {
    dispatch(orderDetailsAction(id));
    if(currentUser){
      dispatch(fetchShippingInfo(currentUser.id))
    }
  }, [dispatch,currentUser.id]);
  return (
    <Fragment>
      <Title title={title} />
      {loading && <Loading />}
      {!loading && (
        <div className="container py-5">
        
          <div className="row d-flex justify-content-center">
          <div className="col-12">
          <Link to="/orders">
                <i className="fa fa-arrow-left"></i>
              </Link>
          </div>
            <div className="col-sm-8">      
              <h1 className="text-center fs-2 mb-4">{title}</h1>
              <OrderDetails order={order} shipInfo={shipInfo} />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
