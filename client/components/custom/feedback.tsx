"use client"
import React from 'react'
import { Star } from 'lucide-react'
function Feedback() {
    const arr = [{
        comment: "We cut our design meetings in half. Everything we need is right there.",
        name: "Mikasa Ackerman",
        post: "Lead character, AOT",
        img:"/mikasa.jpeg"
    },
    {
        comment: "No more jumping between tools. The canvas keeps us honest and fast.",
        name: "Levi Ackerman",
        post: "Cadet Corp., AOT",
        img:"/levi.jpeg"
    },
    {
        comment: "Our team finally talks and builds at the same time. It changed how we work.",
        name: "Satoru Gojo",
        post: "Lead character,JJK",
        img:"/gojo.jpeg"

    }]
    return (
        <div className='h-screen w-full text-black bg-neutral-100 flex flex-col items-center justify-center'>
            <h1 className='text-7xl/relaxed my-4'>What people say</h1>
            <p className='text-xl text-neutral-400'>Teams building better together</p>
            <div className='w-9/10 h-fit my-25 flex items-center justify-between '>
                {
                    arr.map((item: any, idx: number) => {
                        return <div key={idx} className='border h-60 w-100 border-neutral-200 flex flex-col justify-around rounded-2xl p-5'>
                            <div className='flex gap-1 items-center'>
                                <Star fill='black' size={15}/>
                                <Star fill='black' size={15}/>
                                <Star fill='black' size={15}/>
                                <Star fill='black' size={15}/>
                                <Star fill='black' size={15}/>
                            </div>
                            <p className='py-3 text-md/relaxed'>{item.comment}</p>
                            <div className='flex items-center gap-5'>
                                <img src={item.img} alt="" className='rounded-full overflow-hidden h-15 w-15'/>
                                <div>
                                    <div className='text-sm'>{item.name}</div>
                                    <div className='text-xs'>{item.post}</div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Feedback