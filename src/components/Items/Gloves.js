import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Gloves = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts/')
            .then(response => {
                // Filter posts to include only those with the category "Gloves"
                const filteredPosts = response.data.filter(post => post.category === 'glove');
                setPosts(filteredPosts);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container mx-auto px-4 lg:px-0">
            <h1 className="text-2xl text-center mt-10 mb-10 font-bold">Gloves</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {posts.map(product => (
                    <Link to={`/product/${product._id}`} key={product.id} className="bg-white p-2 rounded-lg shadow-md">
                        <img src={product.img} alt={product.title} className="w-full rounded-sm h-[280px] object-cover mb-4" />
                        <h2 className="text-[22px]  font-semibold">{product.title}</h2>
                        <div className="flex justify-between items-center mb-2 mt-2">
                            <div className='flex items-center'>


                                <span className="me-4 font-semibold   text-red-500">रू {product.newPrice}</span>
                                <span className=" text-sm font-semibold   text-gray-700 line-through">रू {product.oldPrice}</span>

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
        </div>
    );
};

export default Gloves;
