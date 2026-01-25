"use client"
import React from 'react'
import {motion} from "motion/react"

export default function Seperator() {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}} className='h-px w-screen bg-linear-to-r from-transparent via-white/30 to-transparent'></motion.div>
  )
}
