import React from 'react'
import Hero from './shared/components/Hero'
import Navbar from './shared/components/Navbar'
import Features from './shared/components/Features'

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="flex h-[85vh] items-center justify-center">
                <Hero />
            </div>

            <div>
                <Features />
            </div>
        </div>
    )
}

export default page
