"use client"
import React from 'react'
import { motion } from "motion/react"

function Usage() {
  const arr = [{
    src: "/meeting2.jpg",
    heading: "One. Start the meeting",
    para: "Invite your team and begin."
  }, {
    src: "/draw2.jpg",
    heading: "Two. Sketch on the canvas",
    para: "Draw your ideas while you talk."
  }, {
    src: "/icons.png",
    heading: "Three. Build with icons",
    para: "Add icons from the library to shape your design."
  }];
  return (
    <div className='h-fit w-full mt-20 text-white bg-black flex flex-col items-center justify-center'>

      <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} >START</motion.li>
      <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.1 }} className='text-7xl/loose my-4'>Three steps to building better</motion.h1>
      <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2 }} className='text-xl text-neutral-400 w-6/10 text-center' >You gather your team and open a meeting. The canvas waits for you, ready. Everything happens in one place, no switching between windows, no lost context.</motion.p>
      <div className='w-full h-fit my-25 flex items-center justify-center gap-20 '>
        {arr.map((item: any, idx: number) => {
          return <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.08*idx }} 
            className="group relative h-96 w-80 rounded-2xl 
             border border-white/10 
             bg-white/5 backdrop-blur-md
             p-5 flex flex-col gap-4
             transition-all duration-300
             hover:-translate-y-1 hover:border-white/20"
          >
            <span className="absolute -top-3 left-4 px-3 py-1 text-xs tracking-widest 
                   bg-black text-white/70 rounded-full border border-white/10">
              STEP {idx + 1}
            </span>
            <div
              className="h-40 w-full rounded-xl bg-cover bg-center 
               opacity-90 group-hover:opacity-100 transition-opacity"
              style={{ backgroundImage: `url(${item.src})` }}
            />
            <h1 className="text-xl text-white font-semibold">
              {item.heading}
            </h1>

            <p className="text-sm text-neutral-400 leading-relaxed">
              {item.para}
            </p>
          </motion.div>
        })}
      </div>
    </div>
  )
}

export default Usage