export default function MovieDetails({ movie }) {
  if (!movie) {
    return <p>Filme não encontrado.</p>;
  }

  const {
    title,
    overview,
    release_date,
    poster_path,
    vote_average,
    age_rating,
  } = movie;

  return (
    <section className="movie-details flex gap-6 bg-gray-900 text-white p-6 rounded-lg shadow-lg mt-32">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-36 md:w-64 rounded-lg shadow-lg"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">{title}</h1>

          <p className="text-gray-300 mb-2">
            <strong>Classificação:</strong> {age_rating}
          </p>

          <p className="text-gray-300 mb-2">
            <strong>Lançamento:</strong> {release_date}
          </p>

          <p className="text-gray-300 mb-2">
            <strong>Avaliação:</strong> {vote_average}
          </p>

          <p className="text-gray-200 leading-relaxed">
            <strong>Sinopse:</strong> {overview}
          </p>
        </div>
      </div>
      
    </section>
  );
}
