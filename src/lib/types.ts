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

type FacebookAdCard = {
  id: string;
  type: string;
  [key: string]: unknown;
};

type FacebookAdVideo = {
  id: string;
  url: string;
  thumbnail_url?: string;
  [key: string]: unknown;
};

type FacebookAdImage = {
  id: string;
  url: string;
  [key: string]: unknown;
};

type FacebookAdSnapshot = {
  body: {
    text: string;
  };
  branded_content: null;
  brazil_tax_id: null;
  byline: null;
  caption: string;
  cards: FacebookAdCard[];
  cta_text: string;
  cta_type: string;
  country_iso_code: null;
  current_page_name: string;
  disclaimer_label: null;
  display_format: string;
  event: null;
  images: FacebookAdImage[];
  is_reshared: boolean;
  link_description: null;
  link_url: string;
  page_categories: string[];
  page_entity_type: string;
  page_id: string;
  page_is_deleted: boolean;
  page_is_profile_page: boolean;
  page_like_count: number;
  page_name: string;
  page_profile_picture_url: string;
  page_profile_uri: string;
  root_reshared_post: null;
  title: null;
  videos: FacebookAdVideo[];
  additional_info: null;
  ec_certificates: unknown[];
  extra_images: FacebookAdImage[];
  extra_links: Record<string, string>[];
  extra_texts: Record<string, string>[];
  extra_videos: FacebookAdVideo[];
};

type FacebookAdMenuItem = {
  id: string;
  text: string;
  url?: string;
  [key: string]: unknown;
};

type FacebookAd = {
  ad_archive_id: string;
  ad_id: string | null;
  archive_types: string[];
  categories: string[];
  collation_count: number;
  collation_id: string;
  contains_digital_created_media: boolean;
  contains_sensitive_content: boolean;
  currency: string;
  end_date: number;
  entity_type: string;
  fev_info: null;
  gated_type: string;
  has_user_reported: boolean;
  hidden_safety_data: boolean;
  hide_data_status: string;
  impressions_with_index: {
    impressions_text: string | null;
    impressions_index: number;
  };
  is_aaa_eligible: boolean;
  is_active: boolean;
  is_profile_page: boolean;
  menu_items: FacebookAdMenuItem[];
  page_id: string;
  page_is_deleted: boolean;
  page_name: string;
  political_countries: string[];
  publisher_platform: string[];
  reach_estimate: null;
  regional_regulation_data: {
    finserv: {
      is_deemed_finserv: boolean;
      is_limited_delivery: boolean;
    };
    tw_anti_scam: {
      is_limited_delivery: boolean;
    };
  };
  report_count: null;
  snapshot: FacebookAdSnapshot;
  spend: null;
  start_date: number;
  state_media_run_label: null;
  targeted_or_reached_countries: string[];
  total_active_time: number;
  url: string;
  total: number;
};

export type { MarketplaceProduct, JumiaProduct, FacebookAd };
