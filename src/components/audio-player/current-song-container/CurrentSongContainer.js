import React from "react";
import { useFetchSongs } from "../../../context/fetchSongsContext";
import "./current-song.css";

const CurrentSongContainer = () => {
  const { currentSong, isPlaying } = useFetchSongs();
  const { name, cover, artist, author } = currentSong;

  return (
    <div className="current-song-container">
      <img
        className={`${isPlaying && "image-spinning"}`}
        src={cover}
        alt={`${name} by ${artist}`}
        title={`${name} by ${artist}`}
      />
      <h4>{name}</h4>
      <a href={author} _blank="true">
        <h5>{artist}</h5>
      </a>
    </div>
  );
};

export default CurrentSongContainer;
