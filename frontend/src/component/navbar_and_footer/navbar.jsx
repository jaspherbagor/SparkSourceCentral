import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <>
            <header className="sticky-top container-fluid m-0 p-0">
                <div className="container-fluid py-2 px-4">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-2 text-center text-md-start">
                            <Link to="/">
                                <img src="../images/spark_source_central_logo.svg" alt="Logo" className="img-fluid"/>
                            </Link>
                        </div>
                        <div className="col-md-8 text-center mb-2 mt-2">
                            <form className="d-flex">
                                <input className="form-control search_input" type="search" placeholder="Search for products..." aria-label="Search"/>
                                <button className="btn search_btn" type="submit">
                                    <i className="bi bi-search text-white"></i>
                                </button>
                            </form>
                        </div>
                        <div className="col-md-2 text-center">
                            <div className="account_info d-flex justify-content-end align-items-center text-white mt-3">
                                <a className="text-white position-relative nav-link me-3">
                                    <i className="bi bi-bag fs-4"></i>
                                    <span className="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-danger">
                                        0
                                    </span>
                                </a>
                                <a className="text-white position-relative nav-link me-3">
                                    <i className="bi bi-heart fs-4"></i>
                                    <span className="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-danger">
                                        0
                                    </span>
                                </a>
                                <a href="#" className="text-white">
                                    <i className="bi bi-person fs-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="container-fluid navbar navbar-expand-lg navbar-dark py-2">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item me-3">
                                    <Link to="/product" className="nav-link text-white fw-semibold" href="#"><i className="bi bi-lightning"></i> ALL ITEMS</Link>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link text-white fw-semibold" href="#"><i className="bi bi-lightbulb"></i> LIGHTING FIXTURES</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link text-white fw-semibold" href="#"><i className="bi bi-toggle-on"></i> SWITCHES & OUTLETS</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link text-white fw-semibold" href="#"><i className="bi bi-shield-lock"></i> SAFETY & PROTECTION</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link text-white fw-semibold" href="#"><i className="bi bi-tools"></i>  TOOLS & ACCESSORIES</a>
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