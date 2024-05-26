// src/components/Edit.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    console.error('Token not found');
                    return;
                }

                const response = await axios.get('http://localhost:5000/edit', {
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
        axios.get('http://localhost:5000/posts/')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div className="container mx-auto px-4 lg:px-0">
                <h1 className="text-2xl text-center mt-10 mb-10 font-bold">Edit</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {posts.map(product => (
                        <Link to={`/update/${product._id}`} key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                            <img src={product.img} alt={product.title} className="w-full h-32 object-cover mb-4" />
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-gray-600">${product.newPrice}</span>
                                <span className="text-green-500">Save ${product.oldPrice}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Edit;
