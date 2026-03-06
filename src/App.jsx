import { useState } from 'react'
import MovieCard from './components/MovieCard'
import movieListData from './dummydata/movieListData.json'
import './App.css'

function App() {
  const [movies] = useState(movieListData.results)

  return (
    <div className="app-container">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          vote_average={movie.vote_average}
        />
      ))}
    </div>
  )
}

export default App
