"use client";

import { useRouter } from "next/navigation";
import SearchBar from "@/src/views/components/SearchBar";

export default function Header() {
  const router = useRouter();

  function handleSearch(query) {
    if (!query.trim()) return;
    router.push(`/search?query=${encodeURIComponent(query)}`);
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-[var(--dark-blue)] flex items-center justify-center h-24 z-10 px-4">
      <SearchBar onSearch={handleSearch} />
    </header>
  );
}
