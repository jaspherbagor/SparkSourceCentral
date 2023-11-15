import React from "react";
import "./footer.css"
const Footer = () => {
    return(
        <>
            <footer className="footer container-fluid px-4 pt-5 pb-2 bg-dark">
                <div className="row flex-wrap align-items-top justify-content-space-between pb-5">
                    <div className="footer_logo col-lg-2 col-md-4 col-sm-4 col-12 text-start text-white px-2 py-2">
                        <a href="index.html">
                            <img src="../images/footer_logo.svg" className="logo-img mt-4" alt=""/>
                        </a>
                    </div>
                    <div className="customer_service col-lg-2 col-md-4 col-sm-4 col-12 text-white text-start px-2 py-2">
                        <h5 className="fw-semibold mb-3">CUSTOMER SERVICE</h5>
                        <p>
                            <a href="" className="text-decoration-none text-white">Contact Us</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">Shipping Information</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">Return & Refund</a></p>
                        <p>
                            <a href="" className="text-decoration-none text-white">FAQs</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">Privacy Policy</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">Terms and Condition</a>
                        </p>
                    </div>
                    <div className="categories col-lg-2 col-md-4 col-sm-4 col-12 text-white text-start px-2 py-2">
                        <h5 className="fw-semibold mb-3">CATEGORIES</h5>
                        <p>
                            <a href="" className="text-decoration-none text-white">Tools</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">Protection</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">Lighting</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">Wires</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">Outlets</a>
                        </p>
                    </div>
                    <div className="quick_links col-lg-2 col-md-4 col-sm-4 col-12 text-white text-start px-2 py-2">
                        <h5 className="fw-semibold mb-3">QUICK LINKS</h5>
                        <p>
                            <a href="" className="text-decoration-none text-white">Home</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">Products</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">Account</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">Blog</a>
                        </p>
                    </div>
                    <div className="my_account col-lg-2 col-md-4 col-sm-4 col-12 text-white text-start px-2 py-2">
                        <h5 className="fw-semibold mb-3">MY ACCOUNT</h5>
                        <p>
                            <a href="" className="text-decoration-none text-white">Cart</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">Checkout</a>
                        </p>
                        <p>
                            <a href="" className="text-decoration-none text-white">My Wishlist</a>
                        </p>
                    </div>
                    
                    <div className="social_links col-lg-2 col-md-4 col-sm-4 col-12 text-white text-start px-2 py-2">
                        <h5 className="fw-semibold mb-3">SOCIAL LINKS</h5>
                        <div className="social_icons align-items-center justify-content-start">
                            <a href="" className="mx-2 text-white">
                                <i className="bi bi-facebook fs-4"></i>
                            </a>
                            <a href="" className="mx-2 text-white">
                                <i className="bi bi-instagram fs-4"></i>
                            </a>
                            <a href="" className="mx-2 text-white">
                                <i className="bi bi-tiktok fs-4"></i>
                            </a>
                            <a href="" className="mx-2 text-white">
                                <i className="bi bi-envelope fs-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer_copyright container-fluid px-4 pt-4 mt-4 pb-0">
                    <p className="text-white my-auto text-center">Copyright © 2023 SparkSource Central. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;