import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const New = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/posts/')
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
            <h1 className="text-2xl text-center mt-10 mb-10 font-bold">New</h1>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                //     {posts.map(product => (
                //         <Link to={`/product/${product._id}`} key={product._id} className="bg-white p-2 rounded-lg shadow-md">
                //             <img src={product.img} alt={product.title} className="w-full rounded-sm h-[280px] object-cover mb-4" />
                //             <h2 className="text-[22px] font-semibold">{product.title}</h2>
                //             <div className="flex justify-between items-center mb-2 mt-2">
                //                 <div className='flex items-center'>
                //                     <span className="me-4 font-semibold text-red-500">रू {product.newPrice}</span>
                //                     <span className="text-sm font-semibold text-gray-700 line-through">रू {product.oldPrice}</span>
                //                 </div>
                //                 <div>
                //                     <span className="text-green-500 font-bold mb-4">
                //                         {Math.round(((product.newPrice - product.oldPrice) / product.oldPrice) * 100)}% OFF
                //                     </span>
                //                 </div>
                //             </div>
                //         </Link>
                //     ))}
                // </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {posts.map(product => (
                        <Link to={`/product/${product._id}`} key={product._id} className="bg-white rounded-lg shadow-md p-4  ">
                            <div className="overflow-hidden rounded-md">
                                <img src={product.img} alt={product.title} className="w-full h-48 object-cover mb-4 transform hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                {product.title.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()).substring(0, 40)}{product.title.length > 40 ? '...' : ''}
                            </h2>
                            <div className="flex justify-between items-center mt-2">
                                <div className='flex items-center'>
                                    <span className="mr-4 text-lg font-semibold text-red-500">रू {product.newPrice}</span>
                                    <span className="text-sm font-semibold text-gray-700 line-through">रू {product.oldPrice}</span>
                                </div>
                                <div>
                                    <span className="text-green-500 font-bold">
                                        {Math.round(((product.oldPrice - product.newPrice) / product.oldPrice) * 100)}% OFF
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>



            )}
        </div>
    );
};

export default New;
