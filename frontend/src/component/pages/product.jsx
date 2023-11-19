import React, { useState } from "react";
import "../styles/product.css";
import AllProducts from "../resources/Allproducts";
import { Link } from "react-router-dom";
const Product = ({product, setProduct, detail, view, close, setClose}) => {
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
            {
                close ?
                <>
                    {
                        detail.map((currentElement) =>
                        {
                            return(
                                <div class="modal" id="viewProductModal" tabindex="-1" aria-labelledby="viewProductModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-xl" >
                                        <div class="modal-content h-auto">
                                            <div class="modal-header">
                                                <p class="modal-title fs-5 fw-bold" id="exampleModalLabel">View Product</p>
                                                <button type="button" onClick={() => setClose(false)} data-bs-dismiss="modal">Close</button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col">
                                                            <p2>This is a product image</p2>
                                                            <div className="container product_image">
                                                                <img src={currentElement.Image} alt={currentElement.Title} className="img-fluid w-100 h-100"></img>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col ms-auto">
                                                            <p>This is a content of the product specification</p>
                                                            <h4>{currentElement.Category}</h4>
                                                            <h2>{currentElement.Title}</h2>
                                                            <p>A screen everyone will love: Whether your family is having a good time or having fun.</p>
                                                            <h3>{currentElement.Price}</h3>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button>Add to Cart</button>
                                            </div>                     
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </> : null
                
                // <div className="product_detail">
                //     <div className="container">
                //         <button onClick={() => setClose(false)} className="closebtn">x</button>
                //         {
                //             detail.map((currentElement) => 
                //             {
                //                 return(
                //                     <div className="productbox">
                //                         <div className="img_box">
                //                             <img src={currentElement.Image} alt={currentElement.Title}></img>
                //                         </div>
                //                         <div className="detail">
                //                             <h4>{currentElement.Category}</h4>
                //                             <h2>{currentElement.Title}</h2>
                //                             <p>A screen everyone will love: Whether your family is having a good time or having fun.</p>
                //                             <h3>{currentElement.Price}</h3>
                //                             <button>Add to Cart</button>
                //                         </div>
                //                     </div>
                //                 )
                //             })
                //         }
                //         <div className="productbox"></div>
                //     </div>
                // </div> : null
            }

            {/* Modal Start */}

            
            
            {/* Modal End */}

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
                                                            <li className="btn me-2 add_to_cart">
                                                                <i className="bi bi-bag-plus"></i>
                                                            </li>
                                                            <li className="btn me-2 add_to_wishlist">
                                                                <i className="bi bi-heart"></i>
                                                            </li>
                                                            <li onClick={() => view (currentElement)} className="btn view_detail" data-bs-toggle="modal" data-bs-target="#viewProductModal">
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
            
        </>
    )
}

export default Product;