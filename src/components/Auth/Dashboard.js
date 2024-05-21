import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Link to='/addpost'>Add Post</Link>
            <Link to='/postlist'>post List</Link>
        </div>
    );
};

export default Dashboard;