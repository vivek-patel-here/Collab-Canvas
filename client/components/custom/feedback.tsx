"use client"
import React from 'react'
import { Star } from 'lucide-react'
import { motion } from "motion/react"

function Feedback() {
    const arr = [{
        comment: "We cut our design meetings in half. Everything we need is right there.",
        name: "Mikasa Ackerman",
        post: "Lead character, AOT",
        img: "/mikasa.jpeg"
    },
    {
        comment: "No more jumping between tools. The canvas keeps us honest and fast.",
        name: "Levi Ackerman",
        post: "Cadet Corp., AOT",
        img: "/levi.jpeg"
    },
    {
        comment: "Our team finally talks and builds at the same time. It changed how we work.",
        name: "Satoru Gojo",
        post: "Lead character,JJK",
        img: "/gojo.jpeg"

    }]
    return (

        <div className='h-screen w-screen text-white flex flex-col bg-linear-to-b from-black to-[#0a0a0a] rounded-xl backdrop-blur-xl items-center justify-center'>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} >Feedback</motion.li>
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8,delay:0.1 }} className='text-7xl/relaxed my-4'>What people say</motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 ,delay:0.2}} className='text-xl text-neutral-400'>Teams building better together</motion.p>
            <div className='w-9/10 h-fit my-25 flex items-center justify-between '>
                {
                    arr.map((item: any, idx: number) => {
                        return <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8,delay:0.11*idx }} key={idx} className=' h-60 w-100 bg-white/10 backdrop-blur-xs  flex flex-col justify-around rounded-2xl p-5'>
                            <div className='flex gap-1 items-center'>
                                <Star fill='yellow' stroke='yellow' size={15} />
                                <Star fill='yellow' stroke='yellow' size={15} />
                                <Star fill='yellow' stroke='yellow' size={15} />
                                <Star fill='yellow' stroke='yellow' size={15} />
                                <Star fill='yellow' stroke='yellow' size={15} />
                            </div>
                            <p className='py-3 text-md/relaxed'>{item.comment}</p>
                            <div className='flex items-center gap-5'>
                                <img src={item.img} alt="" className='rounded-full overflow-hidden h-15 w-15' />
                                <div>
                                    <div className='text-sm'>{item.name}</div>
                                    <div className='text-xs'>{item.post}</div>
                                </div>
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>

    )
}

export default Feedback