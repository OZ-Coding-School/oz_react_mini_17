import './App.css'
import MovieCard from './components/MovieCard'
import MovieDatail from './components/MovieDatail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { getPopularMovies } from './API'
import { useEffect, useState } from 'react'

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //페이지 렌더링될때 API
    const loadMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data); //상태에 데이터 저장
    }
    loadMovies();
  }, [])

  return (
    <>
     <div className='grid grid-cols-2 md:grid-cols-5 gap-4 p-8 bg-gray-100 min-h-screen content-start'>
      {movies.map((item) => {
        return (
          <>
            <MovieCard
              key={item.id}
              {...item} 
              // title={item.title}
              // poster_path={item.poster_path}
              // vote_average={item.vote_average}
          />
            {/* <MovieDatail /> */}
          </>
        )
      })}
     </div>
    </>
  )
}
function App(){
  return(
  <BrowserRouter>
    <Routes>
        <Route path = "/" element = { <Layout /> }>
          <Route index element = { <Home /> }/>
          <Route path = "movie/:movieId" element = { < MovieDatail /> }/>
        </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
