import React, { useState } from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';

const AddPost = () => {
    const [img, setImg] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { img, category, title, newPrice, oldPrice };

        axios.post('http://localhost:5000/posts/add', newPost)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Image: </label>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setImg(base64)}
                        required
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
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
}

export default AddPost;
