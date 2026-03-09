import MovieCard from "../components/MovieCard";
import MovieData from "../data/movieListData.json";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const cardClicked = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="flex min-h-screen flex-col-reverse">
      <div className="flex flex-wrap gap-4 p-4 overflow-auto mb-30 bg-gray-900 border-t-4">
        {MovieData.results && MovieData.results.length > 0 ? (
          MovieData.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={cardClicked} />
          ))
        ) : (
          <p>ERROR: 리스트를 불러오는데 실패했습니다.</p>
        )}
      </div>
      <div
        className="flex flex-7/8 bg-black overflow-hidden relative"
        style={{
          backgroundImage: selectedMovie
            ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7) ), url(https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {!selectedMovie && (
          <div className="text-white m-auto text-center">
            <p className="text-5xl italic">최신 영화 정보 사이트</p>
            <p className="text-9xl ">시네마 시그마</p>
          </div>
        )}
        {selectedMovie && (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className=" text-white text-5xl m-auto text-center">
              {selectedMovie.title}
            </div>
            <Link to="/detail">
              <button className="bg-amber-400 rounded-4xl text-2xl px-6 cursor-pointer hover:bg-amber-900 hover:text-white mb-10">
                상세정보
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
