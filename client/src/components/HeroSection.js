import React from 'react'
import { heroSvg } from '../assets';
import { Signup } from '../pages';
import { useSelector } from 'react-redux';

const HeroSection = () => {

    const { isLoggedIn } = useSelector(state => state.user)

    return (
        <div
            className='w-full bg-gray-500 text-white flex justify-center items-center'>
            <div
                className='w-1/2 flex flex-col justify-center items-center'>
                <div
                    className='text-left *:my-4'>
                    <p
                        className='text-4xl font-semibold'>
                        Know About The World
                    </p>
                    <p>
                        And let the world know about you!
                    </p>
                    {!isLoggedIn && <Signup />}
                </div>
            </div>
            <div
                className='w-1/2 flex flex-col justify-center items-center'>
                <img
                    className='h-[500px]' src={heroSvg} alt="hero_svg" />
            </div>
        </div>
    )
}

export default HeroSection
