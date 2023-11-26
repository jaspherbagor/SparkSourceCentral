import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import CartPage from "../pages/cart";
import Contact from "../pages/contact";
import Checkout from "../pages/checkout";
import WishlistPage from "../pages/wishlist";
import TermsAndCondition from "../pages/terms_and_condition";
const Routeway = ({product, setProduct, detail, view, close, setClose, cart, setCart, addToCart, userToken, wishlist, setWishlist, addToWishlist}) => {
    return(
        
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart} userToken={userToken} addToWishlist={addToWishlist}/>}/>
            <Route path="/product" element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart} addToWishlist={addToWishlist} />}/>
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} userToken={userToken}/>}/>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/checkout" element={<Checkout cart={cart}/>}/>
            <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} setWishlist={setWishlist} addToCart={addToCart}/>}/> 
            <Route path="/termsandcondition" element={<TermsAndCondition/>} />                     
        </Routes>
    )
}

export default Routeway;