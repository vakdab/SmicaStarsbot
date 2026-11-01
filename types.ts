export interface Song {
  id: string;
  user_id: string;
  author: string;
  title: string;
  song_path: string;
  image_path: string;
}

export interface UserDetails {
  id: string;
  email?: string;
  full_name?: string;
  avatar_url?: string;
}

export interface Product {
  id: string;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Record<string, string>;
}

export interface Price {
  id: string;
  product_id?: string;
  active?: boolean;
  description?: string;
  unit_amount?: number;
  currency?: string;
  type?: "one_time" | "recurring";
  interval?: "day" | "week" | "month" | "year";
  interval_count?: number;
  metadata?: Record<string, string>;
  products?: Product;
}

export interface ProductWithPrice extends Product {
  prices?: Price[];
}

export interface Subscription {
  id: string;
  user_id: string;
  status?: string;
  price_id?: string;
  cancel_at_period_end?: boolean;
  prices?: Price & { products?: Product };
}
