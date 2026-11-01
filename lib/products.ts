import { ProductWithPrice } from "@/types";

/**
 * Demo plans used by the subscription modal.
 * Swap for real data from your billing provider when you connect one.
 */
export const products: ProductWithPrice[] = [
  {
    id: "prod_basic",
    active: true,
    name: "SmicaStars Basic",
    description: "Unlimited playback and uploads.",
    prices: [
      {
        id: "price_basic_monthly",
        product_id: "prod_basic",
        active: true,
        currency: "usd",
        unit_amount: 500,
        type: "recurring",
        interval: "month",
        interval_count: 1
      }
    ]
  },
  {
    id: "prod_premium",
    active: true,
    name: "SmicaStars Premium",
    description: "Lossless audio, offline mode, no ads.",
    prices: [
      {
        id: "price_premium_monthly",
        product_id: "prod_premium",
        active: true,
        currency: "usd",
        unit_amount: 1200,
        type: "recurring",
        interval: "month",
        interval_count: 1
      }
    ]
  }
];

export const getActiveProductsWithPrices = (): ProductWithPrice[] => products;
