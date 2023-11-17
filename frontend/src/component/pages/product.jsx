import React from "react";
import "../styles/product.css";
import AllProducts from "../resources/Allproducts";
const Product = () => {
    return(
        <> 
            <div class="product_page container-fluid bg-secondary px-4 py-5">
                <div class="row">
                    {/* <!-- Product categories column --> */}
                    <div class="col-lg-3 col-md-3 col-sm-3 product_category">
                        <ul class="list-group">
                            <li class="list-group-item active">All</li>
                            <li class="list-group-item">Electronics</li>
                            <li class="list-group-item">Books</li>
                            <li class="list-group-item">Clothing</li>
                            <li class="list-group-item">Accessories</li>
                        </ul>
                    </div>
                    {/* <!-- Product cards column --> */}
                    <div class="col-lg-9 col-md-9 col-sm-9">
                        <div class="row">
                            {
                                AllProducts.map((currentElement) => 
                                {
                                    return(
                                        <div className="col-lg-4 col-md-4 col-sm-6 mb-3" key={currentElement.id}>
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

                        {/* <!-- Product card 1 --> */}
                            {/* <div class="col-lg-4 col-md-4 col-sm-6 mb-3">
                                <div class="card">
                                    <img src="product1.jpg" class="card-img-top" alt="Product 1"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Product 1</h5>
                                        <p class="card-text">$19.99</p>
                                        <a href="#" class="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!-- Product card 2 --> */}
                            {/* <div class="col-lg-4 col-md-4 col-sm-6 mb-3">
                                <div class="card">
                                    <img src="product2.jpg" class="card-img-top" alt="Product 2"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Product 2</h5>
                                        <p class="card-text">$29.99</p>
                                        <a href="#" class="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!-- Product card 3 --> */}
                            {/* <div class="col-lg-4 col-md-4 col-sm-6 mb-3">
                                <div class="card">
                                    <img src="product3.jpg" class="card-img-top" alt="Product 3"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Product 3</h5>
                                        <p class="card-text">$39.99</p>
                                        <a href="#" class="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product;