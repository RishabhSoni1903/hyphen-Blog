import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Login, Signup } from '../pages';
import { useSelector } from 'react-redux';
import { LogoutBtn, WriteBlogBtn } from '../components'

const Navbar = () => {

    const { isLoggedIn, user } = useSelector((state) => state.user)

    const navItems = [
        { text: 'Home', path: '/' },
        { text: 'Users', path: '/users' },
    ];


    return (
        <header
            className="shadow sticky z-50 top-0">
            <nav
                className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 h-16">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link
                        to="/"
                        className="flex items-center text-2xl font-bold">
                        <span
                            className='text-orange-700'>
                            hyphen
                        </span>
                        -Blog
                    </Link>
                    <div
                        className="w-60 flex items-center h-10 lg:order-2">
                        {isLoggedIn ?
                            <> <WriteBlogBtn /> <LogoutBtn /></>
                            :
                            <><Login /><Signup /></>}
                    </div>
                    <div
                        className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul
                            className="flex flex-grow flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {navItems.map((item) => (<li key={item.text}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    {item.text}
                                </NavLink>
                            </li>))}
                            {isLoggedIn &&
                                <>
                                    <li key='feed'>
                                        <NavLink
                                            to="/feed"
                                            className={({ isActive }) =>
                                                `${isLoggedIn ? 'visible' : 'invisible'} py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            Feed
                                        </NavLink>
                                    </li>
                                    <li key='profile'>
                                        <NavLink
                                            to={`/user/${user._id}`}
                                            className={({ isActive }) =>
                                                `${isLoggedIn ? 'visible' : 'invisible'} py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            My Profile
                                        </NavLink>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;