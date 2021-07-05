import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from "@fortawesome/free-solid-svg-icons";
import { useFetchSongs } from "../../../../context/fetchSongsContext";

const Player = () => {
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef(null);

  const { currentSong, songs, selectCurrentSong } = useFetchSongs();
  const { audio } = currentSong;

  const handlePlaySong = () => {
    setIsPaused(!isPaused);
    if (isPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const changeSongHandler = nextOrPreviousSong => {
    const currentSongIndex = songs.findIndex(
      song => song.id === currentSong.id
    );

    const firstIndex = 0;
    const lastIndex = songs.length - 1;

    if (nextOrPreviousSong === -1) {
      if (currentSongIndex === firstIndex) {
        const idOfLastSong = songs[songs.length - 1].id;
        selectCurrentSong(idOfLastSong);
      } else {
        selectCurrentSong(songs[currentSongIndex + nextOrPreviousSong].id);
      }
    } else {
      if (currentSongIndex === lastIndex) {
        const idOfFirstSong = songs[0].id;
        selectCurrentSong(idOfFirstSong);
      } else {
        selectCurrentSong(songs[currentSongIndex + nextOrPreviousSong].id);
      }
    }
  };

  return (
    <div className="audio-controls-container ">
      <div className="audio-controls">
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="2x"
          onClick={() => changeSongHandler(-1)}
        />

        {isPaused ? (
          <FontAwesomeIcon icon={faPause} size="2x" onClick={handlePlaySong} />
        ) : (
          <FontAwesomeIcon icon={faPlay} size="2x" onClick={handlePlaySong} />
        )}

        <FontAwesomeIcon
          icon={faAngleRight}
          size="2x"
          onClick={() => changeSongHandler(1)}
        />
      </div>
      <audio src={audio} ref={audioRef}></audio>
    </div>
  );
};

export default Player;
