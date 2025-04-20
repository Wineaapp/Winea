"use client";

import { Search } from "lucide-react";

type SearchFormProps<T = unknown> = {
  onResults?: (results: T[]) => void;
  onSearchStart?: () => void;
  searchFunction?: (query: string) => Promise<T[]>;
  placeholder?: string;
};

export default function SearchForm<T = unknown>({
  onResults,
  onSearchStart,
  searchFunction,
  placeholder = "Rechercher un produit",
}: SearchFormProps<T>) {
  const handleSearch = async (formData: FormData) => {
    // Call onSearchStart immediately
    if (onSearchStart) {
      onSearchStart();
    }

    try {
      const query = formData.get("query")?.toString() || "";

      if (searchFunction) {
        const results = await searchFunction(query);
        if (onResults) {
          onResults(results);
        }
      } else {
        console.warn("No search function provided");
        if (onResults) {
          onResults([]);
        }
      }
    } catch (error) {
      console.error("Search error:", error);
      if (onResults) {
        onResults([]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire
    const formData = new FormData(e.target as HTMLFormElement);
    handleSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          className="bg-[#ECECEC] w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-stone-700"
          type="text"
          name="query"
          placeholder={placeholder}
        />
        {/* <button
          type="button"
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-md"
        >
          Rechercher
        </button> */}
      </div>
    </form>
  );
}

{
  /* <form action={handleSearch} className="my-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          className="bg-[#ECECEC] w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-stone-700"
          type="text"
          name="query"
          placeholder="Rechercher un produit"
        />
        <button type="submit" className="hidden">
          Search
        </button>
      </div>
    </form> */
}
