import React, { useState } from 'react'

function LoginForm({ handleLoginFunc }) {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState(false)


    const handleLogin = (e) => {
        setLoading(true);
        e.preventDefault();
        handleLoginFunc(formData);
        setLoading(false);
    }

    return (
        <form onSubmit={handleLogin} className='*:my-6'>
            <div>
                <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className=' px-4 rounded focus:ring-0 border border-gray-400 focus:border-gray-400'
                    placeholder='Email' />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className=' px-4 rounded focus:ring-0 border border-gray-400 focus:border-gray-400'
                    placeholder='Password' />
            </div>
            <div>
                <button
                    type='submit'
                    className='w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>
                    {loading ? 'Logging In...' : 'Log in'}
                </button>
            </div>
        </form>
    )
}

export default LoginForm
