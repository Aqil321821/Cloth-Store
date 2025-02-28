import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, qty } = cartItem;
          return (
            <div key={id}>
              <h1>{name}</h1>
              <h1>{qty}</h1>
              <h1 onClick={() => addItemToCart(cartItem)}>+</h1>
              <h1>-</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
