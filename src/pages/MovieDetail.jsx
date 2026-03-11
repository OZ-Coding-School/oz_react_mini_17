import { useLocation } from "react-router-dom";

function MovieDetail() {
  const location = useLocation();
  const movie = location.state?.movie;
  const { poster_path, title, vote_average, genres, overview } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="bg-black flex min-h-screen">
      <div className="w-100% h-100% relative">
        <img src={posterUrl} alt={title} />
      </div>
      <div className="flex flex-col flex-1  p-4 gap-3 text-white">
        <div className="text-5xl font-bold ">{title}</div>
        <div className="mt-7 text-xl/normal text-yellow-300 ">
          평점 : {vote_average.toFixed(1)}/10
        </div>
        <ul className="flex  flex-wrap gap-3">
          {genres &&
            genres.map((genre) => (
              <li key={genre.id} className="px-3 py-1 bg-gray-700 rounded-full">
                {genre.name}
              </li>
            ))}
        </ul>
        <div className="text-lg mt-1">{overview}</div>
      </div>
    </div>
  );
}

export default MovieDetail;
