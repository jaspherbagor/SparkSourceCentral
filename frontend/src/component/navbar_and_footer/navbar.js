import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <>
            <header class="position-fixed container-fluid m-0 p-0">
                <div class="container-fluid py-2 px-4">
                    <div class="row align-items-center justify-content-center text-center">
                        <div class="col-md-2 text-center text-md-start">
                            <img src="../images/spark_source_central_logo.svg" alt="Logo" class="img-fluid"/>
                        </div>
                        <div class="col-md-8 text-center mb-2 mt-2">
                            <form class="d-flex">
                                <input class="form-control" type="search" placeholder="Search for products..." aria-label="Search"/>
                                <button class="btn" type="submit">
                                    <i class="bi bi-search text-white"></i>
                                </button>
                            </form>
                        </div>
                        <div class="col-md-2 text-center">
                            <div class="account_info d-flex justify-content-end align-items-center text-white mt-3">
                                <a class="text-white position-relative nav-link me-3">
                                    <i class="bi bi-bag fs-4"></i>
                                    <span class="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-danger">
                                        0
                                    </span>
                                </a>
                                <a class="text-white position-relative nav-link me-3">
                                    <i class="bi bi-heart fs-4"></i>
                                    <span class="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-danger">
                                        0
                                    </span>
                                </a>
                                <a href="#" class="text-white">
                                    <i class="bi bi-person fs-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <nav class="navbar navbar-expand-lg navbar-dark py-2">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item">
                                    <a class="nav-link text-white fw-semibold" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white fw-semibold" href="#">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white fw-semibold" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white fw-semibold" href="#">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white fw-semibold" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;


            {/* <div class="main_navbar sticky-top">
                <div class="top-navbar py-3 px-4">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-2 col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                                <img src="../images/spark_source_central_logo.svg" alt="logo" class="brand_logo"/>
                            </div>
                            <div class="col-lg-6 col-md-5 my-auto">
                                <form role="search">
                                    <div class="input-group">
                                        <input type="search" placeholder="Search your product" class="form-control" />
                                        <button class="btn bg-dark" type="submit">
                                        <i class="bi bi-search fs-5 text-white"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-4 col-md-5 my-auto">
                                <ul class="nav justify-content-end">
                                    
                                    <li class="nav-item">
                                        <a type="button" class="btn text-white position-relative nav-link">
                                            <i class="bi bi-bag fs-4"></i>
                                            <span class="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-danger">
                                                0
                                            </span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a type="button" class="btn text-white position-relative nav-link">
                                        <i class="bi bi-heart fs-4"></i>
                                        <span class="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-danger">
                                            0
                                        </span>
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                        <i class="bi bi-person-circle fs-4"></i>
                                        </a>
                                    </li>
                                    <div className="auth">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <i class="bi bi-box-arrow-left fs-4"></i>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <i class="bi bi-box-arrow-right fs-4"></i>
                                            </a>
                                        </li>
                                    </div>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg navbar-dark py-2">
                    <div class="container-fluid py-3 px-4">
                        <a class="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                            <img src="../images/spark_source_central_logo.svg" alt="logo"/>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div> */}