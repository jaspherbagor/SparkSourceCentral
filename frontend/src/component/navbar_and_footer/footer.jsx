import React, {useState} from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import AllProducts from "../resources/Allproducts";
const Footer = ({setProduct, filteredProducts}) => {
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const filterProducts = (selectedCategory) => 
    {
        if (selectedCategory === "All Categories") {
            setProduct(AllProducts);
        } else {
            const filteredProducts = AllProducts.filter((product) => {
                return product.Category === selectedCategory;
            });
            setProduct(filteredProducts);
        }
        setSelectedCategory(selectedCategory);
    };
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
                            <Link to="/faqs" className="footer_link text-decoration-none text-white">FAQs</Link>
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
                        <p className="footer_link text-decoration-none text-white" onClick={() => {
                            localStorage.setItem('search', '')
                            filterProducts("Tools & Accessories")}}>
                            Tools & Accessories
                        </p>

                        <p className="footer_link text-decoration-none text-white" onClick={() => {
                            localStorage.setItem('search', '')
                            filterProducts("Safety & Protection")}}>
                            Safety & Protection
                        </p>

                        <p className="footer_link text-decoration-none text-white" onClick={() => {
                            localStorage.setItem('search', '')
                            filterProducts("Lighting Fixtures")}}>
                            Lighting Fixtures
                        </p>

                        <p className="footer_link text-decoration-none text-white" onClick={() => {
                            localStorage.setItem('search', '')
                            filterProducts("Switches & Outlets")}}>
                            Switches & Outlets
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
                            <Link to="/blog" className="footer_link text-decoration-none text-white">Blog</Link>
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
                            <a href="https://www.facebook.com/jas.bagor/" target="_blank" className="mx-2 text-white">
                                <i className="footer_link bi bi-facebook fs-4"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCTNYaiZxQGNiNLFg8VosSpw" target="_blank" className="mx-2 text-white">
                                <i className="footer_link bi bi-youtube fs-4"></i>
                            </a>
                            <a href="https://www.tiktok.com/@jasbgr" target="_blank" className="mx-2 text-white">
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