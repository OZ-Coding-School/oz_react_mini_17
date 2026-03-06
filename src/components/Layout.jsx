import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import './NavBar.css'

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Layout
