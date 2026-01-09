"use client"
import React from 'react'
import { Mic, Video, Phone, MicOff, VideoOff,ArrowLeftRight } from 'lucide-react'
import { useMeeting } from '@/context/meetingContext';
import { useRoomContext,useLocalParticipant } from '@livekit/components-react';
import { useStore } from '@/context/globalContext';
import { useRouter } from 'next/navigation';



const ScreenShareIcon = ({
  size = 24,
  color = "#000",
  strokeWidth = 6,
  ...props
}: {
  size?: number;
  color?: string;
  strokeWidth?: number;
} & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M20 30
        H100
        A10 10 0 0 1 110 40
        V80
        A10 10 0 0 1 100 90
        H20
        A10 10 0 0 1 10 80
        V40
        A10 10 0 0 1 20 30
        Z

        M40 95
        H80

        M60 75
        V50

        M48 62
        L60 50
        L72 62
      "
    />
  </svg>
);






function MeetingNavbar({setMode}:{setMode:any}) {
  const router = useRouter();
  const {audio,setAudio,video,setVideo,socketRef,code} = useMeeting();
  const {url} = useStore();
  const { localParticipant } = useLocalParticipant();
  const room  = useRoomContext()
  const {accessToken,notifyAlert} =useStore();


  const leaveMeeting = async () => {
        if(!socketRef.current) return;
        room.disconnect();

        try {
            const resp = await fetch(`${url}/meeting/leave/${code}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${accessToken}`
                }
            })
            const parsedResp = await resp.json();
            if (!resp.ok) return alert("Unable to leave meeting");
            socketRef.current.disconnect();
            socketRef.current = null;
            console.log("Meeting disconnected.")
            router.push("/meet");
        } catch (err) {
            console.error(err);
            return notifyAlert("Unable to leave meeting ");
        }
    }

  const speak= async()=>{
    await localParticipant.setMicrophoneEnabled(true);
    setAudio(true);
  }

  const stopSpeaking =async()=>{
    await localParticipant.setMicrophoneEnabled(true);
    setAudio(false);
  }

  const videoOn = async()=>{
      await localParticipant.setCameraEnabled(true);
      setVideo(true);
  }

    const videoOff = async()=>{
      await localParticipant.setCameraEnabled(false);
      setVideo(false);
  }

  const shareScreen =async()=>{
    await localParticipant.setScreenShareEnabled(true);
  }


  return (
    <div className='border flex items-center justify-center gap-10  text-black bg-white h-fit px-5 py-2 w-fit absolute z-50 left-1/2 top-5 -translate-x-1/2 rounded-lg '>
      {audio ? <Mic size={18} strokeWidth={1.2} onClick={stopSpeaking} className='cursor-pointer' /> : <MicOff size={18} strokeWidth={1.2} onClick={speak} className='cursor-pointer'  />}
      {video ? <Video size={18} strokeWidth={1.2} onClick={videoOff} className='cursor-pointer'  /> : <VideoOff size={18} strokeWidth={1.2} onClick={videoOn} className='cursor-pointer' />}
      <button className='h-7 w-7 flex items-center justify-center bg-red-600 rounded-full cursor-pointer' onClick={leaveMeeting}>
        <Phone size={15} strokeWidth={1.2}  className='rotate-135 text-white '  />
      </button>
      <ScreenShareIcon size={30} strokeWidth={1.8} className='cursor-pointer text-black' onClick={shareScreen}/>
      <ArrowLeftRight size={20}  strokeWidth={0.8} className='cursor-pointer ' onClick={()=>setMode((prev:boolean)=>!prev)} />

    </div>
  )
}

export default MeetingNavbar