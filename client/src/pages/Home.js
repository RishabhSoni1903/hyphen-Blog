import React from 'react'
import { HeroSection, BlogTile } from '../components'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <div className='w-4/5 mx-auto *:my-4'>
                <BlogTile />
                <BlogTile />
            </div>
        </div>
    )
}

export default Home
