import React, { Fragment } from "react";
import { Link} from "react-router-dom";
import OrderDetails from "../../components/Order/OrderDetails";
import Title from "../../components/Title/Title";

export const ShowDetailsOrderPage = () => {
  const title = "Show details";

  return (
    <Fragment>
      <Title title={title} />
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12">
            <Link to="/orders"><i className="fa fa-arrow-left"></i></Link>
            <h1 className="text-center fs-2 mb-4">{title}</h1>
            <OrderDetails />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
