import React, { useState, useRef } from "react";
import { useFetchSongs } from "../../../context/fetchSongsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from "@fortawesome/free-solid-svg-icons";

import "./player-controls.css";

const PlayerControls = () => {
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef(null);

  const handlePlaySong = () => {
    setIsPaused(!isPaused);
    if (isPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const { currentSong } = useFetchSongs();
  const { audio } = currentSong;

  return (
    <div className="player-container">
      <div className="audio-controls-input">
        <p>00:00</p>
        <input type="range" name="" id="" />
        <p>03:00</p>
      </div>
      <div className="audio-controls-container ">
        <div className="audio-controls">
          <FontAwesomeIcon icon={faAngleLeft} size="2x" />

          {isPaused ? (
            <FontAwesomeIcon
              icon={faPause}
              size="2x"
              onClick={handlePlaySong}
            />
          ) : (
            <FontAwesomeIcon icon={faPlay} size="2x" onClick={handlePlaySong} />
          )}

          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </div>
      </div>
      <audio src={audio} ref={audioRef}></audio>
    </div>
  );
};

export default PlayerControls;
