"use client";

import SearchForm from "@/components/SearchForm";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/Tabs";
import { JumiaProduct } from "@/lib/types";
import { searchJumiaProducts } from "@/actions/searchProducts";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [searchResults, setSearchResults] = useState<JumiaProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchResults = (results: JumiaProduct[]) => {
    setSearchResults(results);
    setIsLoading(false); // Set loading to false after results arrive
  };

  const handleSearchStart = () => {
    setIsLoading(true); // Set loading to true when search starts
    setSearchResults([]); // Clear previous results
  };

  return (
    <div className="layout">
      <h1 className="text-3xl font-extrabold mb-2">Produits</h1>
      <SearchForm
        onResults={handleSearchResults}
        onSearchStart={handleSearchStart}
        searchFunction={searchJumiaProducts}
        placeholder="Rechercher un produit"
      />
      <div className="text-xs mb-2">
        Loading state: {isLoading ? "true" : "false"}
      </div>
      <Tabs defaultValue="jumia" className="w-full mx-auto my-4">
        <TabsList>
          <TabsTrigger
            value="jumia"
            activeColor="#FF9900"
            className="flex gap-2 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 40 40"
              viewBox="0 0 40 40"
              id="jumia"
              width="18"
              height="18"
            >
              <g>
                <path
                  fill="#f90"
                  d="M36,20c0,8.8-7.2,16-16,16S4,28.8,4,20S11.2,4,20,4S36,11.2,36,20z M13.3,30.3l6.7-4.9l6.7,4.9c0.2,0.1,0.4,0.1,0.6,0c0.2-0.1,0.2-0.4,0.2-0.6l-2.6-7.9l6.7-4.9c0.2-0.1,0.2-0.4,0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3h-8.3l-2.6-7.9c-0.1-0.5-0.8-0.5-1,0L16.9,16H8.6c-0.2,0-0.4,0.1-0.5,0.3c-0.1,0.2,0,0.4,0.2,0.6l6.7,4.9l-2.6,7.9c-0.1,0.2,0,0.4,0.2,0.6c0.1,0.1,0.2,0.1,0.3,0.1S13.2,30.3,13.3,30.3z"
                />
              </g>
            </svg>
            Jumia
          </TabsTrigger>
          <TabsTrigger
            value="shopify"
            activeColor="#95BF46"
            className="flex gap-2 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="shopify"
              width="18"
              height="18"
            >
              <path
                fill="#95BF46"
                d="M19.932 4.673a.233.233 0 0 0-.21-.195l-1.932-.144-1.422-1.413c-.141-.141-.415-.098-.522-.067l-.717.221C14.701 1.844 13.946.712 12.617.712c-.037 0-.074.001-.112.004C12.128.217 11.66 0 11.255 0 8.16 0 6.681 3.869 6.218 5.836c-1.203.372-2.057.637-2.166.672-.672.21-.693.231-.781.864-.067.479-1.823 14.063-1.823 14.063L15.136 24l7.417-1.604-2.621-17.723zM14.373 3.31l-1.158.358.001-.25c0-.765-.106-1.382-.277-1.87.685.087 1.141.866 1.434 1.762zM12.09 1.701c.19.477.314 1.161.314 2.085l-.001.134-2.392.741c.461-1.778 1.324-2.636 2.079-2.96zM11.17.83c.134 0 .268.045.397.134-.992.467-2.055 1.642-2.504 3.99l-1.891.586C7.698 3.749 8.947.83 11.17.83z"
              />
              <path
                fill="#5E8E3E"
                d="m19.723 4.478-1.932-.144-1.422-1.413a.36.36 0 0 0-.198-.091L15.136 24l7.416-1.604s-2.604-17.602-2.62-17.723a.232.232 0 0 0-.209-.195z"
              />
              <path
                fill="#FFF"
                d="m12.618 8.576-.914 2.72s-.801-.428-1.783-.428c-1.44 0-1.512.904-1.512 1.131 0 1.242 3.239 1.718 3.239 4.629 0 2.29-1.452 3.764-3.41 3.764-2.35 0-3.551-1.462-3.551-1.462l.629-2.079s1.235 1.06 2.277 1.06c.681 0 .958-.536.958-.928 0-1.621-2.657-1.693-2.657-4.356 0-2.241 1.609-4.41 4.856-4.41 1.25.001 1.868.359 1.868.359z"
              />
            </svg>
            Shopify
          </TabsTrigger>
        </TabsList>
        <TabsContent value="jumia">
          <div className="p-4 rounded-lg border mt-2">
            <h3 className="text-lg font-medium">Jumia</h3>
            {isLoading ? (
              <p className="text-sm text-gray-500 mt-1">Chargement...</p>
            ) : searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {searchResults.map((product, index) => (
                  <div key={index} className="border rounded-md p-3 shadow-sm">
                    {product.product.image && (
                      <Image
                        src={product.product.image}
                        alt={"Product image"}
                        width={100}
                        height={100}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                    )}
                    <h4 className="font-medium">{product.product.name}</h4>
                    {product.product.prices.price && (
                      <p className="text-lg font-bold mt-1">
                        {product.product.prices.price}
                      </p>
                    )}
                    {/* {product.location && (
                      <p className="text-sm text-gray-500 mt-1">
                        {product.location.reverse_geocode.city}
                      </p>
                    )} */}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 mt-1">
                Aucun résultat trouvé. Effectuez une recherche pour voir les
                produits.
              </p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="shopify">
          <div className="p-4 rounded-lg border mt-2">
            <h3 className="text-lg font-medium">Shopify</h3>
            <p className="text-sm text-gray-500 mt-1">En cours</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
