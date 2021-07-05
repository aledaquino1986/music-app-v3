import React, { createContext, useEffect, useState, useContext } from "react";
import data from "../data/data";

const FetchSongsContext = createContext();

const FetchSongsContextProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(data);
    console.log("fetching");
  }, []);
  return (
    <FetchSongsContext.Provider value={{ songs }}>
      {children}
    </FetchSongsContext.Provider>
  );
};

export default FetchSongsContextProvider;

export const useFetchSongs = () => {
  const { songs } = useContext(FetchSongsContext);

  return songs;
};
