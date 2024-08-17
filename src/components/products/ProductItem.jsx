import React from 'react';
import { useCart } from '../cart/CartContext';

const ProductItem = ({ product }) => {
    const { cartItems, addToCart, removeFromCart } = useCart();

    const cartItem = cartItems.find(item => item.name === product.name);
    const quantityInCart = cartItem ? cartItem.quantity : 0;

    const imageClass = quantityInCart > 0 
        ? 'w-full h-auto object-cover rounded-md border-2 border-orange-600' 
        : 'w-full h-auto object-cover rounded-md';

    return (
        <div className="flex flex-col p-4 bg-white shadow-md rounded-md">
            <img
                src={product?.image.thumbnail}
                alt={product.name}
                className={imageClass}
            />
             <div className="flex items-center justify-center">
                {quantityInCart === 0 ? (
                    <button
                        className="text-white bg-orange-600 rounded-full px-4 py-2 mt-2"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                ) : (
                    <div className='bg-orange-600'>
                        <button
                            className="text-red-500 bg-white border border-red-500 rounded-full px-2 py-1 mr-2"
                            onClick={() => removeFromCart(product.name)}
                        >
                            -
                        </button>
                        <span className="text-sm font-semibold">{quantityInCart}</span>
                        <button
                            className="text-green-500 bg-white border border-green-500 rounded-full px-2 py-1 ml-2"
                            onClick={() => addToCart(product)}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
            <p className="text-gray-600 mt-3">{product?.category}</p>
            <h4 className="text-sm font-bold mt-2">{product?.name}</h4>
            <p className="text-red-500 font-semibold">${product?.price.toFixed(2)}</p>
           
        </div>
    );
};

export default ProductItem;