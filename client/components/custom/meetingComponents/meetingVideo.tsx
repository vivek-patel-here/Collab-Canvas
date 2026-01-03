"use client";

import { VideoTrack,useTracks,} from "@livekit/components-react";
import { Track } from "livekit-client";




export default  function MeetingUI(){
  const tracks = useTracks(
    [
      Track.Source.Camera,
      Track.Source.ScreenShare,
    ],
    { onlySubscribed: true }
  );

  return (
    <div className="meeting-root">
      <VideoGrid tracks={tracks} />
    </div>
  );
};

const VideoGrid = ({ tracks }: any) => {
  return (
    <div className="meet-grid">
      {tracks.map((trackRef: any) => (
        <VideoTile key={trackRef.publication.trackSid} trackRef={trackRef} />
      ))}
    </div>
  );
};


const VideoTile = ({ trackRef }: any) => {
  return (
    <div className="video-tile">
      <VideoTrack trackRef={trackRef} />
      <span>{trackRef.participant.identity}</span>
    </div>
  );
};


