import React from "react";

const MovieCard = ({ movie, onClick }) => {
  const { poster_path, title } = movie;
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div
      className="cursor-pointer bg-gray-800 rounded-lg shadow-lg w-48 h-72 overflow-hidden border-4 border-yellow-500 hover:scale-110 hover:shadow-xl"
      onClick={() => onClick(movie)}
    >
      <img src={poster} alt={title} className="w-full h-full object-cover" />
    </div>
  );
};

export default MovieCard;
