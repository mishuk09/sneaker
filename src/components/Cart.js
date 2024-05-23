import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const Cart = ({ isOpen, toggleCart }) => {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        toggleCart();
        navigate('/checkout');
    };

    return (
        <>
            <div className="relative">
                {/* Cart Panel */}
                <div
                    className={`fixed top-0 right-0 w-[500px] h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
                >
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
                        {/* Cart Items */}
                        <div className="overflow-y-auto max-h-[70vh]">
                            {cartItems.length === 0 ? (
                                <p>Your cart is empty</p>
                            ) : (
                                cartItems.map((item, index) => (
                                    <div key={`${item.id}-${index}`} className="mb-4 flex gap-2">
                                        <div>
                                            <img className='w-[100px]' src={item.img} alt={item.title} />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{item.title}</p>
                                            <p>Variant: {item.color} / {item.size}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            <p className="mt-2">रू {item.price * item.quantity}</p>
                                            <button
                                                onClick={() => removeFromCart(item.id, item.color, item.size)}
                                                className="text-red-500 mt-2"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        {/* Total and Shipping */}
                        <div className="border-t pt-4">
                            <div className="flex justify-between">
                                <span className="font-semibold">Total</span>
                                <span>रू {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
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
