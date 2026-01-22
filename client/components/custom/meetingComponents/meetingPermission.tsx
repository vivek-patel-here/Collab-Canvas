"use client"

import React from 'react';
import { useRoomContext } from '@livekit/components-react';

function MeetingPermission({ setPermission }: { setPermission: any }) {
    const room = useRoomContext()
    const joinMeet = async () => {
        await room.startAudio();
        await room.localParticipant.setCameraEnabled(false);
        await room.localParticipant.setMicrophoneEnabled(false)
        setPermission(true);
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="bg-neutral-800/70 backdrop-blur-lg border border-neutral-700 rounded-2xl shadow-xl p-8 w-full max-w-md text-center">

                <h1 className="text-2xl font-semibold text-white mb-2">
                    Ready to join?
                </h1>

                <p className="text-slate-400 text-sm mb-6">
                    You'll join with your microphone muted.
                </p>

                <button
                    onClick={joinMeet}
                    className="
                    w-full py-3 px-6 rounded-xl
                    bg-neutral-600 hover:bg-neutral-500
                    text-white font-medium text-base
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-indigo-400
                    active:scale-[0.98]"
                >
                    Join meeting
                </button>

                <p className="mt-4 text-xs text-slate-500">
                    Enjoy seamless, uninterrupted video meetings.
                </p>
            </div>
        </div>

    )
}

export default MeetingPermission