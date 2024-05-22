// src/components/UpdatePost.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';
import { useParams } from 'react-router-dom';

const UpdatePost = () => {
    const { id } = useParams();
    const [img, setImg] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${id}`)
            .then(response => {
                const post = response.data;
                setImg(post.img);
                setCategory(post.category);
                setTitle(post.title);
                setNewPrice(post.newPrice);
                setOldPrice(post.oldPrice);
                setColor(post.color || []);
                setSize(post.size || []);
                setDescription(post.description);
            })
            .catch(error => console.log(error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedPost = { img, category, title, newPrice, oldPrice, color, size, description };

        axios.post(`http://localhost:5000/posts/update/${id}`, updatedPost)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    const handleAddColor = () => {
        setColor([...color, '']);
    }

    const handleColorChange = (index, value) => {
        const newColors = [...color];
        newColors[index] = value;
        setColor(newColors);
    }

    const handleAddSize = () => {
        setSize([...size, '']);
    }

    const handleSizeChange = (index, value) => {
        const newSizes = [...size];
        newSizes[index] = value;
        setSize(newSizes);
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
                <div>
                    <label>Colors: </label>
                    {color.map((c, index) => (
                        <input
                            key={index}
                            type="text"
                            value={c}
                            onChange={e => handleColorChange(index, e.target.value)}
                            required
                        />
                    ))}
                    <button type="button" onClick={handleAddColor}>Add Color</button>
                </div>
                <div>
                    <label>Sizes: </label>
                    {size.map((s, index) => (
                        <input
                            key={index}
                            type="text"
                            value={s}
                            onChange={e => handleSizeChange(index, e.target.value)}
                            required
                        />
                    ))}
                    <button type="button" onClick={handleAddSize}>Add Size</button>
                </div>
                <div>
                    <label>Description: </label>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
}

export default UpdatePost;
