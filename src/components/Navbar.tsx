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
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'py-3 bg-bg/90 backdrop-blur-xl shadow-lg border-b border-ink/10' : 'py-6 bg-transparent'
        } px-[4vw]`}
      >
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <Link 
            to="/" 
            className="font-sans font-extrabold text-3xl tracking-tighter hover:opacity-70 transition-opacity relative group"
          >
            FOUNDRY.
            <motion.span 
              className="absolute -bottom-1 left-0 h-px bg-accent w-0 group-hover:w-full transition-all duration-500"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 relative group py-1 ${
                  location.pathname === link.to ? 'text-accent' : 'hover:text-accent'
                }`}
              >
                {link.label}
                <motion.span 
                  className="absolute -bottom-0 left-0 h-px bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: location.pathname === link.to ? '100%' : 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)} 
              className="relative font-sans font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors group flex items-center gap-2"
            >
              <motion.div
                animate={itemCount > 0 ? { rotate: [0, -10, 10, 0] } : {}}
                transition={{ duration: 0.3 }}
              >
                <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
              </motion.div>
              <span className="hidden lg:inline">Cart</span>
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 bg-accent text-bg text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
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
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-[73px] left-0 right-0 z-30 bg-bg/95 backdrop-blur-xl border-b border-ink/20 md:hidden overflow-hidden"
          >
            <div className="flex flex-col py-8 px-[4vw] gap-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-sans font-bold text-sm uppercase tracking-widest py-3 block border-l-2 pl-4 transition-all duration-300 ${
                      location.pathname === link.to 
                        ? 'border-accent text-accent bg-accent/5' 
                        : 'border-transparent hover:border-ink/30'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
