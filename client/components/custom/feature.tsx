"use client"
import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { ChevronRight } from "lucide-react"

function Feature() {
  const arr = [
    {src:"meeting.jpeg",p1:"Meet" , heading:"Crystal clear video meetings",p2:'Talk face to face without the lag or the noise'},
    {src:"draw.jpg",p1:"Draw" , heading:"Sketch together on a shared canvas",p2:'All of you drawing at once, no waiting, no confusion'},
    {src:"icons.jpg",p1:"Icons" , heading:"Thousands of icons ready to use",p2:'Build your systems faster with icons that fit your vision'},
    {src:"design.jpeg",p1:"Design" , heading:"Plan scalable systems together",p2:'Real time collaboration for architects and engineers'},
  ];
  return (
    <div className='h-fit w-full text-black py-5 bg-white mt-20 flex flex-col items-center justify-center'>
      <p >BUILD</p>
      <h1 className='text-7xl/relaxed my-4'>Everything you need here</h1>
      <p className='text-xl text-neutral-400'>Four tools built for teams that think and work together</p>
      <div className='w-9/10 h-fit my-25 flex items-center justify-between '>
      {
        arr.map((item:any,idx:number)=>{
          return <Card item={item} key={idx}/>
        })
      }
      </div>
    </div>
  )
}

function Card({item}:any){
  return <div className='h-105 rounded-2xl border pb-5 flex flex-col justify-between border-neutral-100 bg-neutral-100 overflow-hidden w-75 hover:scale-x-105 hover:scale-y-105 hover:shadow-2xl shadow-neutral-500 transition-all duration-300'>
    <img src={item.src} alt="" className='h-40  w-full' />
    <p className='pl-3 font-bold'>{item.p1}</p>
    <h1 className='pl-3 h-fit w-9/10  text-3xl text-black'>{item.heading}</h1>
    <p className='pl-3 text-md'>{item.p2}</p>

  </div>
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
