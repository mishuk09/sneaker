import React, { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../API/Handleapi';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await getPosts();
        setPosts(response.data);
    };

    const handleDelete = async (id) => {
        await deletePost(id);
        fetchPosts();
    };

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <h2>{post.title}</h2>
                        <img src={`http://localhost:5000/${post.img}`} alt={post.title} />
                        <p>{post.category}</p>
                        <p>{post.newPrice}</p>
                        <p>{post.oldPrice}</p>
                        <p>{post.save}</p>
                        <button onClick={() => handleDelete(post._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
