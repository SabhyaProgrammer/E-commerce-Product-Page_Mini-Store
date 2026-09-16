import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { state, setIsCartOpen } = useCart();
  const location = useLocation();
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Shop All' },
    { to: '/about', label: 'Our Story' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-bg/95 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'
        } px-[4vw]`}
      >
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <Link 
            to="/" 
            className="font-sans font-extrabold text-3xl tracking-tighter hover:opacity-70 transition-opacity"
          >
            FOUNDRY.
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 relative group ${
                  location.pathname === link.to ? 'text-accent' : 'hover:text-accent'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="relative font-sans font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors group"
            >
              <ShoppingBag size={20} className="inline-block mr-2" />
              <span className="hidden lg:inline">Cart</span>
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 bg-accent text-bg text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 z-30 bg-bg border-b border-ink/20 md:hidden overflow-hidden"
          >
            <div className="flex flex-col py-6 px-[4vw] gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans font-bold text-sm uppercase tracking-widest py-2 ${
                    location.pathname === link.to ? 'text-accent' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
