import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const subtotal = state.items.reduce((acc, item) => acc + item.priceAtAdd * item.quantity, 0);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment
    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      navigate('/order-confirmation');
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-bg text-ink">
        <Navbar />
        <main className="flex-grow p-16 grid grid-cols-2 gap-16">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <h2 className="font-oswald text-2xl uppercase">Shipping Information</h2>
            <input type="text" placeholder="Name" required className="bg-bg border border-white/20 p-3" />
            <input type="text" placeholder="Address" required className="bg-bg border border-white/20 p-3" />
            <h2 className="font-oswald text-2xl uppercase mt-8">Payment</h2>
            <input type="text" placeholder="Card Number" required className="bg-bg border border-white/20 p-3" />
            <button type="submit" className="py-4 bg-accent text-ink font-mono uppercase tracking-widest hover:bg-opacity-90">Place Order</button>
          </form>
          <div className="p-8 border border-white/10 font-mono text-sm">
            <h2 className="font-oswald text-2xl uppercase mb-6">Order Summary</h2>
            {state.items.map((item, idx) => (
              <div key={idx} className="flex justify-between py-2">
                <span>{item.productId} x {item.quantity}</span>
                <span>${item.priceAtAdd * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-4 pt-4 border-t border-white/10">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Checkout;
