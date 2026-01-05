import React from 'react'

function Stats() {
    const arr: any[] = [];
    return (
        <div className='h-[120vh] w-full text-black pt-2 pb-30 bg-white flex flex-col items-center justify-center'>
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
            <div className='w-9/10 h-2/3 grid grid-cols-3 grid-rows-2 gap-5 '>
                <div className='border border-neutral-300 rounded-xl row-start-1 row-end-3 col-start-1 col-end-2 flex items-center justify-center flex-col'>
                    <h1 className='text-7xl font-bold'>87%</h1>
                    <p className='text-xl'>Faster Project delivery</p>
                </div>
                <div className='border border-neutral-300 rounded-xl bg-[url(/img1.jpg)] bg-cover bg-center '></div>
                 <div className='border border-neutral-300 rounded-xl flex flex-col items-center justify-center '>
                    <h1 className='text-7xl font-bold'>12K+</h1>
                    <p className='text-xl'>Active teams collaborating</p>
                </div>
                <div className='border border-neutral-300 rounded-xl flex flex-col items-center justify-center '>
                    <h1 className='text-7xl font-bold'>4.2 M</h1>
                    <p className='text-xl'>Icons in the library</p>
                </div>
                <div className='border border-neutral-300 rounded-xl bg-[url(/img2.jpg)] bg-cover bg-center '></div>
            </div>
        </div>
    )
}

export default Stats