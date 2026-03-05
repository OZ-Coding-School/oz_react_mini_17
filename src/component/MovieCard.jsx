const MovieCard = ({movie}) => {
    return (
        <div>
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} 
                className='w-[500px] h-[700px] object-cover'
            />
            <h3 className='text-white , text-center text-lg'>{movie.title}</h3>
            <p className='text-white , text-center text-lg'>⭐{movie.vote_average}</p>
        </div>
    );
};

export default MovieCard;