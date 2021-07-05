import React, { useState } from "react";
import "./songslist.css";
import { useFetchSongs } from "../../../context/fetchSongsContext";

const SongsList = () => {
  const { songs, selectCurrentSong } = useFetchSongs();

  return (
    <div className="songs-list-container">
      {songs.map(({ name, id, artist, cover }) => {
        return (
          <div
            key={id}
            className="songs-list-container__song"
            onClick={() => selectCurrentSong(id)}
          >
            <img src={cover} alt="" />
            <div className="songs-list-container__info">
              <h4>{name}</h4>
              <h5>{artist}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SongsList;
