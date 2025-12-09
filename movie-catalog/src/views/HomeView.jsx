import Header from "@/src/views/components/Header";
import Banner from "@/src/views/components/Banner";
import Carousel from "@/src/views/components/Carousel";
import MovieGrid from "@/src/views/components/MovieGrid";

import { getTrendingMovies, getTopRatedMovies } from "@/src/lib/api";

export default async function Home() {
  const trendingData = await getTrendingMovies();
  const trending = trendingData.results;

  const topRated = await getTopRatedMovies();

  const top5 = trending.slice(0, 5);

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />

      <Banner movies={top5} />

      <Carousel title="Em alta" movies={trending} />

      <div className="px-4 md:px-12 lg:px-28 mt-12">
        <p className="text-white text-2xl font-bold mb-4">Melhores Avaliados</p>
        <MovieGrid movies={topRated} />
      </div>
    </main>
  );
}
