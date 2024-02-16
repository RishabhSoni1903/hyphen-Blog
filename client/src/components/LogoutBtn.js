import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../features/user/userSlice';

function LogoutBtn() {

    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem('jwt_token');
        dispatch(logOut());
    }

    return (
        <div>
            <button
                onClick={handleLogout}
                className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>
                Log Out
            </button>
        </div>
    )
}

export default LogoutBtn
