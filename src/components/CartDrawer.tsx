import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const subtotal = state.items.reduce((acc, item) => acc + item.priceAtAdd * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-bg border-l-2 border-ink shadow-2xl flex flex-col"
          >
            <div className="flex justify-between items-center p-8 border-b border-ink/20">
              <h2 className="font-serif text-3xl">Your Cart</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-ink/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-8 flex flex-col gap-6">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-60">
                  <p className="font-sans text-sm mb-4">Your cart is empty.</p>
                  <button 
                    onClick={() => { onClose(); navigate('/'); }}
                    className="font-sans font-bold text-xs uppercase tracking-widest text-accent hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                state.items.map((item, idx) => (
                  <motion.div
                    key={`${item.productId}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex gap-4 pb-6 border-b border-ink/10 last:border-0"
                  >
                    <div className="w-20 h-20 bg-ink/5 border border-ink/20 flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="font-sans font-extrabold text-xs uppercase tracking-[0.12em]">{item.productId}</h3>
                      <p className="font-serif text-sm opacity-70 mt-1">${item.priceAtAdd}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button 
                          onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity: Math.max(1, item.quantity - 1) } })}
                          className="p-1 hover:bg-ink/10 rounded transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-serif text-lg w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity: item.quantity + 1 } })}
                          className="p-1 hover:bg-ink/10 rounded transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                        <button 
                          onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}
                          className="ml-auto p-1 text-accent hover:bg-accent/10 rounded transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {state.items.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="p-8 border-t-2 border-ink bg-bg/50 backdrop-blur-sm"
              >
                <div className="flex justify-between mb-6 font-sans text-xs uppercase tracking-[0.15em] font-extrabold">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <p className="font-sans text-[0.6rem] uppercase tracking-widest opacity-60 mb-6">Shipping & taxes calculated at checkout</p>
                <button 
                  onClick={() => { onClose(); navigate('/checkout'); }}
                  className="w-full py-4 bg-ink text-bg text-[0.65rem] uppercase tracking-[0.15em] font-extrabold hover:bg-accent transition-colors duration-300"
                >
                  Checkout
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
