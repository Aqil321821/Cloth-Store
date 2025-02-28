import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import Button from '../button/Button.compt';
import CartItem from '../cart-item/Cart-item.compt';
import { CartContext } from '../../context/CartContext';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
