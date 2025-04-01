import { Search } from "lucide-react";

export default function SearchForm() {
  return (
    <form action="" className="my-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          className="bg-[#ECECEC] w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-stone-700"
          type="text"
          placeholder="Rechercher un produit"
        />
      </div>
    </form>
  );
}
