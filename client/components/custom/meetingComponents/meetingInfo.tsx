"use client"
import React from 'react';
import { useMeeting } from '@/context/meetingContext';
import { cn } from '@/lib/utils';

function MeetingInfo({mode}:{mode:boolean}) {
    const { name, code } = useMeeting();
    return (<>
        <p className={cn('absolute  z-50 right-5 bottom-5 text-sm',mode?"text-black":"text-white")}>{name} | {code} </p>
    </>
    )
}

export default MeetingInfo