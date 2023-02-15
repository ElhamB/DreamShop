import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrder } from "../../store/Order";
import { ProductListAction } from "../../store/Product";
import { formatCurrency } from "../../utilities";

const OrderItem = ({ id }) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);

  const productTitle = useSelector(
    (state) =>
      state.productList.products?.find?.(
        (item) => item.id === order.cartItems.productId
      )?.title
  );
  // console.log(productTitle)
  const price = useSelector((state) =>
    state.productList.products?.find?.(
      (item) => item.id === order.cartItems.productId
    )
  )?.price;
  useEffect(() => {
    dispatch(fetchOrder(id));
    dispatch(ProductListAction());
  }, [dispatch, id]);
  return (
    <div className="order-items row">
      {order.cartItems.map((item) => (
        <div className="col-md-3 col-sm-6 col-12" key={item.productId}>
          <figure className="img-container">
            <Link to={`/product/${item.productId}`} title="">
              <img src={item.image1} alt={productTitle} />
            </Link>
            <figcaption>
              <span>{productTitle}</span>
              <div className="price-count">
                <span className="price">{formatCurrency(price)}</span>
                <span>x {item.quantity}</span>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default OrderItem;
