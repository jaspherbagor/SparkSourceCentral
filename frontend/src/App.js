import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/navbar_and_footer/navbar";
import Footer from "./component/navbar_and_footer/footer";
import Routeway from "./component/route/route";
const App = () => {
  return (

    <>
      <BrowserRouter>
        <Navbar/>
        <Routeway/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
