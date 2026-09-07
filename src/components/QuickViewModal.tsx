import { Product } from '../data/productsData';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const { dispatch } = useCart();
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-bg border-2 border-ink p-8 w-full max-w-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4"><X size={24} /></button>
        <div className="grid grid-cols-2 gap-8">
          <img src={product.images[0]} alt={product.name} className="w-full aspect-square object-cover" />
          <div>
            <h2 className="font-serif text-3xl mb-4">{product.name}</h2>
            <p className="font-sans text-sm mb-4">${product.price}</p>
            <p className="font-sans text-xs mb-8">{product.longDescription}</p>
            <button 
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
                className="w-full border border-ink bg-ink text-bg py-4 text-[0.65rem] uppercase tracking-[0.15em] font-extrabold hover:bg-transparent hover:text-ink transition"
            >
                Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
