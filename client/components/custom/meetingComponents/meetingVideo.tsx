"use client";

import { VideoTrack, useTracks, isTrackReference } from "@livekit/components-react";
import { Track } from "livekit-client";
import { useState } from "react";
import {Pin } from "lucide-react";
import { cn } from "@/lib/utils";
 
export default function MeetingUI() {
  const tracks = useTracks(
    [Track.Source.Camera, Track.Source.ScreenShare],
    { onlySubscribed: true }
  );

  const [pin,setPin] = useState<string|null>(null);

  return (
    <div className="min-h-screen w-full bg-neutral-950 p-4">
      <VideoGrid tracks={tracks} pin={pin} setPin={setPin}/>
    </div>
  );
}

/* ---------------- Grid ---------------- */

type TracksType = ReturnType<typeof useTracks>;

const VideoGrid = ({ tracks,pin,setPin }: { tracks: TracksType ,pin:any , setPin:any }) => {
  if (!tracks.length) {
    return (
      <div className="flex h-100 items-center flex-col text-center justify-center ">
       <span className="text-xl w-full">Welcome to Collab Canvas.</span> <br/>
        <span className="text-lg text-neutral-400">This is Video Meeting mode ,ask Participant to open their video.</span> 
      </div>
    );
  }

  return (
    <div
      className="
        grid h-fit gap-4
        lg:grid-cols-3
        grid-cols-2
      "
    >
      {tracks.map((trackRef) => {

        if (!isTrackReference(trackRef)) return null;
        return <VideoTile
          key={trackRef?.publication?.trackSid}
          trackRef={trackRef}
          pin={pin} setPin={setPin}
        />
      })}
    </div>
  );
};

/* ---------------- Tile ---------------- */

type TrackRefType = TracksType[number];

const VideoTile = ({
  trackRef,
  pin,setPin
}: {
  trackRef: Parameters<typeof VideoTrack>[0]["trackRef"];
  pin:any,setPin:any
}) => {
  const isSpeaking = trackRef?.participant.isSpeaking;
  const isScreen =
    trackRef?.source === Track.Source.ScreenShare;

    const togglePin=(id:any)=>{
      if(pin===id) return setPin(null);
      setPin(id);
    }
  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl bg-neutral-900",
      isSpeaking ? "ring-2 ring-emerald-400" : "ring-1 ring-neutral-800" , pin===trackRef?.participant.identity && "row-start-1 row-end-3 col-start-1 col-end-3"  )
    }
    >
      <div onClick={()=>togglePin(trackRef?.participant.identity)} className="opacity-0 h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 z-10 -translate-y-1/2 bg-black/50 grid place-items-center hover:opacity-100 cursor-pointer">
      <Pin strokeWidth={1} className="w-8 border p-1 border-white h-8 rounded-full"/>
      </div>
      <VideoTrack
        trackRef={trackRef}
        className="h-full w-full object-cover"
      />

      <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur">
        {isScreen && (
          <span className="mr-2 text-xs text-emerald-400">
            Screen
          </span>
        )}
        {trackRef?.participant.identity}
      </div>
    </div>
  );
};
