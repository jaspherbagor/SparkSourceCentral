import React from "react";
import '../styles/home.css';
import Topproducts from "../resources/Topproducts";
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
                        <div className="features col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-center mb-4">
                            <div className="icon me-4">
                                <i class="fa-solid fa-truck"></i>
                            </div>
                            <div className="detail">
                                <h3 className="fw-bolder">FREE SHIPPING</h3>
                                <p>Order above ₱10,000</p>
                            </div>
                        </div>
                        <div className="features col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-center mb-4">
                            <div className="icon me-4">
                                <i class="fa-solid fa-right-left"></i>
                            </div>
                            <div className="detail">
                                <h3 className="fw-bolder">RETURN AND REFUND</h3>
                                <p>Money Back Guarantee</p>
                            </div>
                        </div>
                        <div className="features col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-center mb-4">
                            <div className="icon me-4">
                                <i class="fa-solid fa-trophy"></i>
                            </div>
                            <div className="detail">
                                <h3 className="fw-bolder">HIGH QUALITY</h3>
                                <p>Durable Products</p>
                            </div>
                        </div>
                        <div className="features col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-center mb-4">
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

            {/* <!-- Featured Products Categories Section Start --> */}
            <section class="top_products_categories container-fluid px-4 py-5 text-center">
                <h2 class="fw-bolder my-5 pb-3">TOP <span>CATEGORIES</span></h2>
                <div class="top_categories mt-5">
                    <div class="d-flex flex-wrap align-items-center justify-content-center">
                        <div class="col px-4 py-5 mx-2 my-3 lighting_fixtures container-fluid">
                            <h3 class="fw-bolder text-white p-2">LIGHTING FIXTURES</h3>
                        </div>
                        <div class="col px-4 py-5 mx-2 my-3 tools_and_accessories container-fluid">
                            <h3 class="fw-bolder text-white p-2">TOOLS & ACCESSORIES</h3>
                        </div>
                        <div class="col px-4 py-5 mx-2 my-3 safety_and_protection container-fluid">
                            <h3 class="fw-bolder text-white p-2">SAFETY & PROTECTION</h3>
                        </div>
                        <div class="col px-4 py-5 mx-2 my-3 switches_and_outlets container-fluid">
                            <h3 class="fw-bolder text-white p-2">SWITCHES & OUTLETS</h3>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Featured Products Caregories Section End --> */}

            {/* Top Products Section Start */}
            <section className="top_products_section container-fluid py-5 px-4">
                <div className="container-fluid">
                    <h2 className="mb-5 text-center fw-bolder pb-4 mt-4">TOP <span>PRODUCTS</span></h2>
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
                    <div className="text-center mt-4">
                    <a href="#"  className="btn shopnow_btn my-2 mx-2 px-4 py-3 fw-semibold">BROWSE MORE</a>
                    </div>
                </div>
            </section>
            {/* Top Product Section End */}
          

        {/* Customers Review Section Start */}
        <section class="customers-review-section container-fluid px-3 py-4 text-center h-auto">

            <h2 class="fw-bolder mt-4 mb-3 text-white">CUSTOMERS <span>TESTIMONIALS</span></h2>

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

            {/* <!-- Newsletter Subscription Section Start --> */}
            <section class="newsletter_section px-4 py-3">
                <div class="container-fluid newsletter-form px-3 py-3">
                    <div class="row justify-content-center">
                        <div class="newsletter_container col-md-8 col-12 text-center">
                            <h2 class="fw-bolder">Subscribe to SparkSource Central's Latest Promotion</h2>
                            <p class="fw-light">Suscribe to our email newsletter so that you never miss out our newest promotions. </p>
                            <form class="newsletter-form">
                                <div class="input-group mb-3">
                                    <input type="email" class="form-control" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="subscribe-button"/>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="submit" id="subscribe-button">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Newsletter Subscription Section End --> */}

        </>
    )
}

export default Home;