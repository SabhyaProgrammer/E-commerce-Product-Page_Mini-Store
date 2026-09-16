import { motion } from 'framer-motion';

const ProductSkeleton = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="card relative border-2 border-ink p-6 overflow-hidden"
    >
      {/* Enhanced shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-full aspect-square bg-ink/15 rounded-sm mb-6" 
      />
      
      <motion.div 
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="h-7 bg-ink/15 rounded-sm mb-3 w-3/4" 
      />
      
      <motion.div 
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="h-4 bg-ink/15 rounded-sm w-1/3" 
      />
      
      <motion.div 
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="h-10 bg-ink/15 rounded-sm mt-4 w-full" 
      />
    </motion.div>
  );
};

export default ProductSkeleton;
