import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
const Routeway = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
        </Routes>
    )
}

export default Routeway;