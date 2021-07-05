import React from "react";
import "./songslist.css";
import { useFetchSongs } from "../../../context/fetchSongsContext";

const SongsList = () => {
  const data = useFetchSongs();

  return (
    <div className="songs-list-container">
      {data.map(({ name, id, artist, cover }) => {
        return (
          <div key={id} className="songs-list-container__song">
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
