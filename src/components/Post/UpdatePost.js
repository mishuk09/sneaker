// src/components/UpdatePost.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';
import { useParams } from 'react-router-dom';

const UpdatePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [img, setImg] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${id}`)
            .then(response => {
                setPost(response.data);
                setImg(response.data.img);
                setCategory(response.data.category);
                setTitle(response.data.title);
                setNewPrice(response.data.newPrice);
                setOldPrice(response.data.oldPrice);
            })
            .catch(error => console.log(error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedPost = { img, category, title, newPrice, oldPrice };

        axios.post(`http://localhost:5000/posts/update/${id}`, updatedPost)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Update Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Image: </label>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setImg(base64)}
                    />
                </div>
                <div>
                    <label>Category: </label>
                    <input type="text" value={category} onChange={e => setCategory(e.target.value)} required />
                </div>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>New Price: </label>
                    <input type="number" value={newPrice} onChange={e => setNewPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Old Price: </label>
                    <input type="number" value={oldPrice} onChange={e => setOldPrice(e.target.value)} required />
                </div>
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
}

export default UpdatePost;
