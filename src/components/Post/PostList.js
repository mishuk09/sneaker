// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts/')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <Link to="/add">Add New Post</Link>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        {post.title}
                        <img src={post.img} alt="" />
                        <Link to={`/update/${post._id}`}>{post.title}</Link>
                        <Link to={`/delete/${post._id}`}>Delete</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
