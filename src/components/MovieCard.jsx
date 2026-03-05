import { Link } from 'react-router-dom'

const MovieCard = ({ poster_path, title, vote_average }) => {
  return (
    <div className="movie-card">
      <Link to="/details">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </Link>

      <h3>{title}</h3>
      <p>평점: {vote_average}</p>
    </div>
  )
}

export default MovieCard
