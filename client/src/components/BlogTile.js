import React from 'react';
import { defaultBlogImg } from '../assets';
import { useNavigate } from 'react-router-dom';

const BlogTile = ({ data }) => {
    console.log(data)

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-IN', options);
    }

    const navigate = useNavigate();

    return (
        <div className='w-full flex gap-6 p-4 border border-gray-100 shadow rounded-md'>
            <div className='rounded h-48 w-h-48 overflow-hidden'>
                <img className='object-cover h-full w-full' src={defaultBlogImg} alt="Blog" />
            </div>
            <div className='flex-grow flex flex-col justify-between'>
                <div className='flex flex-col'>
                    <div
                        onClick={() => navigate(`/blog/${data._id}`)}
                        className='text-2xl font-semibold cursor-pointer'>
                        {data?.title}
                    </div>
                    <div
                        className='text-lg capitalize mt-4'>
                        {data?.summary}
                    </div>
                </div>
                <div>
                    By:&nbsp;
                    <span
                        onClick={() => navigate(`/user/${data.author._id}`)}
                        className='font-semibold cursor-pointer capitalize'>
                        {data?.author.name}
                    </span>
                </div>
                <div
                    className='flex gap-6 items-center text-base'>
                    <div
                        className='bg-orange-100 rounded-full py-1 px-2 text-sm'>
                        8 min read
                    </div>
                    <div>
                        Posted On: <span className='font-semibold'>{formatDate(data?.createdAt)}</span></div>
                </div>
            </div>
        </div>
    )
}

export default BlogTile
