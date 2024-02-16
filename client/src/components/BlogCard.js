import React from 'react';
import { defaultBlogImg } from '../assets'

function BlogCard({ blog }) {
    return (
        <div className='flex gap-4 w-full p-4 shadow rounded'>
            <div className='rounded overflow-hidden min-w-32 w-32 min-h-32 h-32'>
                <img className='h-full object-cover object-center' src={defaultBlogImg} alt="Blog" />
            </div>
            <div className='flex flex-col justify-between'>
                <div>
                    <div className='text-2xl font-semibold'>An awesome title of this blog.</div>
                    <div className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam. </div>
                </div>
                <div className='flex gap-6 items-center text-base'>
                    <div className='bg-orange-100 rounded-full py-1 px-2 text-sm'>8 min read</div>
                    <div>Posted On: <span className='font-semibold'>4 Feb 2024</span></div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
