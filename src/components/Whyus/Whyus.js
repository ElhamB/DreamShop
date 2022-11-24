import React from "react";
import classes from "./Whyus.module.css";
const Whyus = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <figure className={classes.whyus}>
            <img src="/images/icon-support.png" alt="Customer Service" />
            <figcaption>
              <h3>Expert Customer Service</h3>
              <p>Our friendly team's on hand seven days a week.</p>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-3 col-sm-6">
          <figure className={classes.whyus}>
            <img src="/images/icon-shipping.png" alt="Free Shipping" />
            <figcaption>
              <h3>Free Shipping on Everything</h3>
              <p>Plus, two-day delivery on thousands of items.</p>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-3 col-sm-6">
          <figure className={classes.whyus}>
            <img src="/images/icon-sale.png" alt="Amazing Value" />
            <figcaption>
              <h3>Amazing Value Every Day</h3>
              <p>Items you love at prices that fit your budget.</p>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-3 col-sm-6">
          <figure className={classes.whyus}>
            <img src="/images/icon-install.png" alt="Free Installation" />
            <figcaption>
              <h3>Free Installation</h3>
              <p>We assemble the product, and clear away the packaging.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
