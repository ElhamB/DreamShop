import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'

const ContactForm = forwardRef((prop,ref) => {
const shippingInfo=useSelector(shipInfo=>shipInfo.payment.shippingInfo);
const {firstName,lastName,address, city,state,zip}=shippingInfo;

  return (
    <form ref={ref} className="row g-3 mb-4">
    <h6>Contact information</h6>
    <div className="col-md-6">
        <label htmlFor="Firstname" className="form-label">First name</label>
        <input type="text" className="form-control"name='Firstname' id="Firstname" defaultValue={firstName}  />
    </div>
    <div className="col-md-6">
        <label htmlFor="Lastname" className="form-label">Last name</label>
        <input type="text" className="form-control" name='Lastname' id="Lastname" defaultValue={lastName} />
    </div>
   
    <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">State</label>
        <select id="inputState" name='state' defaultValue={state} className="form-select">
            <option>Choose...</option>
            <option>Drenthe</option>
            <option>North Holland</option>
            <option>Utrecht</option>
            <option>Zeeland</option>
        </select>
    </div>
    <div className="col-md-4">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input type="text" defaultValue={city} name='city' className="form-control" id="inputCity" />
    </div>
    <div className="col-md-4">
        <label htmlFor="inputZip" className="form-label">Postal code</label>
        <input type="text" defaultValue={zip} name="zip" className="form-control" id="inputZip" />
    </div>
    <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="inputAddress" name="address" defaultValue={address} placeholder="1234 Main St" />
    </div>
</form>
  )
}
)

export default ContactForm
