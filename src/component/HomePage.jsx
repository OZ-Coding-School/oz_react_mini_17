import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../component/MovieList";
import { fetchPopularMovies, fetchSearchMovies } from "../api/tmdb";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("q") || "";
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const getMovies = async () => {
        let data = []   
        if (searchQuery.trim()) {
            data = await fetchSearchMovies(searchQuery);
        } else {
            data = await fetchPopularMovies(page);
        }
        const filteredMovies = data.filter((movie) => !movie.adult);
        setMovies(filteredMovies);
    };

    getMovies();
  }, [searchQuery, page]);

  return <MovieList movies={movies} />;
};

export default HomePage;