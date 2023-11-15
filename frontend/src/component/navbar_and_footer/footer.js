import React from "react";
import "./footer.css"
const Footer = () => {
    return(
        <>
            <footer class="footer container-fluid px-4 py-4 bg-dark">
                <div class="row flex-wrap align-items-top justify-content-space-center">
                    <div class="col-lg-2 col-md-4 col-sm-4 col-12 text-center text-white px-2 footer-text-and-logo">
                        <a href="index.html">
                            {/* <img src="./logo-img.png" class="logo-img mt-4" alt=""> */}
                        </a>
                        <p class="mt-2">Your Source for Electrical Excellence</p>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-4 col-12 customer-service text-white text-start px-2">
                        <h5 class="fw-semibold mb-3">CUSTOMER SERVICE</h5>
                        <p>
                            <a href="" class="text-decoration-none text-white">Contact Us</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">Shipping Information</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">Return & Refund</a></p>
                        <p>
                            <a href="" class="text-decoration-none text-white">FAQs</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">Privacy Policy</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">Terms and Condition</a>
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-4 col-12 quick-links text-white text-start px-2">
                        <h5 class="fw-semibold mb-3">QUICK LINKS</h5>
                        <p>
                            <a href="" class="text-decoration-none text-white">Home</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">Products</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">Account</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">Blog</a>
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-4 col-12 quick-links text-white text-start px-2">
                        <h5 class="fw-semibold mb-3">MY ACCOUNT</h5>
                        <p>
                            <a href="" class="text-decoration-none text-white">Login</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">Logout</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">My Cart</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">My Wishlist</a>
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-4 col-12 quick-links text-white text-start px-2">
                        <h5 class="fw-semibold mb-3">CATEGORIES</h5>
                        <p>
                            <a href="" class="text-decoration-none text-white">Tools</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">Protection</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">Lighting</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">Wires</a>
                        </p>
                        <p>
                            <a href="" class="text-decoration-none text-white">Outlets</a>
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-4 col-12 text-white text-start social-links px-2">
                        <h5 class="fw-semibold mb-3">SOCIAL LINKS</h5>
                        <div class="social-icons d-flex align-items-center justify-content-start">
                            <a href="" class="mx-2 text-white">
                                <i class="bi bi-facebook fs-4"></i>
                            </a>
                            <a href="" class="mx-2 text-white">
                                <i class="bi bi-instagram fs-4"></i>
                            </a>
                            <a href="" class="mx-2 text-white">
                                <i class="bi bi-tiktok fs-4"></i>
                            </a>
                            <a href="" class="mx-2 text-white">
                                <i class="bi bi-envelope fs-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer_copyright container-fluid px-4 pt-4 pb-0">
                    <p class="text-white my-auto text-center">Copyright © 2023 SparkSource Central. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;