import React from "react";
import { useFetchSongs } from "../../../context/fetchSongsContext";

import "./player-controls.css";
import Player from "./player/Player";

const PlayerControls = () => {
  const { currentSong } = useFetchSongs();

  return (
    <div className="player-container">
      <div className="audio-controls-input">
        <p>00:00</p>
        <input type="range" name="" id="" />
        <p>03:00</p>
      </div>
      <Player />
    </div>
  );
};

export default PlayerControls;
