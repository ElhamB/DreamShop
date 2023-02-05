import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Register from "../../components/Auth/Register";
import Title from "../../components/Title/Title";
import "./Register.css";

export const RegisterPage = () => {
  const title = "Register";
  return (
    <Fragment>
      <Title title={title}/>
      <div className="wrapper-login">
        <header className="d-xl-none d-lg-none">
          <div className="container-fluid container-md">
            <div className="row mt-3">
              <div className="col-sm-5 col-5">
                <Link to="/" className="logo">
                  <img src="Images/logo.png" alt="dream shop" />
                </Link>
              </div>
              <div className="col-sm-7 col-7 ">
              <p className="text-end">
                Already a member? <Link to="/login">Sign In</Link>
              </p>
              </div>
            </div>
          </div>
        </header>
        <div className="col-right">
          <div className="signup-form">
            <div className="d-none d-lg-block">
              <p className="text-end">
                Already a member? <Link to="/login">Sign In</Link>
              </p>
            </div>
            <Register />
          </div>
        </div>
        <div className="col-left">
          <div className="logo-signup mt-3">
            <Link to="/" className="logo">
              <img src="Images/logo.png" alt="" />
            </Link>
          </div>
          <div
            id="carouselSignup"
            className="slideshow carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/sign1.png"
                  className="mb-3 img-fluid"
                  alt=""
                />
                <div className="carousel-caption">
                  <h5>Simple and easy purchase</h5>
                  <p>Shop faster and easier</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/images/sign5.png"
                  className="mb-3 img-fluid"
                  alt=""
                />
                <div className="carousel-caption">
                  <h5>Purchase record management</h5>
                  <p>Easily manage your purchase history and activities</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/images/sign3.png"
                  className="mb-3 img-fluid"
                  alt=""
                />
                <div className="carousel-caption">
                  <h5>Favourites</h5>
                  <p>
                    Create a list of your favourites and follow their changes
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/images/sign2.png"
                  className="mb-3 img-fluid"
                  alt=""
                />
                <div className="carousel-caption">
                  <h5>Share comments</h5>
                  <p>Share your reviews, and opinions with others </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/images/sign4.png"
                  className="mb-3 img-fluid"
                  alt=""
                />
                <div className="carousel-caption">
                  <h5>special sale</h5>
                  <p> Stay up to date with special sales of products </p>
                </div>
              </div>
            </div>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselSignup"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSignup"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSignup"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSignup"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSignup"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
