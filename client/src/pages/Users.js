import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { UserCard } from '../components';
import { useSelector } from 'react-redux';

function Users() {

    const [users, setUsers] = useState([]);
    const { isLoggedIn, user } = useSelector(state => state.user)

    useEffect(() => {
        ; (async () => {
            try {
                const response = await axios.get('/user/all');
                if (response.status === 200) {
                    setUsers(response.data)
                } else {
                    setUsers([])
                }
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <>
            <div className='w-2/5 mx-auto p-4 text-2xl font-semibold'>Explore authors</div>
            <div
                className='w-2/5 mx-auto my-8 *:my-6'>
                {users.length > 0 ?
                    users.filter((item) => { return isLoggedIn ? item._id !== user._id : item }).map((user) => { return <UserCard key={user._id} user={user} /> })
                    : <div>Error fetching users</div>
                }
            </div>
        </>
    )
}

export default Users
