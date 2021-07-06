import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useRef
} from "react";
import data from "../data/data";
import { playSongOnChange } from "../utils/playSongOnChange";

const FetchSongsContext = createContext();

const FetchSongsContextProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState([]);
  const [isPlaying, setisPlaying] = useState(false);

  const audioRef = useRef(null);

  const selectCurrentSong = id => {
    const currentPlayingSong = songs.find(song => song.id === id);

    /* delete if it works*/
    // if (!isPlaying) {
    //   setisPlaying(!isPlaying);
    //   audioRef.current.play();
    // }

    setCurrentSong(currentPlayingSong);

    playSongOnChange(isPlaying, audioRef);
  };

  useEffect(() => {
    setSongs(data);
    setCurrentSong(data[0]);
  }, []);
  return (
    <FetchSongsContext.Provider
      value={{
        songs,
        currentSong,
        setCurrentSong,
        selectCurrentSong,
        audioRef,
        isPlaying,
        setisPlaying
      }}
    >
      {children}
    </FetchSongsContext.Provider>
  );
};

export default FetchSongsContextProvider;

export const useFetchSongs = () => {
  const {
    songs,
    currentSong,
    selectCurrentSong,
    audioRef,
    isPlaying,
    setisPlaying
  } = useContext(FetchSongsContext);

  return {
    songs,
    currentSong,
    selectCurrentSong,
    audioRef,
    isPlaying,
    setisPlaying
  };
};
