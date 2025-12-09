import Image from "next/image";

export default function Banner({movies = []}) {
  const top5 = Array.isArray(movies) ? movies.slice(0,5) :[];

  if(top5.length === 0){
     return (
      <section className="bg-[var(--dark-blue)] pt-28 px-4 sm:px-8 md:px-12 py-16 relative">
        <div className="text-white p-8">No trending movies available</div>
      </section>
    );
  }
  return (
    <section className="bg-[var(--dark-blue)] pt-28 px-4 sm:px-8 md:px-12 py-16 relative">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12">

        {/* TÍTULOS */}
        <div className="flex flex-col items-start gap-2 font-light leading-tight text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl text-[var(--light-brown)] tracking-tighter">
            TOP
          </h2>

          <h2 className="text-4xl sm:text-6xl md:text-8xl text-[var(--light-gray)] font-extrabold">
            TENDÊNCIAS
          </h2>

          <div className="flex items-baseline gap-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl text-[var(--light-brown)] tracking-tighter">
              DA
            </h2>
            <h2 className="text-4xl sm:text-6xl md:text-8xl text-[var(--light-gray)] font-extrabold">
              SEMANA
            </h2>
          </div>
        </div>

        {/* POSTERS */}
         <div className="flex gap-2 sm:gap-3 justify-center md:justify-end mt-6 md:mt-0 relative">
          {top5.map((m, index) => {
            const posterPath = m?.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : "/fallback.jpg";
            
            const sizeClasses =
              index === 2
                ? "w-20 sm:w-24 md:w-32 lg:w-48 h-28 sm:h-36 md:h-48 lg:h-72"
                : "w-16 sm:w-20 md:w-28 lg:w-40 h-24 sm:h-32 md:h-40 lg:h-60";
            const translateClass =
              index === 1
                ? "translate-y-4 md:translate-y-8 lg:translate-y-16"
                : index === 3
                ? "translate-y-1 md:translate-y-2"
                : index === 4
                ? "translate-y-3 md:translate-y-6 lg:translate-y-12"
                : "translate-y-0";

            return (
              <div key={m?.id ?? index} className={`${sizeClasses} ${translateClass} relative overflow-hidden rounded-xl`}>
                <Image
                  src={posterPath}
                  alt={m?.title ?? "poster"}
                  width={500}
                  height={750}
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
