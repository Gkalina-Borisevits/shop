import React, { useState } from "react";
import Products from "../components/products/Products";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../components/cart/CartContext";
import background from "../assets/homeBackground.png"

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <div className="relative bg-gray-200 min-h-screen">
  <div className="absolute pl-64">
    <img
      src={background}
      alt="background"
      className="object-cover w-full h-full"
    />
  </div>
  
  <div className="flex justify-center relative z-10 min-h-screen">
    <div className="w-full max-w-screen-lg md:w-4/5 lg:w-2/3 xl:w-7/8">
      <div className="bg-white shadow-2xl rounded-lg p-6 flex flex-col md:flex-row mt-16 mb-8">
        <div
          className={`fixed top-4 right-4 z-50 ${
            isCartOpen ? "hidden" : "block"
          } md:hidden`}
        >
          <button
            onClick={toggleCart}
            className="relative p-2 bg-orange-600 text-white rounded-full"
          >
            Your Cart
          
              <span className="absolute top-11 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalQuantity}
              </span>
            </button>
          </div>

          <div
            className={`w-full md:w-2/3 p-4 ${isCartOpen ? "blur-sm" : ""}`}
          >
            <Products />
          </div>
          <div
            className={`w-full md:w-1/3 p-4 ${
              isCartOpen ? "block" : "hidden"
            } md:block`}
          >
            <CartItem />
          </div>
        </div>
      </div>

      {isCartOpen && (
        <div className="fixed inset-0 bg-white shadow-lg rounded-lg p-4 z-50 md:hidden">
          <button
            onClick={toggleCart}
            className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full"
          >
            &times;
          </button>
          <CartItem />
        </div>
      )}
    </div>
    </div>
  );
};

export default Home;
