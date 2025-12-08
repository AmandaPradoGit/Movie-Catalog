import MovieCard from "./MovieCard.jsx";

export default function Carousel({ titulo, filmes }) {
    return(
    <div className="mt-12 px-28">
        <h1 className="text-white">Em alta</h1>
        <div className="flex flex-row gap-12 mt-12">
           <MovieCard />
            <MovieCard /> 
        </div>
    </div>
    );
}
