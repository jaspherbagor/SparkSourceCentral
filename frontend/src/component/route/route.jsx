import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";

const Routeway = ({product, setProduct}) => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/product" element={<Product product={product} setProduct={setProduct}/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    )
}

export default Routeway;