"use client"
import React from 'react'
import { Mic, Video, Phone, MicOff, VideoOff, ArrowLeftRight,ScreenShareOff ,ScreenShare} from 'lucide-react'
import { useMeeting } from '@/context/meetingContext';
import { useRoomContext, useLocalParticipant } from '@livekit/components-react';
import { useStore } from '@/context/globalContext';
import { useRouter } from 'next/navigation';
import type { Room } from 'livekit-client';








function MeetingNavbar({ setMode }: { setMode: any }) {
  const router = useRouter();
  const { audio, setAudio, video, setVideo, socketRef, code,screen,setScreen } = useMeeting();
  const { url } = useStore();
  const { localParticipant } = useLocalParticipant();
  const room = useRoomContext()
  const { accessToken, notifyAlert } = useStore();


  const leaveMeeting = async () => {
    if (!room || !socketRef.current) return;
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
      if (!resp.ok) return notifyAlert("Unable to leave meeting");
      socketRef.current.disconnect();
      socketRef.current = null;
      console.log("Meeting disconnected.")
      router.push("/meet");
    } catch (err) {
      console.error(err);
      return notifyAlert("Unable to leave meeting ");
    }
  }

  const speak = async () => {
    if (!room || !localParticipant) return;
    await room.startAudio();
    await localParticipant.setMicrophoneEnabled(true);
    setAudio(true);
  }

  const stopSpeaking = async () => {
      if (!localParticipant) return;
    await localParticipant.setMicrophoneEnabled(false);
    setAudio(false);
  }

  const videoOn = async () => {
      if (!localParticipant) return;
    await localParticipant.setCameraEnabled(true);
    setVideo(true);
  }

  const videoOff = async () => {
      if (!localParticipant) return;
    await localParticipant.setCameraEnabled(false);
    setVideo(false);
  }

  const shareScreen = async () => {
      if (!localParticipant) return;
    await localParticipant.setScreenShareEnabled(true);
    setScreen(true);
  }

  const stopScreen = async()=>{
      if (!localParticipant) return;
    await localParticipant.setScreenShareEnabled(false);
    setScreen(false);
  }


  return (
    <div className='border flex items-center justify-center gap-10  text-black bg-white h-fit px-5 py-2 w-fit absolute z-50 left-1/2 top-5 -translate-x-1/2 rounded-lg '>
      {audio ? <Mic size={18} strokeWidth={1.2} onClick={stopSpeaking} className='cursor-pointer' /> : <MicOff size={18} strokeWidth={1.2} onClick={speak} className='cursor-pointer' />}
      {video ? <Video size={18} strokeWidth={1.2} onClick={videoOff} className='cursor-pointer' /> : <VideoOff size={18} strokeWidth={1.2} onClick={videoOn} className='cursor-pointer' />}
      <button className='h-7 w-7 flex items-center justify-center bg-red-600 rounded-full cursor-pointer' onClick={leaveMeeting}>
        <Phone size={15} strokeWidth={1.2} className='rotate-135 text-white ' />
      </button>
      {!screen ? <ScreenShare size={20} strokeWidth={0.8} className='cursor-pointer text-black' onClick={shareScreen} />:<ScreenShareOff size={20} strokeWidth={0.8} className='cursor-pointer text-black' onClick={stopScreen}/>}
      <ArrowLeftRight size={20} strokeWidth={0.8} className='cursor-pointer ' onClick={() => setMode((prev: boolean) => !prev)} />

    </div>
  )
}

export default MeetingNavbar