import { useQuery } from "@tanstack/react-query";
import { getMovieDetails, getSimilarMovies } from "@/src/lib/api";

export function useMovieDetails(id) {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const movie = await getMovieDetails(id);
      const similar = await getSimilarMovies(id);

      return {
        ...movie,
        similar,
      };
    },
  });
}
