// src/components/DeletePost.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeletePost = () => {
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    console.error('Token not found');
                    return;
                }

                const response = await axios.get('http://localhost:5000/delete/:id', {
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



    const handleDelete = () => {
        axios.delete(`http://localhost:5000/posts/${id}`)
            .then(() => {
                console.log('Post deleted.');
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    const handleCancel = () => {
        navigate(-1); // Navigate back to the previous page
    }

    return (
        <div>
            <h2>Are you sure you want to delete this post?</h2>
            <button onClick={handleDelete} style={{ marginRight: '10px' }}>Yes, Delete</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}

export default DeletePost;
