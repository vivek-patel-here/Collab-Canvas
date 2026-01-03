"use client"

import { useStore } from "@/context/globalContext";
import { useMeeting } from "@/context/meetingContext"
import { ArrowUpLeft } from "lucide-react"


function MeetingCursor() {
    const { cursors } = useMeeting();
    const {user} = useStore();
    return (
        <>
            {
                Object.entries(cursors).map(([uid, cursor]:[string,any]) => uid!==user.id&&cursor.canDraw && <div key={uid} style={{ position: "fixed",pointerEvents: "none",top:cursor.y,left:cursor.x,zIndex:100}}>
                    <ArrowUpLeft stroke="oklch(59.2% 0.249 0.584)" size={20} className="rotate-15 text-pink-600"/>
                    <span className="absolute text-[10px] text-black bottom-0 right-0 translate-x-full">{cursor.name}</span>
                </div>
                )
            }

        </>
    )
}

export default MeetingCursor