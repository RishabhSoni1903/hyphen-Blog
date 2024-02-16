import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
import axios from '../axios';
import { useParams } from 'react-router-dom';

function Following() {

    const [following, setFollowing] = useState([]);
    const [error, setError] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        setError(null)
            ; (async () => {
                try {
                    const response = await axios.get(`user/${id}/following`);
                    setFollowing(response.data)
                } catch (error) {
                    setError(error)
                }

            })()
    }, [id])

    return (
        <div>
            <>
                {following.length > 0 ?
                    <>{following.map((user) => { return <UserCard key={user._id} user={user} /> })}</>
                    :
                    <div className='my-8 font-semibold'>
                        No Following yet!
                    </div>
                }
            </>
        </div>
    )
}

export default Following
