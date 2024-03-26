import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import axios from '../axios';

function Signup() {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        bio: '',
    })

    // TODO: Make form a separate component and pas func as prop to handle modal show and hide
    const handleSignup = async (e) => {
        setLoading(true)
        e.preventDefault();
        try {
            const response = await axios.post('/signup', formData);
            setFormData({ name: '', email: '', password: '', bio: '' })
            setLoading(false)
            setShowModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button onClick={() => setShowModal(true)} className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>Get started</button>
            {showModal ? (
                <>
                    <div
                        className="backdrop-brightness-[0.2] flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                        <div
                            className="flex flex-col relative items-center justify-center w-[640px] h-min p-20 float-right bg-white rounded">
                            <button
                                className="absolute top-6 right-6 bg-transparent text-black"
                                onClick={() => setShowModal(false)}>
                                <div>
                                    <IoClose
                                        className='w-8 h-8 text-gray-800' />
                                </div>
                            </button>
                            <div
                                className="flex flex-col items-center justify-center">
                                <div
                                    className="text-3xl font-semibold text-gray-800 text-nowrap my-8">
                                    Welcome!
                                </div>
                                <div>
                                    <form
                                        onSubmit={handleSignup}>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            name="name"
                                            required
                                            className=' my-4 block w-full px-4 rounded focus:ring-0 border border-gray-400 focus:border-gray-400' placeholder='Name' />

                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            name="email"
                                            required
                                            className=' my-4 block w-full px-4 rounded focus:ring-0 border border-gray-400 focus:border-gray-400' placeholder='Email' />

                                        <input
                                            type="password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            name="password"
                                            required
                                            className=' my-4 block w-full px-4 rounded focus:ring-0 border border-gray-400 focus:border-gray-400' placeholder='Password' />

                                        <textarea id="bio"
                                            value={formData.bio}
                                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                            rows="4"
                                            className="resize-none my-2 w-full text-gray-900 bg-white px-4 rounded focus:ring-0 border border-gray-400 focus:border-gray-400" placeholder="Tell the world about you..." required></textarea>

                                        <button
                                            type='submit'
                                            className='my-2 w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>
                                            {loading ? 'Signing in...' : 'Get Started'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default Signup
