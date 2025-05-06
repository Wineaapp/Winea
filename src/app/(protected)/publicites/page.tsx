"use client";
import SearchForm from "@/components/SearchForm";
import FilterBar from "@/components/FilterBar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/Tabs";
import { BsFacebook } from "react-icons/bs";
/* import { BsInstagram } from "react-icons/bs"; */
import {
  searchFacebookAds,
  getFacebookAdsResults,
} from "@/actions/searchProducts";
import { FacebookAd } from "@/lib/types";
import { useState, useEffect, useCallback } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function AdsPage() {
  const [searchResults, setSearchResults] = useState<FacebookAd[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("CM");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const [selectedAd, setSelectedAd] = useState<FacebookAd | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const fetchAds = useCallback(
    async (query?: string) => {
      setIsLoading(true);
      try {
        const { runId } = await searchFacebookAds(
          query || "digital",
          startDate,
          selectedCountry,
          selectedStatus,
          selectedLanguage
        );

        let displayedItems = new Set();
        const pollInterval = setInterval(async () => {
          try {
            const { status, items } = await getFacebookAdsResults(runId);

            // Progressive loading: Display new items as they come in
            if (items.length > 0) {
              const newItems = items.filter(
                (item) => !displayedItems.has(item.page_name)
              );
              if (newItems.length > 0) {
                displayedItems = new Set([
                  ...displayedItems,
                  ...newItems.map((item) => item.page_name),
                ]);
                setSearchResults((prev) => [...prev, ...newItems]);
              }
            }

            if (status === "SUCCEEDED") {
              setIsLoading(false);
              clearInterval(pollInterval);
            } else if (status === "FAILED") {
              setIsLoading(false);
              clearInterval(pollInterval);
            }
          } catch (error) {
            console.error("Error polling results:", error);
            setIsLoading(false);
            clearInterval(pollInterval);
          }
        }, 2000);

        return () => clearInterval(pollInterval);
      } catch (error) {
        console.error("Error fetching ads:", error);
        setIsLoading(false);
      }
    },
    [startDate, selectedCountry, selectedStatus, selectedLanguage]
  );

  useEffect(() => {
    fetchAds();
  }, [fetchAds]);

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
      <SearchForm<FacebookAd>
        searchFunction={async (query) => {
          const { runId } = await searchFacebookAds(
            query,
            startDate,
            selectedCountry,
            selectedStatus,
            selectedLanguage
          );

          // Poll for results until they're ready
          let attempts = 0;
          const maxAttempts = 60; // 60 seconds maximum wait time

          while (attempts < maxAttempts) {
            const { status, items } = await getFacebookAdsResults(runId);
            if (status === "SUCCEEDED" && items.length > 0) {
              return items as FacebookAd[];
            } else if (status === "FAILED") {
              throw new Error("Failed to fetch ads");
            }
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds before next attempt
            attempts++;
          }

          throw new Error("Timeout waiting for results");
        }}
        placeholder="Rechercher une publicité"
        onResults={handleSearchResults}
        onSearchStart={handleSearchStart}
      />
      <FilterBar
        startDate={startDate}
        onStartDateChange={(date) => setStartDate(date)}
        selectedCountry={selectedCountry}
        onCountryChange={(country) => setSelectedCountry(country)}
        selectedStatus={selectedStatus}
        onStatusChange={(status) => setSelectedStatus(status)}
        selectedLanguage={selectedLanguage}
        onLanguageChange={(language) => setSelectedLanguage(language)}
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
          <div className="p-8">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-gray-200"
                  >
                    <div className="animate-pulse">
                      <div className="h-52 bg-gray-100"></div>
                      <div className="p-5">
                        <div className="flex items-center space-x-4 mb-5">
                          <div className="w-12 h-12 rounded-full bg-gray-100 ring-2 ring-gray-50"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-gray-100 rounded-md w-3/4"></div>
                            <div className="h-3 bg-gray-100 rounded-md w-1/2"></div>
                          </div>
                        </div>
                        <div className="space-y-3 mb-5">
                          <div className="h-3 bg-gray-100 rounded-md"></div>
                          <div className="h-3 bg-gray-100 rounded-md w-5/6"></div>
                          <div className="h-3 bg-gray-100 rounded-md w-4/6"></div>
                        </div>
                        <div className="h-10 bg-gray-50 rounded-lg w-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults
                  .filter((ad) => {
                    if (
                      ad.snapshot.body?.text?.includes("{{") ||
                      ad.snapshot.body?.text?.includes("}}")
                    ) {
                      return false;
                    }
                    const hasImages =
                      ad.snapshot.images?.[0]?.original_image_url ||
                      ad.snapshot.extra_images?.[0]?.url;
                    const hasVideos =
                      ad.snapshot.videos?.[0] || ad.snapshot.extra_videos?.[0];
                    return hasImages || hasVideos;
                  })
                  .map((ad, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-gray-200"
                      >
                        {(() => {
                          const mainVideo = ad.snapshot.videos?.[0];
                          const extraVideo = ad.snapshot.extra_videos?.[0];
                          const mainImage = ad.snapshot.images?.[0];
                          const extraImage = ad.snapshot.extra_images?.[0];

                          if (
                            mainVideo &&
                            (mainVideo.video_hd_url || mainVideo.video_sd_url)
                          ) {
                            return (
                              <div className="relative h-52 bg-gray-50">
                                <video
                                  src={
                                    mainVideo.video_hd_url ||
                                    mainVideo.video_sd_url
                                  }
                                  poster={mainVideo.video_preview_image_url}
                                  controls
                                  className="w-full h-full object-cover"
                                />
                                <button
                                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200 z-10"
                                  onClick={() => {}}
                                >
                                  <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors duration-200" />
                                </button>
                              </div>
                            );
                          }

                          if (extraVideo?.url) {
                            return (
                              <div className="relative h-52 bg-gray-50">
                                <video
                                  src={extraVideo.url}
                                  poster={extraVideo.thumbnail_url}
                                  controls
                                  className="w-full h-full object-cover"
                                />
                                <button
                                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200 z-10"
                                  onClick={() => {}}
                                >
                                  <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors duration-200" />
                                </button>
                              </div>
                            );
                          }

                          if (mainImage?.original_image_url) {
                            return (
                              <div className="relative h-52 bg-gray-50">
                                <Image
                                  src={mainImage.original_image_url}
                                  alt="Ad image"
                                  fill
                                  className="object-cover"
                                />
                                <button
                                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200 z-10"
                                  onClick={() => {}}
                                >
                                  <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors duration-200" />
                                </button>
                              </div>
                            );
                          }

                          if (extraImage?.url) {
                            return (
                              <div className="relative h-52 bg-gray-50">
                                <Image
                                  src={extraImage.url}
                                  alt={extraImage.alt_text || "Ad image"}
                                  fill
                                  className="object-cover"
                                />
                                <button
                                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200 z-10"
                                  onClick={() => {}}
                                >
                                  <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors duration-200" />
                                </button>
                              </div>
                            );
                          }

                          return null;
                        })()}
                        <div className="p-5">
                          <div className="flex items-center space-x-4 mb-5">
                            {ad.snapshot.page_profile_picture_url && (
                              <div className="relative w-12 h-12 ring-2 ring-gray-50 rounded-full overflow-hidden">
                                <Image
                                  src={ad.snapshot.page_profile_picture_url}
                                  alt="Page profile"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">
                                {ad.page_name}
                              </h4>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-gray-500">
                                  {ad.start_date
                                    ? new Date(
                                        ad.start_date * 1000
                                      ).toLocaleDateString()
                                    : "Date non disponible"}
                                </span>
                                {ad.end_date && (
                                  <span className="text-xs text-gray-500">
                                    {new Date(
                                      ad.end_date * 1000
                                    ).toDateString() ===
                                      new Date().toDateString() ||
                                    new Date(ad.end_date * 1000) > new Date()
                                      ? "• En cours"
                                      : `• ${new Date(ad.end_date * 1000).toLocaleDateString()}`}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {ad.snapshot.body?.text && (
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-5">
                              {ad.snapshot.body.text}
                            </p>
                          )}

                          <button
                            className="w-full bg-purple-600 text-white py-2.5 px-4 rounded-lg font-medium
                    hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                            onClick={() => {
                              setSelectedAd(ad);
                              setIsSheetOpen(true);
                            }}
                          >
                            <span>Voir l&apos;annonce</span>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  Aucun résultat. Faites une recherche pour voir les publicités
                </p>
              </div>
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

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-[90%] sm:w-[540px] overflow-y-auto">
          {selectedAd && (
            <div className="space-y-6">
              <SheetHeader>
                <SheetTitle className="text-xl font-bold">
                  {selectedAd.page_name}
                </SheetTitle>
                {selectedAd?.start_date && (
                  <div className="text-sm text-gray-500 mb-4">
                    Créé le{" "}
                    {new Date(
                      selectedAd.start_date * 1000
                    ).toLocaleDateString()}
                  </div>
                )}
              </SheetHeader>

              <div className="space-y-4">
                {/* Ad Media */}
                {(() => {
                  const mainVideo = selectedAd.snapshot.videos?.[0];
                  const extraVideo = selectedAd.snapshot.extra_videos?.[0];
                  const mainImage = selectedAd.snapshot.images?.[0];
                  const extraImage = selectedAd.snapshot.extra_images?.[0];

                  if (
                    mainVideo &&
                    (mainVideo.video_hd_url || mainVideo.video_sd_url)
                  ) {
                    return (
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <video
                          src={mainVideo.video_hd_url || mainVideo.video_sd_url}
                          poster={mainVideo.video_preview_image_url}
                          controls
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  }

                  if (extraVideo?.url) {
                    return (
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <video
                          src={extraVideo.url}
                          poster={extraVideo.thumbnail_url}
                          controls
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  }

                  if (mainImage?.original_image_url) {
                    return (
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={mainImage.original_image_url}
                          alt="Ad image"
                          fill
                          className="object-cover"
                        />
                      </div>
                    );
                  }

                  if (extraImage?.url) {
                    return (
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={extraImage.url}
                          alt={extraImage.alt_text || "Ad image"}
                          fill
                          className="object-cover"
                        />
                      </div>
                    );
                  }

                  return null;
                })()}

                {/* Ad Details */}
                <div className="space-y-4 text-sm">
                  {/* Page Info */}
                  <div className="flex items-center space-x-3">
                    {selectedAd.snapshot.page_profile_picture_url && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={selectedAd.snapshot.page_profile_picture_url}
                          alt="Page profile"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold">{selectedAd.page_name}</h4>
                      <p className="text-gray-500 text-xs">
                        {selectedAd.start_date
                          ? new Date(
                              selectedAd.start_date * 1000
                            ).toLocaleDateString()
                          : "Date non disponible"}
                        {selectedAd.end_date && (
                          <span>
                            {" "}
                            -{" "}
                            {new Date(
                              selectedAd.end_date * 1000
                            ).toDateString() === new Date().toDateString() ||
                            new Date(selectedAd.end_date * 1000) > new Date()
                              ? "En cours"
                              : new Date(
                                  selectedAd.end_date * 1000
                                ).toLocaleDateString()}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Ad Content */}
                  {selectedAd.snapshot.body?.text && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="whitespace-pre-wrap">
                        {selectedAd.snapshot.body.text}
                      </p>
                    </div>
                  )}

                  {/* Additional Details */}
                  <div className="space-y-2">
                    {selectedAd.snapshot.cta_type && (
                      <div>
                        <span className="font-medium">Type de CTA:</span>{" "}
                        <span className="text-gray-600">
                          {selectedAd.snapshot.cta_type}
                        </span>
                      </div>
                    )}
                    {selectedAd.categories &&
                      selectedAd.categories.length > 0 && (
                        <div>
                          <span className="font-medium">Catégories:</span>{" "}
                          <span className="text-gray-600">
                            {selectedAd.categories.join(", ")}
                          </span>
                        </div>
                      )}
                    {selectedAd.snapshot.link_url && (
                      <div>
                        <span className="font-medium">URL:</span>{" "}
                        <a
                          href={selectedAd.snapshot.link_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 underline break-all"
                        >
                          {selectedAd.snapshot.link_url}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
