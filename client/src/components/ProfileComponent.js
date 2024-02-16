import { manImg } from '../assets';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios';

function ProfileComponent() {

    const [user, setUser] = useState();
    const [error, setError] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        setError(null)
            ; (async () => {
                try {
                    const response = await axios.get(`user/${id}`);
                    setUser(response.data)
                } catch (error) {
                    setError(error)
                }

            })();
    }, [id])

    return (
        <div className='flex items-center gap-8'>
            <div className='min-w-32 w-32 min-h-32 h-32 rounded-full overflow-hidden'><img className='h-full object-cover object-center' src={manImg} alt='Profile' /></div>
            <div>
                <div>
                    <div className='text-3xl capitalize'>{user?.name}</div>
                </div>
                <div className='flex items-center gap-8 my-4'>
                    <div>Blogs: <span className='font-semibold'>{user?.blogs.length}</span></div>
                    <div>Followers: <span className='font-semibold'>{user?.followers.length}</span></div>
                    <div>Following: <span className='font-semibold'>{user?.following.length}</span></div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent
