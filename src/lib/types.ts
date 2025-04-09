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

export type { MarketplaceProduct, JumiaProduct };
