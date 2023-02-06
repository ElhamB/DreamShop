import { useFormik } from "formik";
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCardInfo } from "../../store/Payment";
import {createOrder} from '../../store/Order';
import Button from "../UI/Button";
import * as Yup from "yup";
const PaymentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const shippingInfo=useSelector(state=>state.payment.shippingInfo);
const cartItems=useSelector(state=>state.cart.cartItems);
  //calculate total sum
  let totalSum = 0;
  let subTotal = [];
  cartItems.map((item) => {
    return subTotal.push(item.qty * item.price);
  });
  totalSum = subTotal.reduce((acc, val) => acc + val, 0);

  // this regex that matches Visa, MasterCard, American Express, Diners Club, Discover, and JCB cards:
  // ^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$

  // Carte Blanche Card: ^389[0-9]{11}$

  // const cardInfo = useSelector((shipInfo) => shipInfo.payment.cardInfo);
  // const { cardHolder, cardNumber, expiryDate, CVV } = cardInfo;

  const formik = useFormik({
    initialValues: {
      cardHolder: "",
      cardNumber: "",
      expiryDate: "",
      CVV: "",
    },
    onSubmit: (values) => {
      console.log(values);
     dispatch(addCardInfo(values));
      dispatch(createOrder({
        shippingInfo,
        cardInfo:values,
        cartItems: [ ...cartItems ],
        totalQuantity:totalSum
      }));
      navigate("/orderstatus");
    },
    validationSchema: Yup.object({
      cardHolder: Yup.string()
        .min("3", "Card holder is too short")
        .max(50, "Card holder is too Long!")
        .required("Card holder is required"),
      cardNumber: Yup.string()
        .matches(
          /^389[0-9]{11}$/,
          "Not a valid credit card number. example 38910245897222"
        )
        .required("Card number is required"),
      CVV: Yup.string()
      .matches(
        /^[0-9]{3,4}$/,
        "Not a valid expiration date. Example: xxx or xxxx"
      )
      .required("CVV is required"),
      expiryDate: Yup.string()
        .typeError("Not a valid expiration date. Example: MM/YY")
        .max(5, "Not a valid expiration date. Example: MM/YY")
        .matches(
          /([0-9]{2})\/([0-9]{2})/,
          "Not a valid expiration date. Example: MM/YY"
        )
        .required("Expiration date is required"),
    }),
  });
  return (
    <form className="row g-3 mb-4" onSubmit={formik.handleSubmit}>
      <h6>Card information</h6>
      <div className="col-md-12">
        <label htmlFor="cardName" className="form-label">
          Card holder*
        </label>
        <input
          type="text"
          className="form-control"
          id="cardName"
          {...formik.getFieldProps("cardHolder")}
        />
        {formik.touched.cardHolder && formik.errors.cardHolder ? (
          <div className="text-danger">{formik.errors.cardHolder}</div>
        ) : null}
      </div>
      <div className="col-md-12">
        <label htmlFor="cardNumber" className="form-label">
          Credit/debit Card number*
        </label>
        <input
          type="text"
          className="form-control"
          id="cardNumber"
          placeholder="xxxx xxxx xxxx xxxx"
          {...formik.getFieldProps("cardNumber")}
        />
        {formik.touched.cardNumber && formik.errors.cardNumber ? (
          <div className="text-danger">{formik.errors.cardNumber}</div>
        ) : null}
      </div>
      <div className="col-md-6">
        <label htmlFor="cardNumber" className="form-label">
          Expiry Date
        </label>
        <input
          type="text"
          className="form-control"
          id="expiryDate"
          placeholder="MM/YY"
          {...formik.getFieldProps("expiryDate")}
        />
        {formik.touched.expiryDate && formik.errors.expiryDate ? (
          <div className="text-danger">{formik.errors.expiryDate}</div>
        ) : null}
      </div>
      <div className="col-md-6">
        <label htmlFor="CVV" className="form-label">
          CVV
        </label>
        <input
          type="text"
          className="form-control"
          id="CVV"
          placeholder="x x x or x x x x"
          {...formik.getFieldProps("CVV")}
        />
        {formik.touched.CVV && formik.errors.CVV ? (
          <div className="text-danger">{formik.errors.CVV}</div>
        ) : null}
      </div>
      <div className="col-md-12">
        <Button type="submit">Make payment</Button>
      </div>
    </form>
  );
};

export default PaymentForm;
