import MovieList from './component/MovieList'
import { useEffect, useState } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import MovieDetail from './component/MovieDetail'
import Layout from './component/Layout'
import { fetchPopularMovies } from './api/tmdb'

function App() {
  const [movies , setMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1

  useEffect(() => {
  const getMovies = async () => {
    const movies = await fetchPopularMovies(page)
    const filteredMovies = movies.filter(movie => movie.adult === false)
    setMovies(filteredMovies)
  }
  getMovies()
}, [page])

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




