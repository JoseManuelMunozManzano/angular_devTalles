//? Desestructuración de Objetos

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

//? Desestructuración de Arreglos

// Sin desestructuración
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const trunks_1 = dbz[3] || 'No hay personaje';

console.error('Personaje 3:', trunks_1);

// Con desestructuración
const [, , trunks = 'No hay personaje']: string[] = ['Goku', 'Vegeta'];
console.error('Personaje 3:', trunks);

export {};
