import { createContext, useEffect, useState } from 'react';

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

//helper to remove item from cartItems:
const removeCartItem = (cartItems, cartItemToRemove) => {
  //find item to remove
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  //check if qty is 1 ,if so then remove it from cart
  if (existingCartItem.qty === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  //return cartItems with reduced qty
  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem;
  });
};

//helper to clear item from cart
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  total: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.qty * cartItem.price;
    }, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    cartItems,
    cartTotal,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
