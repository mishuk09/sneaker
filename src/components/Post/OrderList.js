import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:5000/item/orders');
                setOrders(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching orders: {error.message}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Orders List</h1>
            {orders.map(order => (
                <div key={order._id} className="mb-4 p-4 border rounded">
                    <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
                    <p><strong>Full Name:</strong> {order.fullName}</p>
                    <p><strong>Email:</strong> {order.email}</p>
                    <p><strong>Phone Number:</strong> {order.phoneNumber}</p>
                    <p><strong>Order Note:</strong> {order.orderNote}</p>
                    <p><strong>City:</strong> {order.city}</p>
                    <p><strong>Address:</strong> {order.address}</p>
                    <p><strong>Landmark:</strong> {order.landmark}</p>
                    <h3 className="text-lg font-semibold mt-2">Cart Items:</h3>
                    <ul className="list-disc ml-6">
                        {order.cartItems.map((item, index) => (
                            <li key={index} className="mb-2">
                                <p><strong>Title:</strong> {item.title}</p>
                                <p><strong>Color:</strong> {item.color}</p>
                                <p><strong>Size:</strong> {item.size}</p>
                                <p><strong>Quantity:</strong> {item.quantity}</p>
                                <p><strong>Price:</strong> रू {item.price}</p>
                            </li>
                        ))}
                    </ul>
                    <p><strong>Total Amount:</strong> रू {order.totalAmount}</p>
                </div>
            ))}
        </div>
    );
};

export default OrderList;
