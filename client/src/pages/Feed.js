import React, { useEffect, useState } from 'react';
import axios from '../axios'
import { BlogCard, BlogTile } from '../components';

function Feed() {

    const [blogs, setBlogs] = useState([])
    const jwt = localStorage.getItem('jwt_token')

    useEffect(() => {
        ; (async () => {
            if (!jwt) {
                return alert('Please login to continue')
            }
            const response = await axios.get('/feed', { headers: { 'Authorization': jwt } });
            setBlogs(response.data);
        })()
    }, [])

    return (
        <>
            <div className="w-4/5 mx-auto text-2xl font-semibold p-4">
                Blogs from users you follow
            </div>
            <div className="w-4/5 mx-auto *:my-4">
                {blogs.length > 0 ? <div>
                    {blogs.map((post) => { return <BlogTile key={post._id} data={post} /> })}
                </div> : <div>No posts to show in your feed</div>}
            </div>
        </>
    )
}

export default Feed
