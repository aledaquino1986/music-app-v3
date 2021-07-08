import React from "react";
import "./songslist.css";
import { useFetchSongs } from "../../../context/fetchSongsContext";

const SongsList = () => {
  const { songs, currentSong, selectCurrentSongInList } = useFetchSongs();

  return (
    <div className="songs-list-container">
      {songs.map(({ name, id, artist, cover }) => {
        const isActive = currentSong.id === id && "isActive";
        return (
          <div
            key={id}
            className={`songs-list-container__song ${isActive}`}
            onClick={() => selectCurrentSongInList(id)}
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
