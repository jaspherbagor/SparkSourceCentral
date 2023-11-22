import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import CartPage from "../pages/cart";
import Contact from "../pages/contact";
import Checkout from "../pages/checkout";
const Routeway = ({product, setProduct, detail, view, close, setClose, cart, setCart, addToCart, userToken}) => {
    return(
        
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart} userToken={userToken}/>}/>
            <Route path="/product" element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart}/>}/>
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart}/>}/>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/checkout" element={<Checkout cart={cart}/>}/>
            {/* {
                userToken ? 
                
                : ""
            } */}
            
            
        </Routes>
    )
}

export default Routeway;