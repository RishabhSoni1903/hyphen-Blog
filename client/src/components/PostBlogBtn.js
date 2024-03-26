import React, { useEffect, useState } from 'react';
import axios from '../axios';

function PostBlogBtn({ data }) {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false)
    }, [])

    const handleClick = async () => {
        setLoading(true);
        if (data.title.length < 1 || data.content.length < 1 || data.summary.length < 1) {
            setLoading(false);
            return alert("Cannot post the blog")
        }
        try {
            const jwt = localStorage.getItem('jwt_token')
            const response = await axios.post('/blog', data, { headers: { 'Authorization': jwt } })
            setLoading(false)
            if (response.status === 200) {
                return alert("Blog successfully posted!")
            }
            alert("Error posting blog. Try again!")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button
            onClick={handleClick}
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-0 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
            {loading ?
                "Posting..."
                :
                "Post It"}
        </button>
    )
}

export default PostBlogBtn
