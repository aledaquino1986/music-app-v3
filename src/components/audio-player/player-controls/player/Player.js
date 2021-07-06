import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from "@fortawesome/free-solid-svg-icons";
import { useFetchSongs } from "../../../../context/fetchSongsContext";
import { changeSongHandler } from "../../../../utils/changeSongHandler";
import { playOrStopSongHandler } from "../../../../utils/playOrStopSongHandler";

const Player = ({ setSongInfo, songInfo }) => {
  const {
    currentSong,
    songs,
    selectCurrentSong,
    audioRef,
    isPlaying,
    setisPlaying
  } = useFetchSongs();
  const { audio } = currentSong;

  const timeUpdateHandler = e => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  return (
    <div className="audio-controls-container ">
      <div className="audio-controls">
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="2x"
          onClick={() =>
            changeSongHandler(
              songs,
              -1,
              selectCurrentSong,
              currentSong,
              audioRef,
              setisPlaying,
              isPlaying
            )
          }
        />

        {isPlaying ? (
          <FontAwesomeIcon
            icon={faPause}
            size="2x"
            onClick={() =>
              playOrStopSongHandler(setisPlaying, isPlaying, audioRef)
            }
          />
        ) : (
          <FontAwesomeIcon
            icon={faPlay}
            size="2x"
            onClick={() =>
              playOrStopSongHandler(setisPlaying, isPlaying, audioRef)
            }
          />
        )}

        <FontAwesomeIcon
          icon={faAngleRight}
          size="2x"
          onClick={() =>
            changeSongHandler(
              songs,
              1,
              selectCurrentSong,
              currentSong,
              setisPlaying,
              isPlaying
            )
          }
        />
      </div>
      <audio
        src={audio}
        ref={audioRef}
        onTimeUpdate={e => timeUpdateHandler(e)}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={() =>
          changeSongHandler(
            songs,
            1,
            selectCurrentSong,
            currentSong,
            audioRef,
            setisPlaying,
            isPlaying
          )
        }
      ></audio>
    </div>
  );
};

export default Player;
