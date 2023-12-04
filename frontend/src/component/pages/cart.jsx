import React, {useState, useEffect} from "react";
import "../styles/cart.css"
import { Link } from "react-router-dom";
import {saveCartItems, getCartItems} from "../resources/localStorageUtils"

const CartPage = ({cart, setCart, userToken}) => {

    //decrease qty
    const decrementQuantity = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty > 0) {
          setCart(cart.map((currentElement) =>
            currentElement.id === product.id ?
            { ...exist, qty: Math.max(0, exist.qty - 1) } 
            : currentElement
          ));
        }
      };
    //remove cart product
    const removeProduct = (product) => 
    {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })
        if(exist.qty > 0) 
        {
            setCart(cart.filter((x) =>
            {
                return  x.id !==  product.id
            }))
        }
    }
    // handle quantity change
    const handleQuantityChange = (event, product) => {
        const inputValue = event.target.value.trim();
    
        if (inputValue === '' || /^\d+$/.test(inputValue)) {
            const newQty = inputValue === '' ? 0 : parseInt(inputValue, 10);
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, qty: isNaN(newQty) ? 0 : newQty } : item
            );
            setCart(updatedCart);
        }
    };

    //total price
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
    
    //Checkout Logic
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        
    // Update isLoggedIn state based on userToken prop
        setIsLoggedIn(userToken !== null && userToken !== undefined);
      }, [userToken]);

    // Load cart items from local storage only when the component mounts
    useEffect(() => {
        const savedCart = getCartItems();
        if (savedCart && savedCart.length > 0) {
        setCart(savedCart);
        }
    }, []);

    // Save cart items to local storage whenever the cart state changes
    useEffect(() => {
        saveCartItems(cart);
    }, [cart]);

    // Function to update cart when modifying items
    const updateCart = (updatedCart) => {
        setCart(updatedCart);
    };
      
    const handleCheckout = () => {
        const toastLive = document.getElementById('liveToast');
        const toastLabel = document.getElementById('toastLabel');
        const toastMessage = document.getElementById('toastMessage');
        const toastButtons = document.getElementById('toastButtons');
        const toastHeader = document.getElementById('toastHeader');
        const toast = new window.bootstrap.Toast(toastLive);
    
        if (isLoggedIn) {
        console.log("Proceeding to checkout");
        // Do not save cart items when checking out
        window.location.href = "/checkout";
        } else {
        setIsLoggedIn(false);
        toastLabel.innerText = "OPS!!";
        toastLabel.style.color = "#FFFFFF";
        toastMessage.innerText ='You need to Login/Register to Checkout!';
        toastButtons.innerHTML= `
            <div class="d-flex align-items-baseline justify-content-center">
            <a href="/login" class="btn btn-warning btn-outline-dark me-5">LOGIN</a>
            <a href="/register" class="btn btn-warning btn-outline-dark">REGISTER</a>
            </div>
        `;
        toastMessage.style.color = "#000000";
        toastLive.style.border = "2.5px solid #fca311";
        toastHeader.style.background = "#8b0000";
        }
    
        toast.show();
    };

    // Example incrementQuantity function with local storage update
    const incrementQuantity = (product) => {
        const updatedCart = cart.map((currentElement) =>
        currentElement.id === product.id
            ? { ...currentElement, qty: currentElement.qty + 1 }
            : currentElement
        );
        updateCart(updatedCart);
    };

    return (
        <>
            <div className="cartcontainer">
                {
                    cart.length === 0 && 
                    <div className="emptycart container-fluid text-center p-5">
                        <h2 className="empty fw-bolder mb-3">Cart is Empty</h2>
                        <Link to="/product" className="emptycartbtn btn text-white py-2 px-3 fw-semibold">Shop Now</Link>
                    </div>
                }
                <div className="container-fluid px-4 py-5 w-100">
                    {
                        cart.map((currentElement) => 
                        {
                           return(
                                
                            <div className="container-fluid px-2 py-4 cart_item_container mb-4" key={currentElement.id}>
                                <div className="row">
                                    <div className="col-lg-1 col-md-1 col-sm-4 d-flex align-items-center justify-content-center">
                                        <i onClick={() => removeProduct(currentElement)} className="bi bi-x-circle text-danger"></i>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-4 d-flex align-items-center justify-content-center">
                                        <img src={currentElement.Image} alt={currentElement.Title} className="img-fluid cart_product_img"/>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-4 d-flex align-items-center justify-content-center">
                                        <h3 className="fw-medium text-center">{currentElement.Title}</h3>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-4 d-flex align-items-center justify-content-center">
                                        <p className="fw-medium fs-4 my-2">₱{currentElement.Price}</p>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-4 d-flex align-items-center justify-content-center">
                                        <div className="quantity input-group">
                                            <button className="decrementQuantity btn btn-danger" onClick={() => decrementQuantity(currentElement)}>-</button>
                                            <input type="number" className="item_input_field form-control text-center w-25 py-1 px-0" value={currentElement.qty} onChange={(e) => handleQuantityChange(e, currentElement)}/>
                                            <button className="incrementQuantity btn btn-success" onClick={() => incrementQuantity(currentElement)}>+</button>            
                                            </div>
                                        </div>
                                    <div className="col-lg-2 col-md-2 col-sm-4 d-flex align-items-center justify-content-center">
                                        <h4 className="subtotal mt-3 fw-bold"> ₱{(currentElement.Price * currentElement.qty).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                                    </div>

                                </div>

                            </div>

                                

                           ) 
                        })
                    }
                    
                </div>
                {cart.length > 0 && (
                    <>
                        <div className="container p-2 text-center mb-5">
                            <h2 className="totalprice fw-bold mb-3">Total: ₱{Totalprice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
                            <button className="checkout text-white px-3 py-2 fw-semibold" onClick={handleCheckout} type="button">
                                Checkout
                            </button>
                        </div>
                    </>
                )}
                <div className="text-center">
                    <div className="toast-container position-fixed top-50 start-50 translate-middle p-2">
                        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header" id="toastHeader">
                                <strong className="me-auto" id="toastLabel"></strong>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div className="toast-body fw-medium" id="toastMessage">
                            </div>
                            <div className="toast-body fw-medium" id="toastButtons">

                            </div>
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

export default CartPage;