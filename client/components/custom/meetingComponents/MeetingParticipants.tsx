"use client"
import { useMeeting } from '@/context/meetingContext'
import { Mic, Video, X ,User, MicOff, VideoOff} from 'lucide-react';

function MeetingParticipants() {
    const {participants,enableParticipants,setEnableParticipants,isHost,audio,video} = useMeeting();
  return enableParticipants ? 
    <div className='absolute top-5 right-5  rounded-lg bg-white shadow-md w-70 h-110 z-50 text-black p-2 flex flex-col items-center '>
       <h1 className='text-md font-semibold mb-1 w-full'>Participants</h1> 
       <X className='absolute top-3 right-3 cursor-pointer'  strokeWidth={1} size={15} onClick={()=>setEnableParticipants(false)}/>
       <ul className='flex-1  w-full '>
        {
            participants.map((pt:any,idx:number)=>{
                return <li key={idx} className='flex items-center justify-between border my-2 border-neutral-200 p-1 rounded'>
                    <p className='pl-2 text-xs'>{pt.name}  </p>
                    <div className='flex items-center w-fit justify-end gap-3 '>
                    {isHost && !pt.isHost && ( pt.canDraw ? <span className='text-[10px] text-red-600 cursor-pointer '>Revoke </span> : <span className='text-[10px] text-green-500 cursor-pointer w-fit h-fit p-1 rounded-2xl bg-green-200 '>Grant</span>)}
                    {pt.isHost && <span className='text-blue-400 text-[10px]'>Host</span>}
                    {audio?<Mic size={15} strokeWidth={1} className='text-green-500' fill='lightgreen'/>:<MicOff size={15} strokeWidth={1} className='text-red-500' fill='red'/>}
                    {video?<Video size={15} strokeWidth={1} className='text-green-500' fill='lightgreen'/>:<VideoOff size={15} strokeWidth={1} className='text-red-500' fill='red'/>}
                    </div>
                </li>
            })
        }

       </ul>
    </div>
  :<User  strokeWidth={1} className='z-50 absolute shadow-sm top-5 right-5 text-black bg-white rounded-full h-8 w-8 p-1 cursor-pointer' onClick={()=>setEnableParticipants(true)}/>
}

export default MeetingParticipants

