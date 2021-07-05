import React from "react";
import "./player.css";
import SongsSelector from "../components/songs-selector/SongsSelector";
import AudioPlayer from "../components/audio-player/AudioPlayer";

const Player = () => {
  return (
    <div className="section-container">
      <SongsSelector />
      <AudioPlayer />
    </div>
  );
};

export default Player;
