const token = import.meta.env.VITE_TMDB_TOKEN

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`
  }
}

export const fetchPopularMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR",
    options
  )

  const data = await res.json()
  return data.results
}

export const fetchMovieDetail = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
    options
  )

  const data = await res.json()
  return data
}