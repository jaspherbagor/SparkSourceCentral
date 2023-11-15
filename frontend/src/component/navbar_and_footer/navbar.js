import React from "react";
import './navbar.css'
const Navbar = () => {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark py-2 px-3 position-fixed container-fluid m-auto vw-100">            
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html"><img src="./logo-img.png" alt=""></a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon btn-outline-primary"></span>
                    </button>

                    <div class="collapse navbar-collapse py-2 " id="navbarNav">
                        <ul class="navbar-nav ms-auto fw-semibold">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="products.html">PRODUCTS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.html">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="blog.html">BLOG</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">CONTACT</a>
                            </li>
                        </ul>

                        <form class="ms-auto d-flex">
                            <input class="form-control me-2 search-bar" type="search" placeholder="Search for products..." aria-label="Search">
                            <button class="btn btn-outline-light search-btn" type="submit">
                                <i class="bi bi-search"></i>
                            </button>
                        </form>

                        <ul class="navbar ms-auto justify-content-start text-white my-auto">
                            <li class="nav-item">
                                <a class="nav-link me-3" href="account.html">
                                    <i class="bi bi-person-circle fs-3"></i>
                                </a>
                            </li>
                            <li class="nav-item">                     
                                <a class="nav-link me-2" href="cart.html">
                                    <i class="bi bi-cart4 fs-3"></i>
                                </a>
                            </li>
                        </ul>
            
                    </div>        

                </div>
            </nav>
        </>
    )
}

export default Navbar;