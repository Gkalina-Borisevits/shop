import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productName) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === productName);

      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.name !== productName);
      } else {
        return prevItems.map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const removeItemFromCart = (productName) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.name !== productName);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};