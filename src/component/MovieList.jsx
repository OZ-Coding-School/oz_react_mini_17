import MovieCard from "./MovieCard";

const MovieList = ({movies}) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export default MovieList;