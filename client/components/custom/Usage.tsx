import React from 'react'

function Usage() {
    const arr = [{
        src:"meeting2.jpg",
        heading:"One. Start the meeting",
        para:"Invite your team and begin."
    },{
        src:"draw2.jpg",
        heading:"Two. Sketch on the canvas",
        para:"Draw your ideas while you talk."
    },{
        src:"icons.png",
        heading:"Three. Build with icons",
        para:"Add icons from the library to shape your design."
    }];
  return (
    <div className='h-fit w-full mt-20 text-white bg-black flex flex-col items-center justify-center'>

    <p>START</p>
      <h1 className='text-7xl/loose my-4'>Three steps to building better</h1>
      <p className='text-xl text-neutral-400 w-6/10 text-center' >You gather your team and open a meeting. The canvas waits for you, ready. Everything happens in one place, no switching between windows, no lost context.</p>
      <div className='w-full h-fit my-25 flex items-center justify-around '>
    {arr.map((item:any,idx:number)=>{
        return <div key={idx} className='h-80   flex flex-col items-center justify-start gap-5 overflow-hidden w-85'>
    <img src={item.src} alt="" className='h-40 w-full rounded-xl' />
    <h1 className='h-fit w-9/10 text-center  text-3xl text-white'>{item.heading}</h1>
    <p className='text-sm text-neutral-400 mt-3'>{item.para}</p>
  </div>
    })}
      </div>
    </div>
  )
}

export default Usage