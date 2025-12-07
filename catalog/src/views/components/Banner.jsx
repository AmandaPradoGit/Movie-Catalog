export default function Banner() {
  return (
    <section className="bg-[var(--dark-blue)] pt-28 px-4 sm:px-8 md:px-12 py-16 relative">

      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap:12">

        <div className="flex flex-col items-start gap-2 font-light leading-tight text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl text-[var(--light-brown)] tracking-tighter">TOP</h2>
          <h2 className="text-4xl sm:text-6xl md:text-8xl text-[var(--light-gray)] font-extrabold">TENDÊNCIAS</h2>

          <div className="flex items-baseline gap-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl text-[var(--light-brown)] tracking-tighter">DA</h2>
            <h2 className="text-4xl sm:text-6xl md:text-8xl text-[var(--light-gray)] font-extrabold">SEMANA</h2>
        </div>
      </div>
        
        <div className="flex gap-2 sm:gap-3 justify-center md:justify-end mt-6 md:mt-0 relative">

          {/* IMG 1 */}
          <img
            src="/img1.jpg"
            className="w-16 sm:w-20 md:w-28 lg:w-40 h-24 sm:h-32 md:h-40 lg:h-60 object-cover rounded-xl shadow-lg translate-y-1 md:translate-y-2"
          />

          {/* IMG 2 */}
          <img
            src="/img2.jpg"
            className="w-14 sm:w-18 md:w-24 lg:w-32 h-20 sm:h-28 md:h-36 lg:h-52 object-cover rounded-xl shadow-lg translate-y-4 md:translate-y-8 lg:translate-y-16"
          />

          {/* IMG 3 (central, maior) */}
          <img
            src="/img3.jpg"
            className="w-20 sm:w-24 md:w-32 lg:w-48 h-28 sm:h-36 md:h-48 lg:h-72 object-cover rounded-xl shadow-lg"
          />

          {/* IMG 4 */}
          <img
            src="/img4.jpg"
            className="w-14 sm:w-18 md:w-24 lg:w-32 h-20 sm:h-28 md:h-36 lg:h-52 object-cover rounded-xl shadow-lg translate-y-1 md:translate-y-2"
          />

          {/* IMG 5 */}
          <img
            src="/img5.jpg"
            className="w-16 sm:w-20 md:w-28 lg:w-40 h-24 sm:h-32 md:h-40 lg:h-60 object-cover rounded-xl shadow-lg translate-y-3 md:translate-y-6 lg:translate-y-12"
          />

        </div>
      </div>
    </section>
  );
}
