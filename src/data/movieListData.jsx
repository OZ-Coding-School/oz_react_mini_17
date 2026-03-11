import { useState, useEffect } from "react";
import { getPopularMovies } from "./movieListLoading.jsx";

function MovieListData() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getPopularMovies();
        const sfwMovies = movies.results.filter((movie) => !movie.adult);
        setMovieList(sfwMovies);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다", error);
      }
    };
    fetchMovies();
  }, []);

  return { movieList };
}

export { MovieListData };
