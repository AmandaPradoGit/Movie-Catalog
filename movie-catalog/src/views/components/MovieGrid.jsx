import Link from "next/link";

export default function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <Link
          key={movie.id}
          href={`/movie/${movie.id}`}
          className="text-white hover:opacity-80 transition"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-md w-full"
          />

          <h2 className="mt-2 text-sm font-semibold">{movie.title}</h2>
          <p className="text-xs text-gray-400">
            {movie.release_date?.slice(0, 4)}
          </p>
        </Link>
      ))}
    </div>
  );
}

