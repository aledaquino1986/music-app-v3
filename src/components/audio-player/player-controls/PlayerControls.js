import React, { useState } from "react";
import { useFetchSongs } from "../../../context/fetchSongsContext";

import "./player-controls.css";
import Player from "./player/Player";

const PlayerControls = () => {
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null
  });

  const { currentTime, duration } = songInfo;

  const formatTime = time => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const formattedCurrentTime = formatTime(currentTime);
  const formattedDuration = isNaN(duration) ? "0:00" : formatTime(duration);

  return (
    <div className="player-container">
      <div className="audio-controls-input">
        <p>{formattedCurrentTime}</p>
        <input type="range" />
        <p>{formattedDuration || "0:00"}</p>
      </div>
      <Player songInfo={songInfo} setSongInfo={setSongInfo} />
    </div>
  );
};

export default PlayerControls;
