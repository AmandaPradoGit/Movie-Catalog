export default function Banner() {
  return (
    <section className="bg-[var(--dark-blue)] px-12 py-16 relative">

      <div className="flex items-start justify-between gap-12">

        {/* TEXTO À ESQUERDA */}
        <div className="flex flex-col items-start gap-2 font-light leading-tight">
          <h2 className="text-6xl text-[var(--light-brown)] tracking-tighter">TOP</h2>
          <h2 className="text-8xl text-[var(--light-gray)] font-extrabold">TENDÊNCIAS</h2>

          <div className="flex items-baseline gap-4">
            <h2 className="text-6xl text-[var(--light-brown)] tracking-tighter">DA</h2>
            <h2 className="text-8xl text-[var(--light-gray)] font-extrabold">SEMANA</h2>
          </div>
        </div>
        
        <div className="flex gap-3 mt-10 relative">

          {/* IMG 1 */}
          <img
            src="/img1.jpg"
            className="w-40 h-60 object-cover rounded-xl shadow-lg 
                    translate-y-2"
          />

          {/* IMG 2 */}
          <img
            src="/img2.jpg"
            className="w-32 h-52 object-cover rounded-xl shadow-lg 
                      translate-y-16"
          />

          {/* IMG 3 (central, maior) */}
          <img
            src="/img3.jpg"
            className="w-48 h-72 object-cover rounded-xl shadow-lg"
          />

          {/* IMG 4 */}
          <img
            src="/img4.jpg"
            className="w-32 h-52 object-cover rounded-xl shadow-lg 
                      translate-y-2"
          />

          {/* IMG 5 */}
          <img
            src="/img5.jpg"
            className="w-40 h-60 object-cover rounded-xl shadow-lg 
                      translate-y-12"
          />

        </div>



      </div>
    </section>
  );
}
