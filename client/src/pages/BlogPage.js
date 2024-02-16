import React from 'react'
import { useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaRegComments } from "react-icons/fa";
import { CommentCard } from '../components';

function BlogPage() {

    const { id } = useParams()

    return (
        <div className='w-4/5 mx-auto *:my-4'>
            <div className='text-5xl font-semibold'>An awesome title of blog.</div>
            <div className="flex gap-8">
                <div className='author'>By: <span className='font-semibold'>Author</span></div>
                <div className='bg-orange-100 rounded-full py-1 px-2 text-sm font-medium'>8 min read</div>
                <div className='postedDate'>On: <span className='font-semibold'>2 Feb 2024</span></div>
            </div>
            <div className='content'>A very long content of the blog</div>
            <div className='flex gap-8'>
                <div className='cursor-pointer'><FaHeart className='w-6 h-6 text-orange-700' /></div>
                <div className='cursor-pointer'><FaRegHeart className='w-6 h-6' /></div>
                <div className='flex gap-3 items-center'><FaRegComments className='w-6 h-6' /><span className='font-medium'>Comments</span></div>
            </div>
            <form>
                <div className="w-[600px] mb-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="px-4 py-2 bg-white rounded-t-lg">
                        <textarea id="comment" rows="4" className="w-full px-0 text-gray-900 bg-white border-0 focus:ring-0" placeholder="Write a comment..." required></textarea>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t">
                        <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                            Post
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <CommentCard />
            </div>
        </div>
    )
}

export default BlogPage
