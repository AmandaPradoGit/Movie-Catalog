import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "@/src/lib/api";

export function useTopRatedMovies() {
  return useQuery({
    queryKey: ["top-rated-movies"],
    queryFn: getTopRatedMovies,
  });
}
