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
import Blog from "../pages/blog";
import Blog2 from "../pages/blog2";
import Blog3 from "../pages/blog3";
import FAQs from "../pages/FAQs";

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
            <Route path="/blog" element={<Blog/>} />
            <Route path="/10-Bad-Habits-that-Waste-Energy-in-Your-Home" element={<Blog2/>}/>
            <Route path="/10-Energy-Saving-Tips-at-Home-to-Help-the-Earth-and-Lower-Your-Bills" element={<Blog3/>} />
            <Route path="/faqs" element={<FAQs/>} />                     
        </Routes>
    )
}

export default Routeway;