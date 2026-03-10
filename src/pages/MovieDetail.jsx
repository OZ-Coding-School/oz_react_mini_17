import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=ko&page=1&region=KR`,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        },
      )

      const data = await response.json()
      setMovie(data)
    }

    fetchMovieDetail()
  }, [id])

  if (!movie) {
    return <p>Loading...</p>
  }

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
          {movie.genres?.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>

        <p className="overview">{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieDetail
