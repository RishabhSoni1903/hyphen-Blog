import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaRegComments } from "react-icons/fa";
import { CommentCard } from '../components';
import { useSelector } from 'react-redux'
import axios from '../axios';

function BlogPage() {

    const { id } = useParams();
    const [blog, setBlog] = useState();
    const [comments, setComments] = useState([]);
    const [isLiked, setIsLiked] = useState();
    const [error, setError] = useState(null)
    const [content, setContent] = useState('');

    const { isLoggedIn, user } = useSelector(state => state.user)

    const handleLikeUnlike = async () => {
        try {
            const jwt = localStorage.getItem('jwt_token')
            const response = await axios.put(`blog/${id}/like`, {}, { headers: { 'Authorization': jwt } })
            if (response.status === 200) {
                setIsLiked(!isLiked)
            }
        } catch (error) {
            setError(error)
        }
    }

    const handleCmtSubmit = async (e) => {
        e.preventDefault();
        try {
            const jwt = localStorage.getItem('jwt_token')
            const response = await axios.post(`comment/${id}`, { content }, { headers: { 'Authorization': jwt } })

            if (response.status === 200) {
                setComments([...comments, response.data])
                setContent('');
            } else {
                alert("Error posting the comment!")
            }
            console.log(response)
        } catch (error) {
            setError(error)
        }
    }

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-IN', options);
    }

    useEffect(() => {
        setError(null)
            ; (async () => {
                try {
                    const response = await axios.get(`blog/${id}`);
                    const comments = await axios.get(`comment/${id}`)
                    setComments(comments.data);
                    setBlog(response.data);
                } catch (error) {
                    setError(error)
                }

            })()
        if (blog && blog.likes.includes(user._id)) {
            setIsLiked(true)
        } else {
            setIsLiked(false)
        }

    }, [id]);

    return (
        <div className='w-4/5 mx-auto *:my-8'>
            <div className='text-5xl font-semibold'>
                {blog?.title}
            </div>

            <div id='blog_summary' className='text-2xl'>
                {blog?.summary}
            </div>

            <div className="flex gap-8">
                <div className='author'>
                    By:&nbsp;
                    <span className='font-semibold capitalize'>
                        {blog?.author.name}
                    </span>
                </div>

                <div className='bg-orange-100 rounded-full py-1 px-2 text-sm font-medium'>
                    8 min read
                </div>
                <div className='postedDate font-semibold'>
                    {formatDate(blog?.createdAt)}
                </div>
            </div>

            <div id='blog_content' dangerouslySetInnerHTML={{ __html: blog?.content }}>

            </div>

            <div className='flex gap-8'>
                <div onClick={handleLikeUnlike}>
                    {isLiked ? <FaHeart className='w-6 h-6 text-orange-700 cursor-pointer' /> : <FaRegHeart className='w-6 h-6 cursor-pointer' />}
                </div>
                <div className='flex gap-3 items-center'>
                    <FaRegComments className='w-6 h-6' />
                    <span className='font-medium'>
                        Comments
                    </span>
                </div>
            </div>

            <form onSubmit={handleCmtSubmit}>
                <div className="w-[600px] mb-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="px-4 py-2 bg-white rounded-t-lg">
                        <textarea
                            id="comment"
                            rows="4"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-0 text-gray-900 bg-white border-0 focus:ring-0"
                            placeholder="Write a comment..."
                            required>
                        </textarea>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t">
                        <button
                            type="submit"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                            Post
                        </button>
                    </div>
                </div>
            </form>

            <div className='w-[800px]'>
                {comments.length > 0 ? comments.map((comment) => (<CommentCard key={comment._id} comment={comment} />)) : null}
            </div>

        </div>
    )
}

export default BlogPage
