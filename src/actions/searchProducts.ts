"use server";

import { ApifyClient } from "apify-client";
import { FacebookAd } from "@/lib/types";

// Initialize the ApifyClient with API token
const client = new ApifyClient({
  token: process.env.APIFY_TOKEN,
});

export async function searchFacebookAds(
  query: string = "digital",
  startDate: string = "2025-04-01",
  country: string = "CM",
  status: string = "all",
  language: string = "fr"
) {
  try {
    if (!process.env.APIFY_TOKEN) {
      console.warn("Warning: APIFY_TOKEN not found in environment variables");
      throw new Error("Apify token is not configured on the server.");
    }

    // Prepare Actor input with the correct parameters
    const input = {
      searchUrl: `https://www.facebook.com/ads/library/?active_status=${status}&ad_type=all&content_languages[0]=${language}&country=${country}&is_targeted_country=false&media_type=all&q=${encodeURIComponent(query)}&search_type=keyword_unordered${startDate ? `&start_date[max]=${startDate}` : ""}`,
      maxItems: 20,
    };

    // Run the Actor and wait for it to finish
    const run = await client.actor("CfCwPWpfjpxQhOboS").call(input);

    // Fetch Actor results from the run's dataset
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    console.log("Fetched ads:", items);

    return items as FacebookAd[];
  } catch (error) {
    console.error("Error fetching ads:", error);
    throw new Error("Failed to fetch ads data");
  }
}

/* export async function searchFacebookAds(
  query: string = "digital"
   startDate: string = "2025-04-01",
  country: string = "CM",
  status: string = "all",
  language: string = "en" 
) {
  try {
    if (!process.env.APIFY_TOKEN) {
      console.warn("Warning: APIFY_TOKEN not found in environment variables");
    }

    // Prepare Actor input with the correct parameters
    const input = {
      searchUrl: `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=CM&is_targeted_country=false&media_type=all&q=${encodeURIComponent(query)}&search_type=keyword_unordered`,
      maxItems: 20,
    };

    // Run the Actor and wait for it to finish
    const run = await client.actor("CfCwPWpfjpxQhOboS").call(input);

    // Fetch Actor results from the run's dataset
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    console.log("Fetched ads:", items);

    return items as FacebookAd[];
  } catch (error) {
    console.error("Error fetching ads:", error);
    throw new Error("Failed to fetch ads data");
  }
} */

/* export async function searchInstagramAds(
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
        url: `https://www.facebook.com/ads/library/?active_status=${status}&ad_type=all&content_languages[0]=${language}&country=${country}&is_targeted_country=false&media_type=all&publisher_platforms[0]=instagram&q=${encodeURIComponent(query)}&search_type=keyword_unordered${startDate ? `&start_date[max]=${startDate}` : ""}`,
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
} */
