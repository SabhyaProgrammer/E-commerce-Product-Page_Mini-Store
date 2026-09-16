import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartPage = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const subtotal = state.items.reduce((acc, item) => acc + item.priceAtAdd * item.quantity, 0);
  
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-bg text-ink">
        <Navbar />
        <main className="flex-grow p-8 md:p-16 pt-32">
          <h1 className="font-serif text-5xl mb-8">
            Your Cart
          </h1>
          
          {state.items.length === 0 ? (
            <div className="text-center py-20 opacity-60">
              <p className="mb-4">Your cart is empty.</p>
              <button 
                onClick={() => navigate('/')}
                className="font-sans font-bold text-xs uppercase tracking-widest text-accent hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="max-w-3xl">
              {state.items.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex justify-between items-center py-6 border-b border-ink/20"
                >
                  <div>
                    <span className="font-sans font-extrabold text-xs uppercase tracking-widest">{item.productId}</span>
                    <p className="font-serif text-sm opacity-70 mt-1">${item.priceAtAdd} × {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity: Math.max(1, item.quantity - 1) } })}
                        className="p-1 hover:bg-ink/10 rounded transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-serif">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity: item.quantity + 1 } })}
                        className="p-1 hover:bg-ink/10 rounded transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button 
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}
                      className="p-2 text-accent hover:bg-accent/10 rounded transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="mt-8 pt-8 border-t-2 border-ink">
                <div className="flex justify-between mb-6 font-sans text-xs uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => navigate('/checkout')} 
                  className="w-full py-4 bg-ink text-bg text-[0.65rem] uppercase tracking-[0.15em] font-extrabold hover:bg-accent transition-colors duration-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </PageTransition>

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-bg text-ink"
    >
      <Navbar />
      <main className="flex-grow p-8 md:p-16 pt-32">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-serif text-5xl mb-8"
        >
          Your Cart
        </motion.h1>
        
        {state.items.length === 0 ? (
          <div className="text-center py-20 opacity-60">
            <p className="mb-4">Your cart is empty.</p>
            <button 
              onClick={() => navigate('/')}
              className="font-sans font-bold text-xs uppercase tracking-widest text-accent hover:underline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="max-w-3xl">
            {state.items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="flex justify-between items-center py-6 border-b border-ink/20"
              >
                <div>
                  <span className="font-sans font-extrabold text-xs uppercase tracking-widest">{item.productId}</span>
                  <p className="font-serif text-sm opacity-70 mt-1">${item.priceAtAdd} × {item.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity: Math.max(1, item.quantity - 1) } })}
                      className="p-1 hover:bg-ink/10 rounded transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-serif">{item.quantity}</span>
                    <button 
                      onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity: item.quantity + 1 } })}
                      className="p-1 hover:bg-ink/10 rounded transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button 
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}
                    className="p-2 text-accent hover:bg-accent/10 rounded transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 pt-8 border-t-2 border-ink"
            >
              <div className="flex justify-between mb-6 font-sans text-xs uppercase tracking-widest">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button 
                onClick={() => navigate('/checkout')} 
                className="w-full py-4 bg-ink text-bg text-[0.65rem] uppercase tracking-[0.15em] font-extrabold hover:bg-accent transition-colors duration-300"
              >
                Proceed to Checkout
              </button>
            </motion.div>
          </div>
        )}
      </main>
      <Footer />
    </motion.div>
  );
};

export default CartPage;
