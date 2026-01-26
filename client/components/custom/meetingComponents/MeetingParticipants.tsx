"use client"
import { useStore } from '@/context/globalContext';
import { useMeeting } from '@/context/meetingContext'
import { Mic, Video, X ,User, MicOff, VideoOff} from 'lucide-react';

function MeetingParticipants() {
    const {participants,enableParticipants,setEnableParticipants,isHost,code,socketRef} = useMeeting();
    const {url,accessToken,notifyAlert} = useStore()
    const grantPermission =async(participantId:string)=>{
        if(!socketRef.current) return notifyAlert("Socket connection not active.");
        socketRef.current.emit("grant:canDraw",participantId);
    }
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
                    {pt.isHost && <span className='text-blue-400 text-[10px]'>Host</span> }
                    {isHost && !pt.canDraw && <button onClick={()=>grantPermission(pt.uid)} className='text-[8px] border border-black p-1 rounded cursor-pointer'>Grant Permission</button>
                    }
                    </div>
                </li>
            })
        }

       </ul>
    </div>
  :<User  strokeWidth={1} className='z-50 absolute shadow-sm top-5 right-5 text-black bg-white rounded-full h-8 w-8 p-1 cursor-pointer' onClick={()=>setEnableParticipants(true)}/>
}

export default MeetingParticipants

