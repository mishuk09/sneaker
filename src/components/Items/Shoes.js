import React from 'react';

const Shoes = () => {
    // Sample product data, replace it with your actual data
    const products = [
        {
            id: 1,
            title: 'Running Shoes',
            image: 'running_shoes.jpg',
            price: 50,
            savePrice: 10
        },
        {
            id: 2,
            title: 'Casual Shoes',
            image: 'casual_shoes.jpg',
            price: 40,
            savePrice: 5
        },
        {
            id: 2,
            title: 'Casual Shoes',
            image: 'casual_shoes.jpg',
            price: 40,
            savePrice: 5
        },
        {
            id: 2,
            title: 'Casual Shoes',
            image: 'casual_shoes.jpg',
            price: 40,
            savePrice: 5
        },
        {
            id: 2,
            title: 'Casual Shoes',
            image: 'casual_shoes.jpg',
            price: 40,
            savePrice: 5
        },
        {
            id: 2,
            title: 'Casual Shoes',
            image: 'casual_shoes.jpg',
            price: 40,
            savePrice: 5
        },
        {
            id: 2,
            title: 'Casual Shoes',
            image: 'casual_shoes.jpg',
            price: 40,
            savePrice: 5
        },
        {
            id: 2,
            title: 'Casual Shoes',
            image: 'casual_shoes.jpg',
            price: 40,
            savePrice: 5
        },
        // Add more products as needed
    ];

    return (
        <div className="container mx-auto px-4 lg:px-0">
            <h1 className="text-2xl text-center mt-10 mb-10  font-bold mb-4">Shoes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={product.image} alt={product.title} className="w-full h-32 object-cover mb-4" />
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-gray-600">${product.price}</span>
                            <span className="text-green-500">Save ${product.savePrice}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shoes;
