// src/components/DeletePost.js
import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeletePost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

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
