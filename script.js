let songs = [
  {
      title: "Channa Mereya",
      artist: "Arjit Singh",
      albumPic: "Channa Mereya_pic.jpg",
      audio: "song1.mp3"
  },
  {
      title: "Dandelions",
      artist: "Ruth B",
      albumPic: "Dandelions-English_pic.jpg",
      audio: "song2.mp3"
  },
  {
      title: "Memories",
      artist: "adam levine",
      albumPic: "memories_pic.jpg",
      audio: "song3.mp3"
  }
];

let currentSong = 0;

let audio = document.getElementById("audio");
let albumPic = document.getElementById("album-pic");
let songTitle = document.getElementById("song-title");
let artistName = document.getElementById("artist-name");
let playPauseBtn = document.getElementById("play-pause-btn");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");

function loadSong() {
  albumPic.src = songs[currentSong].albumPic;
  songTitle.textContent = songs[currentSong].title;
  artistName.textContent = songs[currentSong].artist;
  audio.src = songs[currentSong].audio;
}

loadSong();

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "Pause";
  } else {
      audio.pause();
      playPauseBtn.textContent = "Play";
  }
});

prevBtn.addEventListener("click", () => {
  currentSong--;
  if (currentSong < 0) {
      currentSong = songs.length - 1;
  }
  loadSong();
  audio.play();
});

nextBtn.addEventListener("click", () => {
  currentSong++;
  if (currentSong >= songs.length) {
      currentSong = 0;
  }
  loadSong();
  audio.play();
});

audio.addEventListener("ended", () => {
  currentSong++;
  if (currentSong >= songs.length) {
      currentSong = 0;
  }
  loadSong();
  audio.play();
});
