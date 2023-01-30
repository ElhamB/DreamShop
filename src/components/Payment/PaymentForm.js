import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
const PaymentForm = () => {
  const navigate = useNavigate();

  const cardInfo = useSelector((shipInfo) => shipInfo.payment.cardInfo);
  const { cardName, cardNumber, expiryDate, CVV } = cardInfo;
  const paymentHandler = () => {
    navigate("/Thankyou");
  };
  return (
    <form className="row g-3 mb-4">
      <h6>Card information</h6>
      <div className="col-md-12">
        <label htmlFor="cardName" className="form-label">
          Card holder*
        </label>
        <input
          type="text"
          className="form-control"
          name="cardName"
          id="cardName"
          defaultValue={cardName}
        />
      </div>
      <div className="col-md-12">
        <label htmlFor="cardNumber" className="form-label">
          Credit/debit Card number*
        </label>
        <input
          type="text"
          className="form-control"
          name="cardNumber"
          id="cardNumber"
          placeholder="xxxx xxxx xxxx xxxx"
          defaultValue={cardNumber}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="cardNumber" className="form-label">
          Expiry Date
        </label>
        <input
          type="text"
          className="form-control"
          name="expiryDate"
          id="expiryDate"
          placeholder="mm / yy"
          defaultValue={expiryDate}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="CVV" className="form-label">
          CVV
        </label>
        <input
          type="text"
          className="form-control"
          name="CVV"
          id="CVV"
          placeholder="x x x"
          defaultValue={CVV}
        />
      </div>
      <div className="col-md-12">
        <Button onClick={paymentHandler}>Make payment</Button>
      </div>
    </form>
  );
};

export default PaymentForm;
