// src/Orders.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
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
                setError(error.message);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Orders</h1>
            <ul>
                {orders.map((order) => (
                    <li key={order._id}>
                        <h2>Order by {order.fullName}</h2>
                        <p>Email: {order.email}</p>
                        <p>Phone: {order.phoneNumber}</p>
                        <p>City: {order.city}</p>
                        <p>Address: {order.address}</p>
                        <p>Order Note: {order.orderNote}</p>
                        <p>Total Amount: ${order.totalAmount}</p>
                        <h3>Items:</h3>
                        <ul>
                            {order.cartItems.map((item, index) => (
                                <li key={index}>
                                    <p>Title: {item.title}</p>
                                    <p>Color: {item.color}</p>
                                    <p>Size: {item.size}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.price}</p>
                                    <img src={item.img} alt={item.title} width="50" />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
