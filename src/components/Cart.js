import React from 'react';

const Cart = ({ isOpen, toggleCart }) => {
    return (
        <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                {/* Cart Items */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h3 className="text-lg">Item 1</h3> 
                            <p className="text-sm text-gray-600">Description of item 1</p>
                        </div>
                        <p>$10.00</p>
                    </div>
                    {/* Add more items similarly */}
                </div>
                <button
                    onClick={toggleCart}
                    className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded"
                >
                    Close Cart
                </button>
            </div>
        </div>
    );
};

export default Cart;
