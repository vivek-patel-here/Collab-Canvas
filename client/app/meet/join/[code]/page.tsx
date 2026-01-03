"use client";
import { MeetingCanvasContextProvider } from "@/context/meetingCanvasContextProvider";
import { MeetingContextProvider } from "@/context/meetingContext";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { LiveKitRoom } from "@livekit/components-react";
import LiveKitRoomProvider from "@/context/LiveKitRoomProvider";


export default function Room() {
  return <div className='bg-black min-h-screen w-screen relative text-white'>
    <MeetingContextProvider>
      <MeetingCanvasContextProvider>
       <LiveKitRoomProvider/>
      </MeetingCanvasContextProvider>
    </MeetingContextProvider>

  </div>
}
