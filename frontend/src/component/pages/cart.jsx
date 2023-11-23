import React, {useState, useEffect} from "react";
import "../styles/cart.css"
import { Link } from "react-router-dom";
import {saveCartItems, getCartItems} from "../resources/localStorageUtils"

const CartPage = ({cart, setCart, userToken}) => {
    //increase qty
    const incrementQuantity = (product) => 
    {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((currentElement) => 
        {
            return currentElement.id === product.id ? {...exist, qty:exist.qty + 1} : currentElement
        }))
    }
    //decrease qty
    const decrementQuantity = (product) => 
    {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((currentElement) => 
        {
            return currentElement.id === product.id ? {...exist, qty:exist.qty - 1} : currentElement
        }))
    }
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
        const newQty = parseInt(event.target.value);
        if (!isNaN(newQty) && newQty >= 0) {
            setCart(cart.map((currentElement) =>
            currentElement.id === product.id ? { ...currentElement, qty: newQty } : currentElement
            ));
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
    
      // Save cart items to local storage only when the user modifies the cart
    useEffect(() => {
        saveCartItems(cart);
    }, [cart]);

    // Load cart items from local storage only when the component mounts
    useEffect(() => {
        const savedCart = getCartItems();
        if (savedCart && savedCart.length > 0 && cart.length === 0) {
            setCart(savedCart);
        }
    }, [cart, setCart]);

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
        toastLabel.innerText = "Error";
        toastLabel.style.color = "#FFFFFF";
        toastMessage.innerText ='You need to Login/Register to Checkout!';
        toastButtons.innerHTML= `
            <div class="d-flex align-items-baseline justify-content-center">
            <a href="/login" class="btn btn-primary btn-outline-warning me-5">LOGIN</a>
            <a href="/register" class="btn btn-success btn-outline-dark">REGISTER</a>
            </div>
        `;
        toastMessage.style.color = "#000000";
        toastLive.style.border = "2.5px solid #fca311";
        toastHeader.style.background = "#14213d";
        }
    
        toast.show();
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
                                        <h4 className="subtotal mt-3 fw-bold"> ₱{(currentElement.Price * currentElement.qty).toLocaleString()}</h4>
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
                            <h2 className="totalprice fw-bold mb-3">Total: ₱{Totalprice.toLocaleString()}</h2>
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
        </>
    )
}

export default CartPage;