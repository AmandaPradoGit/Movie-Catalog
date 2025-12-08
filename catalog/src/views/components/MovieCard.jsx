import img1 from "./img1.png";

export default function MovieCard({ title, year, poster }) {
  return(
    <div className="">
       <img
            src={img1}
            className="w-38 h-56 object-cover rounded-xl translate-y-1"
          />
          <div class="flex flex-col items-center mt-4 w-36">
            <p className="text-white break-all text-center">Nome de teste grande gigante super gigante</p>
             <p className="text-[var(--dark-blue)] mt-4">0000</p>
          </div>
    </div>
  );
}
