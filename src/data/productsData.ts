export interface VariantOption {
  type: string;
  options: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Ceramics' | 'Candles' | 'Textiles';
  price: number;
  images: string[];
  variants: VariantOption[] | null;
  stock: 'in-stock' | 'low-stock' | 'sold-out';
  stockCount?: number;
  shortDescription: string;
  longDescription: string;
  materialDetails: string;
}

export const productsData: Product[] = [
  {
    id: '1',
    slug: 'stoneware-mug',
    name: 'Hand-Thrown Stoneware Mug',
    category: 'Ceramics',
    price: 34,
    images: ['https://images.unsplash.com/photo-1578746944834-315357908b8c?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1594958316719-7589d9f13e73?q=80&w=600&auto=format&fit=crop'],
    variants: [{ type: 'Finish', options: ['Matte Cream', 'Speckled Gray'] }],
    stock: 'in-stock',
    shortDescription: 'Minimalist mug for your morning ritual.',
    longDescription: 'Each mug is individually hand-thrown in our studio, ensuring no two pieces are identical. Features a comfortable, ergonomic handle.',
    materialDetails: 'Stoneware clay, food-safe glaze.',
  },
  {
    id: '2',
    slug: 'linen-throw',
    name: 'Washed Linen Throw',
    category: 'Textiles',
    price: 120,
    images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1602758169123-5e921509312b?q=80&w=600&auto=format&fit=crop'],
    variants: null,
    stock: 'low-stock',
    stockCount: 5,
    shortDescription: 'Soft, breathable linen for cozy evenings.',
    longDescription: 'Our signature washed linen throw is exceptionally soft and durable. Perfect for layering on the sofa or at the foot of your bed.',
    materialDetails: '100% European Flax linen.',
  },
  {
    id: '3',
    slug: 'scented-candle',
    name: 'Cedar & Sandalwood Candle',
    category: 'Candles',
    price: 28,
    images: ['https://images.unsplash.com/photo-1602636540250-93728639a04a?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1603006905003-be4750625f50?q=80&w=600&auto=format&fit=crop'],
    variants: [{ type: 'Size', options: ['Small', 'Large'] }],
    stock: 'in-stock',
    shortDescription: 'Warm, grounding notes for any space.',
    longDescription: 'Hand-poured in small batches using clean-burning soy wax. Features a soothing, balanced scent profile.',
    materialDetails: 'Soy wax, lead-free cotton wick, essential oil blend.',
  },
  {
    id: '4',
    slug: 'ceramic-vase',
    name: 'Tall Ceramic Vase',
    category: 'Ceramics',
    price: 65,
    images: ['https://images.unsplash.com/photo-1549488344-1f9a8d217983?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=600&auto=format&fit=crop'],
    variants: null,
    stock: 'sold-out',
    shortDescription: 'Statement piece for your dried botanicals.',
    longDescription: 'An elegant, sculptural vase that makes a statement even when empty. Organic shape inspired by local coastlines.',
    materialDetails: 'Earthenware clay.',
  },
  {
    id: '5',
    slug: 'wool-blanket',
    name: 'Merino Wool Blanket',
    category: 'Textiles',
    price: 180,
    images: ['https://images.unsplash.com/photo-1596704017248-c89b2512f361?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1601612628492-9118540ba81b?q=80&w=600&auto=format&fit=crop'],
    variants: null,
    stock: 'in-stock',
    shortDescription: 'Heritage-quality warmth.',
    longDescription: 'Woven in a family-run mill, this blanket offers unparalleled warmth without the itch. An heirloom piece.',
    materialDetails: '100% Merino wool.',
  },
];
