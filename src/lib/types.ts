type ListingPrice = {
  formatted_amount: string;
  amount_with_offset_in_currency: string;
  amount: string;
};

type Location = {
  reverse_geocode: {
    city: string;
    state: string;
    city_page: object;
  };
};

type ProductImage = {
  __typename: string;
  id: string;
  photo_image_url: string;
};

type MarketplaceProduct = {
  facebookUrl: string;
  listingUrl: string;
  id: string;
  primary_listing_photo: ProductImage;
  listing_price: ListingPrice;
  strikethrough_price: ListingPrice | null;
  comparable_price: ListingPrice | null;
  comparable_price_type: string | null;
  location: Location;
  is_hidden: boolean;
  is_live: boolean;
  is_pending: boolean;
  is_sold: boolean;
  is_viewer_seller: boolean;
  min_listing_price: ListingPrice | null;
  max_listing_price: ListingPrice | null;
  listing_video: unknown | null;
  parent_listing: unknown | null;
  marketplace_listing_seller: unknown | null;
  delivery_types: string[];
};

type JumiaPrice = {
  rawPrice: string;
  price: string;
  priceEuro: string;
  taxEuro: string;
  oldPrice: string;
  oldPriceEuro: string;
  discount: string;
  discountEuro: string;
};

type JumiaRating = {
  average: number;
  totalRatings: number;
};

type JumiaBadge = {
  name: string;
  identifier: string;
  url: string;
  txtColor?: string;
  bgColor?: string;
};

type JumiaTracking = {
  name: string;
  categoryKey: string;
  brandKey: string;
};

type JumiaSimple = {
  sku: string;
  loginUrl: string;
  isBuyable: boolean;
  name: string;
  prices: JumiaPrice;
};

type JumiaProduct = {
  searchUrl: string;
  scrapedAt: string;
  product: {
    sku: string;
    name: string;
    displayName: string;
    brand: string;
    isShopExpress: boolean;
    categories: string[];
    prices: JumiaPrice;
    tags: string;
    rating: JumiaRating;
    image: string;
    tracking: JumiaTracking;
    url: string;
    badges: {
      main: JumiaBadge;
      campaign: JumiaBadge;
    };
    isBuyable: boolean;
    shopExpress: {
      title: string;
    };
    mpg: {
      lowPriceFormatted: string;
      otherOffers: number;
    };
    simples: JumiaSimple[];
    selectedVariation: string;
    wishlist: {
      added: boolean;
      removeUrl: string;
    };
  };
};

type FacebookAd = {
  page_name: string;
  url?: string;
  snapshot: {
    body?: { text?: string };
    branded_content?: {
      sponsor_page_id?: string;
      sponsor_page_name?: string;
      sponsor_relationship?: string;
    };
    byline?: string;
    caption?: string;
    cards?: {
      title?: string;
      description?: string;
      link_url?: string;
      image_url?: string;
    }[];
    cta_text?: string;
    cta_type?: string;
    current_page_name?: string;
    disclaimer_label?: string;
    display_format?: string;
    event?: {
      name?: string;
      start_timestamp?: number;
      end_timestamp?: number;
      location?: string;
    };
    images?: { original_image_url: string }[];
    is_reshared?: boolean;
    link_description?: string;
    link_url?: string;
    page_categories?: string[];
    page_entity_type?: string;
    page_id?: string;
    page_is_deleted?: boolean;
    page_is_profile_page?: boolean;
    page_like_count?: number;
    page_name?: string;
    page_profile_picture_url?: string;
    page_profile_uri?: string;
    root_reshared_post?: {
      id?: string;
      message?: string;
      created_time?: string;
    };
    title?: string;
    videos?: {
      video_hd_url?: string;
      video_preview_image_url?: string;
      video_sd_url?: string;
      watermarked_video_hd_url?: string;
      watermarked_video_sd_url?: string;
    }[];
    additional_info?: Record<string, unknown>;
    ec_certificates?: {
      type?: string;
      url?: string;
      expiry_date?: string;
    }[];
    extra_images?: {
      url?: string;
      alt_text?: string;
    }[];
    extra_links?: {
      url?: string;
      title?: string;
      description?: string;
    }[];
    extra_texts?: {
      text?: string;
      type?: string;
    }[];
    extra_videos?: {
      url?: string;
      thumbnail_url?: string;
      duration?: number;
    }[];
  };
  start_date?: number;
  end_date?: number;
  ad_archive_id?: string;
  ad_id?: string | null;
  archive_types?: string[];
  categories?: string[];
  collation_count?: number;
  collation_id?: string;
  contains_digital_created_media?: boolean;
  contains_sensitive_content?: boolean;
  currency?: string;
  entity_type?: string;
  fev_info?: Record<string, unknown>;
  gated_type?: string;
  has_user_reported?: boolean;
  hidden_safety_data?: boolean;
  hide_data_status?: string;
  impressions_with_index?: {
    impressions_text?: string | null;
    impressions_index?: number;
  };
  is_aaa_eligible?: boolean;
  is_active?: boolean;
  is_profile_page?: boolean;
  menu_items?: {
    text?: string;
    url?: string;
    type?: string;
  }[];
  page_id?: string;
  page_is_deleted?: boolean;
  political_countries?: string[];
  publisher_platform?: string[];
  reach_estimate?: {
    lower_bound?: number;
    upper_bound?: number;
  };
  regional_regulation_data?: {
    finserv?: {
      is_deemed_finserv?: boolean;
      is_limited_delivery?: boolean;
    };
    tw_anti_scam?: {
      is_limited_delivery?: boolean;
    };
  };
  report_count?: number | null;
  spend?: {
    lower_bound?: number;
    upper_bound?: number;
    currency?: string;
  };
  state_media_run_label?: {
    label?: string;
    effective_date?: string;
  };
  targeted_or_reached_countries?: string[];
  total_active_time?: number | null;
};

export type { MarketplaceProduct, JumiaProduct, FacebookAd };
