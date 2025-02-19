// src/components/Delete.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Delete = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get('https://sneakers-backend-1.onrender.com/posts')
            .then(response => {
                setPosts(response.data.slice(0, 12));
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mx-auto px-4 lg:px-0">
            <h1 className="text-2xl text-center mt-10 mb-10 font-bold">Select Item for Delete.</h1>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {posts.map(product => (
                        <Link to={`/delete/${product._id}`} key={product.id} className="bg-white p-4 rounded-lg shadow-md">

                            <img src={product.img} alt={product.title} className="w-full rounded-sm h-[280px] object-cover mb-4" />
                            <h2 className="text-[22px] font-semibold">{product.title}</h2>
                            <div className="flex justify-between items-center mb-2 mt-2">
                                <div className='flex items-center'>
                                    <span className="me-4 font-semibold text-red-500">रू {product.newPrice}</span>
                                    <span className="text-sm font-semibold text-gray-700 line-through">रू {product.oldPrice}</span>
                                </div>
                                <div>
                                    <span className="text-green-500 font-bold mb-4">
                                        {Math.round(((product.newPrice - product.oldPrice) / product.oldPrice) * 100)}% OFF
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Delete;
