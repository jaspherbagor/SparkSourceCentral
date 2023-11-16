import React from "react";
import '../styles/home.css';
import Topproducts from "./Topproducts";
const Home = () => {
    return(
        <>
            {/* Hero Section Start */}
            <section className="hero_section container-fluid vh-100 d-flex align-items-center justify-content-center py-5 px-4">
                <div className="hero_text text-center py-2 px-2 mt-5 text-white">
                    <h1 className="fw-bolder mt-4 text-uppercase">Discover Excellence in Electrical Innovation</h1>
                    <p className="fw-medium mt-4 fs-3">Find High-Quality Electrical Products at Affordable Prices.</p>
                    <div className="text-center mb-2">
                        <a href="#"  className="btn shopnow_btn my-2 mx-2 px-4 py-3 fw-semibold">SHOP NOW</a>
                    </div>    
                </div>
            </section>
            {/* Hero Section end */}

            {/* About Section Start */}
            <section className="about_section container_fluid px-4 pt-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="features col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-between mb-4">
                            <div className="icon me-4">
                                <i class="fa-solid fa-truck"></i>
                            </div>
                            <div className="detail">
                                <h3 className="fw-bolder">FREE SHIPPING</h3>
                                <p>Order above ₱10,000</p>
                            </div>
                        </div>
                        <div className="features col-lg-3 col-md-4 col-sm-6 col-12x d-flex align-items-center justify-content-between mb-4">
                            <div className="icon me-4">
                                <i class="fa-solid fa-right-left"></i>
                            </div>
                            <div className="detail">
                                <h3 className="fw-bolder">RETURN AND REFUND</h3>
                                <p>Money Back Guarantee</p>
                            </div>
                        </div>
                        <div className="features col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-between mb-4">
                            <div className="icon me-4">
                                <i class="fa-solid fa-trophy"></i>
                            </div>
                            <div className="detail">
                                <h3 className="fw-bolder">HIGH QUALITY</h3>
                                <p>Durable Products</p>
                            </div>
                        </div>
                        <div className="features col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-between mb-4">
                            <div className="icon me-4">
                                <i class="fa-solid fa-headset"></i>
                            </div>
                            <div className="detail">
                                <h3 className="fw-bolder">CUSTOMER SUPPORT</h3>
                                <p>Every Time Call Support</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            {/* About Section End */}

            {/* <!-- Top Products Section --> */}
            <section className="top_products_section container-fluid py-5 px-4">
                <div className="container-fluid">
                    <h2 className="text-center fw-bolder fs-2 mt-5 mb-5 pb-5">Leading the charge with innovative electrical solutions, empowering you to <span className="hashtag">#EnergizeResponsibly</span>.</h2>
                    <h2 className="my-5 text-center fw-bolder">TOP PRODUCTS</h2>
                    <div className="row mt-5 row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {
                            Topproducts.map((currentElement) => 
                            {
                                return(
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={currentElement.id}>
                                        <div className="product_card card text-center">
                                            <img src={currentElement.Image} className="card-img-top img-fluid" alt={currentElement.Title}/>
                                            <div className="card-body mt-0 pt-1">
                                                <p className="card-text text-secondary text-uppercase fs-6">{currentElement.Category}</p>
                                                <h5 className="card-title fw-medium text-uppercase">{currentElement.Title}</h5>
                                                <p className="card-price fw-bold fs-4">₱{currentElement.Price}</p>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <a href="#" className="btn me-2 add_to_cart">
                                                        <i className="bi bi-bag-plus"></i>
                                                    </a>
                                                    <a href="#" className="btn me-2 add_to_wishlist">
                                                        <i className="bi bi-heart"></i>
                                                    </a>
                                                    <a href="#" className="btn view_detail">
                                                        <i className="bi bi-eye"></i>
                                                    </a>                      
                                                </div>                         
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </section>

            {/* <!-- Product Categories Section --> */}
            <section className="product-categories-section">
                <div className="container text-center">
                <h2>Product Categories</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="category">
                            <img src="category1-icon.png" alt="Category 1"/>
                            <h4>Lighting</h4>
                            <a href="#" className="btn btn-outline-primary">Shop Now</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                    {/* <!-- Repeat similar structure for other categories -->
                    <!-- Example: Wiring category --> */}
                    <div className="category">
                            <img src="category1-icon.png" alt="Category 1"/>
                            <h4>Lighting</h4>
                            <a href="#" className="btn btn-outline-primary">Shop Now</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                    {/* <!-- Example: Tools category --> */}
                        <div className="category">
                            <img src="category1-icon.png" alt="Category 1"/>
                            <h4>Lighting</h4>
                            <a href="#" className="btn btn-outline-primary">Shop Now</a>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* <!-- Special Offers Section --> */}
            <section className="special-offers-section">
                <div className="container text-center">
                <h2>Special Offers</h2>
                <div className="row">
                    {/* <!-- Display special offers here -->
                    <!-- Sample offer card --> */}
                    <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Limited Time Offer</h5>
                        <p className="card-text">Get 20% off on selected products.</p>
                        <a href="#" className="btn btn-primary">Shop Now</a>
                        </div>
                    </div>
                    </div>
                    {/* <!-- Add more offer cards as needed --> */}
                </div>
                </div>
            </section>

            {/* <!-- Customer Testimonials Section --> */}
            <section className="customer-testimonials-section">
                <div className="container text-center">
                <h2>Customer Testimonials</h2>
                <div className="row">
                    {/* <!-- Display customer testimonials here -->
                    <!-- Sample testimonial --> */}
                    <div className="col-md-6">
                    <div className="testimonial">
                        <p>"Great quality products and excellent service!"</p>
                        <p>- John Doe</p>
                    </div>
                    </div>
                    {/* <!-- Add more testimonials as needed --> */}
                </div>
                </div>
            </section>

            {/* <!-- Value Proposition Section --> */}
            <section className="value-proposition-section">
                <div className="container text-center">
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
            <section className="cta-section text-center container-fluid px-4 py-5">
                <div className="container-fluid p-4 bg-secondary">
                <h2>Subscribe for Updates</h2>
                <p>Sign up for our newsletter to receive exclusive offers and updates.</p>
                <form action="#" method="post" className="subscribe-form">
                    <input type="email" name="email" placeholder="Enter your email" required/>
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
                </div>
            </section>

            {/* Customers Review Section Start */}
            <section class="customers-review-section container-fluid px-3 py-4 text-center h-auto">

                <h2 class="fw-bolder mt-4 mb-3">CUSTOMERS <span>TESTIMONIALS</span></h2>

                <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade mb-4 mt-3 px-2" data-bs-ride="carousel">
                    <div class="carousel-inner px-0">

                        <div class="carousel-item active">
                            <div class="carousel-text">
                                <i class="bi bi-quote"></i>
                                <h3 class="fw-semi-bold text-dark fst-italic">"Incredible quality coupled with unbeatable durability! I'm amazed by the reliability of these electrical supplies. They've truly exceeded my expectations. Plus, the affordability makes them a game-changer for any project. Thank you for providing top-notch products!"</h3>
                                <h5 class="fw-bold mb-5 mt-3">Olivia Chen</h5>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <div class="carousel-text">
                                <i class="bi bi-quote"></i>
                                <h3 class="fw-semi-bold text-dark fst-italic">"I can't express enough gratitude for the exceptional quality your electrical supplies offer. The durability is unmatched, and the affordability makes them a gem in the market. Thank you for making high-quality products accessible to everyone!"</h3>
                                <h5 class="fw-bold mb-5 mt-3">Jonathan Martinez</h5>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <div class="carousel-text">
                                <i class="bi bi-quote"></i>
                                <h3 class="fw-semi-bold text-dark fst-italic">"Exceptional quality that withstands the test of time! Your electrical supplies have transformed my projects. The durability is impressive, and what's more amazing is the affordability. Thank you for delivering such outstanding products!"</h3>
                                <h5 class="fw-bold mb-5 mt-3">Michael Turner</h5>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <div class="carousel-text">
                                <i class="bi bi-quote"></i>
                                <h3 class="fw-semi-bold text-dark fst-italic">"Words can't describe how thankful I am for discovering your electrical supplies shop. The quality of your products is outstanding, and the durability is exceptional. Above all, the affordability has made my projects stress-free. Highly recommended!"</h3>
                                <h5 class="fw-bold mb-5 mt-3">Emily Rodriguez</h5>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <div class="carousel-text">
                                <i class="bi bi-quote"></i>
                                <h3 class="fw-semi-bold text-dark fst-italic">"Kudos to your shop for providing top-notch electrical supplies! The quality is unparalleled, the durability is impressive, and the affordability makes it a standout choice. Thank you for offering such amazing products that cater to every need!"</h3>
                                <h5 class="fw-bold mb-5 mt-3">Robert Thompson</h5>
                            </div>
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
            
            </section>
            {/* Clients Reviews Section End  */}

        </>
    )
}

export default Home;