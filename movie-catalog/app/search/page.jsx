"use client";

import { useSearchParams } from "next/navigation";
import { useSearchMovies } from "@/src/hooks/useSearchMovies";
import MovieGrid from "@/src/views/components/MovieGrid";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const { data, isLoading, error } = useSearchMovies(query);

  if (!query) return <p className="text-white mt-32 text-center">Digite algo para buscar.</p>;
  if (isLoading) return <p className="text-white mt-32 text-center">Carregando...</p>;
  if (error) return <p className="text-white mt-32 text-center">Erro ao buscar filmes.</p>;
  if (data.length === 0) return <p className="text-white mt-32 text-center">Nenhum resultado encontrado.</p>;

  return (
    <div className="px-4 md:px-12 lg:px-28 mt-32">
      <h1 className="text-white text-3xl font-bold mb-6">Resultados</h1>
      <MovieGrid movies={data} />
    </div>
  );
}
