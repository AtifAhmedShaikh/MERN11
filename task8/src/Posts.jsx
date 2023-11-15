import React, { useState } from 'react'
import axios from "axios"
import { useActionData } from 'react-router-dom'
import Container from './Container';
const Posts = () => {
    const [posts, setPosts] = useState([]);
    const fetchPosts = async () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => setPosts(res.data));
    }
    return (
        <>
        <Container>
        
        </Container>
            <div>Posts</div>
            <button className='bg-greeen-600 px-3 py-2' onClick={fetchPosts}>fetch Posts</button>
            <div>
                {posts.map(post => {
                    return <div key={post.id} className='p-2 bg-gray-300 mb-5 hover:bg-gray-200 rounded-md'>
                        <span>{post.id}</span> <div>
                            {post.title}
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default Posts