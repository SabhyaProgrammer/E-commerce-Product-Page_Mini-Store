import { Product } from '../data/productsData';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';

const ProductGrid = ({ products, loading, onQuickView }: { products: Product[], loading: boolean, onQuickView: (p: Product) => void }) => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-16">
      {loading ? (
        Array.from({ length: 3 }).map((_, i) => <ProductSkeleton key={i} />)
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
        ))
      )}
    </div>
  );
};

export default ProductGrid;
