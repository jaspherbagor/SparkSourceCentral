import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return(
        <>
            <footer className="footer container-fluid px-4 pt-5 pb-3">
                <div className="row flex-wrap align-items-top justify-content-space-between pb-1">
                    <div className="footer_logo col-lg-2 col-md-4 col-sm-4 col-12 text-start text-white px-2 py-2">
                        <Link to="/">
                            <img src="../images/footer_logo.svg" className="logo-img mt-4" alt="logo"/>
                        </Link>
                    </div>
                    <div className="customer_service col-lg-2 col-md-4 col-sm-4 col-12 text-white text-start px-2 py-2">
                        <h5 className="fw-semibold mb-3">CUSTOMER SERVICE</h5>
                        <p>
                            <Link to="/contact" className="text-decoration-none text-white footer_link">Contact Us</Link>
                        </p>
                        <p>
                            <Link to="/termsandcondition" className="footer_link text-decoration-none text-white">Shipping Policy</Link>
                        </p>
                        <p>
                            <Link to="/termsandcondition#returnsandrefunds" className="footer_link text-decoration-none text-white">Return & Refund</Link></p>
                        <p>
                            <a href="" className="footer_link text-decoration-none text-white">FAQs</a>
                        </p>
                        <p>
                            <Link to="/termsandcondition" className="footer_link text-decoration-none text-white">Privacy Policy</Link>
                        </p>
                        <p>
                            <Link to="/termsandcondition" className="footer_link text-decoration-none text-white">Terms and Condition</Link>
                        </p>
                    </div>
                    <div className="categories col-lg-2 col-md-4 col-sm-4 col-12 text-white text-start px-2 py-2">
                        <h5 className="fw-semibold mb-3">CATEGORIES</h5>
                        <p>
                            <a href="" className="footer_link text-decoration-none text-white">Tools & Accessories</a>
                        </p>
                        <p>
                            <a href="" className="footer_link text-decoration-none text-white">Safety & Protection</a>
                        </p>
                        <p>
                            <a href="" className="footer_link text-decoration-none text-white">Lighting Fixtures</a>
                        </p>
                        <p>
                            <a href="" className="footer_link text-decoration-none text-white">Switch & Outlet</a>
                        </p>
                    </div>
                    <div className="quick_links col-lg-2 col-md-4 col-sm-4 col-12 text-white text-start px-2 py-2">
                        <h5 className="fw-semibold mb-3">QUICK LINKS</h5>
                        <p>
                            <Link to="/" className="footer_link text-decoration-none text-white">Home</Link>
                        </p>
                        <p>
                            <Link to="/product" className="footer_link text-decoration-none text-white">Products</Link>
                        </p>
                        <p>
                            <a href="" className="footer_link text-decoration-none text-white">Account</a>
                        </p>
                        <p>
                            <a href="" className="footer_link text-decoration-none text-white">Blog</a>
                        </p>
                    </div>
                    <div className="my_account col-lg-2 col-md-4 col-sm-4 col-12 text-white text-start px-2 py-2">
                        <h5 className="fw-semibold mb-3">MY ACCOUNT</h5>
                        <p>
                            <Link to="/cart" className="footer_link text-decoration-none text-white">Cart</Link>
                        </p>
                        <p>
                            <Link to="/wishlist" className="footer_link text-decoration-none text-white">My Wishlist</Link>
                        </p>
                    </div>
                    
                    <div className="social_links col-lg-2 col-md-4 col-sm-4 col-12 text-white text-start px-2 py-2">
                        <h5 className="fw-semibold mb-3">SOCIAL LINKS</h5>
                        <div className="social_icons align-items-center justify-content-start">
                            <a href="" className="mx-2 text-white">
                                <i className="footer_link bi bi-facebook fs-4"></i>
                            </a>
                            <a href="" className="mx-2 text-white">
                                <i className="footer_link bi bi-instagram fs-4"></i>
                            </a>
                            <a href="" className="mx-2 text-white">
                                <i className="footer_link bi bi-tiktok fs-4"></i>
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