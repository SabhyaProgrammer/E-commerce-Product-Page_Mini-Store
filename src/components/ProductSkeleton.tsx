import { motion } from 'framer-motion';

const ProductSkeleton = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="card relative border-2 border-ink p-6"
    >
      <motion.div 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-full aspect-square bg-ink/20 mb-6" 
      />
      <motion.div 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="h-8 bg-ink/20 mb-2 w-3/4" 
      />
      <motion.div 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="h-4 bg-ink/20 w-1/4" 
      />
    </motion.div>
  );
};

export default ProductSkeleton;
