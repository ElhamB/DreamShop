import React, { Fragment } from "react";
import SignIn from '../../components/Auth/SignIn';
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";

export const SignInPage = () => {
    const title = "Sign in";
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
                  Not a member? <Link to="/signup">Sign up now</Link>
                </p>
                </div>
              </div>
            </div>
          </header>
          <div className="col-right">
            <div className="signup-form">
              <div className="d-none d-lg-block">
                <p className="text-end">
                Not a member? <Link to="/signup">Sign up now</Link>
                </p>
              </div>
              <SignIn />
            </div>
          </div>
          <div className="col-left">
            <div className="logo-signup mt-3">
              <Link to="/" className="logo">
                <img src="Images/logo.png" alt="" />
              </Link>
            </div>
            <figure>
            <img src="Images/sign1.png" className="mb-3" alt="" />
                <figcaption>Have a great experience</figcaption>
            </figure>
          </div>
        </div>
      </Fragment>
    );
}

