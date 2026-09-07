import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Navbar />
      <main className="flex-grow p-16 text-center">
        <h1 className="font-oswald text-5xl uppercase mb-8">Thank you for your order.</h1>
        <p className="font-mono text-sm opacity-60">This is a portfolio demo. No real transaction has been processed.</p>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
