export const changeSongHandler = (
  songs,
  nextOrPreviousSong,
  selectCurrentSong,
  currentSong,
  setIsPlaying,
  isPlaying
) => {
  const currentSongIndex = songs.findIndex(song => song.id === currentSong.id);
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
