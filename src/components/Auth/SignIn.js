import React from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
const submitHandler=(e)=>{
e.preventDefault();
}
  return (
    <form className="login-form" onSubmit={submitHandler}>
    <div className="text-center">
      <h1 className="title-page">Sign in to Dream Shop</h1>
    </div>
    <div className="row formContainer">
      <div className="col-sm-12 mb-4">
        <label htmlFor="Email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="Email" />
      </div>
      <div className="col-sm-12 mb-4 pos-relative">
        <div className="d-flex justify-content-between">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <Link to="/forgotpassword">Forgot password?</Link>
        </div>
        <input id="password" className="form-control" type="password" />
        <i className="fa fa-eye-slash passToggle">&nbsp;</i>
      </div>

      <div className="col-sm-12 text-center mb-4 ">
        <Button type="submit">Sign in</Button>
      </div>
    </div>
  </form>
  );
};

export default SignIn
