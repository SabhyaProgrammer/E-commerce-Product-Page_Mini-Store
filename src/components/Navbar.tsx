import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { state, setIsCartOpen } = useCart();
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between py-12 px-[4vw]">
      <Link to="/" className="font-sans font-extrabold text-5xl tracking-tighter">FOUNDRY.</Link>
      <div className="flex gap-8">
        <Link to="/" className="font-sans font-extrabold text-xs uppercase tracking-widest hover:opacity-60 transition">Shop All</Link>
        <button onClick={() => setIsCartOpen(true)} className="font-sans font-extrabold text-xs uppercase tracking-widest hover:opacity-60 transition">
          Cart ({itemCount})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
