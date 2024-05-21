import React, { useRef, useState } from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';

const AddPost = () => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [content, setContent] = useState('');
    const editor = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            img: content, // Correctly map editor content to the img field
            category,
            title,
            newPrice,
            oldPrice
        };

        axios.post('http://localhost:5000/posts/add', newPost)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Content: </label>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1}
                        onBlur={newContent => setContent(newContent)} // Store content onBlur event
                        onChange={newContent => setContent(newContent)} // Ensure content is updated
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
