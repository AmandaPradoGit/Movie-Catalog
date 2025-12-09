export default function MovieView({ movie }) {
  return (
    <div className="text-white p-8">
      <h1 className="text-4xl font-bold">{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}
