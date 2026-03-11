const option = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
  },
};

async function getPopularMovies() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
      option,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getPopularMovies };
