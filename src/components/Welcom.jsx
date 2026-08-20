import { Calendar, HeartHandshake } from 'lucide-react'
import React from 'react'

function Welcom() {
    return (
        <div className='flex justify-normal text-white mt-8'>

            <div className='flex flex-1'>
            <span>
                              Welcome back, Faizan Ahmad!
             
<p className='text-gray-400 '>
Here's what's new with your projects.
</p>
            </span>
                <HeartHandshake size={40} className='text-cyan-400' />

            </div>
            <div className='flex items-center gap-2 text-gray-300'>
                <Calendar/>
                {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                })}
            </div>
        </div>
    )
}

export default Welcom