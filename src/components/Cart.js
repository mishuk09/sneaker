import React, { useState } from 'react';
import mainlogo from '../mainlogo.png';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ isOpen, toggleCart }) => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1));
    };

    const handleCheckout = () => {
        toggleCart();
        navigate('/checkout');
    };

    return (
        <>
            <div className="relative">
                {/* Cart Panel */}
                <div
                    className={`fixed top-0 right-0 w-[500px] h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        } z-50`}
                >
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
                        {/* Cart Item */}
                        <div className="mb-4 flex gap-2">
                            <div>
                                <img className='w-[100px]' src={mainlogo} alt="Logo" />
                            </div>
                            <div>
                                <p className="font-semibold">INSTOCK - 3DITIONAL- CASUAL SUMMER EXCLUSIVE 3D PRINTED</p>
                                <p>Variant: black./large</p>
                                <div className="mb-4 flex items-center">
                                    <label className="block text-sm font-semibold text-gray-700 mr-4">Quantity</label>
                                    <button
                                        className="px-4 py-2 bg-gray-200 rounded-l-lg"
                                        onClick={() => handleQuantityChange(-1)}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        readOnly
                                        className="w-16 p-2 border-t border-b text-center"
                                    />
                                    <button
                                        className="px-4 py-2 bg-gray-200 rounded-r-lg"
                                        onClick={() => handleQuantityChange(1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="mt-2">रू 2,600</p>
                            </div>
                        </div>
                        {/* Total and Shipping */}
                        <div className="border-t pt-4">
                            <div className="flex justify-between">
                                <span className="font-semibold">Total</span>
                                <span>रू {2600 * quantity}</span>
                            </div>
                            <div className="flex justify-between mt-2">
                                <span className="font-semibold">Shipping</span>
                                <span>Cost will appear on checkout</span>
                            </div>
                            <Link to='/checkout'>

                                <button
                                    onClick={handleCheckout}
                                    className='w-full h-10 bg-black text-white rounded-md mt-6'
                                >
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={toggleCart}
                    ></div>
                )}
            </div>
        </>
    );
};

export default Cart;
