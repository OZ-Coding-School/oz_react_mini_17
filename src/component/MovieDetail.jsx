import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "../api/tmdb";

const MovieDetail = () => {
    
    const {id} = useParams();
    const [movie, setMovie] = useState(null)
    const {title, vote_average, genres, overview , poster_path , backdrop_path} = movie || {}

    useEffect(() => {
        const getMovieDetail = async () => {
            const movie = await fetchMovieDetail(id)
            setMovie(movie)
        }
        getMovieDetail()
    }, [id]);

    if (!movie) return <div>로딩중...</div>

    return (        
        <div className="flex bg-cover px-60 py-10" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`}}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <div className="flex flex-col bg-white/50 text-center gap-16 px-10 py-20">
                <h2 className="text-3xl font-bold">
                    {title}
                    <span > ⭐{vote_average}</span>
                </h2>
                <p className="text-xl pb-10">
                    {genres.map((genre) => genre.name).join(` / `)}
                </p>
                <p>
                    {overview}
                </p>
            </div>
        </div>
    );
};

export default MovieDetail;
