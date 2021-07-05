import React, { createContext, useEffect, useState, useContext } from "react";
import data from "../data/data";

const FetchSongsContext = createContext();

const FetchSongsContextProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState([]);

  const selectCurrentSong = id => {
    const currentPlayingSong = songs.find(song => song.id === id);
    setCurrentSong(currentPlayingSong);
  };

  useEffect(() => {
    setSongs(data);
    setCurrentSong(data[0]);
  }, []);
  return (
    <FetchSongsContext.Provider
      value={{ songs, currentSong, setCurrentSong, selectCurrentSong }}
    >
      {children}
    </FetchSongsContext.Provider>
  );
};

export default FetchSongsContextProvider;

export const useFetchSongs = () => {
  const { songs, currentSong, selectCurrentSong } =
    useContext(FetchSongsContext);

  return { songs, currentSong, selectCurrentSong };
};
