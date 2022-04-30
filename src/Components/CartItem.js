import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "Rs. " };
  return (
    <li className='CartItem__item'>
      <img src={item.imageUrl} alt='' />
      <div>
        {item.name} Rs {(`${item.price}`)}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;
