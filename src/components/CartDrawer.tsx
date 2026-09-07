import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const subtotal = state.items.reduce((acc, item) => acc + item.priceAtAdd * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="glass w-full max-w-md p-8 border-l-2 border-ink flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-3xl">Cart</h2>
          <button onClick={onClose}><X size={24} /></button>
        </div>
        
        <div className="flex-grow overflow-y-auto flex flex-col gap-8">
          {state.items.length === 0 && <p className="font-sans text-sm">Your cart is empty.</p>}
          {state.items.map((item, idx) => (
            <div key={idx} className="flex gap-4 border-b border-ink/20 pb-4">
              <div className="w-20 h-20 bg-ink/5" />
              <div className="flex-grow">
                <h3 className="font-sans font-extrabold text-xs uppercase tracking-[0.12em]">{item.productId}</h3>
                <div className="flex items-center gap-4 mt-4">
                  <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity: Math.max(1, item.quantity - 1) } })}><Minus size={14}/></button>
                  <span className="font-serif text-lg">{item.quantity}</span>
                  <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity: item.quantity + 1 } })}><Plus size={14}/></button>
                  <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })} className="ml-auto text-accent"><Trash2 size={16}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t-2 border-ink mt-8">
          <div className="flex justify-between mb-8 font-sans text-xs uppercase tracking-[0.15em] font-extrabold">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <button 
            onClick={() => { onClose(); navigate('/checkout'); }}
            className="w-full py-4 bg-ink text-bg text-[0.65rem] uppercase tracking-[0.15em] font-extrabold hover:bg-accent transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
