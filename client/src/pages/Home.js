import React, { useEffect, useState } from 'react';
import { HeroSection, BlogTile } from '../components';
import axios from '../axios'

const Home = () => {

    const [blogs, setBlogs] = useState();

    useEffect(() => {
        ; (async () => {
            const response = await axios.get('/blog');
            if (response.status === 200) {
                setBlogs(response.data)
            } else {
                console.log("Error fetching blogs!")
            }
        })()
    }, [])

    return (
        <div>
            <HeroSection />
            <div className='w-4/5 mx-auto pt-4 pl-4 text-2xl font-semibold'>
                Explore awesome blogs here
            </div>
            <div
                className='w-4/5 mx-auto *:my-4'
            >
                {blogs?.length > 0 ? <div>{
                    blogs.map((blog) => <BlogTile data={blog} />)
                }</div> : <div>No blogs to show here!</div>}
            </div>
        </div>
    )
}

export default Home
