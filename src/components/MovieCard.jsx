import {Link} from 'react-router-dom';

const MovieCard = ({movie}) => {

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <>
    <Link to="/details" style={{ textDecoration: 'none', color: 'inherit'}}>
      <div className='movie-card'>
        {/* 이미지 주소 합치기!! */}
        <img src={`${baseUrl}${movie.poster_path}`} alt={movie.title} />
        {/* 각 제목 출력 */}
        <div className="movie-view">
        <h4 className='movie-title'>{movie.title}</h4>
        {/* 평점 출력하기 ! */}
        <span className='movie-rating'>평점: {movie.vote_average}</span>
        </div>
      </div>
      </Link>
    </>
  )
}

export default MovieCard;