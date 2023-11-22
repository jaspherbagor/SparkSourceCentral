import React from "react";
import { Link } from "react-router-dom";
import "../styles/checkout.css"
const Checkout = ({cart}) => {
    return(
        <>
            <div className="container-fluid px-4 py-5">
                <div className="row">
                    <div className="col-md-9">
                        <div className="container">
                            <form>

                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fw-bold">Billing Address</h3>
                                        <label for="fullname" className="text-black"><i className="bi bi-person"></i> Full Name</label>
                                        <input type="text" className="form-control mb-3" id="fullname" name="fullname" placeholder="John M. Doe"/>
                                        <label for="email" className="text-black"><i className="bi bi-envelope"></i> Email</label>
                                        <input type="text" className="form-control mb-3" id="email" name="email" placeholder="john@example.com"/>
                                        <label for="adr" className="text-black"><i className="bi bi-geo-alt"></i> Address</label>
                                        <input type="text" className="form-control mb-3" id="adr" name="address" placeholder="5A 395 Banawe Street"/>
                                        <label for="contactnumber" className="text-black"><i class="bi bi-telephone"></i> Contact Number</label>
                                        <input type="text" className="form-control mb-3" id="city" name="city" placeholder="09092347659"/>
                                        <label for="city" className="text-black"><i className="bi bi-building"></i> City</label>
                                        <input type="text" className="form-control mb-3" id="city" name="city" placeholder="Labason"/>

                                        <div className="row">
                                        <div className="col-md-6">
                                            <label for="province" className="text-black">Province</label>
                                            <input type="text" className="form-control" id="province" name="province" placeholder="Zamboanga Del Norte"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="zip" className="text-black">Zip/Postal Code</label>
                                            <input type="text" className="form-control" id="zip" name="zip" placeholder="7100"/>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <h3 className="fw-bold">Payment Details</h3>
                                        <label for="fname" className="text-black">Accepted Card</label>
                                        <div className="icon-container mb-3">
                                            <i className="fa-brands fa-cc-visa text-primary fs-3 me-2" ></i>
                                            <i className="fa-brands fa-cc-mastercard text-danger fs-3 me-2"></i>
                                            <i className="fa-brands fa-cc-jcb text-success fs-3 me-2"></i>
                                            <i className="fa-brands fa-cc-amex text-secondary fs-3 me-2"></i>
                                        </div>
                                        <label for="cname" className="text-black">Name on Card</label>
                                        <input type="text" className="form-control mb-3" id="cname" name="cardname" placeholder="John More Doe"/>
                                        <label for="ccnum" className="text-black">Credit card number</label>
                                        <input type="text" className="form-control mb-3" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                                        <label for="expmonth" className="text-black">Exp Month</label>
                                        <input type="text" className="form-control mb-3" id="expmonth" name="expmonth" placeholder="September"/>

                                        <div className="row">
                                        <div className="col-md-6">
                                            <label for="expyear" className="text-black">Exp Year</label>
                                            <input type="text" className="form-control mb-3" id="expyear" name="expyear" placeholder="2018"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="cvv" className="text-black">CVV</label>
                                            <input type="text" className="form-control mb-3" id="cvv" name="cvv" placeholder="352"/>
                                        </div>
                                    </div>
                                </div>

                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" checked="checked" name="sameadr" id="sameadr"/>
                                    <label className="form-check-label text-black" for="sameadr"> Shipping address same as billing</label>
                                </div>
                                <div className="d-grid text-start mt-4">
                                    <button type="submit" className="btn place_order_btn fw-semibold px-3 py-2">
                                        Place Order <i class="bi bi-lock-fill"></i> @ ₱<span>
                                        {cart.reduce(
                                        (total, item) => total + item.Price * item.qty,
                                        0
                                        )}
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="container my-4">
                            <h4 className="fw-bold">Order Details</h4>
                            <ul className="list-group">
                            {cart.map((item) => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <p>{item.Title} {"  "}
                                    <span className="badge bg-success rounded-pill">
                                    ₱{item.Price}
                                    </span>
                                    </p>
                                </li>
                                ))}
                            </ul>
                            <hr/>
                            <p className="text-end fw-semibold">
                            Total Amount:{" "}
                            <span className="price text-black">
                            <b>
                                ₱
                                {cart.reduce(
                                (total, item) => total + item.Price * item.qty,
                                0
                                )}
                            </b>
                            </span>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkout;