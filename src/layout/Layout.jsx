import { Outlet } from "react-router-dom";
import NavBar from "./Navbar.jsx";

function Layout() {
  return (
    <div>
      <NavBar />

      <div className="layout">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
