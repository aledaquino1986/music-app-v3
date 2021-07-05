export const playOrStopSongHandler = (setIsPaused, isPaused, audioRef) => {
  setIsPaused(!isPaused);
  if (isPaused) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }
};
