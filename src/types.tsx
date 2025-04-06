type Asset = {
  type: 'image' | 'video';
  url: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  assets: Asset[];
};

export type { Product, Asset };
