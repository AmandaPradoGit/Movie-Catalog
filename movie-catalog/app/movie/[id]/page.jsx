import MovieView from "@/src/views/MovieView";
import { getMovieDetails } from "@/src/lib/api";

export default async function MoviePage({ params }) {
console.log("params.id:", params.id);

  const movie = await getMovieDetails(params.id);

  return <MovieView movie={movie} />;
}
