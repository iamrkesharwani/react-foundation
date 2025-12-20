import Card from './Card';

function App() {
  const movies = [
    {
      id: 1,
      title: 'Oppenheimer',
      status: 'now',
      poster: 'https://picsum.photos/seed/oppenheimer/300/450',
      type: 'Drama',
      genre: 'History',
      year: 2023,
      rating: 8.4,
      duration: '3h 00m',
    },
    {
      id: 2,
      title: 'Dune: Part Two',
      status: 'now',
      poster: 'https://picsum.photos/seed/dune/300/450',
      type: 'Sci-Fi',
      genre: 'Adventure',
      year: 2024,
      rating: 8.6,
      duration: '2h 45m',
    },
    {
      id: 3,
      title: 'Interstellar',
      status: 'now',
      poster: 'https://picsum.photos/seed/interstellar/300/450',
      type: 'Sci-Fi',
      genre: 'Drama',
      year: 2014,
      rating: 8.7,
      duration: '2h 49m',
    },
    {
      id: 4,
      title: 'Jawan',
      status: 'now',
      poster: 'https://picsum.photos/seed/jawan/300/450',
      type: 'Action',
      genre: 'Thriller',
      year: 2023,
      rating: 7.2,
      duration: '2h 49m',
    },
    {
      id: 5,
      title: 'Pushpa 2',
      status: 'soon',
      poster: 'https://picsum.photos/seed/pushpa2/300/450',
      type: 'Action',
      genre: 'Drama',
      year: 2024,
      rating: 8.1,
      duration: '2h 55m',
    },
    {
      id: 6,
      title: 'Deadpool 3',
      status: 'soon',
      poster: 'https://picsum.photos/seed/deadpool/300/450',
      type: 'Action',
      genre: 'Comedy',
      year: 2024,
      rating: 8.0,
      duration: '2h 10m',
    },
    {
      id: 7,
      title: 'Avatar 3',
      status: 'soon',
      poster: 'https://picsum.photos/seed/avatar3/300/450',
      type: 'Fantasy',
      genre: 'Sci-Fi',
      year: 2025,
      rating: 8.3,
      duration: '2h 50m',
    },
    {
      id: 8,
      title: 'The Kashmir Files',
      status: 'now',
      poster: 'https://picsum.photos/seed/kashmir/300/450',
      type: 'Drama',
      genre: 'History',
      year: 2022,
      rating: 8.3,
      duration: '2h 50m',
    },
    {
      id: 9,
      title: 'Mission Impossible 8',
      status: 'soon',
      poster: 'https://picsum.photos/seed/mi8/300/450',
      type: 'Action',
      genre: 'Spy Thriller',
      year: 2025,
      rating: 8.2,
      duration: '2h 35m',
    },
    {
      id: 10,
      title: 'Inception',
      status: 'now',
      poster: 'https://picsum.photos/seed/inception/300/450',
      type: 'Sci-Fi',
      genre: 'Thriller',
      year: 2010,
      rating: 8.8,
      duration: '2h 28m',
    },
  ];

  return (
    <div className="h-screen bg-slate-900 p-4 flex flex-col">
      <h1 className="text-slate-200 font-semibold text-3xl mb-3">
        Static Movie Cards
      </h1>
      <div className="flex flex-wrap gap-3 justify-around items-center flex-1">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            status={movie.status}
            poster={movie.poster}
            type={movie.type}
            genre={movie.genre}
            year={movie.year}
            rating={movie.rating}
            duration={movie.duration}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
