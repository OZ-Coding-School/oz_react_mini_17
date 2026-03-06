import { useState } from 'react'
import movieDetailData from '../dummydata/movieDetailData.json'

function MovieDetail() {
  const [movie] = useState(movieDetailData)

  return (
    <div className="movie-detail-container">
      <div className="poster-section">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="info-section">
        <h1>{movie.title}</h1>
        <p>{movie.vote_average}</p>

        <div className="genres">
          {movie.genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>

        <p className="overview">{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieDetail
