type Asset = {
  type: 'image' | 'video';
  url: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  originalProductUrl: string;
  description: string;
  assets: Asset[];
  dateBought: string;
};

export type { Product, Asset };
