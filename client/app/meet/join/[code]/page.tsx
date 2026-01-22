"use client";
import { MeetingCanvasContextProvider } from "@/context/meetingCanvasContextProvider";
import { MeetingContextProvider } from "@/context/meetingContext";
import RoomProvider from "@/context/RoomProvider";


export default function Room() {
  return <div className='bg-black min-h-screen w-screen relative text-white'>
    <MeetingContextProvider>
      <MeetingCanvasContextProvider>
       <RoomProvider/>
      </MeetingCanvasContextProvider>
    </MeetingContextProvider>

  </div>
}
