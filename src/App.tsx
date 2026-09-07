import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';
import { CartProvider, useCart } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import ScrollProgressBar from './components/ScrollProgressBar';

const AppContent = () => {
  const { isCartOpen, setIsCartOpen } = useCart();
  return (
    <>
      <ScrollProgressBar />
      <AppRouter />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
