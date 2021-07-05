import React from "react";
import { useButtonContext } from "../../context/buttonLibraryContext";
import "./audio-player.css";
import Nav from "../nav/Nav";
import CurrentSongContainer from "./current-song-container/CurrentSongContainer";
import PlayerControls from "./player-controls/PlayerControls";

const AudioPlayer = () => {
  const { hiddenButtonState } = useButtonContext();
  return (
    <section
      className={`audio-player ${
        hiddenButtonState ? "disabled-library" : "enabled-library"
      }`}
    >
      <Nav />
      <CurrentSongContainer />
      <PlayerControls />
    </section>
  );
};

export default AudioPlayer;
