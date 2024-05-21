import axios from 'axios';

const API_URL = 'http://localhost:5000/post';

export const getPosts = async () => {
    return await axios.get(API_URL);
};

export const getPost = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const addPost = async (postData) => {
    const formData = new FormData();
    Object.keys(postData).forEach(key => {
        formData.append(key, postData[key]);
    });
    return await axios.post(`${API_URL}/addItem`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const updatePost = async (id, postData) => {
    const formData = new FormData();
    Object.keys(postData).forEach(key => {
        formData.append(key, postData[key]);
    });
    return await axios.put(`${API_URL}/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const deletePost = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
