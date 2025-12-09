import Header from "@/src/views/components/Header";
import Banner from "@/src/views/components/Banner";
import Carousel from "@/src/views/components/Carousel";
import { getTrendingMovies } from "@/src/lib/api";

export default async function Home() {
  const data = await getTrendingMovies();
  const movies = data.results;

  const top5 = movies.slice(0, 5);

  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Banner movies={top5}/>
      <Carousel title="Em alta" movies={movies}/>
    </main>
  );
}