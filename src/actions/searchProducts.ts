"use server";

import { ApifyClient } from "apify-client";
import { JumiaProduct, FacebookAd } from "@/lib/types";

// Initialize the ApifyClient with API token
const client = new ApifyClient({
  token: "apify_api_Vo2ywCBm0imUwc9B2ajxtc8r4h0qHB2dbiTE",
});

export async function searchFacebookAds(
  query: string = "digital",
  startDate: string = "2025-04-01",
  country: string = "CM",
  status: string = "all",
  language: string = "en"
) {
  // Prepare Actor input with the correct date parameters
  const input = {
    urls: [
      {
        url: `https://www.facebook.com/ads/library/?active_status=${status}&ad_type=all&content_languages[0]=${language}&country=${country}&is_targeted_country=false&media_type=image&q=${encodeURIComponent(query)}&search_type=keyword_unordered${startDate ? `&start_date[max]=${startDate}` : ""}`,
      },
    ],
    count: 10,
    "scrapePageAds.activeStatus": status,
    period: "",
  };

  // Run the Actor and wait for it to finish
  const run = await client.actor("XtaWFhbtfxyzqrFmd").call(input);

  // Fetch and print Actor results from the run's dataset (if any)
  console.log("Results from dataset");
  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  items.forEach((item) => {
    console.dir(item);
  });

  return items as FacebookAd[];
}

export async function searchJumiaProducts(): Promise<JumiaProduct[]> {
  const input = {
    searchUrls: ["https://www.jumia.com.ng/health-care/#catalog-listing"],
    maxItems: 10,
    proxyConfiguration: {
      useApifyProxy: false,
    },
  };

  // Run the Actor and wait for it to finish
  const run = await client.actor("SqE6Cg7U75yiYDAs4").call(input);

  // Fetch and print Actor results from the run's dataset (if any)
  console.log("Results from dataset");
  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  items.forEach((item) => {
    console.dir(item);
  });

  return items as JumiaProduct[];
}
