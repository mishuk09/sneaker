import React, { useState } from 'react';
import { useCart } from './CartContext';

const Checkout = () => {
    const { cartItems } = useCart();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        orderNote: '',
        city: '',
        address: '',
        landmark: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container mx-auto p-4 lg:px-0">
            <div className="text-center mb-10">
                <img src="path-to-logo.png" alt="Brand Logo" className="mx-auto mb-4" />
                <h1 className="text-2xl font-bold">Checkout</h1>
            </div>
            <div className='flex gap-4'>
                <div className='w-full'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">1. General Information</h2>
                            <label className="block mb-2 font-medium">Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full p-2 mb-4 border rounded"
                                required
                            />
                            <label className="block mb-2 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 mb-4 border rounded"
                            />
                            <label className="block mb-2 font-medium">Phone Number *</label>
                            <div className="flex mb-4">
                                <span className="inline-flex items-center px-3 border border-r-0 rounded-l bg-gray-200">🇳🇵</span>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-r"
                                    required
                                />
                            </div>
                            <label className="block mb-2 font-medium">Order Note (any message for us)</label>
                            <textarea
                                name="orderNote"
                                value={formData.orderNote}
                                onChange={handleChange}
                                className="w-full p-2 mb-4 border rounded"
                            ></textarea>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">2. Delivery Address</h2>
                            <label className="block mb-2 font-medium">City / District *</label>
                            <select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full p-2 mb-4 border rounded"
                                required
                            >
                                <option value="">Select City</option>
                                <option value="Kathmandu Inside Ring Road">Kathmandu Inside Ring Road</option>
                                {/* Add more options as needed */}
                            </select>
                            <label className="block mb-2 font-medium">Address *</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-2 mb-4 border rounded"
                                required
                            />
                            <label className="block mb-2 font-medium">Landmark</label>
                            <input
                                type="text"
                                name="landmark"
                                value={formData.landmark}
                                onChange={handleChange}
                                className="w-full p-2 mb-4 border rounded"
                            />
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">3. Payment Methods</h2>
                            <div className="mb-4">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Cash on delivery"
                                    checked
                                    readOnly
                                    className="mr-2"
                                />
                                <label className="font-medium">Cash on delivery</label>
                            </div>
                        </div>
                        <button type="submit" className="w-full p-3 bg-blue-500 text-white font-bold rounded">Place Order</button>
                    </form>
                </div>
                <div className='w-full'>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        {cartItems.map((item, index) => (
                            <div key={`${item.id}-${index}`} className='flex gap-4 mb-4'>
                                <div>
                                    <img className='w-[100px]' src={item.img} alt={item.title} />
                                </div>
                                <div className="p-4 bg-gray-100 rounded">
                                    <p>{item.title}</p>
                                    <p>Variant: {item.color} / {item.size}</p>
                                    <p>रू {item.price} x {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-between mb-2">
                            <span>Sub-total</span>
                            <span>रू {calculateTotal()}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Delivery Charge</span>
                            <span>रू 100</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg">
                            <span>Total</span>
                            <span>रू {calculateTotal() + 100}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
