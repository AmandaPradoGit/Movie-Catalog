export default function SearchBar() {
  return (
    <div className="bg-[var(--dark-gray)] flex w-full sm:w-3/4 md:w-1/2 h-14 rounded-lg items-center px-4">
      <input
        type="search"
        placeholder="Search..."
        className="bg-[var(--dark-gray)] border border-white text-white placeholder-gray-400 px-4 py-2 rounded-lg w-full"
      />

      <button className="ml-3 bg-white text-[var(--dark-blue)] px-4 py-2 rounded-lg hover:bg-gray-200 whitespace-nowrap">
        Buscar
      </button>
    </div>
  );
}
