import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate(); // Get the navigate function

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    console.error('Token not found');
                    return;
                }

                const response = await axios.get('http://localhost:5000/dashboard', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                console.log(response.data); // log the response
            } catch (error) {
                console.error('Error fetching data:', error.response ? error.response.data : error.message);
                // Check for 401 or 403 error status and redirect to sign-in page
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    navigate('/signin');
                }
            }
        };
        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        navigate('/signin'); // Redirect to the sign-in page
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="  bg-gray-100 flex flex-col">
                <header className="bg-white shadow">
                    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </header>
                <main className="flex-grow container mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link to="/addpost" className="bg-white p-6 rounded-lg shadow hover:bg-gray-100 transition">
                            <h2 className="text-xl font-bold mb-4">Add Post</h2>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Post</button>
                        </Link>
                        <Link to="/edit" className="bg-white p-6 rounded-lg shadow hover:bg-gray-100 transition">
                            <h2 className="text-xl font-bold mb-4">Edit List</h2>
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded">Edit List</button>
                        </Link>
                        <Link to="/delete" className="bg-white p-6 rounded-lg shadow hover:bg-gray-100 transition">
                            <h2 className="text-xl font-bold mb-4">Delete List</h2>
                            <button className="bg-red-500 text-white px-4 py-2 rounded">Delete List</button>
                        </Link>
                        <Link to="/orders" className="bg-white p-6 rounded-lg shadow hover:bg-gray-100 transition">
                            <h2 className="text-xl font-bold mb-4">Order</h2>
                            <button className="bg-green-500 text-white px-4 py-2 rounded">Order</button>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
