import React from 'react'
import { useSelector } from 'react-redux';
import Button from "../UI/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm= ()=>  {
const shippingInfo=useSelector(shipInfo=>shipInfo.payment.shippingInfo);
const {firstName,lastName,address, city,state,zip}=shippingInfo;

const cartItems = useSelector((state) => state.cart.cartItems);
const checkoutDisabled =cartItems.length === 0;

const formik = useFormik({
    initialValues: {
     firstName: "",
     lastName: "",
     city:"",
     zip:"",
     address:"",
     region:""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min("3", "First name is too short")
        .max(50, "First name is too Long!")
        .required("First name is required"),
      lastName: Yup.string()
        .min("3", "Last name is too short")
        .max(50, "Last name is too Long!")
        .required("Last name is required"),
        city: Yup.string()
        .min(3, "City is too Short!")
        .max(10, "City is too Long!")
        .required("City is required"),
        zip: Yup.string()
        .matches(/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/)
        .required("Postal code is required"),
        address:Yup.string()
        .min(10,"Address is too short")
        .max(50, "Address is too Long!")
        .required("Address is required"),
        region:Yup.string().required("Region is required")
    }),
  });
  return (
    <form  className="row g-3 mb-4" onSubmit={formik.handleSubmit}>
    <h6>Contact information</h6>
    <div className="col-md-6">
    <label htmlFor="firstName" className="form-label">
            First name*
          </label>
          <input type="text" className="form-control" id="firstName" {...formik.getFieldProps('firstName')} />
          {formik.touched.firstName && formik.errors.firstName ? (<div className="text-danger">{formik.errors.firstName}</div>):null}
    </div>
    <div className="col-md-6">
    <label htmlFor="lastName" className="form-label">
            Last name*
          </label>
          <input type="text" className="form-control" id="lastName" {...formik.getFieldProps('lastName')} />
          {formik.touched.lastName && formik.errors.lastName ? (<div className="text-danger">{formik.errors.lastName}</div>):null}
    </div>
    <div className="col-md-4">
        <label htmlFor="region" className="form-label">Region*</label>
        <select id="region" name='region' className="form-select" {...formik.getFieldProps('region')}>
            <option>Choose...</option>
            <option value="Drenthe">Drenthe</option>
            <option value="North Holland">North Holland</option>
            <option value="Utrecht">Utrecht</option>
            <option value="Zeeland">Zeeland</option>
        </select>
        {formik.touched.region && formik.errors.region ? (<div className="text-danger">{formik.errors.region}</div>):null}
    </div>
    <div className="col-md-4">
        <label htmlFor="city" className="form-label">City*</label>
        <input type="text" className="form-control" id="city" {...formik.getFieldProps('city')} />
        {formik.touched.city && formik.errors.city ? (<div className="text-danger">{formik.errors.city}</div>):null}

    </div>
    <div className="col-md-4">
        <label htmlFor="zip" className="form-label">Postal code*</label>
        <input type="text"  className="form-control" id="zip"  {...formik.getFieldProps('zip')} />
        {formik.touched.zip && formik.errors.zip ? (<div className="text-danger">{formik.errors.zip}</div>):null}
    </div>
    <div className="col-12">
        <label htmlFor="address" className="form-label">Address*</label>
        <input type="text" className="form-control" id="address" {...formik.getFieldProps('address')} />
        {formik.touched.address && formik.errors.address ? (<div className="text-danger">{formik.errors.address}</div>):null}
    </div>
    <div>
    <Button type="submit" className="col-12" disabled={checkoutDisabled} >
          Continue
        </Button>
    </div>
</form>
  )
}


export default ContactForm
