import React from "react";
import '../styles/home.css';
import './Topproducts.js';
const Home = () => {
    return(
        <>
            <section class="hero_section container-fluid vh-100 d-flex align-items-center justify-content-center py-5 px-4">
                <div class="hero_text text-center py-2 px-2 mt-5 text-white">
                    <h1 class="fw-bolder mt-4 text-uppercase">Discover Excellence in Electrical Innovation</h1>
                    <p class="fw-medium mt-4 fs-3">Find High-Quality Electrical Products at Affordable Prices.</p>
                    <div class="text-center mb-2">
                        <a href="#"  class="btn shopnow_btn my-2 mx-2 px-4 py-3 fw-semibold">SHOP NOW</a>
                    </div>    
                </div>
            </section>

            {/* <!-- Featured Products Section --> */}
            <section class="top_products_section container-fluid py-5 px-4">
                <div class="container-fluid">
                    <h2 class="text-center fw-bolder fs-2 mt-5 mb-5 pb-5">Leading the charge with innovative electrical solutions, empowering you to <span class="hashtag">#EnergizeResponsibly</span>.</h2>
                    <h2 class="my-5 text-center fw-bolder">TOP PRODUCTS</h2>
                    <div class="row mt-5 row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">


                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                            <div class="card text-center">
                                <img src="../images/Safety_Shoes.jpg" class="card-img-top img-fluid" alt="Product Image"/>
                                <div class="card-body mt-0 pt-1">
                                    <p class="card-text text-secondary text-uppercase fs-6">Safety and Protection</p>
                                    <h5 class="card-title fw-medium text-uppercase">Safety Shoes</h5>
                                    <p class="card-price fw-bold fs-4">P99.99</p>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <a href="#" class="btn me-2 add_to_cart">
                                            <i class="bi bi-bag-plus"></i>
                                        </a>
                                        <a href="#" class="btn me-2 add_to_wishlist">
                                            <i class="bi bi-heart"></i>
                                        </a>
                                        <a href="#" class="btn view_detail">
                                            <i class="bi bi-eye"></i>
                                        </a>                      
                                    </div>                         
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                            <div class="card text-center">
                                <img src="../images/Cordless_Drill.jpg" class="card-img-top img-fluid" alt="Product Image"/>
                                <div class="card-body mt-0 pt-1">
                                    <p class="card-text text-secondary text-uppercase fs-6">Tools and Accessories</p>
                                    <h5 class="card-title fw-medium text-uppercase">Cordless Electrical Drill</h5>
                                    <p class="card-price fw-bold fs-4">P99.99</p>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <a href="#" class="btn me-2 add_to_cart">
                                            <i class="bi bi-bag-plus"></i>
                                        </a>
                                        <a href="#" class="btn me-2 add_to_wishlist">
                                            <i class="bi bi-heart"></i>
                                        </a>
                                        <a href="#" class="btn view_detail">
                                            <i class="bi bi-eye"></i>
                                        </a>                      
                                    </div>                         
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                            <div class="card text-center">
                                <img src="../images/Safety_Shoes.jpg" class="card-img-top" alt="Product Image"/>
                                <div class="card-body mt-0 pt-1">
                                    <p class="card-text text-secondary text-uppercase fs-6">Safety and Protection</p>
                                    <h5 class="card-title fw-medium text-uppercase p-0">Safety Shoes</h5>
                                    <p class="card-price fw-bold fs-4">P99.99</p>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <a href="#" class="btn me-2 add_to_cart">
                                            <i class="bi bi-bag-plus"></i>
                                        </a>
                                        <a href="#" class="btn me-2 add_to_wishlist">
                                            <i class="bi bi-heart"></i>
                                        </a>
                                        <a href="#" class="btn view_detail">
                                            <i class="bi bi-eye"></i>
                                        </a>                      
                                    </div>                         
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                            <div class="card text-center">
                                <img src="../images/Safety_Shoes.jpg" class="card-img-top" alt="Product Image"/>
                                <div class="card-body mt-0 pt-1">
                                    <p class="card-text text-secondary text-uppercase fs-6">Safety and Protection</p>
                                    <h5 class="card-title fw-medium text-uppercase p-0">Safety Shoes</h5>
                                    <p class="card-price fw-bold fs-4">P99.99</p>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <a href="#" class="btn me-2 add_to_cart">
                                            <i class="bi bi-bag-plus"></i>
                                        </a>
                                        <a href="#" class="btn me-2 add_to_wishlist">
                                            <i class="bi bi-heart"></i>
                                        </a>
                                        <a href="#" class="btn view_detail">
                                            <i class="bi bi-eye"></i>
                                        </a>                      
                                    </div>                         
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                            <div class="card">
                                <img src="product-image.jpg" class="card-img-top" alt="Product Image"/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title</h5>
                                    <p class="card-text">Brief description of the product.</p>
                                    <p class="card-price">$99.99</p>
                                    <a href="#" class="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                            <div class="card">
                                <img src="product-image.jpg" class="card-img-top" alt="Product Image"/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title</h5>
                                    <p class="card-text">Brief description of the product.</p>
                                    <p class="card-price">$99.99</p>
                                    <a href="#" class="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                            <div class="card">
                                <img src="product-image.jpg" class="card-img-top" alt="Product Image"/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title</h5>
                                    <p class="card-text">Brief description of the product.</p>
                                    <p class="card-price">$99.99</p>
                                    <a href="#" class="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                        

                        {/* <!-- Add more product cards as needed --> */}
                    </div>
                </div>
            </section>

            {/* <!-- Product Categories Section --> */}
            <section class="product-categories-section">
                <div class="container text-center">
                <h2>Product Categories</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="category">
                            <img src="category1-icon.png" alt="Category 1"/>
                            <h4>Lighting</h4>
                            <a href="#" class="btn btn-outline-primary">Shop Now</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                    {/* <!-- Repeat similar structure for other categories -->
                    <!-- Example: Wiring category --> */}
                    <div class="category">
                            <img src="category1-icon.png" alt="Category 1"/>
                            <h4>Lighting</h4>
                            <a href="#" class="btn btn-outline-primary">Shop Now</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                    {/* <!-- Example: Tools category --> */}
                        <div class="category">
                            <img src="category1-icon.png" alt="Category 1"/>
                            <h4>Lighting</h4>
                            <a href="#" class="btn btn-outline-primary">Shop Now</a>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* <!-- Special Offers Section --> */}
            <section class="special-offers-section">
                <div class="container text-center">
                <h2>Special Offers</h2>
                <div class="row">
                    {/* <!-- Display special offers here -->
                    <!-- Sample offer card --> */}
                    <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Limited Time Offer</h5>
                        <p class="card-text">Get 20% off on selected products.</p>
                        <a href="#" class="btn btn-primary">Shop Now</a>
                        </div>
                    </div>
                    </div>
                    {/* <!-- Add more offer cards as needed --> */}
                </div>
                </div>
            </section>

            {/* <!-- Customer Testimonials Section --> */}
            <section class="customer-testimonials-section">
                <div class="container text-center">
                <h2>Customer Testimonials</h2>
                <div class="row">
                    {/* <!-- Display customer testimonials here -->
                    <!-- Sample testimonial --> */}
                    <div class="col-md-6">
                    <div class="testimonial">
                        <p>"Great quality products and excellent service!"</p>
                        <p>- John Doe</p>
                    </div>
                    </div>
                    {/* <!-- Add more testimonials as needed --> */}
                </div>
                </div>
            </section>

            {/* <!-- Value Proposition Section --> */}
            <section class="value-proposition-section">
                <div class="container text-center">
                <h2>Why Choose Us?</h2>
                <p>We offer top-quality electrical supplies with...</p>
                <ul>
                    <li>High durability</li>
                    <li>Environmentally friendly options</li>
                    <li>Affordable prices</li>
                </ul>
                </div>
            </section>

            {/* <!-- Call-to-Action Section --> */}
            <section class="cta-section text-center">
                <div class="container">
                <h2>Subscribe for Updates</h2>
                <p>Sign up for our newsletter to receive exclusive offers and updates.</p>
                <form action="#" method="post" class="subscribe-form">
                    <input type="email" name="email" placeholder="Enter your email" required/>
                    <button type="submit" class="btn btn-primary">Subscribe</button>
                </form>
                </div>
            </section>

            {/* <!-- Trust Badges or Certifications Section --> */}
            <section class="trust-badges-section text-center">
                <div class="container">
                <h2>Our Certifications</h2>
                {/* <!-- Display trust badges or certifications here --> */}
                <img src="certification1.png" alt="Certification 1"/>
                <img src="certification2.png" alt="Certification 2"/>
                {/* <!-- Add more certifications as needed --> */}
                </div>
            </section>
        </>
    )
}

export default Home;