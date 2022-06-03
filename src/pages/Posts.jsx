import React from 'react';
import PostsList from '../features/posts/PostsList';
import AddPostForm from '../features/posts/AddPostForm';

const Posts = () => {
    return (
        <div>
            <AddPostForm/>
            <PostsList/>
        </div>
    );
};

export default Posts;