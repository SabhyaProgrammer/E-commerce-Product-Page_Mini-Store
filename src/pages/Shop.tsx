import { useState, useMemo, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import FilterSortBar from '../components/FilterSortBar';
import ProductGrid from '../components/ProductGrid';
import TrustStrip from '../components/TrustStrip';
import QuickViewModal from '../components/QuickViewModal';
import PageTransition from '../components/PageTransition';
import { productsData, Product } from '../data/productsData';

const Shop = () => {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('newest');
  const [loading, setLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = category === 'All' ? productsData : productsData.filter(p => p.category === category);
    
    if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'alpha-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === 'alpha-desc') filtered.sort((a, b) => b.name.localeCompare(a.name));
    
    return filtered;
  }, [category, sort]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-bg text-ink container">
        <Navbar />
        <main className="flex-grow pt-24">
          <HeroBanner />
          <FilterSortBar onCategoryChange={setCategory} onSortChange={setSort} />
          <ProductGrid products={filteredProducts} loading={loading} onQuickView={setQuickViewProduct} />
          <TrustStrip />
        </main>
        <Footer />
        {quickViewProduct && <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />}
      </div>
    </PageTransition>
  );
};

export default Shop;
