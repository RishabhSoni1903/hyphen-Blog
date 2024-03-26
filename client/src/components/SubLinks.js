import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function SubLinks() {

    const subLinks = [
        {
            name: "Blogs",
            path: 'blogs'
        },
        {
            name: "Followers",
            path: 'followers'
        },
        {
            name: "Following",
            path: 'following'
        },
    ]

    return (
        <div>
            <div
                className='flex gap-24 items-center border-b border-gray w-max font-semibold'>
                {subLinks.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) =>
                            `border-b px-8 py-4 font-semibold ${isActive ? "border-orange-700 text-orange-700" : ""}`}>
                        {link.name}
                    </NavLink>
                ))}
            </div>
            <div>
                <Outlet />
            </div>
        </div >
    )
}

export default SubLinks
