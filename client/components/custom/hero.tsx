"use client"
import React, { useContext } from 'react'
import { BackgroundRippleEffect } from "../ui/background-ripple-effect"
import { useRouter } from 'next/navigation'
import { useStore } from '@/context/globalContext';
import Typewriter from "typewriter-effect"

function Hero() {
  const router = useRouter();
  const { user } = useStore();
  const getStarted = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (user) router.push("/canvas");
    else router.push("/auth");
  }
  return (
    <>
      <div className="relative flex h-120 w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
        <div className="mt-50 h-fit w-full">
          <h1 className='w-4xl mx-auto font-extrabold px-2 text-neutral-400'>COLLAB CANVAS</h1>
          <h1 className="h-fit pb-1 relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold  md:text-3xl lg:text-7xl  text-transparent bg-clip-text bg-linear-to-br from-neutral-600 via-white to-neutral-900">
            Design and evolve systems collaboratively in real time.
          </h1>
          <div className="relative mx-auto z-10 text-lg/relaxed mt-4 max-w-xl text-center  text-neutral-400">
            Meet, sketch, and build with your team in one place. Collab Canvas unites meetings and design so nothing gets lost.
          </div>
        </div>
      </div>
      <div className='w-full h-70 flex items-start justify-center gap-5 my-5'>
        <button onClick={getStarted} className='px-2 py-1 rounded border w-40 h-12 bg-white text-black  cursor-pointer text-sm' >Get Started</button>
        <button className='px-2 py-1 rounded w-40 h-12 cursor-pointer bg-neutral-800 text-sm'>Contact Support</button>
      </div>
    </>
  )
}

export default Hero

{/* <Typewriter
              options={{
                strings: ['live calls', 'structured design boards', ' free-hand sketching.'],
                autoStart: true,
                loop: true,
              }}
            /> */}