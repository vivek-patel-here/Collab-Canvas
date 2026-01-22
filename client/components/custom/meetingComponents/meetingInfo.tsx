"use client"
import React from 'react';
import { useMeeting } from '@/context/meetingContext';
import { cn } from '@/lib/utils';

function MeetingInfo({mode}:{mode:boolean}) {
    const { name, code } = useMeeting();
    return (<div className='flex w-fit h-fit flex-col items-end  absolute  z-50 right-5 bottom-3'>
        <p className={cn('text-sm font-bold',mode?"text-black":"text-white")}>{!mode?"Video Mode":"Canvas Mode"}</p>
        <p className={cn(' text-sm',mode?"text-black":"text-white")}>{name} | {code} </p>
    </div>
    )
}

export default MeetingInfo