import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail.jsx";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./layout/Navbar.jsx";

function App() {
  return (
    <div className="flex flex-col h-screen m-0 p-0 overflow-hidden">
      <div className="flex-none">
        <Navbar />
      </div>
      <Routes className="flex-1 overflow-y-auto">
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
