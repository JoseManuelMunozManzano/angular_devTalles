// Desestructuración

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: 'Mess',
  details: {
    author: 'Ed Sheeran',
    year: 2015,
  },
};

const song = 'New Song';

// La desestructuración
const {
  song: anotherSong,
  songDuration: duration,
  details,
  // details: { author }, // dificil de leer
} = audioPlayer;

const { author } = details; // más fácil de leer

console.log('Song:', anotherSong);
console.log('Duration:', duration);
console.log('Author:', author);

export {};
