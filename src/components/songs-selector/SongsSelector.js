import React from "react";
import "./songs-selector.css";
import { useButtonContext } from "../../context/buttonLibraryContext";
import SongsList from "./songs-list/SongsList";

const SongsSelector = () => {
  const { hiddenButtonState } = useButtonContext();

  return (
    <section
      className={`songs-selector ${
        hiddenButtonState ? "disabled-library" : "enabled-library"
      }`}
    >
      <h2>Library</h2>
      <SongsList />
    </section>
  );
};

export default SongsSelector;
