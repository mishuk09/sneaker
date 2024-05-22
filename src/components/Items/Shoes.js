import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Shoes = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts/')
            .then(response => {
                // Filter posts to include only those with the category "shoes"
                const filteredPosts = response.data.filter(post => post.category === 'shoes');
                setPosts(filteredPosts);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container mx-auto px-4 lg:px-0">
            <h1 className="text-2xl text-center mt-10 mb-10 font-bold">Shoes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {posts.map(product => (
                    <Link to={`/product/${product._id}`} key={product.id} className="bg-white p-4 rounded-lg shadow-md">
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
    );
};

export default Shoes;
