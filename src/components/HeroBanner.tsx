import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <header className="py-20 mb-12 relative overflow-hidden">
      {/* Subtle background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-ink/5 via-transparent to-accent/5 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="font-sans text-[0.65rem] uppercase tracking-[0.15em] opacity-50 mb-6 flex items-center gap-3"
      >
        <span className="w-8 h-px bg-accent/50" />
        [01] COLLECTION: ARTISANAL GOODS
        <span className="w-8 h-px bg-accent/50" />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="font-serif text-[8rem] leading-[0.85] tracking-tighter font-light mb-8"
      >
        <motion.span 
          className="block"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          Minimalist
        </motion.span>
        <motion.span 
          className="block text-accent/90"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.4, 0, 0.2, 1] }}
        >
          Home Essentials
        </motion.span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="font-serif text-lg italic max-w-md opacity-70"
      >
        Curated artifacts for the discerning modern home
      </motion.p>
      
      {/* Decorative animated elements */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-ink/10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-ink/10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
      />
    </header>
  );
};

export default HeroBanner;
