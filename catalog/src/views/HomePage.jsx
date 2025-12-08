import Header from "../views/components/Header";
import Banner from "../views/components/Banner";
import Carousel from "../views/components/Carousel";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Banner />
      <Carousel />
    </div>
  );
}