"use client"
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "motion/react";

function FAQ() {
    const arr = [
        { question: "Can multiple people draw simultaneously?", answer: "Yes. Everyone in the meeting can draw on the canvas at the same time. Changes appear instantly for all participants. There's no waiting for turns or merging sketches later. It's like being in the same room with a whiteboard." },
        { question: "Do I need separate tools for video?", answer: "No. Video meetings are built in. You start a meeting, the canvas opens alongside it, and you're ready to work. No switching between windows. No lost context. Everything stays in one place." },
        { question: "How many icons are available?", answer: "Over four million icons are ready to use. They're organized by category and searchable. You can add them directly to your canvas while you're designing. They're built for system design work." },
        { question: "Is Collab Canvas secure?", answer: "Your data is encrypted in transit and at rest. We follow enterprise security standards. Access controls let you decide who sees what. Your designs stay yours." },
        { question: "What about offline work?", answer: "Collab Canvas works best with a connection since collaboration is real time. Your work syncs automatically when you're back online. For offline sketching, export your canvas and bring it back when you're ready." },
    ]
    return (<div className='h-screen w-screen text-white bg-black flex items-center justify-between px-10'>
        <div className='h-full w-1/2 flex flex-col items-center gap-5 justify-center'>
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className='w-full pl-10 text-6xl'>FAQ</motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className='w-full pl-10 text-neutral-400  text-md'>Questions about how Collab Canvas works</motion.p>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.3 }} className='min-h-7/10 h-fit  w-full px-10 py-5'>
                <Accordion type="single" collapsible className="w-full">
                    {arr.map((item, idx) => <Item key={idx} value={`${idx}`} question={item.question} answer={item.answer} />)}

                </Accordion>
            </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.5 }} className=' h-full w-1/2 bg-[url(/_.gif)] bg-cover bg-center' />

    </div>

    )
}


function Item({ value, question, answer }: any) {
    return <AccordionItem value={value} className='min-h-25'>
        <AccordionTrigger className='text-md font-light'>{question}?</AccordionTrigger>
        <AccordionContent className='w-9/10 text-md'>
            {answer}
        </AccordionContent>
    </AccordionItem>
}

export default FAQ