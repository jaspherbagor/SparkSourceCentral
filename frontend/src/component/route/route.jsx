import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import CartPage from "../pages/cart";

const Routeway = ({product, setProduct, detail, view, close, setClose}) => {
    return(
        <Routes>
            <Route exact path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose}/>}/>
            <Route path="/product" element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
        </Routes>
    )
}

export default Routeway;