import React from 'react'
import { defaultBlogImg } from '../assets'

const BlogTile = () => {

    return (
        <div className='w-full flex gap-6 p-4 border border-gray-100 shadow rounded-md'>
            <div className='rounded h-48 w-h-48 overflow-hidden'>
                <img className='object-cover h-full w-full' src={defaultBlogImg} alt="Blog" />
            </div>
            <div className='flex-grow flex flex-col justify-between'>
                <div className='flex flex-col'>
                    <div className='text-2xl font-semibold'>An awesome title of this blog.</div>
                    <div className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam. Short summary of blog.</div>
                </div>
                <div> By: <span className='font-semibold'> Author name </span></div>
                <div className='flex gap-6 items-center text-base'>
                    <div className='bg-orange-100 rounded-full py-1 px-2 text-sm'>8 min read</div>
                    <div>Posted On: <span className='font-semibold'>4 Feb 2024</span></div>
                </div>
            </div>
        </div>
    )
}

export default BlogTile
