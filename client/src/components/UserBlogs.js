import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogCard from './BlogCard';
import axios from '../axios';

function UserBlogs() {

    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        setError(null)
            ; (async () => {
                try {
                    const response = await axios.get(`user/${id}/blogs`);
                    setBlogs(response.data)
                } catch (error) {
                    setError(error)
                }

            })()
    }, [id])

    return (
        <>
            {blogs.length > 0 ?
                <>{blogs.map((blog) => { return <BlogCard key={blog._id} blog={blog} /> })}</>
                :
                <div className='my-8 font-semibold'>
                    No blogs to show!
                </div>
            }
        </>
    )
}

export default UserBlogs
