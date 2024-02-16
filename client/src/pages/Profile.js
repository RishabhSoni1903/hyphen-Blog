import React from 'react'
import { ProfileComponent, SubLinks } from '../components';

const Profile = () => {

    return (
        <div className='w-full flex justify-center'>
            <div className='w-1/2 *:my-12'>
                <ProfileComponent />
                <SubLinks />
            </div>
        </div>
    )
}

export default Profile
