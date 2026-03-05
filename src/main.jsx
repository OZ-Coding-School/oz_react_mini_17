import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import App from './App.jsx'
import MovieDetail from './pages/MovieDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<MovieDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
