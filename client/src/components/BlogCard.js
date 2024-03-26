import React from 'react';
import { defaultBlogImg } from '../assets';
import { useNavigate } from 'react-router-dom';


function BlogCard({ blog }) {

    console.log(blog)

    const navigate = useNavigate();

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-IN', options);
    }

    return (
        <div
            className='flex gap-4 w-full p-4 shadow rounded'>
            <div
                onClick={() => navigate(`/blog/${blog._id}`)}
                className='rounded overflow-hidden min-w-32 w-32 min-h-32 h-32'>
                <img
                    className='h-full object-cover object-center'
                    src={defaultBlogImg}
                    alt="Blog" />
            </div>
            <div
                className='flex flex-col justify-between'>
                <div>
                    <div
                        onClick={() => navigate(`/blog/${blog._id}`)}
                        className='text-2xl font-semibold'>
                        {blog?.title}
                    </div>
                    <div
                        className='text-lg'>
                        {blog.summary}
                    </div>
                </div>
                <div
                    className='flex gap-6 items-center text-base'>
                    <div
                        className='bg-orange-100 rounded-full py-1 px-2 text-sm'>
                        8 min read
                    </div>
                    <div>
                        Posted On:&nbsp;
                        <span className='font-semibold'>
                            {formatDate(blog.createdAt)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
