export default function MovieCard({ title, year, poster }) {
  return (
    <div className="cursor-pointer">
      <img
        src={poster}
        alt={title}
        className="w-[152px] h-56 object-cover rounded-xl translate-y-1"
      />

      <div className="flex flex-col items-center mt-4 w-36">
        <p className="text-white break-all text-center">{title}</p>
        <p className="text-[var(--dark-blue)] mt-2">{year}</p>
      </div>
    </div>
  );
}
