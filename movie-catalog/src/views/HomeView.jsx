import Header from "@/src/views/components/Header";
import Banner from "@/src/views/components/Banner";
import Carousel from "@/src/views/components/Carousel";
import MovieGrid from "@/src/views/components/MovieGrid";

import { getTrendingMovies, getTopRatedMovies } from "@/src/lib/api";

export default async function Home() {
  // Trending (já funcionando)
  const trendingData = await getTrendingMovies();
  const trending = trendingData.results;

  // Top Rated (novo)
  const topRated = await getTopRatedMovies();

  const top5 = trending.slice(0, 5);

  return (
    <main className="min-h-screen">
      <Header />

      <Banner movies={top5} />

      <Carousel title="Em alta" movies={trending} />

      <div className="px-28 mt-12">
        <p className="text-white text-2xl font-bold mb-4">Top Rated</p>
        <MovieGrid movies={topRated} />
      </div>
    </main>
  );
}
