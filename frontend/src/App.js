import React , {useState, useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/navbar_and_footer/navbar";
import Footer from "./component/navbar_and_footer/footer";
import Routeway from "./component/route/route";
import AllProducts from "./component/resources/Allproducts";
const App = () => {
  //product detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);

  const view = (product) =>
  {
    setDetail([{...product}]);
    setClose(true);
  } 

  // Filter Products
  const [product, setProduct] = useState(AllProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchProducts = (searchTerm) => {
    const formattedSearchTerm = searchTerm.toLowerCase();

    const filtered = AllProducts.filter((product) => {
      const formattedCategory = product.Category.toLowerCase();
      const formattedTitle = product.Title.toLowerCase();

      return (
        formattedCategory.includes(formattedSearchTerm) ||
        formattedTitle.includes(formattedSearchTerm)
      );
    });

    setProduct(filtered);
    setFilteredProducts(filtered);
  };

  //add to cart
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      // If product exists in cart, update the quantity
      const updatedCart = [...cart];
      updatedCart[productIndex].qty += 1;
      setCart(updatedCart);
    } else {
      // If product doesn't exist, add it to the cart with quantity 1
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }
  console.log(cart)

  // Token
  const userToken = localStorage.getItem('token');
  console.log('current userToken: ', userToken);
  
  //Add to wishlist
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);

    if (!exists) {
      setWishlist([...wishlist, { ...product }]);
    }
  };



  return (

    <>
      <BrowserRouter>
        <Navbar product={product} setProduct={setProduct} searchProducts={searchProducts} filteredProducts={filteredProducts} cart={cart} userToken={userToken} wishlist={wishlist} />
        <Routeway product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addToCart={addToCart} userToken={userToken} wishlist={wishlist} setWishlist={setWishlist} addToWishlist={addToWishlist} />
        <Footer setProduct={setProduct} filteredProducts={filteredProducts}/>
      </BrowserRouter>
    </>
  );
}

export default App;
