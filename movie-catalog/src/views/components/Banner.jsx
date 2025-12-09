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
          <div className="flex gap-3 overflow-x-auto md:overflow-visible mt-6 md:mt-0 relative pb-4 md:pb-0">
          {top5.map((m, index) => {
            const posterPath = m?.poster_path
              ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
              : "/fallback.jpg";

            const isCenter = index === 2;

            const size = isCenter
              ? "w-[clamp(5rem,10vw,12rem)]"
              : "w-[clamp(4rem,8vw,10rem)]";

            const translateClass =
              index === 1
                ? "translate-y-4 md:translate-y-8 lg:translate-y-16"
                : index === 3
                ? "translate-y-1 md:translate-y-2"
                : index === 4
                ? "translate-y-3 md:translate-y-6 lg:translate-y-12"
                : "translate-y-0";

            return (
              <div
                key={m?.id ?? index}
                className={`${size} aspect-[2/3] ${translateClass} relative overflow-hidden rounded-xl flex-shrink-0`}
              >
                <Image
                  src={posterPath}
                  alt={m?.title ?? "poster"}
                  fill
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
