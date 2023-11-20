import React from "react";
import '../styles/home.css';
import Topproducts from "../resources/Topproducts";
import { Link } from "react-router-dom";
const Home = ({detail, view, close, setClose}) => {
    return(
        <>  
            {
                close ?
                <>
                    {
                        detail.map((currentElement) =>
                        {
                            return(
                                <div className="container-fluid position-fixed view_product py-3">
                                    <div className="container">
                                        <i className="bi bi-x-circle text-danger fs-4 close_btn" onClick={() => setClose(false)}></i>
                                        <div className="row">
                                            <div className="col-lg-5 col-md-5 col-sm-5 col-12">
                                                <div className="container product_image">
                                                    <img src={currentElement.Image} alt={currentElement.Title} className="img-fluid w-100 view_product-img"></img>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-7 col-sm-7 col-12">
                                                <h4 className="text-secondary mt-2 mb-3 text-uppercase">{currentElement.Category}</h4>
                                                <p className="fs-2 pb-3 fw-bold">{currentElement.Title}</p>
                                                <p>A product that everyone would love</p>
                                                <h3 className="pb-4 pt-3 fw-bold">₱{currentElement.Price}</h3>
                                                <button type="button" className="add_to_cart_btn btn px-3 py-2 mb-auto">Add to Cart</button>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            )
                        })
                    }
                </> : null  
            }

            {/* Hero Section Start */}
            <section className="hero_section container-fluid h-auto align-items-center justify-content-center py-5 px-3">
            <div className="container mt-0">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12 test-start text-md-left mx-auto mt-0">
                        <h1 className="fw-bolder mt-0">Discover Excellence in Electrical Innovation</h1>
                        <p className="fw-medium mt-1 fs-6">Find High-Quality Electrical Products at Affordable Prices.</p>
                        <Link to="/product"  className="btn shopnow_btn px-4 py-3 fw-semibold">SHOP NOW</Link>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src="../images/hero-image.svg" alt="" className="img-fluid p-2 mt-0"/>
                    </div>
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
                                <i className="fa-solid fa-truck"></i>
                            </div>
                            <div className="detail">
                                <h4 className="fw-bolder">FREE SHIPPING</h4>
                                <p>Order above ₱5,000</p>
                            </div>
                        </div>
                        <div className="features col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-center mb-4">
                            <div className="icon me-4">
                                <i class="fa-solid fa-right-left"></i>
                            </div>
                            <div className="detail">
                                <h4 className="fw-bolder">RETURN AND REFUND</h4>
                                <p>Money Back Guarantee</p>
                            </div>
                        </div>
                        <div className="features col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-center mb-4">
                            <div className="icon me-4">
                                <i class="fa-solid fa-trophy"></i>
                            </div>
                            <div className="detail">
                                <h4 className="fw-bolder">HIGH QUALITY</h4>
                                <p>Durable Products</p>
                            </div>
                        </div>
                        <div className="features col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-center mb-4">
                            <div className="icon me-4">
                                <i class="fa-solid fa-headset"></i>
                            </div>
                            <div className="detail">
                                <h4 className="fw-bolder">CUSTOMER SUPPORT</h4>
                                <p>Every Time Call Support</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            {/* About Section End */}

            {/* <!-- Featured Products Categories Section Start --> */}
            <section className="top_products_categories container-fluid px-4 py-5 text-center">
                <h2 className="fw-bolder my-5 pb-3">TOP <span>CATEGORIES</span></h2>
                <div className="top_categories mt-5">
                    <div className="d-flex flex-wrap align-items-center justify-content-center">
                        <div className="col px-4 py-5 mx-2 my-3 lighting_fixtures container-fluid">
                            <h3 className="fw-bolder text-white p-2">LIGHTING FIXTURES</h3>
                        </div>
                        <div className="col px-4 py-5 mx-2 my-3 tools_and_accessories container-fluid">
                            <h3 className="fw-bolder text-white p-2">TOOLS & ACCESSORIES</h3>
                        </div>
                        <div className="col px-4 py-5 mx-2 my-3 safety_and_protection container-fluid">
                            <h3 className="fw-bolder text-white p-2">SAFETY & PROTECTION</h3>
                        </div>
                        <div className="col px-4 py-5 mx-2 my-3 switches_and_outlets container-fluid">
                            <h3 className="fw-bolder text-white p-2">SWITCHES & OUTLETS</h3>
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
                                            <div className="card-body mt-0 px-1 py-0">
                                                <p className="card-text text-secondary text-uppercase fs-6 p-0 m-0">{currentElement.Category}</p>
                                                <p className="card-title fs-5 fw-medium text-uppercase">{currentElement.Title}</p>
                                                <p className="card-price fw-bold fs-5 p-0">₱{currentElement.Price}</p>
                                                <div className="card-footer bg-transparent">
                                                        <div className="d-flex justify-content-center align-items-baseline mb-1 mt-0 pt-0">
                                                            <li className="btn me-2 add_to_cart">
                                                                <i className="bi bi-bag-plus"></i>
                                                            </li>
                                                            <li className="btn me-2 add_to_wishlist">
                                                                <i className="bi bi-heart"></i>
                                                            </li>
                                                            <li className="btn view_detail" onClick={() => view (currentElement)}>
                                                                <i className="bi bi-eye"></i>
                                                            </li>                      
                                                        </div>        
                                                    </div>                     
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <div className="text-center mt-4">
                    <Link to="/product"  className="btn shopnow_btn my-2 mx-2 px-4 py-3 fw-semibold">BROWSE MORE</Link>
                    </div>
                </div>
            </section>
            {/* Top Product Section End */}
          

        {/* Customers Review Section Start */}
        <section className="customers-review-section container-fluid px-3 py-4 text-center h-auto">

            <h2 className="fw-bolder mt-4 mb-3 text-white">CUSTOMERS <span>TESTIMONIALS</span></h2>

            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade mb-4 mt-3 px-2" data-bs-ride="carousel">
                <div className="carousel-inner px-0">

                    <div className="carousel-item active">
                        <div className="carousel-text">
                            <i className="bi bi-quote"></i>
                            <h3 className="fw-semi-bold text-dark fst-italic">"Incredible quality coupled with unbeatable durability! I'm amazed by the reliability of these electrical supplies. They've truly exceeded my expectations. Plus, the affordability makes them a game-changer for any project. Thank you for providing top-notch products!"</h3>
                            <h5 className="fw-bold mb-5 mt-3">Olivia Chen</h5>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-text">
                            <i className="bi bi-quote"></i>
                            <h3 className="fw-semi-bold text-dark fst-italic">"I can't express enough gratitude for the exceptional quality your electrical supplies offer. The durability is unmatched, and the affordability makes them a gem in the market. Thank you for making high-quality products accessible to everyone!"</h3>
                            <h5 className="fw-bold mb-5 mt-3">Jonathan Martinez</h5>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-text">
                            <i className="bi bi-quote"></i>
                            <h3 className="fw-semi-bold text-dark fst-italic">"Exceptional quality that withstands the test of time! Your electrical supplies have transformed my projects. The durability is impressive, and what's more amazing is the affordability. Thank you for delivering such outstanding products!"</h3>
                            <h5 className="fw-bold mb-5 mt-3">Michael Turner</h5>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-text">
                            <i className="bi bi-quote"></i>
                            <h3 className="fw-semi-bold text-dark fst-italic">"Words can't describe how thankful I am for discovering your electrical supplies shop. The quality of your products is outstanding, and the durability is exceptional. Above all, the affordability has made my projects stress-free. Highly recommended!"</h3>
                            <h5 className="fw-bold mb-5 mt-3">Emily Rodriguez</h5>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-text">
                            <i className="bi bi-quote"></i>
                            <h3 className="fw-semi-bold text-dark fst-italic">"Kudos to your shop for providing top-notch electrical supplies! The quality is unparalleled, the durability is impressive, and the affordability makes it a standout choice. Thank you for offering such amazing products that cater to every need!"</h3>
                            <h5 className="fw-bold mb-5 mt-3">Robert Thompson</h5>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>

            </section>
            {/* Clients Reviews Section End  */}

            {/* <!-- Newsletter Subscription Section Start --> */}
            <section className="newsletter_section px-4 py-3">
                <div className="container-fluid newsletter-form py-3">
                    <div className="row justify-content-center">
                        <div className="newsletter_container col-md-8 col-12 text-center">
                            <h2 className="fw-bolder text-white">Subscribe to SparkSource Central's Latest Promotion</h2>
                            <p className="fw-light text-white">Suscribe to our email newsletter so that you never miss out our newest promotions. </p>
                            <form className="newsletter-form">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control newsletter_input_field" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="subscribe-button"/>
                                    <button className="btn subscribe_btn mx-0 fw-semibold text-white" type="submit" id="subscribe-button">Subscribe</button>
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