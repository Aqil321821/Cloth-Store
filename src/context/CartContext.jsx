import { createContext, useState } from 'react';

//helper function
const addCartItem = (cartItems, productToAdd) => {
  //check if cartItems has already product or not
  //this will return first matched element
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  //if yes then inc qty make new array by map
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem;
    });
  }
  //if not then add product to cartItems & return new array

  return [...cartItems, { ...productToAdd, qty: 1 }];
};


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
