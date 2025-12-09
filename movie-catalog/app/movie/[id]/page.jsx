import MovieView from "@/src/views/MovieView";
import { getMovieDetails } from "@/src/lib/api";

export default async function MoviePage(props) {
  const params = await props.params; 
  
  console.log("ID:", params.id);

  const movie = await getMovieDetails(params.id);

  return <MovieView movie={movie} />;
}
