import React, {useEffect} from "react";
import "../styles/wishlist.css"
import { saveWishlistItems, getWishlistItems } from "../resources/localStorageUtils";

const WishlistPage = ({wishlist, setWishlist, addToCart}) => {

    useEffect(() => {
        const savedWishlist = getWishlistItems();
        if (wishlist.length === 0 && savedWishlist.length > 0) {
          setWishlist(savedWishlist);
        }
    }, [wishlist, setWishlist]);
    
    useEffect(() => {
    saveWishlistItems(wishlist);
    }, [wishlist]);
    
    //remove wishlist product
    const removeProduct = (product) => {
        const updatedWishlist = wishlist.filter((x) => x.id !== product.id);
        setWishlist(updatedWishlist);
    };

    const addToCartToast = (currentElement) => {
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

        // Remove product from wishlist after adding to cart
        setTimeout(() => {
        const updatedWishlist = wishlist.filter((x) => x.id !== currentElement.id);
        setWishlist(updatedWishlist);
        }, 1000);
    }

    return(
        <>
            <div className="container-fluid px-4 py-5 mb-4">
                <h2 className="fw-bolder text-center mb-4">MY WISHLIST</h2>
                {
                    wishlist.length === 0 && 
                    <div className="emptycart container-fluid text-center">
                        <h4 className="empty fw-bold mb-3 text-warning-emphasis">Wishlist is Empty.</h4>
                    </div>
                }
                {
                    wishlist.map((currentElement) => 
                    {
                        return(
                            <div className="mb-4 wishlist_container py-1" key={currentElement.id}>
                                <div className="row">
                                    <div className="col-lg-1 col-md-1 col-sm-4 d-flex align-items-center justify-content-center">
                                        <i onClick={() => removeProduct(currentElement)} className="bi bi-x-circle text-danger"></i>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-4 d-flex align-items-center justify-content-center">
                                        <img src={currentElement.Image} alt={currentElement.Title} className="img-fluid cart_product_img"/>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-4 d-flex align-items-center justify-content-center">
                                        <h3 className="fw-medium text-center">{currentElement.Title}</h3>
                                    </div>

                                    <div className="col-lg-2 col-md-2 col-sm-6 d-flex align-items-center justify-content-center">
                                        <p className="fw-medium fs-4 fw-semibold my-2">₱{currentElement.Price}</p>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
                                        <button className="btn btn-primary add_to_cart_btn" onClick={() => addToCartToast(currentElement)} >Add to Cart</button>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
                

            </div>

            <div className="container">
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
            {/* Back to Top Button */}
            <a href="#" id="back-to-top" className="btn position-fixed text-decoration-none fs-5"><i className="bi bi-arrow-up-short"></i></a>
            {/* Back to Top Button */}
        </>
    )
}

export default WishlistPage;