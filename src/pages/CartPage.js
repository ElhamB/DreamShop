import CartBox from "../components/Cart/CartBox";
import './CartPage.css'
export const CartPage = () => {

    return (
        <div className="container my-5">
            <div className="row cart-page">
                <div className="col-md-8">
                    <h1>Checkout</h1>
                    <section>
                        <form className="row g-3">
                            <h6>Contact information</h6>
                            <div className="col-md-6">
                                <label htmlFor="Firstname" className="form-label">First name</label>
                                <input type="text" className="form-control" id="Firstname" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="Lastname" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="Lastname" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">State</label>
                                <select id="inputState" className="form-select">
                                    <option>Choose...</option>
                                    <option>Drenthe</option>
                                    <option>North Holland</option>
                                    <option>Utrecht</option>
                                    <option>Zeeland</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="inputZip" className="form-label">Postal code</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                        </form>
                    </section>
                </div>
                <div className="col-md-4">
                    <section className="order-sec ">
                        <CartBox />
                        <button className="btn btn-default" >
                            <span className="text">Check out</span>
                        </button>
                    </section>
                </div>
            </div>
        </div>

    )
}
