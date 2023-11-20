import React from "react";
import "../styles/cart.css"
import { Link } from "react-router-dom";

const CartPage = ({cart, setCart}) => {
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
    return (
        <>
            <div className="cartcontainer">
                {
                    cart.length === 0 && 
                    <div className="emptycart container-fluid text-center p-5">
                        <h2 className="empty fw-bolder">Cart is Empty</h2>
                        <Link to="/product" className="emptycartbtn btn btn-danger">Shop Now</Link>
                    </div>
                }
                <div className="container-fluid px-4 py-5 w-100">
                    {
                        cart.map((currentElement) => 
                        {
                           return(
                                <div className="container-fluid cart_item_container mb-4">
                                    
                                    <div className="cart_item row container-fluid px-2 py-4" key={currentElement.id}>
                                        <div className="col-lg-1 col-md-1 col-sm-1 d-flex align-items-center justify-content-center">
                                            <button onClick={() => removeProduct(currentElement)} className="btn btn-danger"><i className="bi bi-x-lg"></i></button>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-6 img_box">
                                            <img src={currentElement.Image} alt={currentElement.Title} className="img-fluid cart_product_img" />
                                        </div>
                                        <div className="detail col-lg-7 col-md-7 col-sm-7 pe-3">
                                            <div className="info container">
                                                <h4>{currentElement.Category}</h4>
                                                <h3>{currentElement.Title}</h3>
                                                <p>₱{currentElement.Price.toLocaleString()}</p>
                                                <div className="qty">
                                                    <button className="incrementQuantity btn btn-success" onClick={() => incrementQuantity(currentElement)}>+</button>
                                                    <input type="number" className="text-center py-1" value={currentElement.qty} onChange={(e) => handleQuantityChange(e, currentElement)}/>
                                                    <button className="decrementQuantity btn btn-warning" onClick={() => decrementQuantity(currentElement)}>-</button>
                                                </div>
                                            
                                                <h4 className="subtotal">Sub Total: ₱{(currentElement.Price * currentElement.qty).toLocaleString()}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           ) 
                        })
                    }
                    
                </div>
                {
                    cart.length > 0 &&
                    <>
                        <div className="container p-2 text-center">
                            <h2 className="totalprice fw-bold">Total: ₱{Totalprice.toLocaleString()}</h2>
                            <button className="checkout btn btn-success px-3 py-2 fw-semibold" type="button">Checkout</button>
                        </div>
                        
                    </>
                }
                
            </div>
        </>
    )
}

export default CartPage;