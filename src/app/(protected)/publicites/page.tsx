"use client";
import SearchForm from "@/components/SearchForm";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/Tabs";
import { BsFacebook } from "react-icons/bs";
/* import { BsInstagram } from "react-icons/bs"; */
import { searchAds } from "@/actions/searchProducts";
import { FacebookAd } from "@/lib/types";
import { useState } from "react";
import Image from "next/image";

export default function AdsPage() {
  const [searchResults, setSearchResults] = useState<FacebookAd[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchResults = (results: FacebookAd[]) => {
    setSearchResults(results);
    setIsLoading(false);
  };

  const handleSearchStart = () => {
    setIsLoading(true);
    setSearchResults([]);
  };

  return (
    <div className="layout">
      <h1 className="text-3xl font-bold mb-2">Publicités</h1>
      <SearchForm
        searchFunction={searchAds}
        placeholder="Rechercher une publicité"
        onResults={handleSearchResults}
        onSearchStart={handleSearchStart}
      />

      <Tabs defaultValue="facebook" className="w-full mx-auto my-4">
        <TabsList>
          <TabsTrigger
            value="facebook"
            activeColor="#1877f2"
            className="flex gap-2 items-center"
          >
            <BsFacebook size={18} />
            Facebook
          </TabsTrigger>
          <TabsTrigger
            value="instagram"
            activeColor="#E41749"
            className="flex gap-2 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 102 102"
              id="instagram"
            >
              <defs>
                <radialGradient
                  id="a"
                  cx="6.601"
                  cy="99.766"
                  r="129.502"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".09" stopColor="#fa8f21"></stop>
                  <stop offset=".78" stopColor="#d82d7e"></stop>
                </radialGradient>
                <radialGradient
                  id="b"
                  cx="70.652"
                  cy="96.49"
                  r="113.963"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop>
                  <stop offset="1" stopColor="#8c3aaa"></stop>
                </radialGradient>
              </defs>
              <path
                fill="url(#a)"
                d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
              ></path>
              <path
                fill="url(#b)"
                d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
              ></path>
              <path
                fill="#fff"
                d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                transform="translate(-422.637 -426.196)"
              ></path>
            </svg>
            Instagram
          </TabsTrigger>
        </TabsList>
        <TabsContent value="facebook">
          <div className="p-4 mt-2">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="border bg-white rounded-md p-4 shadow-sm"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse mr-3"></div>
                      <div className="h-5 bg-gray-200 rounded w-32 animate-pulse"></div>
                    </div>

                    <div className="w-full h-40 bg-gray-200 rounded-md mb-3 animate-pulse"></div>

                    <div className="space-y-2 mb-3">
                      <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded animate-pulse w-4/6"></div>
                    </div>

                    <div className="space-y-2 mb-3">
                      <div className="h-2 bg-gray-200 rounded animate-pulse w-24"></div>
                      <div className="h-2 bg-gray-200 rounded animate-pulse w-20"></div>
                    </div>

                    <div className="mt-3">
                      <div className="h-10 bg-purple-200 rounded-md animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {searchResults.map((ad, index) => (
                  <div
                    key={index}
                    className="border bg-white rounded-md p-4 shadow-sm"
                  >
                    <div className="flex items-center mb-3">
                      {ad.snapshot.page_profile_picture_url && (
                        <Image
                          src={ad.snapshot.page_profile_picture_url}
                          alt="Page profile"
                          width={40}
                          height={40}
                          className="rounded-full mr-3"
                        />
                      )}
                      <div>
                        <h4 className="font-medium">{ad.page_name}</h4>
                      </div>
                    </div>

                    {ad.snapshot.images &&
                      ad.snapshot.images.length > 0 &&
                      ad.snapshot.images[0].url && (
                        <div className="mb-3">
                          <Image
                            src={ad.snapshot.images[0].url}
                            alt="Ad image"
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover rounded-md"
                          />
                        </div>
                      )}

                    {ad.snapshot.body?.text && (
                      <p className="text-sm mb-3 line-clamp-3">
                        {ad.snapshot.body.text}
                      </p>
                    )}

                    <div className="text-xs text-gray-500 mb-2">
                      <p>
                        Début:{" "}
                        {new Date(ad.start_date * 1000).toLocaleDateString()}
                      </p>
                      {ad.end_date && (
                        <p>
                          Fin:{" "}
                          {new Date(ad.end_date * 1000).toDateString() ===
                            new Date().toDateString() ||
                          new Date(ad.end_date * 1000) > new Date()
                            ? "En cours"
                            : new Date(ad.end_date * 1000).toLocaleDateString()}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center mt-3">
                      <button
                        className="bg-purple-600 text-white px-4 py-2 rounded-md w-full"
                        onClick={() => {
                          // We'll implement this functionality later
                          console.log("View ad details:", ad.ad_archive_id);
                        }}
                      >
                        Voir l&apos;annonce
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 mt-1">Faites une recherche</p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="instagram">
          <div className="p-4 rounded-lg border mt-2">
            <h3 className="text-lg font-medium">Instagram</h3>
            <p className="text-sm text-gray-500 mt-1">En cours</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
