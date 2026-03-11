import { useNavigate } from "react-router-dom";

const MovieCard = ({movie}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/detail/${movie.id}`)}
        className="relative group w-[280px]">
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} 
                className='w-[280px] h-[300px] object-cover'
            />
            <div 
                className="absolute inset-0 flex flex-col justify-end 
                bg-black/30 opacity-100 
                md:bg-black/60 md:opacity-0 md:group-hover:opacity-100
                transition-opacity duration-500 ease-in-out">
                <h3 
                    className='text-white text-center text-xl pt-2 font-sans truncate w-full'
                >{movie.title}</h3>
                <p 
                    className='text-white text-center text-lg font-light'
                >⭐ {movie.vote_average.toFixed(1)}</p>
            </div>
        </div>
    );
};

export default MovieCard;