import { Product } from '../data/productsData';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product, onQuickView }: { product: Product, onQuickView: (p: Product) => void }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId: product.id,
        variant: product.variants ? { type: product.variants[0].type, value: product.variants[0].options[0] } : null,
        quantity: 1,
        priceAtAdd: product.price,
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="card group relative border-2 border-ink p-6 transition-all duration-500 hover:shadow-xl hover:border-opacity-80"
    >
      <Link to={`/product/${product.slug}`} className="block overflow-hidden">
        <div className="relative overflow-hidden mb-6">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          {product.stock === 'sold-out' && (
            <div className="absolute inset-0 bg-bg/80 flex items-center justify-center">
              <span className="font-sans font-extrabold text-xs uppercase tracking-[0.15em]">Sold Out</span>
            </div>
          )}
        </div>
        <h3 className="font-serif text-[2.5rem] leading-[1] mb-2 group-hover:text-accent transition-colors duration-300">{product.name}</h3>
        <p className="font-sans text-[0.7rem] uppercase tracking-[0.12em] opacity-60 mb-6">${product.price}</p>
      </Link>
      <div className="flex gap-2">
        <button 
          onClick={handleAddToCart}
          disabled={product.stock === 'sold-out'}
          className="flex-grow border border-ink bg-transparent py-4 text-[0.65rem] uppercase tracking-[0.15em] font-extrabold hover:bg-ink hover:text-bg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <ShoppingBag size={14} />
          {product.stock === 'sold-out' ? 'Sold Out' : 'Add to Cart'}
        </button>
        <button 
          onClick={() => onQuickView(product)}
          className="border border-ink bg-transparent py-4 px-4 text-[0.65rem] uppercase tracking-[0.15em] font-extrabold hover:bg-ink hover:text-bg transition-all duration-300"
        >
          Quick View
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
