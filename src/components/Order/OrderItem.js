import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrder } from "../../store/Order";
import { formatCurrency } from "../../utilities";

const OrderItem = ({ id }) => {
  const dispatch = useDispatch();
  const detailsOrder = useSelector((state) => state.order);
  const { order } = detailsOrder;
  useEffect(() => {
    dispatch(fetchOrder(id));
  }, [dispatch, id]);
  return (
    <div className="order-items row">
      {order.cartItems.map((item) => (
        <div className="col-md-3 col-sm-6 col-12" key={item.id}>
          <figure className="img-con">
            <Link to={`/product/${item.id}`} title="">
              <img src={item.image1} alt={item.title} />
            </Link>
            <figcaption>
              <span>{item.title}</span>
              <div className="price-count">
                <span className="price">{formatCurrency(item.price)}</span>
                <span>x 2</span>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default OrderItem;
