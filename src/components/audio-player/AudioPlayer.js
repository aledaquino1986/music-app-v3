import React from "react";
import { useButtonContext } from "../../context/buttonLibraryContext";
import "./audio-player.css";
import Nav from "../nav/Nav";

const AudioPlayer = () => {
  const { hiddenButtonState } = useButtonContext();
  return (
    <section
      className={`audio-player ${
        hiddenButtonState ? "disabled-library" : "enabled-library"
      }`}
    >
      <Nav />
    </section>
  );
};

export default AudioPlayer;
