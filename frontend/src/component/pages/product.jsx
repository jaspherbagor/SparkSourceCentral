import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/product.css";
import AllProducts from "../resources/Allproducts";
import { Link } from "react-router-dom";
const Product = ({product, setProduct, detail, view, close, setClose, addToCart}) => {
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const categoryParam = searchParams.get("category");

        if (categoryParam) {
            const filteredProducts = AllProducts.filter(
                (product) => product.Category.toLowerCase().replace(/\s+/g, '-') === categoryParam
            );
            setProduct(filteredProducts);
            setSelectedCategory(categoryParam);
        } else {
            // If no category is provided in the URL, display all products
            setProduct(AllProducts);
            setSelectedCategory("All Categories");
        }
    }, [location.search]);

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

    const addToCartProductPage = (currentElement) => {
        addToCart(currentElement);
        const toastLive = document.getElementById('liveToast');
        const toastLabel = document.getElementById('toastLabel');
        const toastMessage = document.getElementById('toastMessage');
        const toastHeader = document.getElementById('toastHeader');
        const toast = new window.bootstrap.Toast(toastLive);
        toastLabel.innerText = "SUCCESS";
        toastLabel.style.color = "#FFFFFF";
        toastMessage.innerText ='Product Added To Cart';
        toastMessage.style.color = "#000000";
        toastLive.style.border = "2.5px solid #fca311";
        toastHeader.style.background = "#14213d";
        toast.show();
    }

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
                                                <button type="button" className="add_to_cart_btn btn px-3 py-2 mb-auto" onClick={() =>addToCartProductPage(currentElement)}>Add to Cart</button>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            )
                        })
                    }
                </> : null  
            }

            <div className="product_page container-fluid px-4 py-5">
                <h1 className="fw-bolder">ELECTRICAL PRODUCTS</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb text-secondary">
                        <Link to="/" className="breadcrumb-item fw-semibold">Home</Link>
                        <Link to="/product" className="breadcrumb-item fw-semibold" aria-current="page">Products</Link>
                        {selectedCategory !== "All Categories" && (
                            <li className="breadcrumb-item fw-semibold active" aria-current="page">
                                {selectedCategory}
                            </li>
                        )}
                    </ol>
                </nav>
                <div className="row">
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
                    <div className="col-lg-9 col-md-9 col-sm-9">
                        <div className="row">
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
                                                            <li className="btn me-2 add_to_cart" onClick={() =>addToCartProductPage(currentElement)}>
                                                                <i className="bi bi-bag-plus"></i>
                                                            </li>
                                                            <li className="btn me-2 add_to_wishlist">
                                                                <i className="bi bi-heart"></i>
                                                            </li>
                                                            <li onClick={() => view (currentElement)} className="btn view_detail">
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
                        
                    </div>
                </div>
            </div>

            <div className="text-center">
                <div className="toast-container position-fixed start-50 translate-middle p-2">
                    <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header" id="toastHeader">
                            <strong className="me-auto" id="toastLabel"></strong>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body fw-medium" id="toastMessage">
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Product;