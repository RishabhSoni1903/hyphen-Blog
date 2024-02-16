import React from 'react'
import { manImg } from '../assets'

function CommentCard() {
    return (
        <div className='w-full flex gap-4 shadow p-4'>
            <div className='my-2 min-w-16 min-h-16 w-16 h-16 rounded-full overflow-hidden'><img className='h-full w-full object-cover object-center' src={manImg} alt='Profile' /></div>
            <div className='*:my-2 flex-shrink'>
                <div className='text-lg font-semibold'>John Doe</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati nulla assumenda quisquam ut! Veritatis sit, est vel reprehenderit eius sequi minima optio nostrum</div>
                <div className='text-sm font-semibold'>3 Feb 2024</div>
            </div>
        </div>
    )
}

export default CommentCard
