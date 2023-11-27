import React, {useState} from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ searchProducts, filteredProducts, userToken, cart, wishlist}) => {
    const [search, setSearch] = useState("");
  
    const handleSearch = (e) => {
      const searchTerm = e.target.value;
      setSearch(searchTerm);
      searchProducts(searchTerm);
    };
    const handleSearchButtonClick = () => {
        searchProducts(search);
        setSearch("")
    };
    const handleSuggestionClick = () => {
        setSearch("")
    };

    // Added code
    const handleLogout = ()=>{
        localStorage.clear(); // clear yung storage including token
        window.location.href = '/'; // redirect to login page
    }
    
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
                            <div className="d-flex">
                            <input
                                className="form-control search_input"
                                type="search"
                                placeholder="Search for products or category..."
                                aria-label="Search"
                                value={search}
                                onChange={handleSearch}
                            />
                            {/* Search button */}
                            
                            <Link to={`/product`} className="text-white text-decoration-none">
                                <button className="btn search_btn" type="submit" onClick={handleSearchButtonClick}>
                                    <i className="bi bi-search text-white"></i>
                                </button>
                            </Link>
                            
                            </div>
                            {/* Display filtered product suggestions */}
                            {search.length > 0 && (
                            <div className="search-suggestions bg-warning py-2 px-2 position-absolute">
                                {filteredProducts.map((product) => (
                                <Link key={product.id} to={`/product`} onClick={handleSuggestionClick} className="text-white text-decoration-none">
                                    {/* Navigate to the product page on click */}
                                    <div>
                                        <li className="text-dark text-start fw-semibold result_list">{product.Title}</li>
                                    </div>
                                </Link>
                                ))}
                            </div>
                            )}
                        </div>
                        <div className="col-md-2 text-center">
                            <div className="account_info d-flex justify-content-end align-items-center text-white mt-3">
                                <Link to="/cart" className="text-white position-relative nav-link me-3">
                                    <i className="navbar_link bi bi-bag fs-4"></i>
                                    {cart.length > 0 && (
                                    <span className="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-danger">
                                        {cart.length}
                                    </span>
                                    )}
                                </Link>
                                <Link to="/wishlist" className="text-white position-relative nav-link me-3">
                                    <i className="navbar_link bi bi-heart fs-4"></i>
                                    {wishlist.length > 0 && (
                                        <span className="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-danger">
                                        {wishlist.length}
                                    </span>
                                    )}
                                    
                                </Link> 
                                <li>
                                    <div className="dropdown">
                                        <i className="navbar_link bi bi-person fs-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul className="dropdown-menu p-0">
                                            {!userToken ? (
                                                <li>
                                                <Link className="dropdown-item login_link" to="/login">
                                                    Login
                                                </Link>
                                                </li>
                                            ) : (
                                                <li onClick={handleLogout} className="dropdown-item logout_link">
                                                Logout
                                                </li>
                                        )}
                                        </ul>
                                    </div>
                                </li>
                                
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
                                    <Link to="/product" className="nav-link text-white fw-semibold">
                                        <i className="bi bi-lightning"></i> ALL ITEMS
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link to="/product" className="nav-link text-white fw-semibold">
                                        <i className="bi bi-lightbulb"></i> LIGHTING FIXTURES
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link to="/product" className="nav-link text-white fw-semibold">
                                        <i className="bi bi-toggle-on"></i> SWITCHES & OUTLETS
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link to="/product" className="nav-link text-white fw-semibold">
                                        <i className="bi bi-shield-lock"></i> SAFETY & PROTECTION
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link to="/product" className="nav-link text-white fw-semibold">
                                        <i className="bi bi-tools navbar_link"></i> TOOLS & ACCESSORIES
                                    </Link>
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
