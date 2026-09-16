import { Product } from '../data/productsData';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const { dispatch } = useCart();
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-bg border-2 border-ink p-8 w-full max-w-2xl relative shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2 hover:bg-ink/10 rounded-full transition-colors z-10"
          >
            <X size={24} />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <img src={product.images[0]} alt={product.name} className="w-full aspect-square object-cover border border-ink/20" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col justify-center"
            >
              <h2 className="font-serif text-4xl mb-2">{product.name}</h2>
              <p className="font-sans text-lg mb-6 text-accent font-bold">${product.price}</p>
              <p className="font-sans text-sm mb-8 opacity-80 leading-relaxed">{product.longDescription}</p>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { 
                    dispatch({ 
                        type: 'ADD_ITEM', 
                        payload: { 
                            productId: product.id, 
                            priceAtAdd: product.price, 
                            quantity: 1,
                            variant: product.variants ? { type: product.variants[0].type, value: product.variants[0].options[0] } : null 
                        } 
                    }); 
                    onClose(); 
                }}
                className="w-full border-2 border-ink bg-ink text-bg py-4 text-[0.65rem] uppercase tracking-[0.15em] font-extrabold hover:bg-transparent hover:text-ink transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={16} />
                Add to Cart
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuickViewModal;
