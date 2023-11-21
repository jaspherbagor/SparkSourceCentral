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
                                        <img src={currentElement.Image} alt={currentElement.Title} className="img-fluid cart_product_img" />
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-4 d-flex align-items-center justify-content-center">
                                        <h3 className="fw-medium text-center">{currentElement.Title}</h3>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-4 d-flex align-items-center justify-content-center">
                                        <p className="fw-medium fs-4 my-2">₱{currentElement.Price.toLocaleString()}.00</p>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-4 d-flex align-items-center justify-content-center">
                                        <div className="quantity input-group">
                                            <button className="decrementQuantity btn btn-danger" onClick={() => decrementQuantity(currentElement)}>-</button>
                                            <input type="number" className="item_input_field form-control text-center w-25 py-1 px-0" value={currentElement.qty} onChange={(e) => handleQuantityChange(e, currentElement)}/>
                                            <button className="incrementQuantity btn btn-success" onClick={() => incrementQuantity(currentElement)}>+</button>            
                                            </div>
                                        </div>
                                    <div className="col-lg-2 col-md-2 col-sm-4 d-flex align-items-center justify-content-center">
                                        <h4 className="subtotal mt-3 fw-bold"> ₱{(currentElement.Price * currentElement.qty).toLocaleString()}.00</h4>
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
                        <div className="container p-2 text-center mb-5">
                            <h2 className="totalprice fw-bold mb-3">Total: ₱{Totalprice.toLocaleString()}.00</h2>
                            <button className="checkout text-white px-3 py-2 fw-semibold" type="button">Checkout</button>
                        </div>
                        
                    </>
                }
                
            </div>
        </>
    )
}

export default CartPage;