import Header from "@/src/views/components/Header";
import Banner from "@/src/views/components/Banner";
import Carousel from "@/src/views/components/Carousel";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Banner />
      <Carousel />
    </div>
  );
}