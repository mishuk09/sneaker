import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded mb-4 hover:bg-red-700">
                Logout
            </button>
            <div className="space-y-4">
                <Link
                    to='/addpost'
                    className="bg-blue-500 text-white py-2 px-4 rounded block text-center hover:bg-blue-700"
                >
                    Add Post
                </Link>
                <Link
                    to='/edit'
                    className="bg-green-500 text-white py-2 px-4 rounded block text-center hover:bg-green-700"
                >
                    Edit List
                </Link>
                <Link
                    to='/delete'
                    className="bg-yellow-500 text-white py-2 px-4 rounded block text-center hover:bg-yellow-700"
                >
                    Delete List
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
