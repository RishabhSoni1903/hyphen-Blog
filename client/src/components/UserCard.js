import React, { useEffect, useState } from 'react';
import { manImg } from '../assets';
import { useSelector } from 'react-redux';
import { FollowBtn, UnfollowBtn } from '../components'
import axios from '../axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

function UserCard({ user }) {

    const [isFollowing, setIsFollowing] = useState()

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const currUser = useSelector(state => state.user.user)

    useEffect(() => {
        if (isLoggedIn && currUser.following.includes(user._id)) {
            setIsFollowing(true)
        } else {
            setIsFollowing(false);
        }
    }, [currUser, isLoggedIn])

    const handleFollow = async () => {
        if (!isLoggedIn) {
            return alert('LogIn to continue!')
        } else {
            try {
                const jwt = localStorage.getItem("jwt_token")
                const response = await axios.post(`/user/follow/${user._id}`, {}, { headers: { 'Authorization': jwt } })
                setIsFollowing(true)
                dispatch(setUser(response.data));
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleUnfollow = async () => {
        if (!isLoggedIn) {
            return alert('LogIn to continue!')
        } else {
            try {
                const jwt = localStorage.getItem("jwt_token")
                const response = await axios.post(`/user/unfollow/${user._id}`, {}, { headers: { 'Authorization': jwt } })
                setIsFollowing(false)
                dispatch(setUser(response.data))
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleClick = () => {
        navigate(`/user/${user._id}`)
    }

    return (
        <div className='flex gap-4 w-full p-4 shadow rounded'>
            <div onClick={handleClick} className='min-w-24 w-24 min-h-24 h-24 rounded-full overflow-hidden cursor-pointer'><img className='h-full object-cover object-center' src={manImg} alt='Profile' /></div>
            <div className='flex-grow'>
                <div onClick={handleClick} className='text-2xl capitalize cursor-pointer'>{user.name}</div>
                <div>{user.bio}</div>
                <div className='flex mt-2 gap-6'>
                    <div>Blogs: <span className='font-semibold'>{user.blogs.length}</span></div>
                    <div>Followers: <span className='font-semibold'>{user.followers.length}</span></div>
                    <div>Following: <span className='font-semibold'>{user.following.length}</span></div>
                </div>
            </div>
            <div>
                {isFollowing ? <UnfollowBtn onClick={handleUnfollow} /> : <FollowBtn onClick={handleFollow} />}
            </div>
        </div>
    )
}

export default UserCard;
