import './cart-icon.styles.scss';
import Bag from '../../assets/bag.svg?react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartIcon = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);
  const cartTotal = cartItems.reduce((total, item) => total + item.qty, 0);
  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };
  return (
    <div className='cart-icon-container' onClick={toggleCart}>
      <Bag className='shopping-icon' />
      <span className='item-count'>{cartTotal}</span>
    </div>
  );
};

export default CartIcon;
