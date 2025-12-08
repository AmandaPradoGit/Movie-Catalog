import Header from "@/src/views/components/Header";
import Banner from "@/src/views/components/Banner";
import Carousel from "@/src/views/components/Carousel";
import { getTrendingMovies } from "@/src/lib/api";

export default async function Home() {
  const data = await getTrendingMovies();
  const movies = data.results;

  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Banner />
      <Carousel title="Em alta" movies={movies}/>
    </main>
  );
}