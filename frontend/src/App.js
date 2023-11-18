import React , {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/navbar_and_footer/navbar";
import Footer from "./component/navbar_and_footer/footer";
import Routeway from "./component/route/route";
import AllProducts from "./component/resources/Allproducts";
const App = () => {
  // Filter Products
  const [product, setProduct] = useState(AllProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchProducts = (searchTerm) => {
    const formattedSearchTerm = searchTerm.toLowerCase();

    const filtered = AllProducts.filter((product) => {
      const formattedCategory = product.Category.toLowerCase();
      const formattedTitle = product.Title.toLowerCase();
      const formattedPrice = product.Price.toLowerCase();

      return (
        formattedCategory.includes(formattedSearchTerm) ||
        formattedTitle.includes(formattedSearchTerm) ||
        formattedPrice.includes(formattedSearchTerm)
      );
    });

    setProduct(filtered);
    setFilteredProducts(filtered);
  };
  
  return (

    <>
      <BrowserRouter>
        <Navbar searchProducts={searchProducts} filteredProducts={filteredProducts}/>
        <Routeway product={product} setProduct={setProduct}/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
