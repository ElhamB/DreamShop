import React from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Signup = () => {
const submitHandler=(e)=>{
e.preventDefault();
}
  return (
    <form className="login-form" onSubmit={submitHandler}>
    <div className="text-center">
      <h1 className="title-page">Sign up to Dream Shop</h1>
    </div>
    <div className="row formContainer">
      <div className="col-sm-12 col-md-6 mb-2">
        <label htmlFor="Firstname" className="form-label">
          First name
        </label>
        <input type="text" className="form-control" id="Firstname"  />
      </div>
      <div className="col-sm-12 col-md-6 mb-2">
        <label htmlFor="Lastname" className="form-label">
          Last name
        </label>
        <input type="text" className="form-control" id="Lastname" />
      </div>
      <div className="col-sm-12 mb-2">
        <label htmlFor="Email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="Email" />
      </div>
      <div className="col-sm-12 mb-2">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input id="password" className="form-control" type="password" />
        <i className="fa fa-eye-slash passToggle">&nbsp;</i>
      </div>
      <div className="col-sm-12 text-center mb-4 mt-3">
        <Button type="submit">Sign up</Button>
      </div>
      <div className="col-sm-12 text-center">
        <p className="colorGray">
          Creating an account means you’re okay with our{" "}
          <Link to="">Terms of Service and Privacy Policy</Link>.
        </p>
      </div>
    </div>
  </form>
  );
};

export default Signup;
