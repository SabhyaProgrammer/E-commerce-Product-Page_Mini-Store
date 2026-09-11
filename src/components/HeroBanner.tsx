import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <header className="py-16 mb-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-sans text-[0.7rem] uppercase tracking-[0.12em] opacity-60 mb-8"
      >
        [01] COLLECTION: ARTISANAL GOODS
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-serif text-[8rem] leading-[0.85] tracking-tighter font-light"
      >
        Minimalist<br />Home Essentials
      </motion.h1>
    </header>
  );
};

export default HeroBanner;
