import React from 'react'

function CTA() {
  return (
    <div className="h-[120vh] w-full text-white bg-black flex flex-col items-center gap-5 py-20 justify-center">
      <h1 className='text-7xl'>Ready to build together</h1>
      <p className='text-xl text-neutral-400 w-6/10 text-center my-4' >Start free. No credit card. No waiting.</p>
      <div className='flex items-center justify-center gap-5 w-fit h-fit'>
        <button className='border border-neutral-500 text-neutral-400 cursor-pointer px-4 py-2 text-sm rounded-md'>Start</button>
        <button className='border border-white px-4 py-2 text-sm bg-white text-black  cursor-pointer rounded-md'>Demo</button>
      </div>
      <div className='mt-15 bg-[url(/img3.jpg)] bg-cover bg-center border border-neutral-900 flex items-center justify-around border flex-1 w-7/10 rounded-xl'>
    
      </div>
    </div>
  )
}

export default CTA