import React , {useState} from "react";
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
      alert("Quantity updated in the cart");
    } else {
      // If product doesn't exist, add it to the cart with quantity 1
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Product added to cart");
    }
  }
  console.log(cart)

  // Token
  const userToken = localStorage.getItem('token');
  console.log('current userToken: ', userToken);
  
  return (

    <>
      <BrowserRouter>
        <Navbar searchProducts={searchProducts} filteredProducts={filteredProducts} cart={cart} userToken={userToken} />
        <Routeway product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addToCart={addToCart} userToken={userToken} />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
