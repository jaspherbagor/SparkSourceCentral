import React, {useEffect, useState} from "react";
import "../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import AllProducts from "../resources/Allproducts";

const Navbar = ({product, setProduct, searchProducts, filteredProducts, userToken, cart, wishlist}) => {
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
    
    const [search, setSearch] = useState("");
  
    const handleSearch = (e) => {
      const searchTerm = e.target.value;
      setSearch(searchTerm);
      searchProducts(searchTerm);
    };

    const nav = useNavigate();
    const handleSearchButtonClick = () => {
        localStorage.setItem('search', search)
        searchProducts(search);
        setSearch("")
        nav('/product');
    };
    const handleSuggestionClick = () => {
        setSearch("")
    };

    // Added code
    const handleLogout = ()=>{
        localStorage.clear(); // clear yung storage including token
        window.location.href = '/'; // redirect to login page
    }

    useEffect(()=>{
        const searchKeyword = localStorage.getItem('search')
        if(searchKeyword){
            searchProducts(searchKeyword);
        }
    }, [])
    
    const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userToken) {
          const response = await fetch("http://localhost:4000/user", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${userToken}`,
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            const userData = await response.json();
            if (userData && userData.data && userData.data.user.username) {
              setUsername(userData.data.user.username);
            } else {
              setUsername(null);
            }
          } else {
            setUsername(null);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUsername(null);
      }
    };

    fetchUserData();
  }, [userToken]);
    
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
                            
                            <a href="#" className="text-white text-decoration-none">
                                <button className="btn search_btn" type="submit" onClick={handleSearchButtonClick}>
                                    <i className="bi bi-search text-white"></i>
                                </button>
                            </a>
                            
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
                                                    <p className="not-login fw-medium text-white p-1 m-0 text-uppercase">Please Log In to Explore Further</p>
                                                    <Link className="dropdown-item login_link fw-semibold" to="/login">
                                                        LOGIN
                                                    </Link>
                                                </li>
                                            ) : (
                                                <div>
                                                    <p className="logged-in fw-medium text-white p-1 m-0 text-uppercase">Hello, {username ? username : "Guest"}!</p>
                                                    <li onClick={handleLogout} className="dropdown-item logout_link fw-semibold">LOGOUT</li>
                                                </div>
                                                
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
                                    <Link to="/product" className="text-decoration-none">
                                        <button
                                        className="nav-link text-white fw-semibold"
                                        onClick={() => {
                                            localStorage.setItem('search', '')
                                            filterProducts("All Categories")
                                        } }>
                                        <i className="bi bi-lightning"></i> ALL ITEMS
                                        </button>
                                    </Link>
                                    
                                </li>
                                <li className="nav-item me-3">
                                    <button
                                    className="nav-link text-white fw-semibold"
                                    onClick={() => {
                                        localStorage.setItem('search', '')
                                        filterProducts("Lighting Fixtures")
                                    } }>
                                    <i className="bi bi-lightbulb"></i> LIGHTING FIXTURES
                                    </button>
                                </li>
                                <li className="nav-item me-3">
                                    <button
                                    className="nav-link text-white fw-semibold"
                                    onClick={() => {
                                        localStorage.setItem('search', '')
                                        filterProducts("Switches & Outlets")
                                    } }>
                                    <i className="bi bi-toggle-on"></i> SWITCHES & OUTLETS
                                    </button>
                                </li>
                                <li className="nav-item me-3">
                                    <button
                                    className="nav-link text-white fw-semibold"
                                    onClick={() => {
                                        localStorage.setItem('search', '')
                                        filterProducts("Safety & Protection")
                                    }}>
                                    <i className="bi bi-shield-lock"></i> SAFETY & PROTECTION
                                    </button>
                                </li>
                                <li className="nav-item me-3">
                                    <button
                                    className="nav-link text-white fw-semibold"
                                    onClick={() => {
                                        localStorage.setItem('search', '')
                                        filterProducts("Tools & Accessories")
                                    }}>
                                    <i className="bi bi-tools navbar_link"></i> TOOLS & ACCESSORIES
                                    </button>
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
