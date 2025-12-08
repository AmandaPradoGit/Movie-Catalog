export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[var(--dark-blue)] flex items-center justify-center h-24 z-10 px-4">
      <div className="bg-[var(--dark-gray)] flex w-full sm:w-3/4 md:w-1/2 h-14 rounded-lg items-center px-4">
        
        <input
          type="search"
          placeholder="Pesquisar..."
          className="bg-[var(--dark-gray)] border border-white text-white placeholder-gray-400 px-4 py-2 rounded-lg w-full"
        />

        <button className="ml-3 bg-white text-[var(--dark-blue)] px-4 py-2 rounded-lg hover:bg-gray-200 whitespace-nowrap">
          Buscar
        </button>

      </div>
    </header>
  );
}

