import React from 'react'

function Stats() {
    const arr: any[] = [];
    return (
        <div className='h-screen w-full text-black bg-white flex flex-col items-center justify-center'>
            <div className='w-9/10 h-1/3 flex '>
                <div className='h-full w-1/2 gap-3 flex flex-col justify-center'>
                    <p className='w-9/10'>Proven</p>
                    <h1 className='w-9/10 text-5xl'>The numbers speak for themselves</h1>
                </div>
                <div className='h-full w-1/2 flex gap-5 flex-col justify-center '>
                    <p className='w-9/10'>Teams using Collab Canvas report faster design cycles and clearer communication. The platform handles real time collaboration at scale, with thousands of concurrent sketches and zero lag. That matters when you're building systems that need to work.</p>
                    <div className='flex gap-5 w-9/10'>
                        <button className='border border-neutral-500 rounded px-2 py-1 text-sm'>Start</button>
                        <button className='border border-neutral-500 rounded px-2 py-1 text-sm'>Learn {">"}</button>
                    </div>
                </div>
            </div>
            <div className='w-9/10 h-2/3 grid grid-col-3 grid-rows-2 '>
                <div className='row-start-1 row-end-2 col-span-1 w-50 h-50 bg-red-500 '></div>
                <div className='row-span-1 col-span-2 w-50 h-50 bg-blue-500'></div>
                <div className='row-span-1 col-span-3 w-50 h-50 bg-green-500'></div>
                <div className='row-span-2 col-span-2 w-50 h-50 bg-black'></div>
                <div className='row-span-3 col-span-3 w-50 h-50 bg-neutral-500'></div>
            </div>
        </div>
    )
}

export default Stats