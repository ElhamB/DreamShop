import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../store/Auth";
const Signup = () => {
  const dispatch=useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName:"",
      lastName:""
    },
    onSubmit: (values) => {
    dispatch(register(values));
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min("3", "first name is too short")
        .max(50, "first name is too Long!")
        .required("first name is required"),
      lastName: Yup.string()
        .min("3", "Last name is too short")
        .max(50, "Last name is too Long!")
        .required("Last name is required"),
      password: Yup.string()
        .min(5, "Password is too Short!")
        .max(10, "Password is too Long!")
        .required("Password is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
  });

  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <div className="text-center">
        <h1 className="title-page">Sign up to Dream Shop</h1>
      </div>
      <div className="row formContainer">
        <div className="col-sm-12 col-md-6 mb-2">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input type="text" className="form-control" id="firstName" {...formik.getFieldProps('firstName')} />
          {formik.touched.firstName && formik.errors.firstName ? (<div className="text-danger">{formik.errors.firstName}</div>):null}
        </div>
        <div className="col-sm-12 col-md-6 mb-2">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input type="text" className="form-control" id="lastName" {...formik.getFieldProps('lastName')} />
          {formik.touched.lastName && formik.errors.lastName ? (<div className="text-danger">{formik.errors.lastName}</div>):null}
        </div>
        <div className="col-sm-12 mb-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" {...formik.getFieldProps('email')}/>
          {formik.touched.email && formik.errors.email ? (<div className="text-danger">{formik.errors.email}</div>):null}
        </div>
        <div className="col-sm-12 mb-2 pos-relative">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input id="password" className="form-control" type="password" {...formik.getFieldProps('password')} />
          <i className="fa fa-eye-slash passToggle">&nbsp;</i>
          {formik.touched.password && formik.errors.password ? (<div className="text-danger">{formik.errors.password}</div>):null}
        </div>

        <div className="col-sm-12 text-center">
          <p className="colorGray">
            Creating an account means you’re okay with our{" "}
            <Link to="/terms">Terms of Service and Privacy Policy</Link>.
          </p>
        </div>
        <div className="col-sm-12 text-center mb-4 ">
          <Button type="submit">Sign up</Button>
        </div>
      </div>
    </form>
  );
};

export default Signup;
