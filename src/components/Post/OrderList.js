import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:5000/order');
            setOrders(response.data);
        } catch (error) {
            setError('Error fetching orders');
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Orders</h1>
            {error && <p>{error}</p>}
            {orders.length > 0 ? (
                <ul>
                    {orders.map((order) => (
                        <li key={order._id}>
                            <h2>{order.fullName}</h2>
                            <p>Email: {order.email}</p>
                            <p>Phone: {order.phoneNumber}</p>
                            <p>City: {order.city}</p>
                            <p>Address: {order.address}</p>
                            <p>Landmark: {order.landmark}</p>
                            <p>Total Amount: {order.totalAmount}</p>
                            <h3>Cart Items:</h3>
                            <ul>
                                {order.cartItems.map((item, index) => (
                                    <li key={index}>
                                        <p>Product: {item.title}</p>
                                        <p>Color: {item.color}</p>
                                        <p>Size: {item.size}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: {item.price}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No orders found</p>
            )}
        </div>
    );
};

export default App;
