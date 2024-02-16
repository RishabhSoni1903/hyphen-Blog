import React from 'react';
import { useNavigate } from 'react-router-dom';

function WriteBlogBtn() {

    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/write')}
            className='text-gray-800 hover:bg-gray-400 focus:ring-0
                        font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>
            Write Blog
        </button>
    )
}

export default WriteBlogBtn
