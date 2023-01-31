import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email:'',
      password:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema:Yup.object({
      password: Yup.string()
        .min(5, 'Password is too Short!')
        .max(10, 'Password is too Long!')
        .required('Password is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
    })
  });

  return (
    
    <form className="login-form" onSubmit={formik.handleSubmit} >
    <div className="text-center">
      <h1 className="title-page">Sign in to Dream Shop</h1>
    </div>
    <div className="row formContainer">
      <div className="col-sm-12 mb-4">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? (<div className="text-danger">{formik.errors.email}</div>):null}
      </div>
      <div className="col-sm-12 mb-4 pos-relative">
        <div className="d-flex justify-content-between">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <Link to="/forgotpassword">Forgot password?</Link>
        </div>
        <input id="password" className="form-control" type="password" {...formik.getFieldProps('password')} />
        <i className="fa fa-eye-slash passToggle">&nbsp;</i>
        {formik.touched.password && formik.errors.password ? (<div className="text-danger">{formik.errors.password}</div>):null}
      </div>

      <div className="col-sm-12 text-center mb-4 ">
        <Button type="submit">Sign in</Button>
      </div>
    </div>
  </form>
  );
};



export default SignIn