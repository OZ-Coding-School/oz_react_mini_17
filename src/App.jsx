import './App.css'
import { Routes, Route } from 'react-router-dom'
import movieListData from '../data/movieListData.json'
import movieDetaillData from '../data/movieDetailData.json'
import { useState } from 'react'
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import Layout from './components/Layout'



function App() {
  const [movieDetaills] = useState(movieDetaillData)
  const [movies] = useState(movieListData.results);
  return (
    <>
    <div className='container'> 
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={
          <div className='movie-grid'>
        {/* 요구사항에 있는 map 메서드를 이용하여 영화 데이터 전달하기 */}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
        } />
      

    <Route path='/details' element={<MovieDetail movieDetaill={movieDetaills}/>}/>
    </Route>
      </Routes>
      
    </div>
    </>
  )
}


export default App
