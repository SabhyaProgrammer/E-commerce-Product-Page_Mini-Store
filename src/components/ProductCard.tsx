import { Product } from '../data/productsData';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye } from 'lucide-react';
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="card group relative border-2 border-ink p-6 transition-all duration-500 hover:shadow-2xl hover:border-opacity-80 hover:-translate-y-1 overflow-hidden"
    >
      {/* Subtle gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />
      
      <Link to={`/product/${product.slug}`} className="block overflow-hidden">
        <div className="relative overflow-hidden mb-6">
          <motion.img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          />
          
          {/* Quick view overlay */}
          <motion.div
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              onClick={(e) => { e.preventDefault(); onQuickView(product); }}
              className="border-2 border-ink bg-bg py-3 px-6 text-[0.6rem] uppercase tracking-[0.2em] font-extrabold hover:bg-ink hover:text-bg transition-all duration-300 flex items-center gap-2"
            >
              <Eye size={14} />
              Quick View
            </motion.button>
          </motion.div>
          
          {product.stock === 'sold-out' && (
            <motion.div 
              className="absolute inset-0 bg-bg/90 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span 
                className="font-sans font-extrabold text-xs uppercase tracking-[0.2em]"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Sold Out
              </motion.span>
            </motion.div>
          )}
        </div>
        
        <motion.h3 
          className="font-serif text-[2.5rem] leading-[1] mb-2 group-hover:text-accent transition-colors duration-300"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3 }}
        >
          {product.name}
        </motion.h3>
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
      
      <motion.div 
        className="flex gap-2"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          disabled={product.stock === 'sold-out'}
          className="flex-grow border-2 border-ink bg-transparent py-4 text-[0.65rem] uppercase tracking-[0.15em] font-extrabold hover:bg-ink hover:text-bg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 group/btn"
        >
          <ShoppingBag size={14} className="group-hover/btn:rotate-12 transition-transform" />
          {product.stock === 'sold-out' ? 'Sold Out' : 'Add to Cart'}
        </motion.button>
      </motion.div>
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
