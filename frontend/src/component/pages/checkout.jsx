import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../styles/checkout.css";
import { getCartItems} from "../resources/localStorageUtils";

const Checkout = () => {
    const [savedCart, setSavedCart] = useState([]);
  
    useEffect(() => {
      const retrievedCart = getCartItems();
      if (Array.isArray(retrievedCart)) {
        setSavedCart(retrievedCart);
      }
    }, []);
  
    const totalPrice = savedCart.reduce(
        (total, item) => total + item.Price * item.qty,
        0
    );

    // Checkout Form
    const [users, setUser] = useState({
        FullName: '',
        Email: '',
        Address: '',
        ContactNumber: '',
        City: '',
        Provice: '',
        ZipCode: '',
        CardName: '',
        CardNumber: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const data = (e) => {
        const { name, value } = e.target;
        setUser({...users, [name]: value});
    };

    const sendData = async (e) => {
        e.preventDefault();

        // Validation: Check if any required field is empty
        if (
            !users.FirstName ||
            !users.LastName ||
            !users.ContactNumber ||
            !users.ZipCode ||
            !users.Email ||
            !users.Address ||
            !users.Message
        ) {
            // alert("Please fill in all required fields");
            const toastLive = document.getElementById('liveToast');
            const toastLabel = document.getElementById('toastLabel');
            const toastMessage = document.getElementById('toastMessage');
            const toastHeader = document.getElementById('toastHeader');
            const toast = new window.bootstrap.Toast(toastLive);
            toastLabel.innerText = "FAILED";
            toastLabel.style.color = "#FFFFFF";
            toastMessage.innerText ='Please Fill All The Required Information!';
            toastMessage.style.color = "red";
            toastLive.style.border = "2.5px solid red";
            toastHeader.style.background = "red";
            toast.show();
            return;
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FirstName: users.FirstName,
                LastName: users.LastName,
                ContactNumber: users.ContactNumber,
                ZipCode: users.ZipCode,
                Email: users.Email,
                Address: users.Address,
                Message: users.Message
            })
        };

        try {
            const res = await fetch('https://spark-source-central-contact-default-rtdb.firebaseio.com//Message.json', options);
            console.log(res);
            const toastLive = document.getElementById('liveToast');
            const toastLabel = document.getElementById('toastLabel');
            const toastMessage = document.getElementById('toastMessage');
            const toastHeader = document.getElementById('toastHeader');
            const toast = new window.bootstrap.Toast(toastLive);

            if (res.ok) {
                // alert("Your Message Has Been Sent");
                toastLabel.innerText = "SUCCESS";
                toastLabel.style.color = "#FFFFFF";
                toastMessage.innerText ='Your Message Has Been Sent';
                toastMessage.style.color = "#000000";
                toastLive.style.border = "2.5px solid #fca311";
                toastHeader.style.background = "#14213d";
                toast.show();
                setUser({ // Reset the form fields after successful submission
                    FirstName: '',
                    LastName: '',
                    ContactNumber: '',
                    ZipCode: '',
                    Email: '',
                    Address: '',
                    Message: ''
                });
                setSubmitted(true); // Update the submission status
            } else {
                // alert("An Error Occurred");
                toastLabel.innerText = "ERROR";
                toastLabel.style.color = "#FFFFFF";
                toastMessage.innerText ='An Error Occured';
                toastMessage.style.color = "red";
                toastLive.style.border = "2.5px solid red";
                toastHeader.style.background = "red";
                toast.show();
            }
        } catch (error) {
            console.error("Error:", error);
            // alert("An Error Occurred");
            const toastLive = document.getElementById('liveToast');
            const toastLabel = document.getElementById('toastLabel');
            const toastMessage = document.getElementById('toastMessage');
            const toastHeader = document.getElementById('toastHeader');
            const toast = new window.bootstrap.Toast(toastLive);
            toastLabel.innerText = "ERROR";
            toastLabel.style.color = "#FFFFFF";
            toastMessage.innerText ='An Error Occured';
            toastMessage.style.color = "red";
            toastLive.style.border = "2.5px solid red";
            toastHeader.style.background = "red";
            toast.show();
        }
    };

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
                                        <label htmlFor="fullname" className="text-black"><i className="bi bi-person"></i> Full Name</label>
                                        <input type="text" className="form-control mb-3" id="fullname" name="fullname" placeholder="Juan M. Dela Cruz"/>
                                        <label htmlFor="email" className="text-black"><i className="bi bi-envelope"></i> Email</label>
                                        <input type="text" className="form-control mb-3" id="email" name="email" placeholder="juan@example.com"/>
                                        <label htmlFor="adr" className="text-black"><i className="bi bi-geo-alt"></i> Address</label>
                                        <input type="text" className="form-control mb-3" id="adr" name="address" placeholder="5A 395 Banawe Street"/>
                                        <label htmlFor="contactnumber" className="text-black"><i className="bi bi-telephone"></i> Contact Number</label>
                                        <input type="text" className="form-control mb-3" id="city" name="city" placeholder="09092347659"/>
                                        <label htmlFor="city" className="text-black"><i className="bi bi-building"></i> City</label>
                                        <input type="text" className="form-control mb-3" id="city" name="city" placeholder="Labason"/>

                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="province" className="text-black">Province</label>
                                            <input type="text" className="form-control mb-3" id="province" name="province" placeholder="Zamboanga Del Norte"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="zip" className="text-black">Zip/Postal Code</label>
                                            <input type="text" className="form-control mb-3" id="zip" name="zip" placeholder="7100"/>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <h3 className="fw-bold">Payment Details</h3>
                                        <label htmlFor="fname" className="text-black">Accepted Card</label>
                                        <div className="icon-container mb-3">
                                            <i className="fa-brands fa-cc-visa text-primary fs-2 me-2" ></i>
                                            <i className="fa-brands fa-cc-mastercard text-danger fs-2 me-2"></i>
                                            <i className="fa-brands fa-cc-jcb text-success fs-2 me-2"></i>
                                            <i className="fa-brands fa-cc-amex text-secondary fs-2 me-2"></i>
                                        </div>
                                        <label htmlFor="cname" className="text-black">Name on Card</label>
                                        <input type="text" className="form-control mb-3" id="cname" name="cardname" placeholder="John More Doe"/>
                                        <label htmlFor="ccnum" className="text-black">Credit card number</label>
                                        <input type="text" className="form-control mb-3" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                                        <label htmlFor="expmonth" className="text-black">Exp Month</label>
                                        <input type="text" className="form-control mb-3" id="expmonth" name="expmonth" placeholder="September"/>

                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="expyear" className="text-black">Exp Year</label>
                                            <input type="text" className="form-control mb-3" id="expyear" name="expyear" placeholder="2018"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="cvv" className="text-black">CVV</label>
                                            <input type="text" className="form-control mb-3" id="cvv" name="cvv" placeholder="352"/>
                                        </div>
                                    </div>
                                </div>

                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" defaultChecked name="sameadr" id="sameadr"/>
                                    <label className="form-check-label text-black" htmlFor="sameadr"> Shipping address same as billing</label>
                                </div>
                                <div className="d-grid text-start mt-4">
                                    <button type="submit" className="btn place_order_btn fw-semibold px-3 py-2">
                                        Place Order <i className="bi bi-lock-fill"></i> @ ₱<span>{totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="container my-4">
                            <h4 className="fw-bold">Order Details</h4>
                            <ul className="list-group">
                            {savedCart.map((item) => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <p>{item.Title} {"  "}
                                        <span className="badge bg-success rounded-pill">
                                        ₱{(item.Price * item.qty).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
                                    ₱{totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </b>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="toast-container position-fixed start-50 translate-middle p-2">
                    <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header" id="toastHeader">
                            <strong className="me-auto" id="toastLabel"></strong>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body fw-medium" id="toastMessage">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkout;