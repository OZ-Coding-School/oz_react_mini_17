import { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=ko&page=1&region=KR',
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        },
      )

      const data = await response.json()

      const filteredMovies = data.results.filter(
        (movie) => movie.adult === false,
      )

      setMovies(filteredMovies)
    }

    fetchMovies()
  }, [])

  return (
    <div className="app-container">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          vote_average={movie.vote_average}
        />
      ))}
    </div>
  )
}

export default App
