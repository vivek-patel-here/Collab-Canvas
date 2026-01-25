"use client"
import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { easeIn, easeInOut, motion, stagger } from "motion/react";

function Feature() {
  const arr = [
    { src: "meeting.jpeg", p1: "Meet", heading: "Crystal clear video meetings", p2: 'Talk face to face without the lag or the noise' },
    { src: "draw.jpg", p1: "Draw", heading: "Sketch together on a shared canvas", p2: 'All of you drawing at once, no waiting, no confusion' },
    { src: "icons.jpg", p1: "Icons", heading: "Thousands of icons ready to use", p2: 'Build your systems faster with icons that fit your vision' },
    { src: "design.jpeg", p1: "Design", heading: "Plan scalable systems together", p2: 'Real time collaboration for architects and engineers' },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className='h-fit min-h-screen w-full text-white py-5 bg-black  flex flex-col items-center justify-center'>
      <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} >BUILD</motion.li>
      <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className='text-xl text-neutral-400 my-3'>Four tools built for teams that think and work together</motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='w-9/10 h-fit my-25 flex items-center justify-between'
      >
        {
          arr.map((item: any, idx: number) => {
            return <Card item={item} key={idx} />
          })
        }
      </motion.div>
    </div>
  )
}

function Card({ item }: any) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        rotateZ: 2,
      }}
      transition={{
        duration: 0.3,
        ease: easeInOut,
      }}
      className='h-105 rounded-2xl  pb-5 text-black flex flex-col justify-between 
     bg-white/85 overflow-hidden w-75 shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-neutral-600
      hover:shadow-2xl' 
    >
      <img src={item.src} alt="" className='h-40 w-full object-cover' />
      <p className='pl-3 font-bold'>{item.p1}</p>
      <h1 className='pl-3 w-9/10 text-3xl text-black'>{item.heading}</h1>
      <p className='pl-3 text-md'>{item.p2}</p>
    </motion.div>
  );
}


export function ThreeDCardDemo({ heading, src, desc }: { heading: string, src: string, desc: string }) {
  return (
    <CardContainer className="inter-var w-120">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-auto sm:w-120 h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {heading}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={src}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default Feature
