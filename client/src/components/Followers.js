import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
import axios from '../axios';
import { useParams } from 'react-router-dom';

function Followers() {

    const [followers, setFollowers] = useState([]);
    const [error, setError] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        setError(null)
            ; (async () => {
                try {
                    const response = await axios.get(`user/${id}/followers`);
                    setFollowers(response.data)
                } catch (error) {
                    setError(error)
                }

            })()
    }, [id])

    return (
        <div>
            <>
                {followers.length > 0 ?
                    <>{followers.map((user) => { return <UserCard key={user._id} user={user} /> })}</>
                    :
                    <div className='my-8 font-semibold'>
                        No Followers yet!
                    </div>
                }
            </>
        </div>
    )
}

export default Followers
