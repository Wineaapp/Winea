"use server";

import { ApifyClient } from "apify-client";
import { FacebookAd } from "@/lib/types";
import { DEFAULT_AD } from "@/lib/utils";

const client = new ApifyClient({
  token: process.env.APIFY_TOKEN,
});

export async function searchFacebookAds(
  query = "digital",
  startDate = "2025-04-01",
  country = "CM",
  status = "all",
  language = "fr"
) {
  try {
    if (!process.env.APIFY_TOKEN) {
      throw new Error("Apify token is not configured on the server.");
    }

    const input = {
      searchUrl: `https://www.facebook.com/ads/library/?active_status=${status}&ad_type=all&content_languages[0]=${language}&country=${country}&is_targeted_country=false&media_type=all&q=${encodeURIComponent(query)}&search_type=keyword_unordered${startDate ? `&start_date[max]=${startDate}` : ""}`,
      maxItems: 5,
      // Add performance optimizations
      maxConcurrency: 10,
      maxRequestRetries: 3,
      maxRequestsPerCrawl: 50,
    };

    const { id: runId } = await client.actor("CfCwPWpfjpxQhOboS").start(input, {
      memory: 16384,
      timeout: 300, // 5 minutes timeout
    });

    return { status: "started", runId };
  } catch (error) {
    console.error("Error starting ad scraper:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`Failed to start scraper: ${errorMessage}`);
  }
}

export async function getFacebookAdsResults(runId: string) {
  try {
    const run = await client.run(runId).get();

    if (!run) {
      // Return default data if run not found
      return { status: "SUCCEEDED", items: [DEFAULT_AD] };
    }

    if (run.status !== "SUCCEEDED") {
      // Return default data if run failed
      if (run.status === "FAILED") {
        return { status: "SUCCEEDED", items: [DEFAULT_AD] };
      }
      return { status: run.status, items: [] as FacebookAd[] };
    }

    const { items } = await client.dataset(run.defaultDatasetId).listItems();

    // If no items were found, return default data
    if (!items || items.length === 0) {
      return { status: "SUCCEEDED", items: [DEFAULT_AD] };
    }

    return { status: "SUCCEEDED", items: items as FacebookAd[] };
  } catch (error) {
    console.error("Error fetching ads results:", error);
    // Return default data on error
    return { status: "SUCCEEDED", items: [DEFAULT_AD] };
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
