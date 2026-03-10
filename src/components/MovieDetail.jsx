const MovieDetail = ({movieDetaill}) => {

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="detaill-Container">
      <div className="poster">
        <img src={`${baseUrl}${movieDetaill.backdrop_path}`} alt={movieDetaill.name} />
      </div>

      <div className="detail-info-content">
      <div className="detaill-title">
        <h2>{movieDetaill.title}</h2>
        <span className="detaill-rating">평점 : {movieDetaill.vote_average}</span>
      </div>
      
      <div className="detaill-genres">
        <p>{movieDetaill.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
      <div className="detaill-overview">
        <p>{movieDetaill.overview}</p>
      </div>
    </div>
    </div>
  )
}

export default MovieDetail;