import MovieList from './component/MovieList'
import movieListData from './data/movieListData.json'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MovieDetail from './component/MovieDetail'
import Layout from './component/Layout'

function App() {
  const [movies] = useState(movieListData.results)
  return (    
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<MovieList movies={movies} />} />
          <Route path='detail' element={<MovieDetail />} />
        </Route>
      </Routes>  
  )
}

export default App
