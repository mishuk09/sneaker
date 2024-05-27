import React, { useState } from 'react';
import { useCart } from './CartContext';
import axios from 'axios';

const Checkout = () => {
    const { cartItems, setCartItems } = useCart();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        orderNote: '',
        city: '',
        address: '',
        landmark: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.address) newErrors.address = 'Address is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        const orderData = {
            ...formData,
            cartItems,
            totalAmount: calculateTotal() + 100 // Assuming delivery charge is 100
        };
        try {
            const response = await axios.post('http://localhost:5000/item/orders', orderData);
            console.log(response.data);
            // Clear form fields after successful order placement
            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                orderNote: '',
                city: '',
                address: '',
                landmark: '',
            });
            // Clear cart items after successful order placement
            setCartItems([]);
        } catch (error) {
            console.error('Error placing order:', error);
            // Handle error (e.g., show an error message)
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container mx-auto p-4 lg:px-0">
            <div className="text-center mb-10">
                <h1 className="text-2xl mt-10 font-bold">Checkout</h1>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 mt-10'>
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
                                className={`w-full p-2 mb-4 border rounded ${errors.fullName ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
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
                                    className={`w-full p-2 border rounded-r ${errors.phoneNumber ? 'border-red-500' : ''}`}
                                    required
                                />
                            </div>
                            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
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
                                className={`w-full p-2 mb-4 border rounded ${errors.city ? 'border-red-500' : ''}`}
                                required
                            >
                                <option value="">Select City</option>
                                <option value="Kathmandu Inside Ring Road">Kathmandu Inside Ring Road</option>
                                {/* Add more options as needed */}
                            </select>
                            {errors.city && <p className="text-red-500">{errors.city}</p>}
                            <label className="block mb-2 font-medium">Address *</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className={`w-full p-2 mb-4 border rounded ${errors.address ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.address && <p className="text-red-500">{errors.address}</p>}
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
                        {cartItems.length > 0 && (
                            <button type="submit" className="w-full p-3 bg-blue-500 text-white font-bold rounded">Place Order</button>
                        )}
                    </form>
                </div>

                <div className='w-full'>
                    <div className="mb-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 px-6 py-4 bg-gray-100 rounded-t-lg">Order Summary</h2>
                        <div className="max-h-60 overflow-y-auto">
                            {cartItems.map((item, index) => (
                                <div key={`${item.id}-${index}`} className='flex items-center gap-4 px-6 py-4 border-b border-gray-200'>
                                    <img className='w-20 h-20 object-cover rounded-lg' src={item.img} alt={item.title} />
                                    <div className="flex-1">
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-600">Variant: {item.color} / {item.size}</p>
                                        <p className="text-gray-800">रू {item.price} x {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between px-6 py-4">
                            <span className="font-semibold">Sub-total</span>
                            <span>रू {calculateTotal()}</span>
                        </div>
                        <div className="flex justify-between px-6 py-4">
                            <span className="font-semibold">Delivery Charge</span>
                            <span>रू 100</span>
                        </div>
                        <div className="flex justify-between px-6 py-4">
                            <span className="font-semibold text-lg">Total</span>
                            <span className="text-lg font-semibold">रू {calculateTotal() + 100}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
