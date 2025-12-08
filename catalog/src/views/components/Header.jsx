export default function Header() {
    return(
        <header className="fixed top-0 left-0 right-0 bg-[var(--dark-blue)] flex h-24 items-center justify-center z-10">
            <div className="bg-[var(--dark-gray)] flex w-1/2 h-16 mt-6 rounded-lg items-center justify-center">
            <input 
            type="search" 
            placeholder="Pesquisar..." 
            class="bg-[var(--dark-gray)] border border-white text-white placeholder-gray-400 px-8 py-2 rounded-lg"
        />
        <button className="ml-2 bg-white text-[var(--dark-blue)] px-4 py-2 rounded-lg hover:bg-gray-200">
            Buscar
        </button>
        </div>
        </header>
    );
}
