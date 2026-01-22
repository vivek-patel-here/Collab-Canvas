"use client"
import { LiveKitRoom,RoomAudioRenderer } from '@livekit/components-react'
import React ,{useState} from 'react'
import MeetingNavbar from "@/components/custom/meetingComponents/meetingNavbar";
import MeetingInfo from "@/components/custom/meetingComponents/meetingInfo";
import MeetingParticipants from "@/components/custom/meetingComponents/MeetingParticipants";
import MeetingChat from "@/components/custom/meetingComponents/meetingChat";
import MeetingCursor from "@/components/custom/meetingComponents/meetingCursor";
import MeetingVideo from "@/components/custom/meetingComponents/meetingVideo";
import { useMeeting } from './meetingContext';
import CanvasBoard from "@/components/custom/CanvasComponents/CanvasBoard";
import MeetingPermission from '@/components/custom/meetingComponents/meetingPermission';


function LiveKitRoomProvider() {
    const {liveKitToken} = useMeeting();
    const [mode, setMode] = useState<boolean>(true); // true-> canvas Mode and false ->video mode
    const [permission,setPermission] = useState<boolean>(false);
  return (
    <LiveKitRoom serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL} token={liveKitToken}>
      <RoomAudioRenderer />
      {!permission ? <MeetingPermission setPermission={setPermission}/>
      :
      <>
         <MeetingNavbar  setMode={setMode}/>
        <MeetingInfo mode={mode} />
        {mode ? <>
          <CanvasBoard />
          <MeetingCursor />
        </>: <MeetingVideo /> }
        <MeetingParticipants />
        <MeetingChat />
      </>}
    </LiveKitRoom>
  )
}

export default LiveKitRoomProvider