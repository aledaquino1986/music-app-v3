import React, { useState } from "react";
import Player from "./player/Player";
import { formatTime } from "../../../utils/formatTime";
import "./player-controls.css";
import { useFetchSongs } from "../../../context/fetchSongsContext";

const PlayerControls = () => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });

  const { currentTime, duration } = songInfo;
  const { audioRef } = useFetchSongs();

  const formattedCurrentTime = formatTime(currentTime);
  const formattedDuration = isNaN(duration) ? "0:00" : formatTime(duration);

  const changeInputHandler = e => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div className="player-container">
      <div className="audio-controls-input">
        <p>{formattedCurrentTime}</p>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={changeInputHandler}
        />
        <p>{formattedDuration || "0:00"}</p>
      </div>
      <Player songInfo={songInfo} setSongInfo={setSongInfo} />
    </div>
  );
};

export default PlayerControls;
