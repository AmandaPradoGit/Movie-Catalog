import MovieCard from "@/src/views/components/MovieCard";

export default function Carousel({ title, movies }) {
    return(
    <div className="px-4 md:px-12 lg:px-28 mt-12">
        <h1 className="text-white mb-8">{title}</h1>
        <div className="flex gap-8 overflow-x-scroll no-scrollbar pb-4">
            {movies?.map((movie) => (
            <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.release_date?.slice(0, 4)}
            poster={movie.poster_path}
          />
        ))}
      </div>
    </div>
    );
}
