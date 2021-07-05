import React from "react";
import { useFetchSongs } from "../../../context/fetchSongsContext";
import "./current-song.css";

const CurrentSongContainer = () => {
  const { currentSong } = useFetchSongs();

  const { name, cover, artist } = currentSong;

  return (
    <div className="current-song-container">
      <img src={cover} alt="" />
      <h4>{name}</h4>
      <h5>{artist}</h5>
    </div>
  );
};

export default CurrentSongContainer;
