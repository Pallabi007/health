import { useContext } from "react";
import "./ProductCard.css";
//import formatCurrency from "format-currency";
import Rating from "./Rating";
import CartContext from "../context/cart/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "Rs." };
  return (
    <div className='productCard__wrapper'>
      <div>
        <img className='productCard__img' src={product.imageUrl} alt='' />
        <h4 className='font-monospace'>{product.name}</h4>
        <h5 className='font-monospace'>{product.companyName}</h5>
        <h5 >{product.uses}</h5>
        <h5>{product.expireDate}</h5>
        <div className='ProductCard__price'>
          <h5 className='font-monospace'>Rs {product.price}</h5>
        </div>
        
        <button
          className='ProductCard__button font-monospace'
          onClick={() => addToCart(product)}        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
