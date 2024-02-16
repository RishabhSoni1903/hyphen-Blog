import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { LoginForm } from '../components';
import axios from '../axios';
import { useDispatch } from 'react-redux'
import { logIn } from '../features/user/userSlice';

const Login = () => {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const handleLoginFunc = async (data) => {
        try {
            const response = await axios.post('/login', data);
            localStorage.setItem("jwt_token", response.data.token)
            dispatch(logIn(response.data.user));
            setShowModal(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <button onClick={() => setShowModal(true)} className='text-gray-800 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>Log in</button>
            {showModal ? (
                <>
                    <div className="backdrop-brightness-[0.2] flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                        <div className="flex flex-col relative items-center justify-center w-[640px] h-[420px] p-4 float-right bg-white rounded">
                            <button className="absolute top-6 right-6 bg-transparent text-black" onClick={() => setShowModal(false)}>
                                <div>
                                    <IoClose className='w-8 h-8 text-gray-800' />
                                </div>
                            </button>
                            <div className="flex flex-col items-center justify-center">
                                <div className="text-3xl font-semibold text-gray-800 text-nowrap my-8">Welcome back!</div>
                                <div>
                                    <LoginForm handleLoginFunc={handleLoginFunc} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default Login
