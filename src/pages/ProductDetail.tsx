import { useParams } from 'react-router-dom';
import { productsData } from '../data/productsData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ProductDetail = () => {
  const { productSlug } = useParams();
  const product = productsData.find((p) => p.slug === productSlug);
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants ? { type: product.variants[0].type, value: product.variants[0].options[0] } : null);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId: product.id,
        variant: selectedVariant,
        quantity,
        priceAtAdd: product.price,
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Navbar />
      <main className="flex-grow p-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="aspect-square bg-white/5">
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-oswald text-5xl uppercase">{product.name}</h1>
          <p className="font-mono text-xl">${product.price}</p>
          <p className="font-mono text-sm opacity-80">{product.longDescription}</p>
          
          {product.variants && (
            <div className="font-mono text-xs uppercase tracking-widest">
              <label className="block mb-2">{product.variants[0].type}</label>
              <select 
                className="bg-bg border border-white/20 p-2 w-full"
                onChange={(e) => setSelectedVariant({ type: product.variants![0].type, value: e.target.value })}
              >
                {product.variants[0].options.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
          )}

          <div className="flex gap-4">
            <input 
              type="number" 
              min="1" 
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 bg-bg border border-white/20 p-2 text-center"
            />
            <button 
              onClick={handleAddToCart}
              disabled={product.stock === 'sold-out'}
              className="flex-grow py-2 bg-accent text-ink font-mono uppercase tracking-widest hover:bg-opacity-90 transition disabled:opacity-30"
            >
              {product.stock === 'sold-out' ? 'Sold Out' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
