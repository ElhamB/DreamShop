import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartBox from "../../components/Cart/CartBox";
import ContactForm from "../../components/Cart/ContactForm";
import { addShippingInfo } from "../../store/Payment";
import './CheckOutPage.css'
export const CheckOutPage = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const formRef=useRef(null);
    const checkoutHandler = () => {
        var data = new FormData(formRef.current);
        let formObject = Object.fromEntries(data.entries());
        dispatch(addShippingInfo(formObject));
        navigate("/payment")       
    }
    return (
        <div className="container my-5">
            <div className="row cart-page">
                <div className="col-md-8">
                    <h1>Checkout</h1>
                       <ContactForm ref={formRef}/>
                </div>
                <div className="col-md-4">
                    <section className="order-sec ">
                        <CartBox onCheckout={checkoutHandler} />
                     
                    </section>
                </div>
            </div>
        </div>

    )
}
