import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    console.error('Token not found');
                    return;
                }

                const response = await axios.get('http://localhost:5000/orders', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                console.log(response.data); // log the response
            } catch (error) {
                console.error('Error fetching data:', error.response ? error.response.data : error.message);
                // Check for 401 or 403 error status and redirect to sign-in page
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    window.location.href = '/signin';
                }
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    throw new Error('Token not found');
                }

                const response = await axios.get('http://localhost:5000/item/orders', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setOrders(response.data);
                setLoading(false);
            } catch (error) {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    window.location.href = '/signin';
                } else {
                    setError(error.message);
                    setLoading(false);
                }
            }
        };

        fetchOrders();
    }, []);


    return (
        <div  >
            <h1>Orders</h1>
            {
                loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                    </div>

                ) :
                    (
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
                    )
            }
        </div >
    );
};

export default Orders;
