//import products from "../data";
import "./HomeScreen.css";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";

const HomeScreen = () => {

  const [products, setproducts] = useState([]);    
  useEffect(() => {
      getMeds()
  }, []);

  function getMeds() {
      fetch("https://localhost:44303/api/admin/getAllMedicine").then((result) => {
          result.json().then((resp) => {
              setproducts(resp)
          })
      })
  }


  return (
    <div className='products__wrapper'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
