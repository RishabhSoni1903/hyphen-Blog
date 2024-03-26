import React from 'react'
import { ProfileComponent, SubLinks } from '../components';
import { useParams } from 'react-router-dom'

const Profile = () => {

    const { id } = useParams();
    console.log(id)

    return (
        <div
            className='w-full flex justify-center'
        >
            <div
                className='w-1/2 *:my-12'
            >
                <ProfileComponent />
                <SubLinks />
            </div>
        </div>
    )
}

export default Profile
