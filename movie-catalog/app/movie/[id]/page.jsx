"use client";

import { use } from "react";
import MovieView from "@/src/views/MovieView";
import { useMovieDetails } from "@/src/hooks/useMovieDetails";

export default function MoviePage(props) {
  const { id } = use(props.params); 

  const { data: movie, isLoading, error } = useMovieDetails(id);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar filme.</p>;

  return <MovieView movie={movie} />;
}


