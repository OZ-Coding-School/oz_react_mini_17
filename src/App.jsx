import { Routes, Route } from 'react-router-dom'
import MovieDetail from './component/MovieDetail'
import Layout from './component/Layout'
import HomePage from './component/HomePage'

function App() {

  return (    
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='detail/:id' element={<MovieDetail/>} />          
        </Route>
      </Routes>  
  )
}

export default App




