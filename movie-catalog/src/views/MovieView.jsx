import MovieDetails from "@/src/views/components/MovieDetails";
import Header from "@/src/views/components/Header"
import Carousel from "@/src/views/components/Carousel"

export default function MovieView({ movie }) {
  return (
    <div className="text-black p-8">
          <Header />
      <MovieDetails movie={movie} />
      {movie.similar && movie.similar.length > 0 && (
        <Carousel title="Semelhantes" movies={movie.similar} />
      )}
    </div>
  );
}
