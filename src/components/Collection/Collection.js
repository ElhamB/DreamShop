import React from "react";
import { Link } from "react-router-dom";
import classes from "./Collection.module.css";
const Collection = () => {
  return (
    <div className={classes["collection-wrapper"]}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-center pt-4">
              <h2 className="title-sec">Shop Our Collection</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-12">
                <figure className={classes.category}>
                  <Link to="/category">
                    <img src="/images/cat-TV.jpg" alt="" />
                  </Link>
                  <figcaption>
                    <h3>
                      <Link to="/category">TV units</Link>
                    </h3>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6">
                <figure className={classes.category}>
                  <Link to="/category">
                    <img src="/images/51.jpg" alt="" />
                  </Link>
                  <figcaption>
                    <h3>
                      <Link to="/category">Sofa</Link>
                    </h3>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6">
                <figure className={classes.category}>
                  <Link to="/category">
                    <img src="/images/21.jpg" alt="" />
                  </Link>
                  <figcaption>
                    <h3>
                      <Link to="/category">Bed</Link>
                    </h3>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-6">
              <figure className={classes.category}>
                  <Link to="/category">
                    <img src="/images/11.jpg" alt="" />
                  </Link>
                  <figcaption>
                    <h3>
                      <Link to="/category">Coffe table</Link>
                    </h3>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6">
                <figure className={classes.category}>
                  <Link to="/category">
                    <img src="/images/cat-dining.jpg" alt="" />
                  </Link>
                  <figcaption>
                    <h3>
                      <Link to="/category">Dining</Link>
                    </h3>
                  </figcaption>
                </figure>
             
              </div>
              <div className="col-6">
                <figure className={classes.category}>
                  <Link to="/category">
                    <img src="/images/cat-seat.jpg" alt="" />
                  </Link>
                  <figcaption>
                    <h3>
                      <Link to="/category">Seats</Link>
                    </h3>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6">
                <figure className={classes.category}>
                  <Link to="/category">
                    <img src="/images/62.jpg" alt="" />
                  </Link>
                  <figcaption>
                    <h3>
                      <Link to="/category">Bookshelves</Link>
                    </h3>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6">
                <figure className={classes.category}>
                  <Link to="/category">
                    <img src="/images/73.jpg" alt="" />
                  </Link>
                  <figcaption>
                    <h3>
                      <Link to="/category">Study</Link>
                    </h3>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6">
                <figure className={classes.category}>
                  <Link to="/category">
                    <img src="/images/92.jpg" alt="" />
                  </Link>
                  <figcaption>
                    <h3>
                      <Link to="/category">Drawer</Link>
                    </h3>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
