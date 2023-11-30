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
        Province: '',
        ZipCode: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const data = (e) => {
        const { name, value } = e.target;
        setUser({...users, [name]: value});
    };

    const sendData = async (e) => {
        e.preventDefault();
        const orderDetails = savedCart.map((item) => ({
            title: item.Title,
            price: item.Price,
            quantity: item.qty,
            subtotal: item.Price * item.qty
        }));
    
        const orderTotal = totalPrice; // Assuming totalPrice is already calculated
    
        const dataToSend = {
            FullName: users.FullName,
            Email: users.Email,
            Address: users.Address,
            ContactNumber: users.ContactNumber,
            City: users.City,
            Province: users.Province,
            ZipCode: users.ZipCode,
            orderDetails: orderDetails, // Include cart items, quantities, and subtotals
            orderTotal: orderTotal // Include the total amount
        };

        // Validation: Check if any required field is empty
        if (
            !users.FullName ||
            !users.Email ||
            !users.Address ||
            !users.ContactNumber ||
            !users.City ||
            !users.Province ||
            !users.ZipCode
        ) {
            // alert("Please fill in all required fields");
            const toastLive = document.getElementById('liveToast');
            const toastLabel = document.getElementById('toastLabel');
            const toastMessage = document.getElementById('toastMessage');
            const toastHeader = document.getElementById('toastHeader');
            const toast = new window.bootstrap.Toast(toastLive);
            toastLabel.innerText = "FAILED";
            toastLabel.style.color = "#FFFFFF";
            toastMessage.innerText ='Kindly complete all mandatory fields.';
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
            body: JSON.stringify(dataToSend)
        };

        try {
            const res = await fetch('https://sparksource-central-checkout-default-rtdb.firebaseio.com/Message.json', options);
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
                toastMessage.innerText ='Order Placed Successfully';
                toastMessage.style.color = "#000000";
                toastLive.style.border = "2.5px solid #fca311";
                toastHeader.style.background = "#14213d";
                toast.show();
                setUser({ // Reset the form fields after successful submission
                    FullName: '',
                    Email: '',
                    Address: '',
                    ContactNumber: '',
                    City: '',
                    Province: '',
                    ZipCode: ''
                });
                setSubmitted(true); // Update the submission status
                setTimeout(function() {
                    window.location.href = "/";
                }, 2500); // 2500 milliseconds (2.5 seconds) delay before redirecting
                localStorage.removeItem('cartItems');
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
                                    <div className="col-md-12">
                                        <h3 className="fw-bold">Shipping Address</h3>
                                        <label htmlFor="FullName" className="text-black"><i className="bi bi-person"></i> Full Name</label>
                                        <input type="text" className="form-control mb-3" value={users.FullName} onChange={data} id="FullName" name="FullName"/>
                                        <label htmlFor="Email" className="text-black"><i className="bi bi-envelope"></i> Email</label>
                                        <input type="text" className="form-control mb-3" value={users.Email} onChange={data} id="Email" name="Email"/>
                                        <label htmlFor="Address" className="text-black"><i className="bi bi-geo-alt"></i> Address</label>
                                        <input type="text" className="form-control mb-3" value={users.Address} onChange={data} id="Address" name="Address"/>
                                        <label htmlFor="ContactNumber" className="text-black"><i className="bi bi-telephone"></i> Contact Number</label>
                                        <input type="text" className="form-control mb-3" value={users.ContactNumber} onChange={data}  id="ContactNumber" name="ContactNumber"/>
                                        <label htmlFor="City" className="text-black"><i className="bi bi-building"></i> City</label>
                                        <input type="text" className="form-control mb-3" value={users.City} onChange={data} id="City" name="City"/>

                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="Province" className="text-black">Province</label>
                                            <input type="text" className="form-control mb-3" value={users.Province} onChange={data} id="Province" name="Province"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="ZipCode" className="text-black">Zip/Postal Code</label>
                                            <input type="text" className="form-control mb-3" value={users.ZipCode} onChange={data} id="ZipCode" name="ZipCode"/>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h2 className="fw-bolder mt-4">Mode of Payment</h2>
                                    <div className="form-check">
                                        <input className="form-check-input" defaultChecked type="radio" name="cashondelivery" id="cashondelivery"/>
                                        <label className="form-check-label text-black" for="cashondelivery">
                                            <img src="../images/CASH-ON-DELIVERY.png" />
                                        </label>
                                    </div>
                                </div>
                                

                                <div className="d-grid text-start mt-4">
                                    <button type="submit" className="btn place_order_btn fw-semibold px-3 py-2" onClick={sendData}>
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
            {/* Back to Top Button */}
            <a href="#" id="back-to-top" className="btn position-fixed text-decoration-none fs-5"><i className="bi bi-arrow-up-short"></i></a>
            {/* Back to Top Button */}
        </>
    )
}
export default Checkout;