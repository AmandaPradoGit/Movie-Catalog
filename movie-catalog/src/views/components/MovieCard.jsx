"use client";
import { useRouter } from "next/navigation";

export default function MovieCard({ id, title, year, poster }) {
  const router = useRouter();

  return (
    <div className="cursor-pointer"
      onClick={() => router.push(`/movie/${id}`)}
      >
      <img
        src={`https://image.tmdb.org/t/p/w300${poster}`}
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
