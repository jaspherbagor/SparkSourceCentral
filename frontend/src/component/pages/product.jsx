import React from "react";
import "../styles/product.css";
const Product = () => {
    return(
        <> 
            <div class="product_page container-fluid bg-secondary px-4 py-2">
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
                        {/* <!-- Product card 1 --> */}
                            <div class="col-lg-4 col-md-4 col-sm-6 mb-3">
                                <div class="card">
                                    <img src="product1.jpg" class="card-img-top" alt="Product 1"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Product 1</h5>
                                        <p class="card-text">$19.99</p>
                                        <a href="#" class="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Product card 2 --> */}
                            <div class="col-lg-4 col-md-4 col-sm-6 mb-3">
                                <div class="card">
                                    <img src="product2.jpg" class="card-img-top" alt="Product 2"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Product 2</h5>
                                        <p class="card-text">$29.99</p>
                                        <a href="#" class="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Product card 3 --> */}
                            <div class="col-lg-4 col-md-4 col-sm-6 mb-3">
                                <div class="card">
                                    <img src="product3.jpg" class="card-img-top" alt="Product 3"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Product 3</h5>
                                        <p class="card-text">$39.99</p>
                                        <a href="#" class="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product;