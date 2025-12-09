import MovieView from "@/src/views/MovieView";
import { getMovieDetails, getSimilarMovies } from "@/src/lib/api";


export default async function MoviePage(props) {
  const params = await props.params; 
  console.log("PARAMS:", params);

  console.log("ID:", params.id);

  const movieDetails = await getMovieDetails(params.id);
  const similar = await getSimilarMovies(params.id);

  const movie = {
    ...movieDetails,
    similar,
  };


  return <MovieView movie={movie} />;
}
