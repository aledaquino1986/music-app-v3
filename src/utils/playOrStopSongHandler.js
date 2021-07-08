export const playOrStopSongHandler = (setIsPlaying, isPlaying, audioRef) => {
  setIsPlaying(!isPlaying);
  if (isPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }
};
