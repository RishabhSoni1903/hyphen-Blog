import React from 'react'
import { manImg } from '../assets'

function CommentCard({ comment }) {

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-IN', options);
    }

    return (
        <div
            className='w-full flex gap-4 shadow p-4'>
            <div
                className='my-2 min-w-16 min-h-16 w-16 h-16 rounded-full overflow-hidden'><img className='h-full w-full object-cover object-center' src={manImg} alt='Profile' /></div>
            <div
                className='*:my-2 flex-shrink'>
                <div className='text-lg font-semibold capitalize'>
                    {comment.user.name}
                </div>
                <div>
                    {comment.content}
                </div>
                <div
                    className='text-sm font-semibold'>
                    {formatDate(comment.createdAt)}
                </div>
            </div>
        </div>
    )
}

export default CommentCard
