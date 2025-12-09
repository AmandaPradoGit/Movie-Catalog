const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function getTrendingMovies() {
    const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);

    if(!res.ok){
        throw new Error("Erro ao buscar filmes")
    }

    return res.json();
}
export async function getMovieDetails(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error("Erro ao buscar detalhes do filme");
  }

  return res.json();
}
export async function getSimilarMovies(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=pt-BR`
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar similares");
  }

  const data = await res.json();
  return data.results;
}

export async function getMovieWithSimilar(id) {
  const movie = await getMovieDetails(id);
  const similar = await getSimilarMovies(id);

  return {
    ...movie,
    similar,
  };
}
export async function searchMovies(query) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}`
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar filmes");
  }

  const data = await res.json();
  return data.results;
}


