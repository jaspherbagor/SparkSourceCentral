import React, { useState } from "react";
import "../styles/product.css";
import AllProducts from "../resources/Allproducts";
import { Link } from "react-router-dom";
const Product = ({product, setProduct}) => {
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
            <div class="product_page container-fluid px-4 py-5">
                <h1 class="fw-bolder">ELECTRICAL PRODUCTS</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb text-secondary">
                        <Link to="/" class="breadcrumb-item fw-semibold"><a href="#">Home</a></Link>
                        <Link to="/product" class="breadcrumb-item fw-semibold" aria-current="page">Products</Link>
                        {selectedCategory !== "All Categories" && (
                            <li className="breadcrumb-item fw-semibold active" aria-current="page">
                                {selectedCategory}
                            </li>
                        )}
                    </ol>
                </nav>
                <div class="row">
                    {/* <!-- Product categories column --> */}
                    <div className="col-lg-3 col-md-3 col-sm-3 product_category mb-4">
                        <ul className="list-group">
                            <li className="list-group-item all_product_category fw-medium" onClick={() => filterProducts("All Categories")}>All Categories</li>
                            <li className="list-group-item fw-medium" onClick={() => filterProducts("Tools & Accessories")}>Tools & Accessories</li>
                            <li className="list-group-item fw-medium" onClick={() => filterProducts("Safety & Protection")}>Safety & Protection</li>
                            <li className="list-group-item fw-medium" onClick={() => filterProducts("Lighting Fixtures")}>Lighting Fixtures</li>
                            <li className="list-group-item fw-medium" onClick={() => filterProducts("Switches & Outlets")}>Switches & Outlets</li>
                        </ul>
                    </div>
                    {/* <!-- Product cards column --> */}
                    <div class="col-lg-9 col-md-9 col-sm-9">
                        <div class="row">
                            {
                                product.map((currentElement) => 
                                {
                                    return(
                                        <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={currentElement.id}>
                                            <div className="product_card card text-center">
                                            <img src={currentElement.Image} className="card-img-top img-fluid" alt={currentElement.Title}/>
                                            <div className="card-body mt-0 px-1 py-0">
                                                <p className="card-text text-secondary text-uppercase fs-6 p-0 m-0">{currentElement.Category}</p>
                                                <p className="card-title fs-5 fw-medium text-uppercase">{currentElement.Title}</p>
                                                <p className="card-price fw-bold fs-5 p-0">₱{currentElement.Price}</p>
                                                <div className="card-footer bg-transparent">
                                                        <div className="d-flex justify-content-center align-items-baseline mb-1 mt-0 pt-0">
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
                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Product;