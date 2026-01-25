"use client"
import React from 'react'
import { BackgroundRippleEffect } from "../ui/background-ripple-effect"
import { useRouter } from 'next/navigation'
import { useStore } from '@/context/globalContext';
import { motion } from "motion/react"
import { MousePointer, MousePointer2, MousePointerClick } from "lucide-react"

function Hero() {
  const router = useRouter();
  const { user } = useStore();
  const getStarted = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (user) router.push("/canvas");
    else router.push("/auth");
  }
  return (
    <div className="relative flex h-screen w-full flex-col items-start justify-start overflow-hidden ">
      <BackgroundRippleEffect />
      <div className="mt-50 h-fit w-full">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01], }} className='w-4xl mx-auto font-extrabold px-2 text-white'>COLLAB CANVAS</motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }} className="h-fit pb-1 relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold  md:text-3xl lg:text-6xl  text-transparent bg-clip-text bg-linear-to-br from-white via-white to-neutral-900">
          Design and evolve systems collaboratively in real time.
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative mx-auto h-fit z-10 text-lg/relaxed mt-4 max-w-xl text-center  text-neutral-300">
          Meet, sketch, and build with your team in one place. Collab Canvas unites meetings and design so nothing gets lost.
        </motion.div>
      </div>
      <div className='w-full h-80 pt-20 flex items-start justify-center gap-5 relative  '>
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1, scale: 1.1 }} transition={{ duration: 0.8, delay: 0.2 }} className='absolute top-1/6 left-1/4 text-red-500 rotate-150 hover:scale-150 transition-transform duration-300'><MousePointer2 size={20} /></motion.span>
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1, scale: 1.1 }} transition={{ duration: 0.8, delay: 0.2 }} className='absolute top-1/6 right-1/4 text-blue-500 -rotate-65 hover:scale-150 transition-transform duration-300'><MousePointerClick size={20} /></motion.span>
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1, scale: 1.1 }} transition={{ duration: 0.8, delay: 0.2 }} className='absolute bottom-1/3 left-1/3 rotate-90 text-emerald-500 hover:scale-150 transition-transform duration-300' ><MousePointerClick size={20} /></motion.span>
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1, scale: 1.1 }} transition={{ duration: 0.8, delay: 0.2 }} className='absolute bottom-1/3 right-1/3 text-yellow-500 hover:scale-150 transition-transform duration-300'><MousePointer size={20} /></motion.span>
        <motion.button initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} onClick={getStarted} className='px-2 py-1 rounded border w-40 h-12 bg-white text-black  cursor-pointer text-sm hover:scale-105 transition-transform duration-400' >Get Started</motion.button>
        <motion.a href='#contact_detail' initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className='px-2 py-1 rounded w-40 h-12 cursor-pointer bg-neutral-800 text-sm hover:scale-105 transition-transform duration-400 flex items-center justify-center'>Contact Support</motion.a>
      </div>
    </div>
  )
}

export default Hero
