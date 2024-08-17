import React from "react";
import { useCart } from "./CartContext";

const CartItem = () => {
  const { cartItems, removeItemFromCart } = useCart();
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart bg-white shadow-lg rounded-md p-4 w-full">
      <h2 className="text-xl font-bold mb-4 text-orange-600">
        Your Cart ({totalQuantity})
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => {
            const itemTotal = item.price * item.quantity;

            return (
              <div
                key={index}
                className="flex justify-between items-center p-2 bg-gray-100 rounded-md mb-2 border-b border-gray-300"
              >
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    {/* Flex container to align quantity, price per unit and total price horizontally */}
                    <p className="text-sm text-orange-600 font-bold">
                      {item.quantity} x
                    </p>
                    <p className="text-sm text-gray-400">
                      @ ${item.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      ${itemTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  className=" rounded-full shadow-md hover:bg-orange-600 rounded-full border-2 border-gray-4 00 flex items-center justify-center"
                  onClick={() => removeItemFromCart(item.name)}
                >
                  &times;
                </button>
              </div>
            );
          })}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-9">
          <div className="flex justify-between">
            Order Total:{" "}
            <span className="font-bold">
              ${" "}
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <button className="w-full text-center mt-9 mx-auto block p-2 bg-gray-200 rounded">
            <span>
              This is a <strong>carbon-neutral</strong> delivery
            </span>
          </button>
          <button className="mt-9 mx-auto block p-2 bg-orange-600 text-white rounded-full w-full text-center">
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
