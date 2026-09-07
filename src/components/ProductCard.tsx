import { Product } from '../data/productsData';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

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
    <div className="card relative border-2 border-ink p-6 transition duration-300 hover:translate-y-[-10px]">
      <Link to={`/product/${product.slug}`}>
        <img src={product.images[0]} alt={product.name} className="w-full aspect-square object-cover border border-ink mb-6" />
        <h3 className="font-serif text-[2.5rem] leading-[1] mb-2">{product.name}</h3>
        <p className="font-sans text-[0.7rem] uppercase tracking-[0.12em] opacity-60 mb-6">${product.price}</p>
      </Link>
      <div className="flex gap-2">
        <button 
          onClick={handleAddToCart}
          disabled={product.stock === 'sold-out'}
          className="flex-grow border border-ink bg-transparent py-4 text-[0.65rem] uppercase tracking-[0.15em] font-extrabold hover:bg-ink hover:text-bg transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {product.stock === 'sold-out' ? 'Sold Out' : 'Add to Cart'}
        </button>
        <button 
          onClick={() => onQuickView(product)}
          className="border border-ink bg-transparent py-4 px-4 text-[0.65rem] uppercase tracking-[0.15em] font-extrabold hover:bg-ink hover:text-bg transition"
        >
          Quick View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
