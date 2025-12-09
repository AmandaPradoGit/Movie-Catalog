import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "@/src/lib/api";

export function useSearchMovies(query) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => searchMovies(query),
    enabled: !!query,
  });
}
