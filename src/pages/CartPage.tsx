import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { state } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Navbar />
      <main className="flex-grow p-16">
        <h1 className="font-oswald text-5xl uppercase mb-8">Cart</h1>
        {state.items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center py-4 border-b border-white/10">
            <span>{item.productId} x {item.quantity}</span>
            <span>${item.priceAtAdd * item.quantity}</span>
          </div>
        ))}
        <button onClick={() => navigate('/checkout')} className="mt-8 py-3 px-6 bg-accent text-ink font-mono uppercase tracking-widest hover:bg-opacity-90">Proceed to Checkout</button>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
