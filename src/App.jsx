import MovieList from './component/MovieList'
import movieListData from './data/movieListData.json'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MovieDetail from './component/MovieDetail'
import Layout from './component/Layout'
import { fetchPopularMovies } from './api/tmdb'

function App() {
  const [movies , setMovies] = useState(movieListData.results)

  useEffect(() => {
  const getMovies = async () => {
    const movies = await fetchPopularMovies()
    const filteredMovies = movies.filter(movie => movie.adult === false)
    setMovies(filteredMovies)
  }
  getMovies()
}, [])

  return (    
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<MovieList movies={movies} />} />
          <Route path='detail/:id' element={<MovieDetail/>} />
        </Route>
      </Routes>  
  )
}

export default App




