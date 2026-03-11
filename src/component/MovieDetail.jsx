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
        <div className="flex items-center justify-center bg-cover bg-center w-full h-full" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`}}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}
                className="hidden md:block w-[30%] h-195"
            />
            <div className="flex flex-col bg-black/60 text-white text-center gap-12 px-10 py-20 md:w-[40%] md:h-195 w-full h-158">
                <h2 className="text-3xl font-bold ">
                    {title}
                    <span > ⭐{vote_average.toFixed(1)}</span>
                </h2>
                <p className="text-2xl">
                    {genres.map((genre) => genre.name).join(` / `)}
                </p>
                <p className="text-sm md:text-lg" >
                    {overview}
                </p>
            </div>
        </div>
    );
};

export default MovieDetail;
