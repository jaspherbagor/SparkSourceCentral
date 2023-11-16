import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
const Routeway = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default Routeway;