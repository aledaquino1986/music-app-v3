import { v4 as uuidv4 } from "uuid";

const songs = [
  {
    name: "Hereafter",
    artist: "Makzo",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
    id: uuidv4(),
    active: true,
    color: ["#5167A1", "#BA756F"],
    audio: "https://mp3.chillhop.com/serve.php/?mp3=11770",
    author: "https://chillhop.com/artists/2761-makzo/"
  },

  {
    name: "Seascape",
    artist: "Makzo",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
    id: uuidv4(),
    active: false,
    color: ["#5167A1", "#BA756F"],
    audio: "https://mp3.chillhop.com/serve.php/?mp3=11773",
    author: "https://chillhop.com/artists/2761-makzo/"
  },

  {
    name: "Melancholy",
    artist: "Makzo",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
    id: uuidv4(),
    active: false,
    color: ["#5167A1", "#BA756F"],
    audio: "https://mp3.chillhop.com/serve.php/?mp3=11778",
    author: "https://chillhop.com/artists/2761-makzo/"
  },

  {
    name: "Departure",
    artist: "Makzo",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
    id: uuidv4(),
    active: false,
    color: ["#5167A1", "#BA756F"],
    audio: "https://mp3.chillhop.com/serve.php/?mp3=11771",
    author: "https://chillhop.com/artists/2761-makzo/"
  },

  {
    name: "Sugarless",
    artist: "The Field Tapes",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
    id: uuidv4(),
    active: false,
    color: ["#DBE8DF", "#64746E"],
    audio: "https://mp3.chillhop.com/serve.php/?mp3=11243",
    author: "https://chillhop.com/artists/1934-the-field-tapes/"
  },

  {
    name: "Lilo",
    artist: "The Field Tapes",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
    id: uuidv4(),
    active: false,
    color: ["#5167A1", "#BA756F"],
    audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
    author: "https://chillhop.com/artists/1934-the-field-tapes/"
  },

  {
    name: "Going Back",
    artist: "Swørn",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
    id: uuidv4(),
    active: false,
    color: ["#32464D", "#34353A"],
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
    author: "https://chillhop.com/artists/121-sworn/"
  }
];

export default songs;
