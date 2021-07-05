export function playSongOnChange(isPlaying, audioRef) {
  if (isPlaying) {
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(audio => {
          audioRef.current.play();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
