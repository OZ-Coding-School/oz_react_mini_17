import MovieCard from "./MovieCard";

const MovieList = ({movies}) => {
    return (
        <div
            class="flex flex-col items-center justify-center gap-3
            md:flex-row md:flex-wrap 
            ">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export default MovieList;