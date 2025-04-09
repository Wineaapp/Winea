import { Search } from "lucide-react";
import { JumiaProduct } from "@/lib/types";
import { searchJumiaProducts } from "@/actions/searchProducts";

type SearchFormProps = {
  onResults?: (results: JumiaProduct[]) => void;
  /*   setIsLoading: (isLoading: boolean) => void;*/
  onSearchStart?: () => void;
};

export default function SearchForm({
  onResults,
  onSearchStart,
}: SearchFormProps) {
  const handleSearch = async () => {
    // Call onSearchStart immediately
    if (onSearchStart) {
      onSearchStart();
    }

    try {
      const results = await searchJumiaProducts();
      if (onResults) {
        onResults(results);
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
    handleSearch();
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
          placeholder="Rechercher un produit"
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
