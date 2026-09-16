import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <motion.div
        className="relative w-16 h-16"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 border-4 border-ink/20 border-t-accent rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Inner dot */}
        <motion.div
          className="absolute inset-1/4 bg-accent rounded-full"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: [1, 0.8, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
